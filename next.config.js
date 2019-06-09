const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

module.exports = withPlugins(
	[
		[withTypescript],
		[withCSS],
		[withBundleAnalyzer],
		[nextEnv()]
	],
	{
		analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
		analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
		bundleAnalyzerConfig: {
			server: {
				analyzerMode: 'static',
				reportFilename: '../bundles/server.html'
			},
			browser: {
				analyzerMode: 'static',
				reportFilename: '../bundles/client.html'
			}
		},

		exportPathMap: function() {
			return {
				'/': { page: '/home' },
				'/stores/index.html': { page: '/stores' }
			}
		}
	}
);
