const routes = require('next-routes')();

routes
	.add('/', '/home/index')
	.add('/search', '/search/index')
	.add('/search/:slug', '/search/index')
	.add('/stores', '/stores/index')
	.add('/store/:slug', '/store/index')

module.exports = routes;