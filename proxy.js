// web/proxy.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://asesor.com.py',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/multiapp'
  }
}));

app.listen(3001, () => {
  console.log('Proxy running on http://localhost:3001');
});