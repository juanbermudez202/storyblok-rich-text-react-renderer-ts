import t,{createElement as e}from"react";export{Block,Mark}from"@marvr/storyblok-rich-text-types";function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r])}return t},l.apply(this,arguments)}const r=t=>l=>null!=l?e(t,null,l):null,n=t=>()=>e(t),o={doc:r("div"),heading:(t,l)=>e(`h${l.level}`,null,t),code_block:(t,l)=>e("pre",null,e("code",{className:l.class},t)),image:(t,l)=>e("img",l,t),paragraph:r("p"),blockquote:r("blockquote"),ordered_list:r("ol"),bullet_list:r("ul"),list_item:r("li"),horizontal_rule:n("hr"),hard_break:n("br")},s=t=>l=>e(t,null,l),a={link:(t,{href:l,linktype:r,target:n})=>e("a",{href:"email"===r?`mailto:${l}`:l,target:n},t),styled:(t,l)=>e("span",{className:l.class},t),bold:s("b"),strong:s("strong"),italic:s("i"),strike:s("s"),underline:s("u"),code:s("code"),textStyle:(t,{color:l})=>e("span",{style:`color: ${l} !important`},t)},i=["component"],u=(e,r)=>{if("doc"===(null==e?void 0:e.type)&&Array.isArray(null==e?void 0:e.content)){const{blokResolvers:n={},defaultBlokResolver:s=(()=>null),nodeResolvers:u={},markResolvers:c={}}=null!=r?r:{},p=l({},o,u),d=l({},a,c);let y=0;const f=e=>t.isValidElement(e)?t.cloneElement(e,{key:y++}):e,m=t=>{const e=t?t.map(b).filter(t=>null!=t):null;return Array.isArray(e)&&0===e.length?null:e},b=t=>{if("blok"===t.type){const{body:e}=t.attrs;return e.map(t=>{let{component:e}=t,l=function(t,e){if(null==t)return{};var l,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(l=o[r])>=0||(n[l]=t[l]);return n}(t,i);const r=n[e],o=r?r(l):s(e,l);return f(o)})}{var e;let l;if("text"===t.type)l=t.text;else{const e=p[t.type];l=e?f(e(m(t.content),t.attrs)):null}return(null!=(e=t.marks)?e:[]).reduceRight((t,e)=>{const l=d[e.type];return l?f(l(t,e.attrs)):t},l)}};return m(e.content)}return"string"==typeof e?null!=r&&r.defaultStringResolver?r.defaultStringResolver(e):e:null};export{u as render};
//# sourceMappingURL=index.modern.mjs.map
