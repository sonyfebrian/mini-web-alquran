import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import app from '../data/app.json';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content={app.description} />
          <meta name="theme-color" content={app.theme_color} />
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=family=Source+Sans+Pro:wght@400;600;700&display=swap" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-144x144.png" />
          <script
            src="https://www.googletagmanager.com/gtag/js?id=G-K0S3G7R59J"
            strategy="afterInteractive"
          />
          <script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K0S3G7R59J');
        `}
          </script>
          <script id="google-analytics" strategy="afterInteractive">
            {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-XXXXX-Y', 'auto');
          ga('send', 'pageview');
        `}
          </script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
