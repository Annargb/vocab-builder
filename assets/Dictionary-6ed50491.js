import{b as l,a as k,j as o,u as P,c as y,f as W,e as C,h as E,k as j,s as O,m as N,n as T}from"./index-1bafb751.js";import{s as D,a as V,D as v,W as H,N as I,T as w}from"./WordsTable-11d862df.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var f=function(t,r){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])},f(t,r)};function B(t,r){f(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var S=100,F=100,b=50,x=50,m=50;function R(t){var r=t.className,e=t.counterClockwise,a=t.dashRatio,s=t.pathRadius,n=t.strokeWidth,i=t.style;return l.createElement("path",{className:r,style:Object.assign({},i,X({pathRadius:s,dashRatio:a,counterClockwise:e})),d:L({pathRadius:s,counterClockwise:e}),strokeWidth:n,fillOpacity:0})}function L(t){var r=t.pathRadius,e=t.counterClockwise,a=r,s=e?1:0;return`
      M `+x+","+m+`
      m 0,-`+a+`
      a `+a+","+a+" "+s+" 1 1 0,"+2*a+`
      a `+a+","+a+" "+s+" 1 1 0,-"+2*a+`
    `}function X(t){var r=t.counterClockwise,e=t.dashRatio,a=t.pathRadius,s=Math.PI*2*a,n=(1-e)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(r?-n:n)+"px"}}var _=function(t){B(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return b-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var e=this.props,a=e.value,s=e.minValue,n=e.maxValue,i=Math.min(Math.max(a,s),n);return(i-s)/(n-s)},r.prototype.render=function(){var e=this.props,a=e.circleRatio,s=e.className,n=e.classes,i=e.counterClockwise,c=e.styles,d=e.strokeWidth,h=e.text,u=this.getPathRadius(),p=this.getPathRatio();return l.createElement("svg",{className:n.root+" "+s,style:c.root,viewBox:"0 0 "+S+" "+F,"data-test-id":"CircularProgressbar"},this.props.background?l.createElement("circle",{className:n.background,style:c.background,cx:x,cy:m,r:b}):null,l.createElement(R,{className:n.trail,counterClockwise:i,dashRatio:a,pathRadius:u,strokeWidth:d,style:c.trail}),l.createElement(R,{className:n.path,counterClockwise:i,dashRatio:p*a,pathRadius:u,strokeWidth:d,style:c.path}),h?l.createElement("text",{className:n.text,style:c.text,x,y:m},h):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(l.Component);function z(t){var r=t.rotation,e=t.strokeLinecap,a=t.textColor,s=t.textSize,n=t.pathColor,i=t.pathTransition,c=t.pathTransitionDuration,d=t.trailColor,h=t.backgroundColor,u=r==null?void 0:"rotate("+r+"turn)",p=r==null?void 0:"center center";return{root:{},path:g({stroke:n,strokeLinecap:e,transform:u,transformOrigin:p,transition:i,transitionDuration:c==null?void 0:c+"s"}),trail:g({stroke:d,strokeLinecap:e,transform:u,transformOrigin:p}),text:g({fill:a,fontSize:s}),background:g({fill:h})}}function g(t){return Object.keys(t).forEach(function(r){t[r]==null&&delete t[r]}),t}const M=k.div`
  display: flex;
  align-items: flex-end;
  width: 88px;
  justify-content: space-between;
`,A=k.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    align-self: center;
    font-weight: 500;
    font-size: 22px;
    color: ${t=>t.theme.colors.black};
  }
`,G=k.div`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,Y=({progress:t})=>o.jsxs(M,{children:[o.jsxs(A,{children:[t,"%"]}),o.jsx(G,{children:o.jsx(_,{value:t,styles:z({pathColor:"#2bd627",trailColor:"#d4f8d3"})})})]}),$=()=>{const t=P(),r=y(D),e=y(V);l.useEffect(()=>{t(W()),t(C()),t(E()),t(j())},[t]);const a=[{Header:()=>o.jsx(w,{text:"word"}),accessor:"en"},{Header:()=>o.jsx(w,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{Header:"Progress",accessor:"progress",Cell:({row:s})=>o.jsx(Y,{progress:s.original.progress})},{accessor:"_id",Cell:({row:s})=>o.jsx("button",{onClick:()=>console.log(s.original._id),children:"..."})}];return o.jsx("div",{children:r.length!==0||e.keyword||e.category?o.jsxs(o.Fragment,{children:[o.jsx(v,{fetch:C,setCategory:O,setIsIrregular:N,setKeyword:T}),o.jsx(H,{columnsData:a,tableData:r,className:"dictionary"})]}):o.jsxs(o.Fragment,{children:[o.jsx(v,{className:"dictionary"}),o.jsx(I,{title:"You don't have words in your dictionary right now.",text:"Please create or add a word to start learning. We want to improve your vocabulary and expand your knowledge, so please share words you would like to add to your learning."})]})})};export{$ as default};
