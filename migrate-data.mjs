import { copy } from 'fs-extra';
/* Migrates content from generated content folder that is located on the same level as the repository
 ┣ 📁 appt-docusaurus
 ┣ 📁 appt_org_content
 */
function movePages(sourceDir, destDir) {
  copy(sourceDir, destDir, { overwrite: true }, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(`Successfully migrated ${sourceDir}!`);
  });
}

function moveAllPages() {
  const contentPages = [
    'about',
    'appt-api',
    'appt-app',
    'articles',
    'community',
    'docs',
    'handbook',
    'licenses',
    'newsletter',
    'partners',
    'privacy',
    'stats',
  ];

  /* EN */
  contentPages.forEach(page => {
    movePages(`./../appt_org_content/en/Pages/pageContentPage/${page}`, `./${page}`);
  });

  // Homepage and guideline pages come from a different folder
  movePages(`./../appt_org_content/en/Pages/pageGuidelinePage`, `./guidelines`);
  movePages(`./../appt_org_content/en/Pages/pageHomePage`, `./src/pages`);

  /* NL */
  contentPages.forEach(page => {
    movePages(
      `./../appt_org_content/nl/Pages/pageContentPage/${page}`,
      `./i18n/nl/docusaurus-plugin-content-docs-${page}/current`,
    );
  });

  // Homepage and guideline pages come from a different folder
  movePages(
    `./../appt_org_content/nl/Pages/pageGuidelinePage`,
    `./i18n/nl/docusaurus-plugin-content-docs-guidelines/current`,
  );
  movePages(`./../appt_org_content/nl/Pages/pageHomePage`, `./i18n/nl/docusaurus-plugin-content-pages`);
}

moveAllPages();
