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
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-K0S3G7R59J"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-K0S3G7R59J', {
                                page_path: window.location.pathname,
                                });
                            `,
            }}
          />
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
