// filepath: c:\Users\micli\Documents\GitHub\react_sql_html\client\config-overrides.js
module.exports = function override(config) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "path": require.resolve("path-browserify"),
        "http": require.resolve("stream-http"),
        "querystring": require.resolve("querystring-es3"),
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "fs": false // fs is not available in the browser
    };
    return config;
};