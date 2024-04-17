export const getTranslatedPath = (path: string, capitalized?: true) => {
  const dutchTranslations = {
    articles: 'artikelen',
    guidelines: 'richtlijnen',
    partners: 'partners',
    stats: 'stats',
  };

  console.log(process.env.DOCUSAURUS_CURRENT_LOCALE);

  const isNl = process.env.DOCUSAURUS_CURRENT_LOCALE === 'nl';
  const translatedPath = isNl ? dutchTranslations[path] : path;
  return `${capitalized ? translatedPath.charAt(0).toUpperCase() + translatedPath.slice(1) : translatedPath}`;
};
