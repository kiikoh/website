/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.unsplash.com', 'github.com', 'user-images.githubusercontent.com'],
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
};

module.exports = nextConfig;
