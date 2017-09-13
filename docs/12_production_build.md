# Production

## Minification

### How Does Minification Work?

* Shortens variable and function names
* Removes comments
* Removes whitespace and new lines
* Dead code elimination / Tree-shaking
* Debug via sourcemap

### Switching Api by queryString

baseUrl.js:

```javascript
/** this determines api address */
export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3001/'  // mockapi address
    : '/';   // production api
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
```

<http://localhost:3000/?useMockApi=true> will use Mock Data. Otherwise, without useMockApi, will hit production Api.

### Production build npm scripts

Create build.js and distServer.js

```json
"clean-dist": "rimraf ./dist && mkdir dist",
"prebuild": "npm-run-all clean-dist test lint",
"build": "babel-node buildScripts/build.js",
"postbuild": "babel-node buildScripts/distServer.js"
```

### Why Manipulate HTML for Production?

* Reference bundles automatically
* Handle dynamic bundle names
* Inject production only resources
* Minify

Best way is to use `html-webpack-plugin` since we use webpack.

### Why Bundle/Code Splitting

* Important for larger application
* Speed initial page load
* Avoid re-downloading all libraries

1. vendor.js

    ```javascript
    /* eslint-disable no-unused-vars */

    import fetch from 'whatwg-fetch';
    ```

1. webpack.config.prod.js

    ```diff
      entry: {
    +    vendor: path.resolve(__dirname, 'src/vendor'),
    +    main: path.resolve(__dirname, 'src/index')
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    +    filename: '[name].js'
      },
      plugins: [
    +    // Use CommonsChunkPlugin to create a separate bundle
    +    // of vendor libraries so that they're cached separately.
    +    new webpack.optimize.CommonsChunkPlugin({
    +      name: 'vendor'
    +    })
      ]
    ```

### Cache Busting

* Save HTTP Requests
* Force request for latest version

#### Setup Cache busting

1. Hash bundle filename. If no code changes, no filename changes.
1. Generate HTML dynamically

```javascript
import WebpackMd5Hash from 'webpack-md5-hash';

export default {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash()
  ]
}
```

### Separate CSS

```javascript
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "/dist"
        })
      }
    ]
  }
};
```
