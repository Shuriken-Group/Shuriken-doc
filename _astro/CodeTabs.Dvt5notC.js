import{r as y,a as R}from"./index._OACqPSs.js";var m={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function h(){if(_)return o;_=1;var n=y(),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function p(u,e,x){var r,c={},d=null,f=null;x!==void 0&&(d=""+x),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)i.call(e,r)&&!b.hasOwnProperty(r)&&(c[r]=e[r]);if(u&&u.defaultProps)for(r in e=u.defaultProps,e)c[r]===void 0&&(c[r]=e[r]);return{$$typeof:s,type:u,key:d,ref:f,props:c,_owner:a.current}}return o.Fragment=l,o.jsx=p,o.jsxs=p,o}var v;function g(){return v||(v=1,m.exports=h()),m.exports}var t=g();function N({tabs:n}){const[s,l]=R.useState(0);return t.jsxs("div",{className:"my-4",children:[t.jsx("div",{className:"flex space-x-1 border-b border-gray-200",children:n.map((i,a)=>t.jsx("button",{className:`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${s===a?"bg-blue-600 text-white border-2 border-blue-600":"text-gray-600 hover:text-blue-600 hover:bg-gray-50"}`,onClick:()=>l(a),children:i.lang.toUpperCase()},i.lang))}),t.jsx("div",{className:"mt-4",children:t.jsx("pre",{className:"p-4 bg-gray-900 rounded-lg overflow-x-auto",children:t.jsx("code",{className:"text-white text-sm font-mono whitespace-pre",children:n[s].content})})})]})}export{N as default};
