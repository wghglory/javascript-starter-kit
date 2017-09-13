// This file isn't transpilied, so must use CommonJS and ES5

// register babel to transpile before our tests run
require('babel-register');

// disable webpack features that Mocha doesn't understand
// import 'index.css', webpack understands, but not mocha
require.extensions['.css'] = function() {};  // mocha, treat it as a empty function
