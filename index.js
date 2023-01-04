const https = require('https');
const httpProxy = require('http-proxy');

const [,, host, port] = process.argv;

const proxy = httpProxy.createProxyServer({
    target: `https://${host}`,
    agent: https.globalAgent,
    headers: {
        host
    },
    secure: false
}).listen(port || 8080);
