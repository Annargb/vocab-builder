import{b as d,a as i,j as t,i as b,u as N,c as k,e as B,f as D,g as y,h as I,k as z,s as S,m as V,n as H,C as F}from"./index-eead7853.js";import{s as M,a as L,D as C,W as A,N as X,T as v}from"./WordsTable-c1df3bf4.js";import{u as _,o as G,a as U}from"./schemas-9a73b02d.js";/*! *****************************************************************************
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
***************************************************************************** */var g=function(e,r){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var s in a)a.hasOwnProperty(s)&&(o[s]=a[s])},g(e,r)};function Y(e,r){g(e,r);function o(){this.constructor=e}e.prototype=r===null?Object.create(r):(o.prototype=r.prototype,new o)}var K=100,q=100,j=50,f=50,w=50;function R(e){var r=e.className,o=e.counterClockwise,a=e.dashRatio,s=e.pathRadius,n=e.strokeWidth,l=e.style;return d.createElement("path",{className:r,style:Object.assign({},l,Q({pathRadius:s,dashRatio:a,counterClockwise:o})),d:J({pathRadius:s,counterClockwise:o}),strokeWidth:n,fillOpacity:0})}function J(e){var r=e.pathRadius,o=e.counterClockwise,a=r,s=o?1:0;return`
      M `+f+","+w+`
      m 0,-`+a+`
      a `+a+","+a+" "+s+" 1 1 0,"+2*a+`
      a `+a+","+a+" "+s+" 1 1 0,-"+2*a+`
    `}function Q(e){var r=e.counterClockwise,o=e.dashRatio,a=e.pathRadius,s=Math.PI*2*a,n=(1-o)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(r?-n:n)+"px"}}var Z=function(e){Y(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return j-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var o=this.props,a=o.value,s=o.minValue,n=o.maxValue,l=Math.min(Math.max(a,s),n);return(l-s)/(n-s)},r.prototype.render=function(){var o=this.props,a=o.circleRatio,s=o.className,n=o.classes,l=o.counterClockwise,c=o.styles,p=o.strokeWidth,u=o.text,h=this.getPathRadius(),x=this.getPathRatio();return d.createElement("svg",{className:n.root+" "+s,style:c.root,viewBox:"0 0 "+K+" "+q,"data-test-id":"CircularProgressbar"},this.props.background?d.createElement("circle",{className:n.background,style:c.background,cx:f,cy:w,r:j}):null,d.createElement(R,{className:n.trail,counterClockwise:l,dashRatio:a,pathRadius:h,strokeWidth:p,style:c.trail}),d.createElement(R,{className:n.path,counterClockwise:l,dashRatio:x*a,pathRadius:h,strokeWidth:p,style:c.path}),u?d.createElement("text",{className:n.text,style:c.text,x:f,y:w},u):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(d.Component);function ee(e){var r=e.rotation,o=e.strokeLinecap,a=e.textColor,s=e.textSize,n=e.pathColor,l=e.pathTransition,c=e.pathTransitionDuration,p=e.trailColor,u=e.backgroundColor,h=r==null?void 0:"rotate("+r+"turn)",x=r==null?void 0:"center center";return{root:{},path:m({stroke:n,strokeLinecap:o,transform:h,transformOrigin:x,transition:l,transitionDuration:c==null?void 0:c+"s"}),trail:m({stroke:p,strokeLinecap:o,transform:h,transformOrigin:x}),text:m({fill:a,fontSize:s}),background:m({fill:u})}}function m(e){return Object.keys(e).forEach(function(r){e[r]==null&&delete e[r]}),e}const te=i.div`
  display: flex;
  align-items: flex-end;
  width: 88px;
  justify-content: space-between;
`,re=i.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    align-self: center;
    font-weight: 500;
    font-size: 22px;
    color: ${e=>e.theme.colors.black};
  }
`,oe=i.div`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,ae=({progress:e})=>t.jsxs(te,{children:[t.jsxs(re,{children:[e,"%"]}),t.jsx(oe,{children:t.jsx(Z,{value:e,styles:ee({pathColor:"#2bd627",trailColor:"#d4f8d3"})})})]}),se=i.h2`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 1.2;
  }
`,ne=i.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.formTextColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
  }
`,P=i.input`
  width: 100%;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.white};
  background-color: inherit;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.inputBorder};
  border-radius: 15px;
  outline: none;
  transition: border-color 250ms ${e=>e.theme.transition};

  @media screen and (min-width: 375px) {
    width: 311px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    padding: 16px 18px;
    font-weight: 400;
    border-color: ${e=>e.theme.colors.inputTabletBorder};
  }

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.mainGreenHover};
  }
`,ie=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    align-items: flex-start;
  }
`,ce=i.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`,O=i.button`
  max-width: 159px;
  width: 100%;
  padding: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
  background-color: ${e=>e.theme.colors.white};
  border-radius: 30px;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.white};
  transition:
    background-color 250ms ${e=>e.theme.transition},
    color 250ms ${e=>e.theme.transition};

  &.hover,
  &.focus {
    color: ${e=>e.theme.colors.white};
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
    padding: 14px;
    min-width: 245px;
  }
`,le=i(O)`
  max-width: 145px;
  color: ${e=>e.theme.colors.white};
  background-color: transparent;
  border-color: ${e=>e.theme.colors.btnBorder};

  &.hover,
  &.focus {
    color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.white};
  }
`,W=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,E=i.svg`
  width: 28px;
  height: 28px;
`,T=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,$=i.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 32px;
  }
`,de=({closeModal:e})=>{const{register:r,handleSubmit:o}=_({mode:"onChange",resolver:G(U)}),a=s=>{console.log(s)};return t.jsxs("div",{children:[t.jsx(se,{children:"Add word"}),t.jsx(ne,{children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."}),t.jsxs("form",{onSubmit:o(a),children:[t.jsxs(ie,{children:[t.jsxs($,{children:[t.jsxs(T,{children:[t.jsx(E,{children:t.jsx("use",{href:`${b}#ukraine`})}),t.jsx(W,{children:"Ukrainian"})]}),t.jsx(P,{...r("ua"),type:"text"})]}),t.jsxs($,{children:[t.jsxs(T,{children:[t.jsx(E,{children:t.jsx("use",{href:`${b}#uk`})}),t.jsx(W,{children:"English"})]}),t.jsx(P,{...r("en"),type:"text"})]})]}),t.jsxs(ce,{children:[t.jsx(O,{type:"submit",children:"Add"}),t.jsx(le,{type:"button",onClick:()=>e(),children:"Cancel"})]})]})]})},xe=()=>{const e=N(),r=k(M),o=k(L),{isModalOpen:a,openModal:s,closeModal:n}=B();d.useEffect(()=>{e(D()),e(y()),e(I()),e(z())},[e]);const l=[{Header:()=>t.jsx(v,{text:"word"}),accessor:"en"},{Header:()=>t.jsx(v,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{Header:"Progress",accessor:"progress",Cell:({row:c})=>t.jsx(ae,{progress:c.original.progress})},{accessor:"_id",Cell:({row:c})=>t.jsx("button",{onClick:()=>console.log(c.original._id),children:"..."})}];return t.jsxs("div",{children:[r.length!==0||o.keyword||o.category?t.jsxs(t.Fragment,{children:[t.jsx(C,{fetch:y,setCategory:S,setIsIrregular:V,setKeyword:H,openModal:s}),t.jsx(A,{columnsData:l,tableData:r,className:"dictionary"})]}):t.jsxs(t.Fragment,{children:[t.jsx(C,{className:"dictionary"}),t.jsx(X,{title:"You don't have words in your dictionary right now.",text:"Please create or add a word to start learning. We want to improve your vocabulary and expand your knowledge, so please share words you would like to add to your learning."})]}),t.jsx(F,{isModalOpen:a,closeModal:n,className:"addWord",children:t.jsx(de,{closeModal:n})})]})};export{xe as default};
