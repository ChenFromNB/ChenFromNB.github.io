import{r as T,n as N,j as o,c as _,b as g,az as G,a9 as J,o as K,p as O,a3 as Q,R as c,q as n,E as U,af as S}from"./index.e22dc3d4.js";/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var z=T.exports.forwardRef(function(a,d){var e=a.children,i=a.className,r=a.style,t=a.action,m=a.content,f=N(),l=f.classPrefix,v=t&&o("ul",{className:"".concat(l,"-list-item__action"),children:t});return o("li",{ref:d,className:_("".concat(l,"-list-item"),i),style:r,children:g("div",{className:"".concat(l,"-list-item-main"),children:[e||m,v]})})});z.displayName="ListItem";/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var C=T.exports.forwardRef(function(a,d){var e=a.title,i=a.image,r=a.description,t=a.className,m=a.style,f=N(),l=f.classPrefix,v=function(){return i&&typeof i=="string"?o("div",{className:"".concat(l,"-list-item__meta-avatar"),children:o("img",{src:i,alt:""})}):o("div",{className:"".concat(l,"-list-item__meta-avatar"),children:i})};return g("div",{ref:d,className:_("".concat(l,"-list-item__meta"),t),style:m,children:[i&&v(),g("div",{className:"".concat(l,"-list-item__meta-content"),children:[o("h3",{className:"".concat(l,"-list-item__meta-title"),children:e}),o("div",{className:"".concat(l,"-list-item__meta-description"),children:typeof r=="string"?o("p",{children:r}):r})]})]})});C.displayName="ListItemMeta";/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var V={layout:"horizontal",size:"medium",split:!1,stripe:!1};/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var I=G(function(a,d){var e=J(a,V),i=e.header,r=e.footer,t=e.asyncLoading,m=e.size,f=e.split,l=e.stripe,v=e.layout,y=e.children,M=e.className,L=e.onLoadMore,D=L===void 0?S:L,p=e.onScroll,H=p===void 0?S:p,j=e.style,k=N(),s=k.classPrefix,w=K("list"),x=O(w,2),E=x[0],P=x[1],A=function(u){t==="load-more"&&D({e:u})},$=function(u){var h=u.currentTarget,R=h.scrollTop,q=h.offsetHeight,W=h.scrollHeight,F=W-R-q;H({e:u,scrollTop:R,scrollBottom:F})},B=Q(t)?c.createElement("div",{className:_("".concat(s,"-list__load"),n(n({},"".concat(s,"-list__load--loading"),t==="loading"),"".concat(s,"-list__load--load-more"),t==="load-more")),onClick:A},t==="loading"&&c.createElement("div",null,c.createElement(U,{loading:!0}),c.createElement("span",null,P(E.loadingText))),t==="load-more"&&c.createElement("span",null,P(E.loadingMoreText))):t;return c.createElement("div",{ref:d,style:j,onScroll:$,className:_("".concat(s,"-list"),M,n(n(n(n(n({},"".concat(s,"-list--split"),f),"".concat(s,"-list--stripe"),l),"".concat(s,"-list--vertical-action"),v==="vertical"),"".concat(s,"-size-s"),m==="small"),"".concat(s,"-size-l"),m==="large"))},i&&c.createElement("div",{className:"".concat(s,"-list__header")},i),c.createElement("ul",{className:"".concat(s,"-list__inner")},y),t&&B,r&&c.createElement("div",{className:"".concat(s,"-list__footer")},r))},{ListItem:z,ListItemMeta:C});I.displayName="List";/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var Y=I;export{Y as L};
