var pkg = require('./package.json')

module.exports = {
	title: "云呼你 REST API 参考文档",
	language: "zh",
	gitbook: '3.1.1',
	plugins: ['-sharing', '-fontsettings', 'sitemap', 'theme-yunhuni'],
	variables: {
		version: pkg.version
	},
	pluginsConfig: {
		sitemap: {
			hostname: "https://github.com/liushuixingyun/yunhuni-server-api-docs"
		}
	}
}
