import n,{createElement as r}from"react";export{Block,Mark}from"@marvr/storyblok-rich-text-types";function t(){return t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},t.apply(this,arguments)}var e=function(n){return function(t){return null!=t?r(n,null,t):null}},l=function(n){return function(){return r(n)}},o={doc:e("div"),heading:function(n,t){return r("h"+t.level,null,n)},code_block:function(n,t){return r("pre",null,r("code",{className:t.class},n))},image:function(n,t){return r("img",t,n)},paragraph:e("p"),blockquote:e("blockquote"),ordered_list:e("ol"),bullet_list:e("ul"),list_item:e("li"),horizontal_rule:l("hr"),hard_break:l("br")},u=function(n){return function(t){return r(n,null,t)}},i={link:function(n,t){var e=t.href;return r("a",{href:"email"===t.linktype?"mailto:"+e:e,target:t.target},n)},styled:function(n,t){return r("span",{className:t.class},n)},bold:u("b"),strong:u("strong"),italic:u("i"),strike:u("s"),underline:u("u"),code:u("code"),textStyle:function(n,t){return r("span",{style:"color: "+t.color+" !important"},n)}},a=["component"],c=function(r,e){if("doc"===(null==r?void 0:r.type)&&Array.isArray(null==r?void 0:r.content)){var l=null!=e?e:{},u=l.blokResolvers,c=void 0===u?{}:u,s=l.defaultBlokResolver,f=void 0===s?function(){return null}:s,d=l.nodeResolvers,p=l.markResolvers,v=void 0===p?{}:p,y=t({},o,void 0===d?{}:d),m=t({},i,v),b=0,g=function(r){return n.isValidElement(r)?n.cloneElement(r,{key:b++}):r},k=function(n){var r=n?n.map(h).filter(function(n){return null!=n}):null;return Array.isArray(r)&&0===r.length?null:r},h=function(n){var r,t;if("blok"===n.type)return n.attrs.body.map(function(n){var r=n.component,t=function(n,r){if(null==n)return{};var t,e,l={},o=Object.keys(n);for(e=0;e<o.length;e++)r.indexOf(t=o[e])>=0||(l[t]=n[t]);return l}(n,a),e=c[r],l=e?e(t):f(r,t);return g(l)});if("text"===n.type)t=n.text;else{var e=y[n.type];t=e?g(e(k(n.content),n.attrs)):null}return(null!=(r=n.marks)?r:[]).reduceRight(function(n,r){var t=m[r.type];return t?g(t(n,r.attrs)):n},t)};return k(r.content)}return"string"==typeof r?null!=e&&e.defaultStringResolver?e.defaultStringResolver(r):r:null};export{c as render};
//# sourceMappingURL=index.esm.js.map
