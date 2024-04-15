export const getTranslatedPath = (path: string, capitalized?: true) => {
  const dutchTranslations = {
    articles: 'artikelen',
    guidelines: 'richtlijnen',
    partners: 'partners',
    stats: 'stats',
  };
  const isEn = process.env.DOCUSAURUS_CURRENT_LOCALE === 'en';

  const translatedPath = isEn ? path : dutchTranslations[path];
  return `${capitalized ? translatedPath.charAt(0).toUpperCase() + translatedPath.slice(1) : translatedPath}`;
};
