export const pageview = (url) => {
  if (window && window.gtag) {
    window.gtag('config', 'G-K0S3G7R59J', {
      page_path: url,
    });
  }
};

export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
