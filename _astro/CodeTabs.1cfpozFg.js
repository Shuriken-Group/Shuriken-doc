import{r as ge,a as L}from"./index._OACqPSs.js";/* empty css                                */function de(g,v){for(var a=0;a<v.length;a++){const l=v[a];if(typeof l!="string"&&!Array.isArray(l)){for(const p in l)if(p!=="default"&&!(p in g)){const f=Object.getOwnPropertyDescriptor(l,p);f&&Object.defineProperty(g,p,f.get?f:{enumerable:!0,get:()=>l[p]})}}}return Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}const pe="modulepreload",fe=function(g){return"/Shuriken-doc/"+g},X={},I=function(v,a,l){let p=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),r=m?.nonce||m?.getAttribute("nonce");p=Promise.allSettled(a.map(c=>{if(c=fe(c),c in X)return;X[c]=!0;const k=c.endsWith(".css"),x=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${x}`))return;const y=document.createElement("link");if(y.rel=k?"stylesheet":pe,k||(y.as="script"),y.crossOrigin="",y.href=c,r&&y.setAttribute("nonce",r),document.head.appendChild(y),k)return new Promise((E,P)=>{y.addEventListener("load",E),y.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function f(m){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=m,window.dispatchEvent(r),!r.defaultPrevented)throw m}return p.then(m=>{for(const r of m||[])r.status==="rejected"&&f(r.reason);return v().catch(f)})};var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ie(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var Z={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function he(){if(ee)return z;ee=1;var g=ge(),v=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,p=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(r,c,k){var x,y={},E=null,P=null;k!==void 0&&(E=""+k),c.key!==void 0&&(E=""+c.key),c.ref!==void 0&&(P=c.ref);for(x in c)l.call(c,x)&&!f.hasOwnProperty(x)&&(y[x]=c[x]);if(r&&r.defaultProps)for(x in c=r.defaultProps,c)y[x]===void 0&&(y[x]=c[x]);return{$$typeof:v,type:r,key:E,ref:P,props:y,_owner:p.current}}return z.Fragment=a,z.jsx=m,z.jsxs=m,z}var te;function me(){return te||(te=1,Z.exports=he()),Z.exports}var C=me(),W={exports:{}},re;function be(){return re||(re=1,function(g){var v=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(l){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,f=0,m={},r={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof c?new c(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++f}),t.__id},clone:function t(e,n){n=n||{};var i,s;switch(r.util.type(e)){case"Object":if(s=r.util.objId(e),n[s])return n[s];i={},n[s]=i;for(var u in e)e.hasOwnProperty(u)&&(i[u]=t(e[u],n));return i;case"Array":return s=r.util.objId(e),n[s]?n[s]:(i=[],n[s]=i,e.forEach(function(d,o){i[o]=t(d,n)}),i);default:return e}},getLanguage:function(t){for(;t;){var e=p.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(p,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var i="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(i))return!1;t=t.parentElement}return!!n}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(t,e){var n=r.util.clone(r.languages[t]);for(var i in e)n[i]=e[i];return n},insertBefore:function(t,e,n,i){i=i||r.languages;var s=i[t],u={};for(var d in s)if(s.hasOwnProperty(d)){if(d==e)for(var o in n)n.hasOwnProperty(o)&&(u[o]=n[o]);n.hasOwnProperty(d)||(u[d]=s[d])}var b=i[t];return i[t]=u,r.languages.DFS(r.languages,function(A,T){T===b&&A!=t&&(this[A]=u)}),u},DFS:function t(e,n,i,s){s=s||{};var u=r.util.objId;for(var d in e)if(e.hasOwnProperty(d)){n.call(e,d,e[d],i||d);var o=e[d],b=r.util.type(o);b==="Object"&&!s[u(o)]?(s[u(o)]=!0,t(o,n,null,s)):b==="Array"&&!s[u(o)]&&(s[u(o)]=!0,t(o,n,d,s))}}},plugins:{},highlightAll:function(t,e){r.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var i={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),r.hooks.run("before-all-elements-highlight",i);for(var s=0,u;u=i.elements[s++];)r.highlightElement(u,e===!0,i.callback)},highlightElement:function(t,e,n){var i=r.util.getLanguage(t),s=r.languages[i];r.util.setLanguage(t,i);var u=t.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(u,i);var d=t.textContent,o={element:t,language:i,grammar:s,code:d};function b(T){o.highlightedCode=T,r.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r.hooks.run("after-highlight",o),r.hooks.run("complete",o),n&&n.call(o.element)}if(r.hooks.run("before-sanity-check",o),u=o.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!o.code){r.hooks.run("complete",o),n&&n.call(o.element);return}if(r.hooks.run("before-highlight",o),!o.grammar){b(r.util.encode(o.code));return}if(e&&l.Worker){var A=new Worker(r.filename);A.onmessage=function(T){b(T.data)},A.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else b(r.highlight(o.code,o.grammar,o.language))},highlight:function(t,e,n){var i={code:t,grammar:e,language:n};if(r.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),c.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var i in n)e[i]=n[i];delete e.rest}var s=new y;return E(s,s.head,t),x(t,s,e,s.head,0),D(s)},hooks:{all:{},add:function(t,e){var n=r.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=r.hooks.all[t];if(!(!n||!n.length))for(var i=0,s;s=n[i++];)s(e)}},Token:c};l.Prism=r;function c(t,e,n,i){this.type=t,this.content=e,this.alias=n,this.length=(i||"").length|0}c.stringify=function t(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(b){i+=t(b,n)}),i}var s={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(s.classes,u):s.classes.push(u)),r.hooks.run("wrap",s);var d="";for(var o in s.attributes)d+=" "+o+'="'+(s.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+d+">"+s.content+"</"+s.tag+">"};function k(t,e,n,i){t.lastIndex=e;var s=t.exec(n);if(s&&i&&s[1]){var u=s[1].length;s.index+=u,s[0]=s[0].slice(u)}return s}function x(t,e,n,i,s,u){for(var d in n)if(!(!n.hasOwnProperty(d)||!n[d])){var o=n[d];o=Array.isArray(o)?o:[o];for(var b=0;b<o.length;++b){if(u&&u.cause==d+","+b)return;var A=o[b],T=A.inside,J=!!A.lookbehind,V=!!A.greedy,oe=A.alias;if(V&&!A.pattern.global){var ue=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,ue+"g")}for(var Y=A.pattern||A,F=i.next,$=s;F!==e.tail&&!(u&&$>=u.reach);$+=F.value.length,F=F.next){var O=F.value;if(e.length>t.length)return;if(!(O instanceof c)){var M=1,S;if(V){if(S=k(Y,$,t,J),!S||S.index>=t.length)break;var q=S.index,le=S.index+S[0].length,R=$;for(R+=F.value.length;q>=R;)F=F.next,R+=F.value.length;if(R-=F.value.length,$=R,F.value instanceof c)continue;for(var j=F;j!==e.tail&&(R<le||typeof j.value=="string");j=j.next)M++,R+=j.value.length;M--,O=t.slice($,R),S.index-=$}else if(S=k(Y,0,O,J),!S)continue;var q=S.index,B=S[0],U=O.slice(0,q),K=O.slice(q+B.length),G=$+O.length;u&&G>u.reach&&(u.reach=G);var N=F.prev;U&&(N=E(e,N,U),$+=U.length),P(e,N,M);var ce=new c(d,T?r.tokenize(B,T):B,oe,B);if(F=E(e,N,ce),K&&E(e,F,K),M>1){var H={cause:d+","+b,reach:G};x(t,e,n,F.prev,$,H),u&&H.reach>u.reach&&(u.reach=H.reach)}}}}}}function y(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function E(t,e,n){var i=e.next,s={value:n,prev:e,next:i};return e.next=s,i.prev=s,t.length++,s}function P(t,e,n){for(var i=e.next,s=0;s<n&&i!==t.tail;s++)i=i.next;e.next=i,i.prev=e,t.length-=s}function D(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}if(!l.document)return l.addEventListener&&(r.disableWorkerMessageHandler||l.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,i=e.code,s=e.immediateClose;l.postMessage(r.highlight(i,r.languages[n],n)),s&&l.close()},!1)),r;var _=r.util.currentScript();_&&(r.filename=_.src,_.hasAttribute("data-manual")&&(r.manual=!0));function h(){r.manual||r.highlightAll()}if(!r.manual){var w=document.readyState;w==="loading"||w==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return r}(v);g.exports&&(g.exports=a),typeof Q<"u"&&(Q.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(p,f){var m={};m["language-"+f]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[f]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};r["language-"+f]={pattern:/[\s\S]+/,inside:a.languages[f]};var c={};c[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(l,p){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:a.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(l){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+p.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var f=l.languages.markup;f&&(f.tag.addInlined("style","css"),f.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading…",p=function(_,h){return"✖ Error "+_+" while fetching file: "+h},f="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",c="loading",k="loaded",x="failed",y="pre[data-src]:not(["+r+'="'+k+'"]):not(['+r+'="'+c+'"])';function E(_,h,w){var t=new XMLHttpRequest;t.open("GET",_,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?h(t.responseText):t.status>=400?w(p(t.status,t.statusText)):w(f))},t.send(null)}function P(_){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(h){var w=Number(h[1]),t=h[2],e=h[3];return t?e?[w,Number(e)]:[w,void 0]:[w,w]}}a.hooks.add("before-highlightall",function(_){_.selector+=", "+y}),a.hooks.add("before-sanity-check",function(_){var h=_.element;if(h.matches(y)){_.code="",h.setAttribute(r,c);var w=h.appendChild(document.createElement("CODE"));w.textContent=l;var t=h.getAttribute("data-src"),e=_.language;if(e==="none"){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=m[n]||n}a.util.setLanguage(w,e),a.util.setLanguage(h,e);var i=a.plugins.autoloader;i&&i.loadLanguages(e),E(t,function(s){h.setAttribute(r,k);var u=P(h.getAttribute("data-range"));if(u){var d=s.split(/\r\n?|\n/g),o=u[0],b=u[1]==null?d.length:u[1];o<0&&(o+=d.length),o=Math.max(0,Math.min(o-1,d.length)),b<0&&(b+=d.length),b=Math.max(0,Math.min(b,d.length)),s=d.slice(o,b).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(o+1))}w.textContent=s,a.highlightElement(w)},function(s){h.setAttribute(r,x),w.textContent=s})}}),a.plugins.fileHighlight={highlight:function(h){for(var w=(h||document).querySelectorAll(y),t=0,e;e=w[t++];)a.highlightElement(e)}};var D=!1;a.fileHighlight=function(){D||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),D=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()}(W)),W.exports}var ve=be();const ye=ie(ve);Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};const _e=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;const we=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var ne={},ae;function xe(){return ae||(ae=1,function(g){var v=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,a=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return v.source});g.languages.cpp=g.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return v.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:v,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),g.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return a})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),g.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:g.languages.cpp}}}}),g.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),g.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:g.languages.extend("cpp",{})}}),g.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},g.languages.cpp["base-clause"])}(Prism)),ne}var se=xe();const Ae=ie(se),Fe=de({__proto__:null,default:Ae},[se]),ke=g=>g.replace(/---[\s\S]*?---\n/,"").replace(/```[a-z]*\n/,"").replace(/```$/,"").trim();function $e({tabs:g}){const[v,a]=L.useState(0),[l,p]=L.useState(!1),f=L.useRef(null),m=async()=>{if(!(typeof window>"u"))try{await Promise.all([I(()=>import("./prism-rust.BSfWr9oS.js").then(r=>r.p),[]),I(()=>import("./prism-python.DhZOcRnW.js").then(r=>r.p),[]),I(()=>Promise.resolve().then(()=>_e),void 0),I(()=>Promise.resolve().then(()=>we),void 0),I(()=>Promise.resolve().then(()=>Fe),void 0)])}catch(r){console.error("Error loading Prism languages:",r)}};return L.useEffect(()=>{m().then(()=>{p(!0)})},[]),L.useEffect(()=>{l&&f.current&&(f.current.className=`language-${g[v].lang}`,ye.highlightElement(f.current))},[v,l,g]),l?C.jsxs("div",{className:"w-full border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900",children:[C.jsx("div",{className:"flex border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800",children:g.map((r,c)=>C.jsx("button",{className:`px-4 py-2 text-sm font-medium first:ml-0 transition-colors duration-200 ${v===c?"bg-blue-600 text-white":"text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"}`,onClick:()=>a(c),children:r.lang.toUpperCase()},`${r.lang}-${c}`))}),C.jsx("div",{className:"p-4 bg-gray-900",children:C.jsx("pre",{className:"overflow-x-auto",children:C.jsx("code",{ref:f,className:`language-${g[v].lang}`,children:ke(g[v].content)})})})]}):C.jsx("div",{className:"w-full h-32 animate-pulse bg-gray-200 rounded-lg dark:bg-gray-700"})}export{$e as C,ie as g};
