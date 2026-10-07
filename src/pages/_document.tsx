import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/tasky.ico?v=2" />
        <link rel="apple-touch-icon" href="/logo_only.png" />
        <meta name="theme-color" content="#f74440" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
