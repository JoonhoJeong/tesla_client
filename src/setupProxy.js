const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://limitless-shore-62136.herokuapp.com/',
            changeOrigin: true,
        })
    );
};