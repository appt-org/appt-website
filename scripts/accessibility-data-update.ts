import fs from 'fs';
import _capitalize from 'lodash/capitalize';

type AccessibilityDataAggregationResponse = {
  [platform: string]: {
    features: {
      [featureKey: string]: AccessibilityDataFeatureResponse;
    };
  };
};

type AccessibilityDataFeatureResponse = {
  [featurePropertyKey: string]: AccessibilityDataPropertyResponse;
};

type AccessibilityDataPropertyResponse = {
  amount: number;
  percentage: number;
};

type AccessibilityDataFeatureFields = {
  name: string;
  feature_key: string;
  property_key: string;
  platform: string;
  amount: number;
  percentage: number;
};

const GENERATED_DATA_DIR = 'src/data/generated/data-features';
const DATA_SA_KEY_FILE = './data_sa_key.json';

/**
 * The dataUpdate API route is called periodically through a GitHub action.
 * This function downloads a JSON file with all the aggregated accessibility setting data for both iOS and Android from
 * the accessibility data Cloud Storage Bucket.
 *
 * The downloaded data is then mapped and used to create or update json accessibility feature entries in this repository.
 * This allows up-to-date setting data like total users and percentages to be used in content blocks which can be showed on the Appt website.
 */
async function dataUpdate() {
  try {
    // Get accessibility features from cloud storage
    const features = await getFeaturesFromStorage();

    await Promise.all(
      features.map(feature => {
        return createOrUpdateFeatureEntry(feature);
      }),
    );

    console.log(`Successfully updated ${features.length} accessibility data features.`);
  } catch (e) {
    console.error('Failed to update accessibility feature entries.', e);
  }
}

/**
 * Create or update accessibility feature entry in GitHub
 */
async function createOrUpdateFeatureEntry(feature: AccessibilityDataFeatureFields): Promise<void> {
  const fileName = mapFeatureId(feature.platform, feature.feature_key, feature.property_key);

  return new Promise((resolve, reject) => {
    fs.writeFile(`${GENERATED_DATA_DIR}/${fileName}`, JSON.stringify(feature), err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

/**
 * Get a list of all accessibility features from an aggregated JSON file in Google Storage.
 */
async function getFeaturesFromStorage(): Promise<AccessibilityDataFeatureFields[]> {
  // It is important to lazy import the @google-cloud/storage package as we only use it here and want to minimize our bundle
  const { Storage } = await import('@google-cloud/storage');

  // Create a service account key file from the base64 encoded key
  const serviceAccount = Buffer.from(process.env.DATA_SA_KEY, 'base64').toString();
  fs.writeFile(DATA_SA_KEY_FILE, serviceAccount, () => {});

  const storage = new Storage({ projectId: process.env.DATA_PROJECT_ID as string, keyFilename: DATA_SA_KEY_FILE });
  const file = await storage
    .bucket(process.env.DATA_STORAGE_BUCKET as string)
    .file(process.env.DATA_STORAGE_FILE as string)
    .download();
  const json = JSON.parse(file[0].toString()) as AccessibilityDataAggregationResponse;
  const featuresByPlatform = Object.entries(json);

  return featuresByPlatform.reduce(
    (all: AccessibilityDataFeatureFields[], [platform, aggregations]) => [
      ...all,
      // Accessibility features
      ...Object.entries(aggregations.features).flatMap(([featureKey, feature]) => {
        return Object.entries(feature).flatMap(([propertyKey, property]) =>
          mapFeatureFields(featureKey, propertyKey, property, platform),
        );
      }),
    ],
    [],
  );
}

function mapFeatureId(platform: string, feature: string, property: string) {
  return `${platform}-${feature}-${property}.json`;
}

function mapFeatureFields(
  featureKey: string,
  propertyKey: string,
  property: AccessibilityDataPropertyResponse,
  platform: string,
): AccessibilityDataFeatureFields {
  return {
    name: `${_capitalize(platform)} - ${_capitalize(featureKey.replaceAll('_', ' '))} - ${_capitalize(propertyKey)}`,
    feature_key: featureKey,
    property_key: propertyKey,
    platform: platform,
    amount: property.amount,
    percentage: property.percentage,
  };
}

dataUpdate();
