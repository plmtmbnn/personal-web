import { Helmet } from 'react-helmet-async';

const SEO = () => (
  <Helmet>
    <html lang="en" />
    <title>Polma Tambunan | Dedicated Software Engineer and Seasoned Amateur Runner</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta charSet="UTF-8" />

    {/* SEO Meta Tags */}
    <meta name="keywords" content="Polma Tambunan, software engineer, portfolio, photography, running, adventures, blog" />
    <meta name="description" content="Polma Tambunan's personal website. A full-time remote software engineer specializing in web development, photography, running, and sharing adventures." />

    {/* Open Graph (OG) Meta */}
    <meta property="og:title" content="Polma Tambunan | Dedicated Software Engineer and Seasoned Amateur Runner" />
    <meta property="og:description" content="Explore Polma Tambunan's portfolio, blog, and adventures. Dedicated Software Engineer, seasoned amateur runner, and passionate photographer." />
    <meta property="og:image" content="/vite.svg" />
    <meta property="og:url" content="https://www.polmatambunan.my.id" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Polma Tambunan" />
    <meta property="og:image:alt" content="Polma Tambunan's logo" />

    {/* Twitter Meta */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Polma Tambunan | Dedicated Software Engineer and Seasoned Amateur Runner" />
    <meta name="twitter:description" content="Explore Polma Tambunan's portfolio, blog, and adventures. Dedicated Software Engineer, seasoned amateur runner, and passionate photographer." />
    <meta name="twitter:image" content="/vite.svg" />
    <meta name="twitter:creator" content="@PolmaTambunan" />
  </Helmet>
);

export default SEO;
