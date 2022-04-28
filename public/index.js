const
    express = require("express"),
    path = require("path"),
    {createProxyMiddleware} = require('http-proxy-middleware'),
    app = express(),
    port = process.env.port || 8080;

app.use(
    '/api/client/',
    createProxyMiddleware({
        target: 'http://client:8080',
        changeOrigin: true,
        pathRewrite: {
            "^/api/client/": "/"
        }
    })
);

app.use(
    '/api/project/',
    createProxyMiddleware({
        target: 'http://project:8080',
        changeOrigin: true,
        pathRewrite: {
            "^/api/project/": "/"
        }
    })
);

app.use(
    '/api/service/',
    createProxyMiddleware({
        target: 'http://service:8080',
        changeOrigin: true,
        pathRewrite: {
            "^/api/service/": "/"
        }
    })
);

app.use(
    '/api/form/',
    createProxyMiddleware({
        target: 'http://form:8080',
        changeOrigin: true,
        pathRewrite: {
            "^/api/form/": "/"
        }
    })
);


app.use("/admin", express.static("admin"));
app.use("/admin/*", express.static(path.join(__dirname, "admin", "index.html")));
app.use("/admin/*", express.static(path.join(__dirname, "admin")));

app.use(express.static("public"));
app.use(express.static("static"));
app.use("*", express.static(path.join(__dirname, "public", "index.html")));
app.use("*", express.static(path.join(__dirname, "public")));

app.listen(port, err => {
    console.log(err);
});
