import{a as _,r as a}from"./formModel.d92e7957.js";import{q as m,b9 as O,au as y}from"./index.e22dc3d4.js";/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?f(Object(t),!0).forEach(function(n){m(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var u=b({},O),g=u.version,d=u.render,v=u.unmountComponentAtNode,i;try{var R=Number((g||"").split(".")[0]);R>=18&&(i=u.createRoot)}catch{}function l(e){var r=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;r&&y(r)==="object"&&(r.usingClientEntryPoint=e)}var c="__td_react_root__";function E(e,r){l(!0);var t=r[c]||i(r);l(!1),t.render(e),r[c]=t}function h(e,r){d(e,r)}function N(e,r){if(i){E(e,r);return}h(e,r)}function j(e){return s.apply(this,arguments)}function s(){return s=_(a.mark(function e(r){return a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.resolve().then(function(){var o;(o=r[c])===null||o===void 0||o.unmount(),delete r[c]}));case 1:case"end":return n.stop()}},e)})),s.apply(this,arguments)}function w(e){v(e)}function S(e){return p.apply(this,arguments)}function p(){return p=_(a.mark(function e(r){return a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(i===void 0){n.next=2;break}return n.abrupt("return",j(r));case 2:w(r);case 3:case"end":return n.stop()}},e)})),p.apply(this,arguments)}export{N as r,S as u};
