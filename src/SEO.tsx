import { Helmet } from "react-helmet-async";

const SEO = () => {
	const siteUrl = "https://www.polmatambunan.my.id";
	const siteName = "Polma Tambunan";
	const title = "Polma Tambunan | Thoughtful Engineering. Intentional Running";
	const description =
		"Software Engineer with 7+ years of experience building secure, scalable fintech solutions. Based in Indonesia. Passionate about running, photography, and crafting impactful software.";
	const keywords =
		"Polma Tambunan, Software Engineer, Full Stack Developer, Fintech Engineer, Node.js, React, Go, PostgreSQL, Indonesia, Running, Trail Running, Photography, Web Development, Backend Development, System Architecture, Lending Platform, Digital Identity";
	const imageUrl = `${siteUrl}/profile.png`;
	const twitterHandle = "@PolmaTambunan";

	// Structured Data for Person
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Polma Tambunan",
		url: siteUrl,
		image: imageUrl,
		jobTitle: "Software Engineer",
		worksFor: {
			"@type": "Organization",
			name: "Fintech Industry",
		},
		description: description,
		sameAs: [
			"https://github.com/plmtmbnn",
			"https://www.linkedin.com/in/polma-tambunan/",
			"https://www.instagram.com/polmatambunan",
			"https://www.strava.com/athletes/38682026",
		],
		knowsAbout: [
			"Software Engineering",
			"Full Stack Development",
			"Fintech Solutions",
			"System Architecture",
			"Node.js",
			"React",
			"Go",
			"PostgreSQL",
		],
		interestIn: ["Running", "Trail Running", "Photography", "Technology"],
	};

	// Structured Data for Website
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: siteName,
		url: siteUrl,
		description: description,
		author: {
			"@type": "Person",
			name: "Polma Tambunan",
		},
		inLanguage: "en-US",
	};

	// Structured Data for Portfolio
	const profilePageSchema = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		name: title,
		url: siteUrl,
		mainEntity: {
			"@type": "Person",
			name: "Polma Tambunan",
			description: description,
		},
	};

	return (
		<Helmet>
			{/* Basic HTML Meta Tags */}
			<html lang="en" />
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
			/>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="author" content="Polma Tambunan" />
			<meta
				name="robots"
				content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			/>
			<meta name="googlebot" content="index, follow" />

			{/* Canonical URL */}
			<link rel="canonical" href={siteUrl} />

			{/* Theme Color */}
			<meta name="theme-color" content="#111827" />
			<meta name="msapplication-TileColor" content="#111827" />

			{/* Language Alternates */}
			<link rel="alternate" hrefLang="en" href={siteUrl} />
			<link rel="alternate" hrefLang="x-default" href={siteUrl} />

			{/* Open Graph (Facebook, LinkedIn) */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={siteUrl} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:image:secure_url" content={imageUrl} />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta
				property="og:image:alt"
				content="Polma Tambunan - Software Engineer"
			/>
			<meta property="og:locale" content="en_US" />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={twitterHandle} />
			<meta name="twitter:creator" content={twitterHandle} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />
			<meta
				name="twitter:image:alt"
				content="Polma Tambunan - Software Engineer"
			/>

			{/* Additional SEO Meta Tags */}
			<meta name="application-name" content={siteName} />
			<meta name="apple-mobile-web-app-title" content={siteName} />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			/>
			<meta name="format-detection" content="telephone=no" />

			{/* Geo Tags */}
			<meta name="geo.region" content="ID-SU" />
			<meta name="geo.placename" content="Medan" />
			<meta name="geo.position" content="3.5952;98.6722" />
			<meta name="ICBM" content="3.5952, 98.6722" />

			{/* Content Type */}
			<meta httpEquiv="content-language" content="en" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

			{/* Favicon (if you have one) */}
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>

			{/* Preconnect to External Domains for Performance */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="anonymous"
			/>
			<link rel="dns-prefetch" href="https://www.google-analytics.com" />

			{/* Structured Data - JSON-LD */}
			<script type="application/ld+json">{JSON.stringify(personSchema)}</script>
			<script type="application/ld+json">
				{JSON.stringify(websiteSchema)}
			</script>
			<script type="application/ld+json">
				{JSON.stringify(profilePageSchema)}
			</script>

			{/* Security Headers (if not set by server) */}
			<meta httpEquiv="X-Content-Type-Options" content="nosniff" />
			<meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
			<meta
				httpEquiv="Referrer-Policy"
				content="strict-origin-when-cross-origin"
			/>
		</Helmet>
	);
};

export default SEO;
