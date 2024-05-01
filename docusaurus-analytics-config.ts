const isAnalyticsEnabled = process.env.ANALYTICS_ENABLED === 'true';

export const analyticsConfig = isAnalyticsEnabled
  ? {
      tagName: 'script',
      attributes: {
        id: 'google-analytics',
      },
      innerHTML: `
	  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	  '${process.env.ANALYTICS_SERVER_URL}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	  })(window,document,'script','dataLayer','${process.env.ANALYTICS_GTM_ID}');
	`,
    }
  : null;
