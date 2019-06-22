const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const {
	NODE_ENV,
	TEST_ENV,
	NEXT_PUBLIC_DEVELOPMENT_API_URL,
	NEXT_PUBLIC_DEVELOPMENT_HOST_URL,
	NEXT_PUBLIC_PRODUCTION_API_URL,
	NEXT_PUBLIC_PRODUCTION_HOST_URL
} = process.env
const env = NODE_ENV || 'development'

const testEnv = TEST_ENV ? TEST_ENV.trim(): 'development'

const envSpecifics = {
  development: {
    api: NEXT_PUBLIC_DEVELOPMENT_API_URL,
    host: NEXT_PUBLIC_DEVELOPMENT_HOST_URL,
  },
  production: {
    api: NEXT_PUBLIC_PRODUCTION_API_URL,
    host: NEXT_PUBLIC_PRODUCTION_HOST_URL,
  },
};

envSpecifics.test = {
	api: envSpecifics[testEnv].api,
	host: envSpecifics[testEnv].host,
};


const publicRuntimeConfig = {
	envSpecifics: envSpecifics[testEnv]
};


module.exports = withPlugins(
	[
		[withTypescript],
		[withCSS],
		[withBundleAnalyzer],
		[nextEnv()]
	],
	{
		publicRuntimeConfig,
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
				'/stores/index.html': { page: '/stores' },
				
				'/store/kilimanjaro-choba-1/index.html': { page: '/store', query: { slug: 'kilimanjaro-choba-1' } },
				'/store/genesis-choba-2/index.html': { page: '/store', query: { slug: 'genesis-choba-2' } },

				'/search/index.html': { page: '/search' }
			}
		}
	}
);

module.exports.publicRuntimeConfig = publicRuntimeConfig;
