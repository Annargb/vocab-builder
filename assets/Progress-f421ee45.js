import{b as l,a as f,j as p}from"./index-c7777208.js";/*! *****************************************************************************
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
***************************************************************************** */var x=function(t,r){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var o in a)a.hasOwnProperty(o)&&(e[o]=a[o])},x(t,r)};function v(t,r){x(t,r);function e(){this.constructor=t}t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var P=100,R=100,C=50,k=50,m=50;function y(t){var r=t.className,e=t.counterClockwise,a=t.dashRatio,o=t.pathRadius,i=t.strokeWidth,n=t.style;return l.createElement("path",{className:r,style:Object.assign({},n,w({pathRadius:o,dashRatio:a,counterClockwise:e})),d:b({pathRadius:o,counterClockwise:e}),strokeWidth:i,fillOpacity:0})}function b(t){var r=t.pathRadius,e=t.counterClockwise,a=r,o=e?1:0;return`
      M `+k+","+m+`
      m 0,-`+a+`
      a `+a+","+a+" "+o+" 1 1 0,"+2*a+`
      a `+a+","+a+" "+o+" 1 1 0,-"+2*a+`
    `}function w(t){var r=t.counterClockwise,e=t.dashRatio,a=t.pathRadius,o=Math.PI*2*a,i=(1-e)*o;return{strokeDasharray:o+"px "+o+"px",strokeDashoffset:(r?-i:i)+"px"}}var E=function(t){v(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return C-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var e=this.props,a=e.value,o=e.minValue,i=e.maxValue,n=Math.min(Math.max(a,o),i);return(n-o)/(i-o)},r.prototype.render=function(){var e=this.props,a=e.circleRatio,o=e.className,i=e.classes,n=e.counterClockwise,s=e.styles,u=e.strokeWidth,d=e.text,c=this.getPathRadius(),h=this.getPathRatio();return l.createElement("svg",{className:i.root+" "+o,style:s.root,viewBox:"0 0 "+P+" "+R,"data-test-id":"CircularProgressbar"},this.props.background?l.createElement("circle",{className:i.background,style:s.background,cx:k,cy:m,r:C}):null,l.createElement(y,{className:i.trail,counterClockwise:n,dashRatio:a,pathRadius:c,strokeWidth:u,style:s.trail}),l.createElement(y,{className:i.path,counterClockwise:n,dashRatio:h*a,pathRadius:c,strokeWidth:u,style:s.path}),d?l.createElement("text",{className:i.text,style:s.text,x:k,y:m},d):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(l.Component);function W(t){var r=t.rotation,e=t.strokeLinecap,a=t.textColor,o=t.textSize,i=t.pathColor,n=t.pathTransition,s=t.pathTransitionDuration,u=t.trailColor,d=t.backgroundColor,c=r==null?void 0:"rotate("+r+"turn)",h=r==null?void 0:"center center";return{root:{},path:g({stroke:i,strokeLinecap:e,transform:c,transformOrigin:h,transition:n,transitionDuration:s==null?void 0:s+"s"}),trail:g({stroke:u,strokeLinecap:e,transform:c,transformOrigin:h}),text:g({fill:a,fontSize:o}),background:g({fill:d})}}function g(t){return Object.keys(t).forEach(function(r){t[r]==null&&delete t[r]}),t}const O=f.div`
  display: flex;
  align-items: flex-end;
  width: 88px;
  justify-content: space-between;

  &.training {
    width: 100%;
    padding-top: 24px;
    margin-bottom: 8px;
    justify-content: flex-end;
  }
`,V=f.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    align-self: center;
    font-weight: 500;
    font-size: 22px;
    color: ${t=>t.theme.colors.black};
  }

  &.training {
    display: none;
  }
`,T=f.div`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }

  &.training {
    width: 44px;
    height: 44px;
  }
`,j=f(E)`
  .CircularProgressbar-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    fill: #121417;
  }
`,B=({progress:t,className:r})=>p.jsxs(O,{className:r,children:[p.jsxs(V,{className:r,children:[t,"%"]}),p.jsx(T,{className:r,children:p.jsx(j,{value:t,strokeWidth:10,text:r==="training"?`${t}`:"",styles:W({pathColor:r==="training"?"#85aa9f":"#2bd627",trailColor:r==="training"?"#fff":"#d4f8d3",textColor:"#121417"})})})]});export{B as P};
