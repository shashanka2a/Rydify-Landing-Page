import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Rydify - Safe, Shared, Smart rides for students. Connect with fellow students for affordable and eco-friendly rides across campus and beyond." />
        <meta name="keywords" content="rideshare, students, campus, transportation, eco-friendly, affordable" />
        <meta name="author" content="Rydify" />
        <meta property="og:title" content="Rydify - Student Rideshare Platform" />
        <meta property="og:description" content="Safe, Shared, Smart rides for students. Connect with fellow students for affordable and eco-friendly rides." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rydify - Student Rideshare Platform" />
        <meta name="twitter:description" content="Safe, Shared, Smart rides for students." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
        
        {/* Preload critical resources */}
        <link rel="modulepreload" href="/_next/static/chunks/framework.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}