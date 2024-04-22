const dutchTranslations = {
  articles: 'artikelen',
  community: 'community',
  docs: 'docs',
  guidelines: 'richtlijnen',
  partners: 'partners',
  stats: 'stats',
  about: 'over',
  'appt-api': 'appt-api',
  'appt-app': 'appt-app',
  handbook: 'handboek',
  licenses: 'licenties',
  newsletter: 'nieuwsbrief',
  privacy: 'privacy',
} as const;

export const getTranslatedPath = (path: keyof typeof dutchTranslations, capitalized?: true) => {
  const isNl = process.env.DOCUSAURUS_CURRENT_LOCALE === 'nl';
  const translatedPath = isNl ? dutchTranslations[path] : path;
  return `${capitalized ? translatedPath.charAt(0).toUpperCase() + translatedPath.slice(1) : translatedPath}`;
};
