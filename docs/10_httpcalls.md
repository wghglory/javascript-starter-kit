# Http call

## Http call approaches

* Node
  * http
  * request (✅)
* Browser
  * XMLHttpRequest
  * jQuery
  * Framework-based (Angular http service)
  * Fetch (✅ polyfill for both regular version or isomorphic-fetch)
* Node & Browser (any below is good)
  * isomorphic-fetch
  * xhr
  * superAgent
  * axios (great)

### Fetch

You can find compatibility for fetch: <https://caniuse.com/#search=fetch>

Fetch cannot be cancelled at this time.

```javascript
var request = new Request('http://your-api.com/user', {
  method: 'GET',
  mode: 'cors',
  headers: new Headers({
    'Content-Type': 'text/html; charset=UTF-8'
  })
});
fetch(request).then(onSuccess, onError);
```

### Axios

```javascript
axios({
  url: 'http://your-api.com/user',
  method: 'post',
  headers: {
    'Content-type': 'text/html; charset=UTF-8'
  },
  data: 'text'
}).then(onSuccess, onError);
```

## Why centralize API calls

* Configure all calls
* Handle preloader logic
* Handle errors
* Single seam(缝合；接合) for mocking
