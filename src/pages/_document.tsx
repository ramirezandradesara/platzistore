import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head>
          <meta charSet="utf-8" />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
