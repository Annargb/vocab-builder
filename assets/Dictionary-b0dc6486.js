import{b as C,a as b,j as u,c as je,u as Ve,i as nt,e as Zt,g as Jt,f as Qt,R as Z,h as er,k as tr,m as rr,n as ot,o as nr,s as or,p as ar,q as ir,C as sr}from"./index-eab53989.js";import{s as cr,a as lr,S as ur,b as pr,c as fr,d as dr,D as at,W as hr,N as vr,T as it}from"./WordsTable-1e6d68b5.js";import{u as mr,o as gr,a as xr}from"./schemas-58e26728.js";/*! *****************************************************************************
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
***************************************************************************** */var Te=function(e,t){return Te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o])},Te(e,t)};function yr(e,t){Te(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var br=100,wr=100,st=50,Be=50,We=50;function ct(e){var t=e.className,r=e.counterClockwise,n=e.dashRatio,o=e.pathRadius,a=e.strokeWidth,l=e.style;return C.createElement("path",{className:t,style:Object.assign({},l,jr({pathRadius:o,dashRatio:n,counterClockwise:r})),d:Or({pathRadius:o,counterClockwise:r}),strokeWidth:a,fillOpacity:0})}function Or(e){var t=e.pathRadius,r=e.counterClockwise,n=t,o=r?1:0;return`
      M `+Be+","+We+`
      m 0,-`+n+`
      a `+n+","+n+" "+o+" 1 1 0,"+2*n+`
      a `+n+","+n+" "+o+" 1 1 0,-"+2*n+`
    `}function jr(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,o=Math.PI*2*n,a=(1-r)*o;return{strokeDasharray:o+"px "+o+"px",strokeDashoffset:(t?-a:a)+"px"}}var kr=function(e){yr(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return st-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var r=this.props,n=r.value,o=r.minValue,a=r.maxValue,l=Math.min(Math.max(n,o),a);return(l-o)/(a-o)},t.prototype.render=function(){var r=this.props,n=r.circleRatio,o=r.className,a=r.classes,l=r.counterClockwise,i=r.styles,s=r.strokeWidth,p=r.text,c=this.getPathRadius(),d=this.getPathRatio();return C.createElement("svg",{className:a.root+" "+o,style:i.root,viewBox:"0 0 "+br+" "+wr,"data-test-id":"CircularProgressbar"},this.props.background?C.createElement("circle",{className:a.background,style:i.background,cx:Be,cy:We,r:st}):null,C.createElement(ct,{className:a.trail,counterClockwise:l,dashRatio:n,pathRadius:c,strokeWidth:s,style:i.trail}),C.createElement(ct,{className:a.path,counterClockwise:l,dashRatio:d*n,pathRadius:c,strokeWidth:s,style:i.path}),p?C.createElement("text",{className:a.text,style:i.text,x:Be,y:We},p):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(C.Component);function Er(e){var t=e.rotation,r=e.strokeLinecap,n=e.textColor,o=e.textSize,a=e.pathColor,l=e.pathTransition,i=e.pathTransitionDuration,s=e.trailColor,p=e.backgroundColor,c=t==null?void 0:"rotate("+t+"turn)",d=t==null?void 0:"center center";return{root:{},path:ye({stroke:a,strokeLinecap:r,transform:c,transformOrigin:d,transition:l,transitionDuration:i==null?void 0:i+"s"}),trail:ye({stroke:s,strokeLinecap:r,transform:c,transformOrigin:d}),text:ye({fill:n,fontSize:o}),background:ye({fill:p})}}function ye(e){return Object.keys(e).forEach(function(t){e[t]==null&&delete e[t]}),e}const Cr=b.div`
  display: flex;
  align-items: flex-end;
  width: 88px;
  justify-content: space-between;
`,Pr=b.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    align-self: center;
    font-weight: 500;
    font-size: 22px;
    color: ${e=>e.theme.colors.black};
  }
`,$r=b.div`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,Sr=({progress:e})=>u.jsxs(Cr,{children:[u.jsxs(Pr,{children:[e,"%"]}),u.jsx($r,{children:u.jsx(kr,{value:e,styles:Er({pathColor:"#2bd627",trailColor:"#d4f8d3"})})})]}),Rr=b.h2`
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
`,Ar=b.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.formTextColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
  }
`,lt=b.input`
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
`,Dr=b.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    align-items: flex-start;
  }
`,Tr=b.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`,Dt=b.button`
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
    color: ${e=>e.theme.colors.mainGreen};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
    padding: 14px;
    min-width: 245px;
  }
`,Br=b(Dt)`
  max-width: 145px;
  color: ${e=>e.theme.colors.white};
  background-color: transparent;
  border-color: ${e=>e.theme.colors.btnBorder};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.white};
  }
`,ut=b.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,pt=b.svg`
  width: 28px;
  height: 28px;
`,ft=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,dt=b.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 32px;
  }
`,Wr=b.div`
  position: absolute;
  top: 56px;
  display: flex;
  align-items: center;
  gap: 16px;
`,ht=b.input`
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
`,vt=b.label`
  font-weight: 400;
  font-size: 12px;
  color: ${e=>e.theme.colors.white};
  cursor: pointer;
`,mt=b.div`
  display: flex;
  align-items: self-end;
  gap: 8px;
`,Lr=b.div`
  position: relative;
  margin-bottom: 62px;

  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
`,Mr=b.span`
  position: absolute;
  top: 88px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${e=>e.theme.colors.formTextColor};
`,De=b.span`
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
`,Ir=b.label`
  position: relative;
`,Nr=({closeModal:e})=>{var v,w,k;const t=je(cr),[r,n]=C.useState(null),o=Ve(),a=je(lr),{register:l,handleSubmit:i,setValue:s,watch:p,formState:{errors:c,dirtyFields:d}}=mr({mode:"onChange",resolver:gr(xr)}),h=x=>{x.category==="verb"?s("isIrregular",f==="irregular"):delete delete x.isIrregular,delete x.verbType,console.log(x),o(Zt(x)),a&&e()},f=p("verbType","regular"),y=x=>{n(x),s("category",x?x.value:null)},g=x=>{const m=x.target.value;console.log(m),s("verbType",m),console.log(m)};return u.jsxs("div",{children:[u.jsx(Rr,{children:"Add word"}),u.jsx(Ar,{children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."}),u.jsxs("form",{onSubmit:i(h),children:[u.jsxs(Lr,{children:[u.jsxs(Ir,{children:[u.jsx(ur,{defaultValue:r,onChange:y,options:t,placeholder:"Categories",styles:pr}),u.jsx("input",{type:"hidden",...l("category"),value:r||""}),c.category&&u.jsx(De,{className:"category",children:(v=c.category)==null?void 0:v.message})]}),r&&r.value==="verb"&&u.jsxs(u.Fragment,{children:[u.jsxs(Wr,{children:[u.jsxs(mt,{children:[u.jsx(ht,{type:"radio",id:"regular",value:"regular",checked:f==="regular",onChange:g,...l("verbType")}),u.jsx(vt,{htmlFor:"regular",children:"Regular"})]}),u.jsxs(mt,{children:[u.jsx(ht,{type:"radio",id:"irregular",value:"irregular",checked:f==="irregular",onChange:g,...l("verbType")}),u.jsx(vt,{htmlFor:"irregular",children:"Irregular"})]})]}),f==="irregular"&&u.jsx(Mr,{children:"Such data must be entered in the format I form-II form-III form."})]})]}),u.jsxs(Dr,{children:[u.jsxs(dt,{children:[u.jsxs(ft,{children:[u.jsx(pt,{children:u.jsx("use",{href:`${nt}#ukraine`})}),u.jsx(ut,{children:"Ukrainian"})]}),u.jsx(lt,{...l("ua"),type:"text"}),(d.ua||c.ua)&&u.jsx(De,{children:(w=c.ua)==null?void 0:w.message})]}),u.jsxs(dt,{children:[u.jsxs(ft,{children:[u.jsx(pt,{children:u.jsx("use",{href:`${nt}#uk`})}),u.jsx(ut,{children:"English"})]}),u.jsx(lt,{...l("en"),type:"text"}),(d.en||c.en)&&u.jsx(De,{children:(k=c.en)==null?void 0:k.message})]})]}),u.jsxs(Tr,{children:[u.jsx(Dt,{type:"submit",children:"Add"}),u.jsx(Br,{type:"button",onClick:()=>e(),children:"Cancel"})]})]})]})};var gt=function(t){return t.reduce(function(r,n){var o=n[0],a=n[1];return r[o]=a,r},{})},xt=typeof window<"u"&&window.document&&window.document.createElement?C.useLayoutEffect:C.useEffect,D="top",M="bottom",I="right",T="left",ze="auto",fe=[D,M,I,T],te="start",ue="end",Vr="clippingParents",Tt="viewport",se="popper",zr="reference",yt=fe.reduce(function(e,t){return e.concat([t+"-"+te,t+"-"+ue])},[]),Bt=[].concat(fe,[ze]).reduce(function(e,t){return e.concat([t,t+"-"+te,t+"-"+ue])},[]),Fr="beforeRead",Hr="read",qr="afterRead",Ur="beforeMain",Xr="main",Yr="afterMain",Gr="beforeWrite",_r="write",Kr="afterWrite",Zr=[Fr,Hr,qr,Ur,Xr,Yr,Gr,_r,Kr];function F(e){return e?(e.nodeName||"").toLowerCase():null}function W(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=W(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=W(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Fe(e){if(typeof ShadowRoot>"u")return!1;var t=W(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Jr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!L(a)||!F(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(l){var i=o[l];i===!1?a.removeAttribute(l):a.setAttribute(l,i===!0?"":i)}))})}function Qr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},l=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=l.reduce(function(s,p){return s[p]="",s},{});!L(o)||!F(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(s){o.removeAttribute(s)}))})}}const en={name:"applyStyles",enabled:!0,phase:"write",fn:Jr,effect:Qr,requires:["computeStyles"]};function z(e){return e.split("-")[0]}var J=Math.max,ke=Math.min,re=Math.round;function Le(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Wt(){return!/^((?!chrome|android).)*safari/i.test(Le())}function ne(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&L(e)&&(o=e.offsetWidth>0&&re(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&re(n.height)/e.offsetHeight||1);var l=Q(e)?W(e):window,i=l.visualViewport,s=!Wt()&&r,p=(n.left+(s&&i?i.offsetLeft:0))/o,c=(n.top+(s&&i?i.offsetTop:0))/a,d=n.width/o,h=n.height/a;return{width:d,height:h,top:c,right:p+d,bottom:c+h,left:p,x:p,y:c}}function He(e){var t=ne(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Lt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Fe(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function H(e){return W(e).getComputedStyle(e)}function tn(e){return["table","td","th"].indexOf(F(e))>=0}function U(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function Pe(e){return F(e)==="html"?e:e.assignedSlot||e.parentNode||(Fe(e)?e.host:null)||U(e)}function bt(e){return!L(e)||H(e).position==="fixed"?null:e.offsetParent}function rn(e){var t=/firefox/i.test(Le()),r=/Trident/i.test(Le());if(r&&L(e)){var n=H(e);if(n.position==="fixed")return null}var o=Pe(e);for(Fe(o)&&(o=o.host);L(o)&&["html","body"].indexOf(F(o))<0;){var a=H(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function de(e){for(var t=W(e),r=bt(e);r&&tn(r)&&H(r).position==="static";)r=bt(r);return r&&(F(r)==="html"||F(r)==="body"&&H(r).position==="static")?t:r||rn(e)||t}function qe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e,t,r){return J(e,ke(t,r))}function nn(e,t,r){var n=ce(e,t,r);return n>r?r:n}function Mt(){return{top:0,right:0,bottom:0,left:0}}function It(e){return Object.assign({},Mt(),e)}function Nt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var on=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,It(typeof t!="number"?t:Nt(t,fe))};function an(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,l=r.modifiersData.popperOffsets,i=z(r.placement),s=qe(i),p=[T,I].indexOf(i)>=0,c=p?"height":"width";if(!(!a||!l)){var d=on(o.padding,r),h=He(a),f=s==="y"?D:T,y=s==="y"?M:I,g=r.rects.reference[c]+r.rects.reference[s]-l[s]-r.rects.popper[c],v=l[s]-r.rects.reference[s],w=de(a),k=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0,x=g/2-v/2,m=d[f],O=k-h[c]-d[y],j=k/2-h[c]/2+x,E=ce(m,j,O),S=s;r.modifiersData[n]=(t={},t[S]=E,t.centerOffset=E-j,t)}}function sn(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Lt(t.elements.popper,o)&&(t.elements.arrow=o))}const cn={name:"arrow",enabled:!0,phase:"main",fn:an,effect:sn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var ln={top:"auto",right:"auto",bottom:"auto",left:"auto"};function un(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:re(r*o)/o||0,y:re(n*o)/o||0}}function wt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,l=e.offsets,i=e.position,s=e.gpuAcceleration,p=e.adaptive,c=e.roundOffsets,d=e.isFixed,h=l.x,f=h===void 0?0:h,y=l.y,g=y===void 0?0:y,v=typeof c=="function"?c({x:f,y:g}):{x:f,y:g};f=v.x,g=v.y;var w=l.hasOwnProperty("x"),k=l.hasOwnProperty("y"),x=T,m=D,O=window;if(p){var j=de(r),E="clientHeight",S="clientWidth";if(j===W(r)&&(j=U(r),H(j).position!=="static"&&i==="absolute"&&(E="scrollHeight",S="scrollWidth")),j=j,o===D||(o===T||o===I)&&a===ue){m=M;var $=d&&j===O&&O.visualViewport?O.visualViewport.height:j[E];g-=$-n.height,g*=s?1:-1}if(o===T||(o===D||o===M)&&a===ue){x=I;var P=d&&j===O&&O.visualViewport?O.visualViewport.width:j[S];f-=P-n.width,f*=s?1:-1}}var R=Object.assign({position:i},p&&ln),N=c===!0?un({x:f,y:g},W(r)):{x:f,y:g};if(f=N.x,g=N.y,s){var A;return Object.assign({},R,(A={},A[m]=k?"0":"",A[x]=w?"0":"",A.transform=(O.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",A))}return Object.assign({},R,(t={},t[m]=k?g+"px":"",t[x]=w?f+"px":"",t.transform="",t))}function pn(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,l=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,p={placement:z(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,wt(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,wt(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const fn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:pn,data:{}};var be={passive:!0};function dn(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,l=n.resize,i=l===void 0?!0:l,s=W(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach(function(c){c.addEventListener("scroll",r.update,be)}),i&&s.addEventListener("resize",r.update,be),function(){a&&p.forEach(function(c){c.removeEventListener("scroll",r.update,be)}),i&&s.removeEventListener("resize",r.update,be)}}const hn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:dn,data:{}};var vn={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,function(t){return vn[t]})}var mn={start:"end",end:"start"};function Ot(e){return e.replace(/start|end/g,function(t){return mn[t]})}function Ue(e){var t=W(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Xe(e){return ne(U(e)).left+Ue(e).scrollLeft}function gn(e,t){var r=W(e),n=U(e),o=r.visualViewport,a=n.clientWidth,l=n.clientHeight,i=0,s=0;if(o){a=o.width,l=o.height;var p=Wt();(p||!p&&t==="fixed")&&(i=o.offsetLeft,s=o.offsetTop)}return{width:a,height:l,x:i+Xe(e),y:s}}function xn(e){var t,r=U(e),n=Ue(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=J(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=J(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-n.scrollLeft+Xe(e),s=-n.scrollTop;return H(o||r).direction==="rtl"&&(i+=J(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:l,x:i,y:s}}function Ye(e){var t=H(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Vt(e){return["html","body","#document"].indexOf(F(e))>=0?e.ownerDocument.body:L(e)&&Ye(e)?e:Vt(Pe(e))}function le(e,t){var r;t===void 0&&(t=[]);var n=Vt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=W(n),l=o?[a].concat(a.visualViewport||[],Ye(n)?n:[]):n,i=t.concat(l);return o?i:i.concat(le(Pe(l)))}function Me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yn(e,t){var r=ne(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function jt(e,t,r){return t===Tt?Me(gn(e,r)):Q(t)?yn(t,r):Me(xn(U(e)))}function bn(e){var t=le(Pe(e)),r=["absolute","fixed"].indexOf(H(e).position)>=0,n=r&&L(e)?de(e):e;return Q(n)?t.filter(function(o){return Q(o)&&Lt(o,n)&&F(o)!=="body"}):[]}function wn(e,t,r,n){var o=t==="clippingParents"?bn(e):[].concat(t),a=[].concat(o,[r]),l=a[0],i=a.reduce(function(s,p){var c=jt(e,p,n);return s.top=J(c.top,s.top),s.right=ke(c.right,s.right),s.bottom=ke(c.bottom,s.bottom),s.left=J(c.left,s.left),s},jt(e,l,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function zt(e){var t=e.reference,r=e.element,n=e.placement,o=n?z(n):null,a=n?oe(n):null,l=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(o){case D:s={x:l,y:t.y-r.height};break;case M:s={x:l,y:t.y+t.height};break;case I:s={x:t.x+t.width,y:i};break;case T:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var p=o?qe(o):null;if(p!=null){var c=p==="y"?"height":"width";switch(a){case te:s[p]=s[p]-(t[c]/2-r[c]/2);break;case ue:s[p]=s[p]+(t[c]/2-r[c]/2);break}}return s}function pe(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,l=a===void 0?e.strategy:a,i=r.boundary,s=i===void 0?Vr:i,p=r.rootBoundary,c=p===void 0?Tt:p,d=r.elementContext,h=d===void 0?se:d,f=r.altBoundary,y=f===void 0?!1:f,g=r.padding,v=g===void 0?0:g,w=It(typeof v!="number"?v:Nt(v,fe)),k=h===se?zr:se,x=e.rects.popper,m=e.elements[y?k:h],O=wn(Q(m)?m:m.contextElement||U(e.elements.popper),s,c,l),j=ne(e.elements.reference),E=zt({reference:j,element:x,strategy:"absolute",placement:o}),S=Me(Object.assign({},x,E)),$=h===se?S:j,P={top:O.top-$.top+w.top,bottom:$.bottom-O.bottom+w.bottom,left:O.left-$.left+w.left,right:$.right-O.right+w.right},R=e.modifiersData.offset;if(h===se&&R){var N=R[o];Object.keys(P).forEach(function(A){var X=[I,M].indexOf(A)>=0?1:-1,Y=[D,M].indexOf(A)>=0?"y":"x";P[A]+=N[Y]*X})}return P}function On(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,l=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,p=s===void 0?Bt:s,c=oe(n),d=c?i?yt:yt.filter(function(y){return oe(y)===c}):fe,h=d.filter(function(y){return p.indexOf(y)>=0});h.length===0&&(h=d);var f=h.reduce(function(y,g){return y[g]=pe(e,{placement:g,boundary:o,rootBoundary:a,padding:l})[z(g)],y},{});return Object.keys(f).sort(function(y,g){return f[y]-f[g]})}function jn(e){if(z(e)===ze)return[];var t=we(e);return[Ot(e),t,Ot(t)]}function kn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,l=r.altAxis,i=l===void 0?!0:l,s=r.fallbackPlacements,p=r.padding,c=r.boundary,d=r.rootBoundary,h=r.altBoundary,f=r.flipVariations,y=f===void 0?!0:f,g=r.allowedAutoPlacements,v=t.options.placement,w=z(v),k=w===v,x=s||(k||!y?[we(v)]:jn(v)),m=[v].concat(x).reduce(function(ee,q){return ee.concat(z(q)===ze?On(t,{placement:q,boundary:c,rootBoundary:d,padding:p,flipVariations:y,allowedAutoPlacements:g}):q)},[]),O=t.rects.reference,j=t.rects.popper,E=new Map,S=!0,$=m[0],P=0;P<m.length;P++){var R=m[P],N=z(R),A=oe(R)===te,X=[D,M].indexOf(N)>=0,Y=X?"width":"height",B=pe(t,{placement:R,boundary:c,rootBoundary:d,altBoundary:h,padding:p}),V=X?A?I:T:A?M:D;O[Y]>j[Y]&&(V=we(V));var he=we(V),G=[];if(a&&G.push(B[N]<=0),i&&G.push(B[V]<=0,B[he]<=0),G.every(function(ee){return ee})){$=R,S=!1;break}E.set(R,G)}if(S)for(var ve=y?3:1,$e=function(q){var ie=m.find(function(ge){var _=E.get(ge);if(_)return _.slice(0,q).every(function(Se){return Se})});if(ie)return $=ie,"break"},ae=ve;ae>0;ae--){var me=$e(ae);if(me==="break")break}t.placement!==$&&(t.modifiersData[n]._skip=!0,t.placement=$,t.reset=!0)}}const En={name:"flip",enabled:!0,phase:"main",fn:kn,requiresIfExists:["offset"],data:{_skip:!1}};function kt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Et(e){return[D,I,M,T].some(function(t){return e[t]>=0})}function Cn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,l=pe(t,{elementContext:"reference"}),i=pe(t,{altBoundary:!0}),s=kt(l,n),p=kt(i,o,a),c=Et(s),d=Et(p);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}const Pn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Cn};function $n(e,t,r){var n=z(e),o=[T,D].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=a[0],i=a[1];return l=l||0,i=(i||0)*o,[T,I].indexOf(n)>=0?{x:i,y:l}:{x:l,y:i}}function Sn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,l=Bt.reduce(function(c,d){return c[d]=$n(d,t.rects,a),c},{}),i=l[t.placement],s=i.x,p=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=l}const Rn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Sn};function An(e){var t=e.state,r=e.name;t.modifiersData[r]=zt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Dn={name:"popperOffsets",enabled:!0,phase:"read",fn:An,data:{}};function Tn(e){return e==="x"?"y":"x"}function Bn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,l=r.altAxis,i=l===void 0?!1:l,s=r.boundary,p=r.rootBoundary,c=r.altBoundary,d=r.padding,h=r.tether,f=h===void 0?!0:h,y=r.tetherOffset,g=y===void 0?0:y,v=pe(t,{boundary:s,rootBoundary:p,padding:d,altBoundary:c}),w=z(t.placement),k=oe(t.placement),x=!k,m=qe(w),O=Tn(m),j=t.modifiersData.popperOffsets,E=t.rects.reference,S=t.rects.popper,$=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,P=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(j){if(a){var A,X=m==="y"?D:T,Y=m==="y"?M:I,B=m==="y"?"height":"width",V=j[m],he=V+v[X],G=V-v[Y],ve=f?-S[B]/2:0,$e=k===te?E[B]:S[B],ae=k===te?-S[B]:-E[B],me=t.elements.arrow,ee=f&&me?He(me):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Mt(),ie=q[X],ge=q[Y],_=ce(0,E[B],ee[B]),Se=x?E[B]/2-ve-_-ie-P.mainAxis:$e-_-ie-P.mainAxis,Ut=x?-E[B]/2+ve+_+ge+P.mainAxis:ae+_+ge+P.mainAxis,Re=t.elements.arrow&&de(t.elements.arrow),Xt=Re?m==="y"?Re.clientTop||0:Re.clientLeft||0:0,Ge=(A=R==null?void 0:R[m])!=null?A:0,Yt=V+Se-Ge-Xt,Gt=V+Ut-Ge,_e=ce(f?ke(he,Yt):he,V,f?J(G,Gt):G);j[m]=_e,N[m]=_e-V}if(i){var Ke,_t=m==="x"?D:T,Kt=m==="x"?M:I,K=j[O],xe=O==="y"?"height":"width",Ze=K+v[_t],Je=K-v[Kt],Ae=[D,T].indexOf(w)!==-1,Qe=(Ke=R==null?void 0:R[O])!=null?Ke:0,et=Ae?Ze:K-E[xe]-S[xe]-Qe+P.altAxis,tt=Ae?K+E[xe]+S[xe]-Qe-P.altAxis:Je,rt=f&&Ae?nn(et,K,tt):ce(f?et:Ze,K,f?tt:Je);j[O]=rt,N[O]=rt-K}t.modifiersData[n]=N}}const Wn={name:"preventOverflow",enabled:!0,phase:"main",fn:Bn,requiresIfExists:["offset"]};function Ln(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Mn(e){return e===W(e)||!L(e)?Ue(e):Ln(e)}function In(e){var t=e.getBoundingClientRect(),r=re(t.width)/e.offsetWidth||1,n=re(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Nn(e,t,r){r===void 0&&(r=!1);var n=L(t),o=L(t)&&In(t),a=U(t),l=ne(e,o,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((F(t)!=="body"||Ye(a))&&(i=Mn(t)),L(t)?(s=ne(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=Xe(a))),{x:l.left+i.scrollLeft-s.x,y:l.top+i.scrollTop-s.y,width:l.width,height:l.height}}function Vn(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&o(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function zn(e){var t=Vn(e);return Zr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Fn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Hn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Ct={placement:"bottom",modifiers:[],strategy:"absolute"};function Pt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function qn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?Ct:o;return function(i,s,p){p===void 0&&(p=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ct,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},d=[],h=!1,f={state:c,setOptions:function(w){var k=typeof w=="function"?w(c.options):w;g(),c.options=Object.assign({},a,c.options,k),c.scrollParents={reference:Q(i)?le(i):i.contextElement?le(i.contextElement):[],popper:le(s)};var x=zn(Hn([].concat(n,c.options.modifiers)));return c.orderedModifiers=x.filter(function(m){return m.enabled}),y(),f.update()},forceUpdate:function(){if(!h){var w=c.elements,k=w.reference,x=w.popper;if(Pt(k,x)){c.rects={reference:Nn(k,de(x),c.options.strategy==="fixed"),popper:He(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(P){return c.modifiersData[P.name]=Object.assign({},P.data)});for(var m=0;m<c.orderedModifiers.length;m++){if(c.reset===!0){c.reset=!1,m=-1;continue}var O=c.orderedModifiers[m],j=O.fn,E=O.options,S=E===void 0?{}:E,$=O.name;typeof j=="function"&&(c=j({state:c,options:S,name:$,instance:f})||c)}}}},update:Fn(function(){return new Promise(function(v){f.forceUpdate(),v(c)})}),destroy:function(){g(),h=!0}};if(!Pt(i,s))return f;f.setOptions(p).then(function(v){!h&&p.onFirstUpdate&&p.onFirstUpdate(v)});function y(){c.orderedModifiers.forEach(function(v){var w=v.name,k=v.options,x=k===void 0?{}:k,m=v.effect;if(typeof m=="function"){var O=m({state:c,name:w,instance:f,options:x}),j=function(){};d.push(O||j)}})}function g(){d.forEach(function(v){return v()}),d=[]}return f}}var Un=[hn,Dn,fn,en,Rn,En,Wn,cn,Pn],Xn=qn({defaultModifiers:Un}),Yn=typeof Element<"u",Gn=typeof Map=="function",_n=typeof Set=="function",Kn=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Oe(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!Oe(e[n],t[n]))return!1;return!0}var a;if(Gn&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(n=a.next()).done;)if(!t.has(n.value[0]))return!1;for(a=e.entries();!(n=a.next()).done;)if(!Oe(n.value[1],t.get(n.value[0])))return!1;return!0}if(_n&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(n=a.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Kn&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(Yn&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((o[n]==="_owner"||o[n]==="__v"||o[n]==="__o")&&e.$$typeof)&&!Oe(e[o[n]],t[o[n]]))return!1;return!0}return e!==e&&t!==t}var Zn=function(t,r){try{return Oe(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Jn=Jt(Zn);var Qn=[],eo=function(t,r,n){n===void 0&&(n={});var o=C.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Qn},l=C.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=l[0],s=l[1],p=C.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(f){var y=f.state,g=Object.keys(y.elements);Qt.flushSync(function(){s({styles:gt(g.map(function(v){return[v,y.styles[v]||{}]})),attributes:gt(g.map(function(v){return[v,y.attributes[v]]}))})})},requires:["computeStyles"]}},[]),c=C.useMemo(function(){var h={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[p,{name:"applyStyles",enabled:!1}])};return Jn(o.current,h)?o.current||h:(o.current=h,h)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,p]),d=C.useRef();return xt(function(){d.current&&d.current.setOptions(c)},[c]),xt(function(){if(!(t==null||r==null)){var h=n.createPopper||Xn,f=h(t,r,c);return d.current=f,function(){f.destroy(),d.current=null}}},[t,r,n.createPopper]),{state:d.current?d.current.state:null,styles:i.styles,attributes:i.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},Ft={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$t=Z.createContext&&Z.createContext(Ft),to=["attr","size","title"];function ro(e,t){if(e==null)return{};var r=no(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function no(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ee.apply(this,arguments)}function St(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?St(Object(r),!0).forEach(function(n){oo(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):St(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function oo(e,t,r){return t=ao(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ao(e){var t=io(e,"string");return typeof t=="symbol"?t:t+""}function io(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ht(e){return e&&e.map((t,r)=>Z.createElement(t.tag,Ce({key:r},t.attr),Ht(t.child)))}function qt(e){return t=>Z.createElement(so,Ee({attr:Ce({},e.attr)},t),Ht(e.child))}function so(e){var t=r=>{var{attr:n,size:o,title:a}=e,l=ro(e,to),i=o||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),Z.createElement("svg",Ee({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:s,style:Ce(Ce({color:e.color||r.color},r.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&Z.createElement("title",null,a),e.children)};return $t!==void 0?Z.createElement($t.Consumer,null,r=>t(r)):t(Ft)}function co(e){return qt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"},child:[]}]})(e)}function lo(e){return qt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(e)}const uo=b.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: ${e=>e.theme.colors.linkColor};
  transition: color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};
  }
`,po=b.div`
  z-index: 100;
  width: 117px;
  height: 70px;
  padding: 12px 24px;
  border-radius: 15px;
  box-shadow: 0 4px 47px 0 ${e=>e.theme.colors.shadow};
  background: ${e=>e.theme.colors.snowWhite};

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 80px;
  }
`,fo=b.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ie=b(co)`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.linkColor};
  transition: stroke 250ms ${e=>e.theme.transition};
`,Ne=b(lo)`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.linkColor};
  transition: stroke 250ms ${e=>e.theme.transition};
`,Rt=b.button`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover
    ${Ne},
    &:focus
    ${Ne},
    &:hover
    ${Ie},
    &:focus
    ${Ie} {
    stroke: ${e=>e.theme.colors.mainGreen};
  }
`,At=b.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ho=({id:e})=>{const[t,r]=C.useState(!1),[n,o]=C.useState(null),[a,l]=C.useState(null),{styles:i,attributes:s}=eo(n,a,{placement:"bottom"}),p=Ve(),c=()=>{r(!t)},d=C.useCallback(f=>{a&&!a.contains(f.target)&&n&&!n.contains(f.target)&&r(!1)},[a,n]),h=C.useCallback(f=>{f.key==="Escape"&&r(!1)},[]);return C.useEffect(()=>(t?(document.addEventListener("mousedown",d),document.addEventListener("keydown",h)):(document.removeEventListener("mousedown",d),document.removeEventListener("keydown",h)),()=>{document.removeEventListener("mousedown",d),document.removeEventListener("keydown",h)}),[t,d,h]),u.jsxs(u.Fragment,{children:[u.jsx(uo,{type:"button",ref:o,onClick:c,children:"..."}),t&&u.jsx(po,{ref:l,style:i.popper,...s.popper,children:u.jsxs(fo,{children:[u.jsx("li",{children:u.jsxs(Rt,{type:"button",children:[u.jsx(Ie,{}),u.jsx(At,{children:"Edit"})]})}),u.jsx("li",{children:u.jsxs(Rt,{type:"button",onClick:()=>p(er(e)),children:[u.jsx(Ne,{}),u.jsx(At,{children:"Delete"})]})})]})})]})},xo=()=>{const e=Ve(),t=je(fr),r=je(dr),{isModalOpen:n,openModal:o,closeModal:a}=tr();C.useEffect(()=>{e(rr()),e(ot()),e(nr())},[e]);const l=[{Header:()=>u.jsx(it,{text:"word"}),accessor:"en"},{Header:()=>u.jsx(it,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{Header:"Progress",accessor:"progress",Cell:({row:i})=>u.jsx(Sr,{progress:i.original.progress})},{accessor:"_id",Cell:({row:i})=>u.jsx(ho,{id:i.original._id})}];return u.jsxs("div",{children:[t.length!==0||r.keyword||r.category?u.jsxs(u.Fragment,{children:[u.jsx(at,{fetch:ot,setCategory:or,setIsIrregular:ar,setKeyword:ir,openModal:o}),u.jsx(hr,{columnsData:l,tableData:t,className:"dictionary"})]}):u.jsxs(u.Fragment,{children:[u.jsx(at,{className:"dictionary"}),u.jsx(vr,{title:"You don't have words in your dictionary right now.",text:"Please create or add a word to start learning. We want to improve your vocabulary and expand your knowledge, so please share words you would like to add to your learning."})]}),u.jsx(sr,{isModalOpen:n,closeModal:a,className:"addWord",children:u.jsx(Nr,{closeModal:a})})]})};export{xo as default};
