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
