webpackJsonp([0],[,,function(e,t,n){"use strict";(function(e){n(4);var t=n(5);(0,t.getUsers)().then(function(n){var r=n.map(function(e){return'\n    <tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>\n    </tr>"});e.document.getElementById("users").innerHTML=r.join("");var o=document.querySelectorAll(".deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.dataset.id);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deleteUser=t.getUsers=void 0,n(0);var r=n(6),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=(0,o.default)(),c=function(e){return e.json()},i=function(e){return console.log(e)},d=function(e){return fetch(u+e).then(c,i)},s=function(e){var t=new Request(u+e,{method:"delete"});return fetch(t).then(c,i)};t.getUsers=function(){return d("users")},t.deleteUser=function(e){return s("users/"+e)}},function(e,t,n){"use strict";function r(){return o("useMockApi")?"http://localhost:3001/":"/"}function o(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}],[2]);
//# sourceMappingURL=main.160dd5b4c06a1d2943c0.js.map