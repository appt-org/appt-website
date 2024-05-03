const dutchTranslations = {
  articles: 'artikelen',
  community: 'community',
  docs: 'docs',
  guidelines: 'richtlijnen',
  partners: 'partners',
  stats: 'stats',
  about: 'over',
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

export const getTranslatedAnnouncement = () => {
  const isNl = process.env.DOCUSAURUS_CURRENT_LOCALE === 'nl';
  const nlAnnouncement =
    '<div class="announcement">Onze nieuwe website is live! Feedback? <a href="https://github.com/appt-org/appt-docusaurus/issues">Laat het ons weten!</a></div>';
  const enAnnouncement =
    '<div class="announcement">Our new website is live! Feedback? <a href="https://github.com/appt-org/appt-docusaurus/issues">Let us know!</a></div>';

  return isNl ? nlAnnouncement : enAnnouncement;
};
