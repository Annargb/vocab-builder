import{b as E,a as P,j as p,g as Yt,c as _t,R as Z,u as Ne,i as tt,e as Gt,f as Kt,h as Zt,C as Jt,k as rt,m as Qt,n as nt,o as er,p as tr,s as rr,q as nr,t as or}from"./index-fd174d5e.js";import{s as ar,a as ir,D as sr,W as cr,N as lr,T as ot}from"./WordsTable-de675383.js";import{u as ur,o as fr,e as pr}from"./schemas-9e7ffba8.js";/*! *****************************************************************************
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
***************************************************************************** */var De=function(e,t){return De=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o])},De(e,t)};function dr(e,t){De(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var vr=100,hr=100,at=50,Ae=50,Be=50;function it(e){var t=e.className,r=e.counterClockwise,n=e.dashRatio,o=e.pathRadius,a=e.strokeWidth,c=e.style;return E.createElement("path",{className:t,style:Object.assign({},c,gr({pathRadius:o,dashRatio:n,counterClockwise:r})),d:mr({pathRadius:o,counterClockwise:r}),strokeWidth:a,fillOpacity:0})}function mr(e){var t=e.pathRadius,r=e.counterClockwise,n=t,o=r?1:0;return`
      M `+Ae+","+Be+`
      m 0,-`+n+`
      a `+n+","+n+" "+o+" 1 1 0,"+2*n+`
      a `+n+","+n+" "+o+" 1 1 0,-"+2*n+`
    `}function gr(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,o=Math.PI*2*n,a=(1-r)*o;return{strokeDasharray:o+"px "+o+"px",strokeDashoffset:(t?-a:a)+"px"}}var yr=function(e){dr(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return at-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var r=this.props,n=r.value,o=r.minValue,a=r.maxValue,c=Math.min(Math.max(n,o),a);return(c-o)/(a-o)},t.prototype.render=function(){var r=this.props,n=r.circleRatio,o=r.className,a=r.classes,c=r.counterClockwise,i=r.styles,s=r.strokeWidth,u=r.text,l=this.getPathRadius(),f=this.getPathRatio();return E.createElement("svg",{className:a.root+" "+o,style:i.root,viewBox:"0 0 "+vr+" "+hr,"data-test-id":"CircularProgressbar"},this.props.background?E.createElement("circle",{className:a.background,style:i.background,cx:Ae,cy:Be,r:at}):null,E.createElement(it,{className:a.trail,counterClockwise:c,dashRatio:n,pathRadius:l,strokeWidth:s,style:i.trail}),E.createElement(it,{className:a.path,counterClockwise:c,dashRatio:f*n,pathRadius:l,strokeWidth:s,style:i.path}),u?E.createElement("text",{className:a.text,style:i.text,x:Ae,y:Be},u):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(E.Component);function xr(e){var t=e.rotation,r=e.strokeLinecap,n=e.textColor,o=e.textSize,a=e.pathColor,c=e.pathTransition,i=e.pathTransitionDuration,s=e.trailColor,u=e.backgroundColor,l=t==null?void 0:"rotate("+t+"turn)",f=t==null?void 0:"center center";return{root:{},path:xe({stroke:a,strokeLinecap:r,transform:l,transformOrigin:f,transition:c,transitionDuration:i==null?void 0:i+"s"}),trail:xe({stroke:s,strokeLinecap:r,transform:l,transformOrigin:f}),text:xe({fill:n,fontSize:o}),background:xe({fill:u})}}function xe(e){return Object.keys(e).forEach(function(t){e[t]==null&&delete e[t]}),e}const wr=P.div`
  display: flex;
  align-items: flex-end;
  width: 88px;
  justify-content: space-between;
`,br=P.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    align-self: center;
    font-weight: 500;
    font-size: 22px;
    color: ${e=>e.theme.colors.black};
  }
`,Or=P.div`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,jr=({progress:e})=>p.jsxs(wr,{children:[p.jsxs(br,{children:[e,"%"]}),p.jsx(Or,{children:p.jsx(yr,{value:e,styles:xr({pathColor:"#2bd627",trailColor:"#d4f8d3"})})})]});var st=function(t){return t.reduce(function(r,n){var o=n[0],a=n[1];return r[o]=a,r},{})},ct=typeof window<"u"&&window.document&&window.document.createElement?E.useLayoutEffect:E.useEffect,A="top",M="bottom",N="right",B="left",Ie="auto",pe=[A,M,N,B],te="start",ue="end",kr="clippingParents",Rt="viewport",se="popper",Er="reference",lt=pe.reduce(function(e,t){return e.concat([t+"-"+te,t+"-"+ue])},[]),$t=[].concat(pe,[Ie]).reduce(function(e,t){return e.concat([t,t+"-"+te,t+"-"+ue])},[]),Pr="beforeRead",Cr="read",Rr="afterRead",$r="beforeMain",Sr="main",Dr="afterMain",Ar="beforeWrite",Br="write",Wr="afterWrite",Tr=[Pr,Cr,Rr,$r,Sr,Dr,Ar,Br,Wr];function F(e){return e?(e.nodeName||"").toLowerCase():null}function T(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=T(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=T(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ve(e){if(typeof ShadowRoot>"u")return!1;var t=T(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Lr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!L(a)||!F(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var i=o[c];i===!1?a.removeAttribute(c):a.setAttribute(c,i===!0?"":i)}))})}function Mr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=c.reduce(function(s,u){return s[u]="",s},{});!L(o)||!F(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(s){o.removeAttribute(s)}))})}}const Nr={name:"applyStyles",enabled:!0,phase:"write",fn:Lr,effect:Mr,requires:["computeStyles"]};function H(e){return e.split("-")[0]}var J=Math.max,je=Math.min,re=Math.round;function We(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function St(){return!/^((?!chrome|android).)*safari/i.test(We())}function ne(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&L(e)&&(o=e.offsetWidth>0&&re(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&re(n.height)/e.offsetHeight||1);var c=Q(e)?T(e):window,i=c.visualViewport,s=!St()&&r,u=(n.left+(s&&i?i.offsetLeft:0))/o,l=(n.top+(s&&i?i.offsetTop:0))/a,f=n.width/o,m=n.height/a;return{width:f,height:m,top:l,right:u+f,bottom:l+m,left:u,x:u,y:l}}function He(e){var t=ne(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Dt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ve(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function z(e){return T(e).getComputedStyle(e)}function Ir(e){return["table","td","th"].indexOf(F(e))>=0}function U(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function Pe(e){return F(e)==="html"?e:e.assignedSlot||e.parentNode||(Ve(e)?e.host:null)||U(e)}function ut(e){return!L(e)||z(e).position==="fixed"?null:e.offsetParent}function Vr(e){var t=/firefox/i.test(We()),r=/Trident/i.test(We());if(r&&L(e)){var n=z(e);if(n.position==="fixed")return null}var o=Pe(e);for(Ve(o)&&(o=o.host);L(o)&&["html","body"].indexOf(F(o))<0;){var a=z(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function de(e){for(var t=T(e),r=ut(e);r&&Ir(r)&&z(r).position==="static";)r=ut(r);return r&&(F(r)==="html"||F(r)==="body"&&z(r).position==="static")?t:r||Vr(e)||t}function Fe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e,t,r){return J(e,je(t,r))}function Hr(e,t,r){var n=ce(e,t,r);return n>r?r:n}function At(){return{top:0,right:0,bottom:0,left:0}}function Bt(e){return Object.assign({},At(),e)}function Wt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Fr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Bt(typeof t!="number"?t:Wt(t,pe))};function zr(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,i=H(r.placement),s=Fe(i),u=[B,N].indexOf(i)>=0,l=u?"height":"width";if(!(!a||!c)){var f=Fr(o.padding,r),m=He(a),d=s==="y"?A:B,y=s==="y"?M:N,h=r.rects.reference[l]+r.rects.reference[s]-c[s]-r.rects.popper[l],v=c[s]-r.rects.reference[s],b=de(a),O=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,k=h/2-v/2,g=f[d],x=O-m[l]-f[y],w=O/2-m[l]/2+k,j=ce(g,w,x),$=s;r.modifiersData[n]=(t={},t[$]=j,t.centerOffset=j-w,t)}}function qr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Dt(t.elements.popper,o)&&(t.elements.arrow=o))}const Ur={name:"arrow",enabled:!0,phase:"main",fn:zr,effect:qr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var Xr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Yr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:re(r*o)/o||0,y:re(n*o)/o||0}}function ft(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,c=e.offsets,i=e.position,s=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,f=e.isFixed,m=c.x,d=m===void 0?0:m,y=c.y,h=y===void 0?0:y,v=typeof l=="function"?l({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var b=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),k=B,g=A,x=window;if(u){var w=de(r),j="clientHeight",$="clientWidth";if(w===T(r)&&(w=U(r),z(w).position!=="static"&&i==="absolute"&&(j="scrollHeight",$="scrollWidth")),w=w,o===A||(o===B||o===N)&&a===ue){g=M;var R=f&&w===x&&x.visualViewport?x.visualViewport.height:w[j];h-=R-n.height,h*=s?1:-1}if(o===B||(o===A||o===M)&&a===ue){k=N;var C=f&&w===x&&x.visualViewport?x.visualViewport.width:w[$];d-=C-n.width,d*=s?1:-1}}var S=Object.assign({position:i},u&&Xr),I=l===!0?Yr({x:d,y:h},T(r)):{x:d,y:h};if(d=I.x,h=I.y,s){var D;return Object.assign({},S,(D={},D[g]=O?"0":"",D[k]=b?"0":"",D.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",D))}return Object.assign({},S,(t={},t[g]=O?h+"px":"",t[k]=b?d+"px":"",t.transform="",t))}function _r(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,c=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:H(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ft(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ft(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Gr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_r,data:{}};var we={passive:!0};function Kr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,c=n.resize,i=c===void 0?!0:c,s=T(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(l){l.addEventListener("scroll",r.update,we)}),i&&s.addEventListener("resize",r.update,we),function(){a&&u.forEach(function(l){l.removeEventListener("scroll",r.update,we)}),i&&s.removeEventListener("resize",r.update,we)}}const Zr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Kr,data:{}};var Jr={left:"right",right:"left",bottom:"top",top:"bottom"};function be(e){return e.replace(/left|right|bottom|top/g,function(t){return Jr[t]})}var Qr={start:"end",end:"start"};function pt(e){return e.replace(/start|end/g,function(t){return Qr[t]})}function ze(e){var t=T(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function qe(e){return ne(U(e)).left+ze(e).scrollLeft}function en(e,t){var r=T(e),n=U(e),o=r.visualViewport,a=n.clientWidth,c=n.clientHeight,i=0,s=0;if(o){a=o.width,c=o.height;var u=St();(u||!u&&t==="fixed")&&(i=o.offsetLeft,s=o.offsetTop)}return{width:a,height:c,x:i+qe(e),y:s}}function tn(e){var t,r=U(e),n=ze(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=J(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=J(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-n.scrollLeft+qe(e),s=-n.scrollTop;return z(o||r).direction==="rtl"&&(i+=J(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:i,y:s}}function Ue(e){var t=z(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Tt(e){return["html","body","#document"].indexOf(F(e))>=0?e.ownerDocument.body:L(e)&&Ue(e)?e:Tt(Pe(e))}function le(e,t){var r;t===void 0&&(t=[]);var n=Tt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=T(n),c=o?[a].concat(a.visualViewport||[],Ue(n)?n:[]):n,i=t.concat(c);return o?i:i.concat(le(Pe(c)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function rn(e,t){var r=ne(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function dt(e,t,r){return t===Rt?Te(en(e,r)):Q(t)?rn(t,r):Te(tn(U(e)))}function nn(e){var t=le(Pe(e)),r=["absolute","fixed"].indexOf(z(e).position)>=0,n=r&&L(e)?de(e):e;return Q(n)?t.filter(function(o){return Q(o)&&Dt(o,n)&&F(o)!=="body"}):[]}function on(e,t,r,n){var o=t==="clippingParents"?nn(e):[].concat(t),a=[].concat(o,[r]),c=a[0],i=a.reduce(function(s,u){var l=dt(e,u,n);return s.top=J(l.top,s.top),s.right=je(l.right,s.right),s.bottom=je(l.bottom,s.bottom),s.left=J(l.left,s.left),s},dt(e,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Lt(e){var t=e.reference,r=e.element,n=e.placement,o=n?H(n):null,a=n?oe(n):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(o){case A:s={x:c,y:t.y-r.height};break;case M:s={x:c,y:t.y+t.height};break;case N:s={x:t.x+t.width,y:i};break;case B:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var u=o?Fe(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(a){case te:s[u]=s[u]-(t[l]/2-r[l]/2);break;case ue:s[u]=s[u]+(t[l]/2-r[l]/2);break}}return s}function fe(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,c=a===void 0?e.strategy:a,i=r.boundary,s=i===void 0?kr:i,u=r.rootBoundary,l=u===void 0?Rt:u,f=r.elementContext,m=f===void 0?se:f,d=r.altBoundary,y=d===void 0?!1:d,h=r.padding,v=h===void 0?0:h,b=Bt(typeof v!="number"?v:Wt(v,pe)),O=m===se?Er:se,k=e.rects.popper,g=e.elements[y?O:m],x=on(Q(g)?g:g.contextElement||U(e.elements.popper),s,l,c),w=ne(e.elements.reference),j=Lt({reference:w,element:k,strategy:"absolute",placement:o}),$=Te(Object.assign({},k,j)),R=m===se?$:w,C={top:x.top-R.top+b.top,bottom:R.bottom-x.bottom+b.bottom,left:x.left-R.left+b.left,right:R.right-x.right+b.right},S=e.modifiersData.offset;if(m===se&&S){var I=S[o];Object.keys(C).forEach(function(D){var X=[N,M].indexOf(D)>=0?1:-1,Y=[A,M].indexOf(D)>=0?"y":"x";C[D]+=I[Y]*X})}return C}function an(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?$t:s,l=oe(n),f=l?i?lt:lt.filter(function(y){return oe(y)===l}):pe,m=f.filter(function(y){return u.indexOf(y)>=0});m.length===0&&(m=f);var d=m.reduce(function(y,h){return y[h]=fe(e,{placement:h,boundary:o,rootBoundary:a,padding:c})[H(h)],y},{});return Object.keys(d).sort(function(y,h){return d[y]-d[h]})}function sn(e){if(H(e)===Ie)return[];var t=be(e);return[pt(e),t,pt(t)]}function cn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,u=r.padding,l=r.boundary,f=r.rootBoundary,m=r.altBoundary,d=r.flipVariations,y=d===void 0?!0:d,h=r.allowedAutoPlacements,v=t.options.placement,b=H(v),O=b===v,k=s||(O||!y?[be(v)]:sn(v)),g=[v].concat(k).reduce(function(ee,q){return ee.concat(H(q)===Ie?an(t,{placement:q,boundary:l,rootBoundary:f,padding:u,flipVariations:y,allowedAutoPlacements:h}):q)},[]),x=t.rects.reference,w=t.rects.popper,j=new Map,$=!0,R=g[0],C=0;C<g.length;C++){var S=g[C],I=H(S),D=oe(S)===te,X=[A,M].indexOf(I)>=0,Y=X?"width":"height",W=fe(t,{placement:S,boundary:l,rootBoundary:f,altBoundary:m,padding:u}),V=X?D?N:B:D?M:A;x[Y]>w[Y]&&(V=be(V));var ve=be(V),_=[];if(a&&_.push(W[I]<=0),i&&_.push(W[V]<=0,W[ve]<=0),_.every(function(ee){return ee})){R=S,$=!1;break}j.set(S,_)}if($)for(var he=y?3:1,Ce=function(q){var ie=g.find(function(ge){var G=j.get(ge);if(G)return G.slice(0,q).every(function(Re){return Re})});if(ie)return R=ie,"break"},ae=he;ae>0;ae--){var me=Ce(ae);if(me==="break")break}t.placement!==R&&(t.modifiersData[n]._skip=!0,t.placement=R,t.reset=!0)}}const ln={name:"flip",enabled:!0,phase:"main",fn:cn,requiresIfExists:["offset"],data:{_skip:!1}};function vt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ht(e){return[A,N,M,B].some(function(t){return e[t]>=0})}function un(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,c=fe(t,{elementContext:"reference"}),i=fe(t,{altBoundary:!0}),s=vt(c,n),u=vt(i,o,a),l=ht(s),f=ht(u);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}const fn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:un};function pn(e,t,r){var n=H(e),o=[B,A].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],i=a[1];return c=c||0,i=(i||0)*o,[B,N].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function dn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,c=$t.reduce(function(l,f){return l[f]=pn(f,t.rects,a),l},{}),i=c[t.placement],s=i.x,u=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=c}const vn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:dn};function hn(e){var t=e.state,r=e.name;t.modifiersData[r]=Lt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const mn={name:"popperOffsets",enabled:!0,phase:"read",fn:hn,data:{}};function gn(e){return e==="x"?"y":"x"}function yn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,u=r.rootBoundary,l=r.altBoundary,f=r.padding,m=r.tether,d=m===void 0?!0:m,y=r.tetherOffset,h=y===void 0?0:y,v=fe(t,{boundary:s,rootBoundary:u,padding:f,altBoundary:l}),b=H(t.placement),O=oe(t.placement),k=!O,g=Fe(b),x=gn(g),w=t.modifiersData.popperOffsets,j=t.rects.reference,$=t.rects.popper,R=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,C=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(w){if(a){var D,X=g==="y"?A:B,Y=g==="y"?M:N,W=g==="y"?"height":"width",V=w[g],ve=V+v[X],_=V-v[Y],he=d?-$[W]/2:0,Ce=O===te?j[W]:$[W],ae=O===te?-$[W]:-j[W],me=t.elements.arrow,ee=d&&me?He(me):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:At(),ie=q[X],ge=q[Y],G=ce(0,j[W],ee[W]),Re=k?j[W]/2-he-G-ie-C.mainAxis:Ce-G-ie-C.mainAxis,Ht=k?-j[W]/2+he+G+ge+C.mainAxis:ae+G+ge+C.mainAxis,$e=t.elements.arrow&&de(t.elements.arrow),Ft=$e?g==="y"?$e.clientTop||0:$e.clientLeft||0:0,Xe=(D=S==null?void 0:S[g])!=null?D:0,zt=V+Re-Xe-Ft,qt=V+Ht-Xe,Ye=ce(d?je(ve,zt):ve,V,d?J(_,qt):_);w[g]=Ye,I[g]=Ye-V}if(i){var _e,Ut=g==="x"?A:B,Xt=g==="x"?M:N,K=w[x],ye=x==="y"?"height":"width",Ge=K+v[Ut],Ke=K-v[Xt],Se=[A,B].indexOf(b)!==-1,Ze=(_e=S==null?void 0:S[x])!=null?_e:0,Je=Se?Ge:K-j[ye]-$[ye]-Ze+C.altAxis,Qe=Se?K+j[ye]+$[ye]-Ze-C.altAxis:Ke,et=d&&Se?Hr(Je,K,Qe):ce(d?Je:Ge,K,d?Qe:Ke);w[x]=et,I[x]=et-K}t.modifiersData[n]=I}}const xn={name:"preventOverflow",enabled:!0,phase:"main",fn:yn,requiresIfExists:["offset"]};function wn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function bn(e){return e===T(e)||!L(e)?ze(e):wn(e)}function On(e){var t=e.getBoundingClientRect(),r=re(t.width)/e.offsetWidth||1,n=re(t.height)/e.offsetHeight||1;return r!==1||n!==1}function jn(e,t,r){r===void 0&&(r=!1);var n=L(t),o=L(t)&&On(t),a=U(t),c=ne(e,o,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((F(t)!=="body"||Ue(a))&&(i=bn(t)),L(t)?(s=ne(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=qe(a))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function kn(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&o(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function En(e){var t=kn(e);return Tr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Pn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Cn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var mt={placement:"bottom",modifiers:[],strategy:"absolute"};function gt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Rn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?mt:o;return function(i,s,u){u===void 0&&(u=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},mt,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},f=[],m=!1,d={state:l,setOptions:function(b){var O=typeof b=="function"?b(l.options):b;h(),l.options=Object.assign({},a,l.options,O),l.scrollParents={reference:Q(i)?le(i):i.contextElement?le(i.contextElement):[],popper:le(s)};var k=En(Cn([].concat(n,l.options.modifiers)));return l.orderedModifiers=k.filter(function(g){return g.enabled}),y(),d.update()},forceUpdate:function(){if(!m){var b=l.elements,O=b.reference,k=b.popper;if(gt(O,k)){l.rects={reference:jn(O,de(k),l.options.strategy==="fixed"),popper:He(k)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(C){return l.modifiersData[C.name]=Object.assign({},C.data)});for(var g=0;g<l.orderedModifiers.length;g++){if(l.reset===!0){l.reset=!1,g=-1;continue}var x=l.orderedModifiers[g],w=x.fn,j=x.options,$=j===void 0?{}:j,R=x.name;typeof w=="function"&&(l=w({state:l,options:$,name:R,instance:d})||l)}}}},update:Pn(function(){return new Promise(function(v){d.forceUpdate(),v(l)})}),destroy:function(){h(),m=!0}};if(!gt(i,s))return d;d.setOptions(u).then(function(v){!m&&u.onFirstUpdate&&u.onFirstUpdate(v)});function y(){l.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,k=O===void 0?{}:O,g=v.effect;if(typeof g=="function"){var x=g({state:l,name:b,instance:d,options:k}),w=function(){};f.push(x||w)}})}function h(){f.forEach(function(v){return v()}),f=[]}return d}}var $n=[Zr,mn,Gr,Nr,vn,ln,xn,Ur,fn],Sn=Rn({defaultModifiers:$n}),Dn=typeof Element<"u",An=typeof Map=="function",Bn=typeof Set=="function",Wn=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Oe(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!Oe(e[n],t[n]))return!1;return!0}var a;if(An&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(n=a.next()).done;)if(!t.has(n.value[0]))return!1;for(a=e.entries();!(n=a.next()).done;)if(!Oe(n.value[1],t.get(n.value[0])))return!1;return!0}if(Bn&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(n=a.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Wn&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(Dn&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((o[n]==="_owner"||o[n]==="__v"||o[n]==="__o")&&e.$$typeof)&&!Oe(e[o[n]],t[o[n]]))return!1;return!0}return e!==e&&t!==t}var Tn=function(t,r){try{return Oe(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Ln=Yt(Tn);var Mn=[],Nn=function(t,r,n){n===void 0&&(n={});var o=E.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Mn},c=E.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=c[0],s=c[1],u=E.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(d){var y=d.state,h=Object.keys(y.elements);_t.flushSync(function(){s({styles:st(h.map(function(v){return[v,y.styles[v]||{}]})),attributes:st(h.map(function(v){return[v,y.attributes[v]]}))})})},requires:["computeStyles"]}},[]),l=E.useMemo(function(){var m={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[u,{name:"applyStyles",enabled:!1}])};return Ln(o.current,m)?o.current||m:(o.current=m,m)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,u]),f=E.useRef();return ct(function(){f.current&&f.current.setOptions(l)},[l]),ct(function(){if(!(t==null||r==null)){var m=n.createPopper||Sn,d=m(t,r,l);return f.current=d,function(){d.destroy(),f.current=null}}},[t,r,n.createPopper]),{state:f.current?f.current.state:null,styles:i.styles,attributes:i.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}},Mt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yt=Z.createContext&&Z.createContext(Mt),In=["attr","size","title"];function Vn(e,t){if(e==null)return{};var r=Hn(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Hn(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ke.apply(this,arguments)}function xt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?xt(Object(r),!0).forEach(function(n){Fn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Fn(e,t,r){return t=zn(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function zn(e){var t=qn(e,"string");return typeof t=="symbol"?t:t+""}function qn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nt(e){return e&&e.map((t,r)=>Z.createElement(t.tag,Ee({key:r},t.attr),Nt(t.child)))}function It(e){return t=>Z.createElement(Un,ke({attr:Ee({},e.attr)},t),Nt(e.child))}function Un(e){var t=r=>{var{attr:n,size:o,title:a}=e,c=Vn(e,In),i=o||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),Z.createElement("svg",ke({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:s,style:Ee(Ee({color:e.color||r.color},r.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&Z.createElement("title",null,a),e.children)};return yt!==void 0?Z.createElement(yt.Consumer,null,r=>t(r)):t(Mt)}function Xn(e){return It({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"},child:[]}]})(e)}function Yn(e){return It({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(e)}const _n=P.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: ${e=>e.theme.colors.linkColor};
  transition: color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};
  }
`,Gn=P.div`
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
`,Kn=P.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Le=P(Xn)`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.linkColor};
  transition: stroke 250ms ${e=>e.theme.transition};
`,Me=P(Yn)`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.linkColor};
  transition: stroke 250ms ${e=>e.theme.transition};
`,wt=P.button`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover
    ${Me},
    &:focus
    ${Me},
    &:hover
    ${Le},
    &:focus
    ${Le} {
    stroke: ${e=>e.theme.colors.mainGreen};
  }
`,bt=P.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ot=P.input`
  width: 100%;
  height: 48px;
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
    height: 56px;
    padding: 16px 18px;
    font-weight: 400;
    border-color: ${e=>e.theme.colors.inputTabletBorder};
  }

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.mainGreenHover};
  }
`,Zn=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    align-items: flex-start;
  }
`,Jn=P.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`,Vt=P.button`
  max-width: 158px;
  width: 100%;
  height: 48px;
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
    height: 56px;
    font-size: 18px;
    line-height: 1.56;
    padding: 14px;
    min-width: 245px;
  }
`,Qn=P(Vt)`
  max-width: 145px;
  color: ${e=>e.theme.colors.white};
  background-color: transparent;
  border-color: ${e=>e.theme.colors.btnBorder};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.white};
  }
`,jt=P.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,kt=P.svg`
  width: 28px;
  height: 28px;
`,Et=P.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Pt=P.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 32px;
  }
`,Ct=P.span`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${e=>e.theme.colors.formTextColor};
`,eo=({closeModal:e,word:t})=>{var s,u;const r=Ne(),{register:n,handleSubmit:o,formState:{errors:a,dirtyFields:c}}=ur({mode:"onChange",resolver:fr(pr),defaultValues:{ua:t.ua,en:t.en}}),i=l=>{const f={...l,category:t.category};t.isIrregular!==void 0&&(f.isIrregular=t.isIrregular),console.log(f),r(Gt({id:t._id,data:f})),e()};return p.jsxs("form",{onSubmit:o(i),children:[p.jsxs(Zn,{children:[p.jsxs(Pt,{children:[p.jsxs(Et,{children:[p.jsx(kt,{children:p.jsx("use",{href:`${tt}#ukraine`})}),p.jsx(jt,{children:"Ukrainian"})]}),p.jsx(Ot,{...n("ua"),type:"text"}),(c.ua||a.ua)&&p.jsx(Ct,{children:(s=a.ua)==null?void 0:s.message})]}),p.jsxs(Pt,{children:[p.jsxs(Et,{children:[p.jsx(kt,{children:p.jsx("use",{href:`${tt}#uk`})}),p.jsx(jt,{children:"English"})]}),p.jsx(Ot,{...n("en"),type:"text"}),(c.en||a.en)&&p.jsx(Ct,{children:(u=a.en)==null?void 0:u.message})]})]}),p.jsxs(Jn,{children:[p.jsx(Vt,{type:"submit",children:"Save"}),p.jsx(Qn,{type:"button",onClick:()=>e(),children:"Cancel"})]})]})},to=({id:e,word:t})=>{const[r,n]=E.useState(!1),[o,a]=E.useState(null),[c,i]=E.useState(null),{styles:s,attributes:u}=Nn(o,c,{placement:"bottom"}),l=Ne(),{isModalOpen:f,openModal:m,closeModal:d}=Kt(),y=()=>{n(!r)},h=E.useCallback(O=>{c&&!c.contains(O.target)&&o&&!o.contains(O.target)&&n(!1)},[c,o]),v=E.useCallback(O=>{O.key==="Escape"&&n(!1)},[]);E.useEffect(()=>(r?(document.addEventListener("mousedown",h),document.addEventListener("keydown",v)):(document.removeEventListener("mousedown",h),document.removeEventListener("keydown",v)),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",v)}),[r,h,v]);const b=()=>{n(!1),m()};return p.jsxs(p.Fragment,{children:[p.jsx(_n,{type:"button",ref:a,onClick:y,children:"..."}),r&&p.jsx(Gn,{ref:i,style:s.popper,...u.popper,children:p.jsxs(Kn,{children:[p.jsx("li",{children:p.jsxs(wt,{type:"button",onClick:b,children:[p.jsx(Le,{}),p.jsx(bt,{children:"Edit"})]})}),p.jsx("li",{children:p.jsxs(wt,{type:"button",onClick:()=>l(Zt(e)),children:[p.jsx(Me,{}),p.jsx(bt,{children:"Delete"})]})})]})}),p.jsx(Jt,{isModalOpen:f,closeModal:d,className:"edit",children:p.jsx(eo,{closeModal:d,word:t})})]})},ao=()=>{const e=Ne(),t=rt(ar),r=rt(ir),n=t.length===0&&!r.keyword&&!r.category?"dictionary":"",o=r.keyword||r.category;E.useEffect(()=>{e(Qt()),e(nt()),e(er()),e(tr())},[e]);const a=[{Header:()=>p.jsx(ot,{text:"word"}),accessor:"en"},{Header:()=>p.jsx(ot,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{Header:"Progress",accessor:"progress",Cell:({row:c})=>p.jsx(jr,{progress:c.original.progress})},{accessor:"_id",Cell:({row:c})=>p.jsx(to,{id:c.original._id,word:c.original})}];return p.jsxs(p.Fragment,{children:[p.jsx(sr,{fetch:nt,setCategory:rr,setIsIrregular:nr,setKeyword:or,className:n}),t.length!==0?p.jsx(cr,{columnsData:a,tableData:t,className:"dictionary"}):p.jsx(p.Fragment,{children:p.jsx(lr,{title:o?"There are no words found in your dictionary for this category.":"You don't have words in your dictionary right now.",text:o?"Please create or add a word from the list of recommended words for this category to start learning.":"Please create or add a word to start learning. We want to improve your vocabulary and expand your knowledge, so please share words you would like to add to your learning."})})]})};export{ao as default};
