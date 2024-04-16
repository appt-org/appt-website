// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const dataUpdate = () => {
  const testJson = {
    name: 'Android - Screen display scale default comparison - Smaller',
    feature_key: 'screen_display_scale_default_comparison',
    property_key: 'smaller',
    platform: 'android',
    amount: 678825,
    percentage: 9.59,
  };

  fs.writeFile(
    'src/data/generated/data-features/screen_display_scale_default_comparison-test.json',
    JSON.stringify(testJson),
    () => {
      console.log('Done!');
    },
  );
};

dataUpdate();
