import{b as p,a as i,j as t,c as w,u as M,i as P,e as _,f as v,g as G,h as U,s as Y,k as K,m as q,C as J}from"./index-40b06e4f.js";import{s as Q,S as Z,a as ee,b as te,c as re,D as I,W as oe,N as ae,T as S}from"./WordsTable-eeda8310.js";import{u as se,o as ne,a as ie}from"./schemas-5d4899bf.js";/*! *****************************************************************************
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
***************************************************************************** */var k=function(e,o){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)a.hasOwnProperty(s)&&(r[s]=a[s])},k(e,o)};function le(e,o){k(e,o);function r(){this.constructor=e}e.prototype=o===null?Object.create(o):(r.prototype=o.prototype,new r)}var ce=100,de=100,E=50,j=50,C=50;function N(e){var o=e.className,r=e.counterClockwise,a=e.dashRatio,s=e.pathRadius,n=e.strokeWidth,c=e.style;return p.createElement("path",{className:o,style:Object.assign({},c,pe({pathRadius:s,dashRatio:a,counterClockwise:r})),d:he({pathRadius:s,counterClockwise:r}),strokeWidth:n,fillOpacity:0})}function he(e){var o=e.pathRadius,r=e.counterClockwise,a=o,s=r?1:0;return`
      M `+j+","+C+`
      m 0,-`+a+`
      a `+a+","+a+" "+s+" 1 1 0,"+2*a+`
      a `+a+","+a+" "+s+" 1 1 0,-"+2*a+`
    `}function pe(e){var o=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,s=Math.PI*2*a,n=(1-r)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(o?-n:n)+"px"}}var ue=function(e){le(o,e);function o(){return e!==null&&e.apply(this,arguments)||this}return o.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},o.prototype.getPathRadius=function(){return E-this.props.strokeWidth/2-this.getBackgroundPadding()},o.prototype.getPathRatio=function(){var r=this.props,a=r.value,s=r.minValue,n=r.maxValue,c=Math.min(Math.max(a,s),n);return(c-s)/(n-s)},o.prototype.render=function(){var r=this.props,a=r.circleRatio,s=r.className,n=r.classes,c=r.counterClockwise,l=r.styles,x=r.strokeWidth,d=r.text,u=this.getPathRadius(),g=this.getPathRatio();return p.createElement("svg",{className:n.root+" "+s,style:l.root,viewBox:"0 0 "+ce+" "+de,"data-test-id":"CircularProgressbar"},this.props.background?p.createElement("circle",{className:n.background,style:l.background,cx:j,cy:C,r:E}):null,p.createElement(N,{className:n.trail,counterClockwise:c,dashRatio:a,pathRadius:u,strokeWidth:x,style:l.trail}),p.createElement(N,{className:n.path,counterClockwise:c,dashRatio:g*a,pathRadius:u,strokeWidth:x,style:l.path}),d?p.createElement("text",{className:n.text,style:l.text,x:j,y:C},d):null)},o.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},o}(p.Component);function xe(e){var o=e.rotation,r=e.strokeLinecap,a=e.textColor,s=e.textSize,n=e.pathColor,c=e.pathTransition,l=e.pathTransitionDuration,x=e.trailColor,d=e.backgroundColor,u=o==null?void 0:"rotate("+o+"turn)",g=o==null?void 0:"center center";return{root:{},path:f({stroke:n,strokeLinecap:r,transform:u,transformOrigin:g,transition:c,transitionDuration:l==null?void 0:l+"s"}),trail:f({stroke:x,strokeLinecap:r,transform:u,transformOrigin:g}),text:f({fill:a,fontSize:s}),background:f({fill:d})}}function f(e){return Object.keys(e).forEach(function(o){e[o]==null&&delete e[o]}),e}const ge=i.div`
  display: flex;
  align-items: flex-end;
  width: 88px;
  justify-content: space-between;
`,me=i.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    align-self: center;
    font-weight: 500;
    font-size: 22px;
    color: ${e=>e.theme.colors.black};
  }
`,fe=i.div`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,be=({progress:e})=>t.jsxs(ge,{children:[t.jsxs(me,{children:[e,"%"]}),t.jsx(fe,{children:t.jsx(ue,{value:e,styles:xe({pathColor:"#2bd627",trailColor:"#d4f8d3"})})})]}),ye=i.h2`
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
`,we=i.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.formTextColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
  }
`,O=i.input`
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
`,ve=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    align-items: flex-start;
  }
`,ke=i.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`,A=i.button`
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

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.white};
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
    padding: 14px;
    min-width: 245px;
  }
`,je=i(A)`
  max-width: 145px;
  color: ${e=>e.theme.colors.white};
  background-color: transparent;
  border-color: ${e=>e.theme.colors.btnBorder};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.white};
  }
`,z=i.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,B=i.svg`
  width: 28px;
  height: 28px;
`,V=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,D=i.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 32px;
  }
`,Ce=i.div`
  position: absolute;
  top: 56px;
  display: flex;
  align-items: center;
  gap: 16px;
`,F=i.input`
  flex-shrink: 0;
  position: relative;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid;
  border-radius: 10px;
  border-color: ${e=>e.theme.colors.white};
  outline: none;
  cursor: pointer;
  transition: border-color 250ms ${e=>e.theme.transition};

  &:checked {
    border-color: ${e=>e.theme.colors.white};

    &::before {
      content: "";
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${e=>e.theme.colors.white};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.white};
  }
`,H=i.label`
  font-weight: 400;
  font-size: 12px;
  color: ${e=>e.theme.colors.white};
  cursor: pointer;
`,L=i.div`
  display: flex;
  align-items: self-end;
  gap: 8px;
`,Re=i.div`
  position: relative;
  margin-bottom: 62px;

  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
`,We=i.span`
  position: absolute;
  top: 88px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${e=>e.theme.colors.formTextColor};
`,y=i.span`
  position: absolute;
  bottom: -16px;
  /* top: -14px; */
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${e=>e.theme.colors.formTextColor};

  &.category {
    top: -14px;
    bottom: auto;
  }
`,Te=i.label`
  position: relative;
`,$e=({closeModal:e})=>{var W,T,$;const o=w(Q),[r,a]=p.useState(null),s=M(),{register:n,handleSubmit:c,setValue:l,watch:x,formState:{errors:d,dirtyFields:u}}=se({mode:"onChange",resolver:ne(ie)}),g=h=>{h.category==="verb"?l("isIrregular",m==="irregular"):delete delete h.isIrregular,delete h.verbType,console.log(h),s(_(h)),s(v()),e()},m=x("verbType","regular"),X=h=>{a(h),l("category",h?h.value:null)},R=h=>{const b=h.target.value;console.log(b),l("verbType",b),console.log(b)};return t.jsxs("div",{children:[t.jsx(ye,{children:"Add word"}),t.jsx(we,{children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."}),t.jsxs("form",{onSubmit:c(g),children:[t.jsxs(Re,{children:[t.jsxs(Te,{children:[t.jsx(Z,{defaultValue:r,onChange:X,options:o,placeholder:"Categories",styles:ee}),t.jsx("input",{type:"hidden",...n("category"),value:r||""}),d.category&&t.jsx(y,{className:"category",children:(W=d.category)==null?void 0:W.message})]}),r&&r.value==="verb"&&t.jsxs(t.Fragment,{children:[t.jsxs(Ce,{children:[t.jsxs(L,{children:[t.jsx(F,{type:"radio",id:"regular",value:"regular",checked:m==="regular",onChange:R,...n("verbType")}),t.jsx(H,{htmlFor:"regular",children:"Regular"})]}),t.jsxs(L,{children:[t.jsx(F,{type:"radio",id:"irregular",value:"irregular",checked:m==="irregular",onChange:R,...n("verbType")}),t.jsx(H,{htmlFor:"irregular",children:"Irregular"})]})]}),m==="irregular"&&t.jsx(We,{children:"Such data must be entered in the format I form-II form-III form."})]})]}),t.jsxs(ve,{children:[t.jsxs(D,{children:[t.jsxs(V,{children:[t.jsx(B,{children:t.jsx("use",{href:`${P}#ukraine`})}),t.jsx(z,{children:"Ukrainian"})]}),t.jsx(O,{...n("ua"),type:"text"}),(u.ua||d.ua)&&t.jsx(y,{children:(T=d.ua)==null?void 0:T.message})]}),t.jsxs(D,{children:[t.jsxs(V,{children:[t.jsx(B,{children:t.jsx("use",{href:`${P}#uk`})}),t.jsx(z,{children:"English"})]}),t.jsx(O,{...n("en"),type:"text"}),(u.en||d.en)&&t.jsx(y,{children:($=d.en)==null?void 0:$.message})]})]}),t.jsxs(ke,{children:[t.jsx(A,{type:"submit",children:"Add"}),t.jsx(je,{type:"button",onClick:()=>e(),children:"Cancel"})]})]})]})},Ee=()=>{const e=M(),o=w(te),r=w(re),{isModalOpen:a,openModal:s,closeModal:n}=G();p.useEffect(()=>{e(v()),e(U())},[e]);const c=[{Header:()=>t.jsx(S,{text:"word"}),accessor:"en"},{Header:()=>t.jsx(S,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{Header:"Progress",accessor:"progress",Cell:({row:l})=>t.jsx(be,{progress:l.original.progress})},{accessor:"_id",Cell:({row:l})=>t.jsx("button",{onClick:()=>console.log(l.original._id),children:"..."})}];return t.jsxs("div",{children:[o.length!==0||r.keyword||r.category?t.jsxs(t.Fragment,{children:[t.jsx(I,{fetch:v,setCategory:Y,setIsIrregular:K,setKeyword:q,openModal:s}),t.jsx(oe,{columnsData:c,tableData:o,className:"dictionary"})]}):t.jsxs(t.Fragment,{children:[t.jsx(I,{className:"dictionary"}),t.jsx(ae,{title:"You don't have words in your dictionary right now.",text:"Please create or add a word to start learning. We want to improve your vocabulary and expand your knowledge, so please share words you would like to add to your learning."})]}),t.jsx(J,{isModalOpen:a,closeModal:n,className:"addWord",children:t.jsx($e,{closeModal:n})})]})};export{Ee as default};
