import{r as y,a as b}from"./index._OACqPSs.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g;function R(){if(g)return i;g=1;var u=y(),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function f(l,e,x){var t,c={},m=null,_=null;x!==void 0&&(m=""+x),e.key!==void 0&&(m=""+e.key),e.ref!==void 0&&(_=e.ref);for(t in e)a.call(e,t)&&!n.hasOwnProperty(t)&&(c[t]=e[t]);if(l&&l.defaultProps)for(t in e=l.defaultProps,e)c[t]===void 0&&(c[t]=e[t]);return{$$typeof:s,type:l,key:m,ref:_,props:c,_owner:r.current}}return i.Fragment=d,i.jsx=f,i.jsxs=f,i}var v;function h(){return v||(v=1,p.exports=R()),p.exports}var o=h();const N=({tabs:u})=>{const[s,d]=b.useState(0),a=Array.from(new Set(u.map(r=>r.lang))).map(r=>u.find(n=>n.lang===r));return o.jsxs("div",{className:"w-full border rounded-lg overflow-hidden bg-gray-900",children:[o.jsx("div",{className:"flex border-b border-gray-700",children:a.map((r,n)=>o.jsx("button",{onClick:()=>d(n),className:`px-4 py-2 text-sm font-medium transition-colors duration-200
              ${s===n?"bg-gray-800 text-white border-b-2 border-blue-500":"text-gray-400 hover:text-gray-200 hover:bg-gray-800"}`,children:r.lang.charAt(0).toUpperCase()+r.lang.slice(1)},r.lang))}),o.jsx("div",{className:"p-4",children:o.jsx("pre",{className:"m-0",children:o.jsx("code",{className:`language-${a[s].lang}`,children:a[s].content})})})]})};export{N as default};
