var pkg = require("./package.json")

module.exports = {
    title: "壹耘 REST API 参考文档",
    language: "zh",
    gitbook: "3.1.1",
    plugins: [
        {
            name: "docs-theme",
            version: "git+https://github.com/liushuixingyun/gitbook-plugin-docs-theme.git"
        },
        "-sharing",
        "-fontsettings",
        "sitemap",
        "atoc",
        "codetabs"
    ],
    variables: {
        version: pkg.version
    },
    pluginsConfig: {
        sitemap: {
            hostname: "https://github.com/liushuixingyun/yunhuni-server-api-docs"
        },
        "atoc": {
            "addClass": true,
            "className": "atoc"
        }
    }
}
