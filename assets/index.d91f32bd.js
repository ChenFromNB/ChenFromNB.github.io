import{bV as Oe,a1 as ee,r as o,a9 as Se,D as je,G as Te,p as K,bW as Pe,aV as te,au as N,n as Ce,q as d,c as z,j as ae,b as R,af as A,bX as Ke}from"./index.e22dc3d4.js";/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var Ne=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,p;function re(s){var r,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;p||(p=document.createElement("textarea"),document.body.appendChild(p));var c=Oe(s),i=c.paddingSize,_=c.borderSize,O=c.boxSizing,E=c.sizingStyle;p.setAttribute("style","".concat(E,";").concat(Ne)),p.value=s.value||s.placeholder||"";var v=p.scrollHeight,h={},S=O==="border-box",j=O==="content-box";S?v+=_:j&&(v-=i),p.value="";var H=p.scrollHeight-i;(r=p)===null||r===void 0||(r=r.parentNode)===null||r===void 0||r.removeChild(p),p=null;var w=function(x){var g=H*x;return S&&(g=g+i+_),g};if(!ee(e)){var T=w(e);v=Math.max(T,v),h.minHeight="".concat(T,"px")}return ee(n)||(v=Math.min(w(n),v)),h.height="".concat(v,"px"),h}/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var ze={allowInputOverMax:!1,autofocus:!1,autosize:!1,placeholder:void 0,readonly:!1};/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var Re=["disabled","maxlength","maxcharacter","className","readonly","autofocus","style","onKeydown","onKeypress","onKeyup","autosize","status","tips","allowInputOverMax"];function ne(s,r){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);r&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(s,c).enumerable})),e.push.apply(e,n)}return e}function $(s){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?ne(Object(e),!0).forEach(function(n){d(s,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):ne(Object(e)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(e,n))})}return s}var oe=o.exports.forwardRef(function(s,r){var e=Se(s,ze),n=e.disabled,c=e.maxlength,i=e.maxcharacter,_=e.className,O=e.readonly,E=e.autofocus,v=e.style,h=e.onKeydown,S=h===void 0?A:h,j=e.onKeypress,H=j===void 0?A:j,w=e.onKeyup,T=w===void 0?A:w,u=e.autosize,x=e.status,g=e.tips,y=e.allowInputOverMax,F=je(e,Re),se=Te(e,"value",e.onChange),U=K(se,2),V=U[0],b=V===void 0?"":V,ie=U[1],ce=o.exports.useState(!1),B=K(ce,2),ue=B[0],W=B[1],le=o.exports.useState(!1),X=K(le,2),pe=X[0],fe=X[1],de=o.exports.useState({}),Z=K(de,2),ve=Z[0],M=Z[1],P=o.exports.useRef(!1),q=typeof i!="undefined",m=o.exports.useRef(),G=o.exports.useRef(),D=o.exports.useMemo(function(){return Pe(b)},[b]),I=o.exports.useMemo(function(){var t=te(String(b),y?1/0:i);return N(t)==="object"?t.length:t},[b,y,i]),xe=Ce(),l=xe.classPrefix,me=Object.keys(F).filter(function(t){return!/^on[A-Z]/.test(t)}),he=me.reduce(function(t,a){return Object.assign(t,d({},a,e[a]))},{}),ge=Object.keys(F).filter(function(t){return/^on[A-Z]/.test(t)}),ye=ge.reduce(function(t,a){return Object.assign(t,d({},a,function(f){n||(a==="onFocus"&&W(!0),a==="onBlur"&&W(!1),e[a](f.currentTarget.value,{e:f}))})),t},{}),be=z("".concat(l,"-textarea__inner"),_,d(d(d(d({},"".concat(l,"-is-").concat(x),x),"".concat(l,"-is-disabled"),n),"".concat(l,"-is-focused"),ue),"".concat(l,"-resize-none"),N(u)==="object")),C=o.exports.useCallback(function(){u===!0?M(re(m.current)):N(u)==="object"&&M(re(m.current,u==null?void 0:u.minRows,u==null?void 0:u.maxRows))},[u]);o.exports.useEffect(function(){C()},[m==null?void 0:m.current]);function Y(t){var a=t.target,f=a.value;if(!y&&!P.current&&(f=Ke(f,c),i&&i>=0)){var Q=te(f,i);f=N(Q)==="object"&&Q.characters}ie(f,{e:t})}function _e(){P.current=!0}function we(t){P.current&&(P.current=!1,Y(t))}var k=function(a,f){return R("span",{className:"".concat(l,"-textarea__limit"),children:[pe&&y?R("span",{className:"".concat(l,"-textarea__tips--warning"),children:[" ",a]}):"".concat(a),"/".concat(f)]})};o.exports.useEffect(function(){u===!1&&M({height:"auto",minHeight:"auto"})},[C,u]),o.exports.useEffect(function(){C()},[C,b]),o.exports.useEffect(function(){y&&fe(!!(c&&D>c)||!!(i&&I>i))},[y,I,D,i,c]),o.exports.useImperativeHandle(r,function(){return{currentElement:G.current,textareaElement:m.current}});var L=g&&ae("div",{className:z("".concat(l,"-textarea__tips"),d(d({},"".concat(l,"-textarea__tips--normal"),!x),"".concat(l,"-textarea__tips--").concat(x),x)),children:g}),J=q&&k(I,i)||!q&&c&&k(D,c);return R("div",{style:v,ref:G,className:z("".concat(l,"-textarea"),_),children:[ae("textarea",{...$($($({},he),ye),{},{value:b,style:ve,className:be,readOnly:O,autoFocus:E,disabled:n,onChange:Y,onKeyDown:function(a){return S(a.currentTarget.value,{e:a})},onKeyPress:function(a){return H(a.currentTarget.value,{e:a})},onKeyUp:function(a){return T(a.currentTarget.value,{e:a})},onCompositionStart:_e,onCompositionEnd:we,ref:m})}),L||J?R("div",{className:z("".concat(l,"-textarea__info_wrapper"),d({},"".concat(l,"-textarea__info_wrapper_align"),!L)),children:[L,J]}):null]})});oe.displayName="Textarea";/**
 * tdesign v1.10.0
 * (c) 2024 tdesign
 * @license MIT
 */var He=oe;export{He as T};
