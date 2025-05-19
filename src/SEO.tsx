import { Helmet } from 'react-helmet-async';

const SEO = () => (
  <Helmet>
    <html lang="en" />
    <title>Polma Tambunan | Thoughtful Engineering. Intentional Running</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />

    {/* SEO Meta Tags */}
    <meta name="keywords" content="Polma Tambunan, software engineer, portfolio, photography, running, adventures, blog" />
    <meta name="description" content="Polma Tambunan's personal website. Engineering impactful solutions and running intentional miles—dedicated to both code and life." />

    {/* Open Graph (OG) Meta */}
    <meta property="og:title" content="Polma Tambunan | Thoughtful Engineering. Intentional Running" />
    <meta property="og:description" content="Polma Tambunan's personal website. Engineering impactful solutions and running intentional miles—dedicated to both code and life." />
    <meta property="og:image" content="https://www.polmatambunan.my.id/profile.png" />
    <meta property="og:url" content="https://www.polmatambunan.my.id" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Polma Tambunan" />
    <meta property="og:image:alt" content="Polma Tambunan's logo" />

    {/* Twitter Meta */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Polma Tambunan | Thoughtful Engineering. Intentional Running" />
    <meta name="twitter:description" content="Polma Tambunan's personal website. Engineering impactful solutions and running intentional miles—dedicated to both code and life." />
    <meta name="twitter:image" content="https://www.polmatambunan.my.id/profile.png" />
    <meta name="twitter:creator" content="@PolmaTambunan" />
  </Helmet>
);

export default SEO;
