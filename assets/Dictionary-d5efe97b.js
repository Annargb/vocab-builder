import{b as D,g as Nt,c as zt,R as Z,a as C,u as We,j as d,i as Ze,e as Vt,f as qt,h as Ut,C as Yt,k as Je,m as Xt,n as Qe,o as Gt,p as _t,s as Kt,q as Zt,t as Jt}from"./index-3846d3b5.js";import{s as Qt,a as er,D as tr,W as rr,T as et}from"./WordsTable-710574a7.js";import{N as nr}from"./NotFoundBlock-72c9ead1.js";import{P as or}from"./Progress-d4c46e1e.js";import{u as ar,o as ir,e as sr}from"./schemas-f11a8c98.js";var tt=function(t){return t.reduce(function(r,n){var o=n[0],a=n[1];return r[o]=a,r},{})},rt=typeof window<"u"&&window.document&&window.document.createElement?D.useLayoutEffect:D.useEffect,B="top",M="bottom",F="right",R="left",Te="auto",pe=[B,M,F,R],te="start",fe="end",cr="clippingParents",Ot="viewport",se="popper",lr="reference",nt=pe.reduce(function(e,t){return e.concat([t+"-"+te,t+"-"+fe])},[]),jt=[].concat(pe,[Te]).reduce(function(e,t){return e.concat([t,t+"-"+te,t+"-"+fe])},[]),fr="beforeRead",ur="read",pr="afterRead",dr="beforeMain",vr="main",hr="afterMain",mr="beforeWrite",gr="write",yr="afterWrite",xr=[fr,ur,pr,dr,vr,hr,mr,gr,yr];function z(e){return e?(e.nodeName||"").toLowerCase():null}function T(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=T(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=T(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Le(e){if(typeof ShadowRoot>"u")return!1;var t=T(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function wr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!L(a)||!z(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var s=o[c];s===!1?a.removeAttribute(c):a.setAttribute(c,s===!0?"":s)}))})}function br(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=c.reduce(function(i,f){return i[f]="",i},{});!L(o)||!z(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(i){o.removeAttribute(i)}))})}}const Or={name:"applyStyles",enabled:!0,phase:"write",fn:wr,effect:br,requires:["computeStyles"]};function N(e){return e.split("-")[0]}var J=Math.max,Oe=Math.min,re=Math.round;function Ae(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Et(){return!/^((?!chrome|android).)*safari/i.test(Ae())}function ne(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&L(e)&&(o=e.offsetWidth>0&&re(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&re(n.height)/e.offsetHeight||1);var c=Q(e)?T(e):window,s=c.visualViewport,i=!Et()&&r,f=(n.left+(i&&s?s.offsetLeft:0))/o,l=(n.top+(i&&s?s.offsetTop:0))/a,p=n.width/o,m=n.height/a;return{width:p,height:m,top:l,right:f+p,bottom:l+m,left:f,x:f,y:l}}function Me(e){var t=ne(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Pt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Le(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(e){return T(e).getComputedStyle(e)}function jr(e){return["table","td","th"].indexOf(z(e))>=0}function U(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function Pe(e){return z(e)==="html"?e:e.assignedSlot||e.parentNode||(Le(e)?e.host:null)||U(e)}function ot(e){return!L(e)||V(e).position==="fixed"?null:e.offsetParent}function Er(e){var t=/firefox/i.test(Ae()),r=/Trident/i.test(Ae());if(r&&L(e)){var n=V(e);if(n.position==="fixed")return null}var o=Pe(e);for(Le(o)&&(o=o.host);L(o)&&["html","body"].indexOf(z(o))<0;){var a=V(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function de(e){for(var t=T(e),r=ot(e);r&&jr(r)&&V(r).position==="static";)r=ot(r);return r&&(z(r)==="html"||z(r)==="body"&&V(r).position==="static")?t:r||Er(e)||t}function Fe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e,t,r){return J(e,Oe(t,r))}function Pr(e,t,r){var n=ce(e,t,r);return n>r?r:n}function $t(){return{top:0,right:0,bottom:0,left:0}}function kt(e){return Object.assign({},$t(),e)}function Ct(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var $r=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,kt(typeof t!="number"?t:Ct(t,pe))};function kr(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,s=N(r.placement),i=Fe(s),f=[R,F].indexOf(s)>=0,l=f?"height":"width";if(!(!a||!c)){var p=$r(o.padding,r),m=Me(a),u=i==="y"?B:R,y=i==="y"?M:F,h=r.rects.reference[l]+r.rects.reference[i]-c[i]-r.rects.popper[l],v=c[i]-r.rects.reference[i],b=de(a),O=b?i==="y"?b.clientHeight||0:b.clientWidth||0:0,E=h/2-v/2,g=p[u],x=O-m[l]-p[y],w=O/2-m[l]/2+E,j=ce(g,w,x),k=i;r.modifiersData[n]=(t={},t[k]=j,t.centerOffset=j-w,t)}}function Cr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Pt(t.elements.popper,o)&&(t.elements.arrow=o))}const Sr={name:"arrow",enabled:!0,phase:"main",fn:kr,effect:Cr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var Ar={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Dr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:re(r*o)/o||0,y:re(n*o)/o||0}}function at(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,c=e.offsets,s=e.position,i=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,p=e.isFixed,m=c.x,u=m===void 0?0:m,y=c.y,h=y===void 0?0:y,v=typeof l=="function"?l({x:u,y:h}):{x:u,y:h};u=v.x,h=v.y;var b=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),E=R,g=B,x=window;if(f){var w=de(r),j="clientHeight",k="clientWidth";if(w===T(r)&&(w=U(r),V(w).position!=="static"&&s==="absolute"&&(j="scrollHeight",k="scrollWidth")),w=w,o===B||(o===R||o===F)&&a===fe){g=M;var $=p&&w===x&&x.visualViewport?x.visualViewport.height:w[j];h-=$-n.height,h*=i?1:-1}if(o===R||(o===B||o===M)&&a===fe){E=F;var P=p&&w===x&&x.visualViewport?x.visualViewport.width:w[k];u-=P-n.width,u*=i?1:-1}}var S=Object.assign({position:s},f&&Ar),I=l===!0?Dr({x:u,y:h},T(r)):{x:u,y:h};if(u=I.x,h=I.y,i){var A;return Object.assign({},S,(A={},A[g]=O?"0":"",A[E]=b?"0":"",A.transform=(x.devicePixelRatio||1)<=1?"translate("+u+"px, "+h+"px)":"translate3d("+u+"px, "+h+"px, 0)",A))}return Object.assign({},S,(t={},t[g]=O?h+"px":"",t[E]=b?u+"px":"",t.transform="",t))}function Br(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,c=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,f={placement:N(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,at(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,at(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Rr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Br,data:{}};var xe={passive:!0};function Wr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,c=n.resize,s=c===void 0?!0:c,i=T(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach(function(l){l.addEventListener("scroll",r.update,xe)}),s&&i.addEventListener("resize",r.update,xe),function(){a&&f.forEach(function(l){l.removeEventListener("scroll",r.update,xe)}),s&&i.removeEventListener("resize",r.update,xe)}}const Tr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Wr,data:{}};var Lr={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,function(t){return Lr[t]})}var Mr={start:"end",end:"start"};function it(e){return e.replace(/start|end/g,function(t){return Mr[t]})}function Ie(e){var t=T(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function He(e){return ne(U(e)).left+Ie(e).scrollLeft}function Fr(e,t){var r=T(e),n=U(e),o=r.visualViewport,a=n.clientWidth,c=n.clientHeight,s=0,i=0;if(o){a=o.width,c=o.height;var f=Et();(f||!f&&t==="fixed")&&(s=o.offsetLeft,i=o.offsetTop)}return{width:a,height:c,x:s+He(e),y:i}}function Ir(e){var t,r=U(e),n=Ie(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=J(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=J(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+He(e),i=-n.scrollTop;return V(o||r).direction==="rtl"&&(s+=J(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:s,y:i}}function Ne(e){var t=V(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function St(e){return["html","body","#document"].indexOf(z(e))>=0?e.ownerDocument.body:L(e)&&Ne(e)?e:St(Pe(e))}function le(e,t){var r;t===void 0&&(t=[]);var n=St(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=T(n),c=o?[a].concat(a.visualViewport||[],Ne(n)?n:[]):n,s=t.concat(c);return o?s:s.concat(le(Pe(c)))}function De(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Hr(e,t){var r=ne(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function st(e,t,r){return t===Ot?De(Fr(e,r)):Q(t)?Hr(t,r):De(Ir(U(e)))}function Nr(e){var t=le(Pe(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,n=r&&L(e)?de(e):e;return Q(n)?t.filter(function(o){return Q(o)&&Pt(o,n)&&z(o)!=="body"}):[]}function zr(e,t,r,n){var o=t==="clippingParents"?Nr(e):[].concat(t),a=[].concat(o,[r]),c=a[0],s=a.reduce(function(i,f){var l=st(e,f,n);return i.top=J(l.top,i.top),i.right=Oe(l.right,i.right),i.bottom=Oe(l.bottom,i.bottom),i.left=J(l.left,i.left),i},st(e,c,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function At(e){var t=e.reference,r=e.element,n=e.placement,o=n?N(n):null,a=n?oe(n):null,c=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(o){case B:i={x:c,y:t.y-r.height};break;case M:i={x:c,y:t.y+t.height};break;case F:i={x:t.x+t.width,y:s};break;case R:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var f=o?Fe(o):null;if(f!=null){var l=f==="y"?"height":"width";switch(a){case te:i[f]=i[f]-(t[l]/2-r[l]/2);break;case fe:i[f]=i[f]+(t[l]/2-r[l]/2);break}}return i}function ue(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,c=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?cr:s,f=r.rootBoundary,l=f===void 0?Ot:f,p=r.elementContext,m=p===void 0?se:p,u=r.altBoundary,y=u===void 0?!1:u,h=r.padding,v=h===void 0?0:h,b=kt(typeof v!="number"?v:Ct(v,pe)),O=m===se?lr:se,E=e.rects.popper,g=e.elements[y?O:m],x=zr(Q(g)?g:g.contextElement||U(e.elements.popper),i,l,c),w=ne(e.elements.reference),j=At({reference:w,element:E,strategy:"absolute",placement:o}),k=De(Object.assign({},E,j)),$=m===se?k:w,P={top:x.top-$.top+b.top,bottom:$.bottom-x.bottom+b.bottom,left:x.left-$.left+b.left,right:$.right-x.right+b.right},S=e.modifiersData.offset;if(m===se&&S){var I=S[o];Object.keys(P).forEach(function(A){var Y=[F,M].indexOf(A)>=0?1:-1,X=[B,M].indexOf(A)>=0?"y":"x";P[A]+=I[X]*Y})}return P}function Vr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,c=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,f=i===void 0?jt:i,l=oe(n),p=l?s?nt:nt.filter(function(y){return oe(y)===l}):pe,m=p.filter(function(y){return f.indexOf(y)>=0});m.length===0&&(m=p);var u=m.reduce(function(y,h){return y[h]=ue(e,{placement:h,boundary:o,rootBoundary:a,padding:c})[N(h)],y},{});return Object.keys(u).sort(function(y,h){return u[y]-u[h]})}function qr(e){if(N(e)===Te)return[];var t=we(e);return[it(e),t,it(t)]}function Ur(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,s=c===void 0?!0:c,i=r.fallbackPlacements,f=r.padding,l=r.boundary,p=r.rootBoundary,m=r.altBoundary,u=r.flipVariations,y=u===void 0?!0:u,h=r.allowedAutoPlacements,v=t.options.placement,b=N(v),O=b===v,E=i||(O||!y?[we(v)]:qr(v)),g=[v].concat(E).reduce(function(ee,q){return ee.concat(N(q)===Te?Vr(t,{placement:q,boundary:l,rootBoundary:p,padding:f,flipVariations:y,allowedAutoPlacements:h}):q)},[]),x=t.rects.reference,w=t.rects.popper,j=new Map,k=!0,$=g[0],P=0;P<g.length;P++){var S=g[P],I=N(S),A=oe(S)===te,Y=[B,M].indexOf(I)>=0,X=Y?"width":"height",W=ue(t,{placement:S,boundary:l,rootBoundary:p,altBoundary:m,padding:f}),H=Y?A?F:R:A?M:B;x[X]>w[X]&&(H=we(H));var ve=we(H),G=[];if(a&&G.push(W[I]<=0),s&&G.push(W[H]<=0,W[ve]<=0),G.every(function(ee){return ee})){$=S,k=!1;break}j.set(S,G)}if(k)for(var he=y?3:1,$e=function(q){var ie=g.find(function(ge){var _=j.get(ge);if(_)return _.slice(0,q).every(function(ke){return ke})});if(ie)return $=ie,"break"},ae=he;ae>0;ae--){var me=$e(ae);if(me==="break")break}t.placement!==$&&(t.modifiersData[n]._skip=!0,t.placement=$,t.reset=!0)}}const Yr={name:"flip",enabled:!0,phase:"main",fn:Ur,requiresIfExists:["offset"],data:{_skip:!1}};function ct(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function lt(e){return[B,F,M,R].some(function(t){return e[t]>=0})}function Xr(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,c=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),i=ct(c,n),f=ct(s,o,a),l=lt(i),p=lt(f);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":p})}const Gr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Xr};function _r(e,t,r){var n=N(e),o=[R,B].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],s=a[1];return c=c||0,s=(s||0)*o,[R,F].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function Kr(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,c=jt.reduce(function(l,p){return l[p]=_r(p,t.rects,a),l},{}),s=c[t.placement],i=s.x,f=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=c}const Zr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Kr};function Jr(e){var t=e.state,r=e.name;t.modifiersData[r]=At({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Qr={name:"popperOffsets",enabled:!0,phase:"read",fn:Jr,data:{}};function en(e){return e==="x"?"y":"x"}function tn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,s=c===void 0?!1:c,i=r.boundary,f=r.rootBoundary,l=r.altBoundary,p=r.padding,m=r.tether,u=m===void 0?!0:m,y=r.tetherOffset,h=y===void 0?0:y,v=ue(t,{boundary:i,rootBoundary:f,padding:p,altBoundary:l}),b=N(t.placement),O=oe(t.placement),E=!O,g=Fe(b),x=en(g),w=t.modifiersData.popperOffsets,j=t.rects.reference,k=t.rects.popper,$=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,P=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(w){if(a){var A,Y=g==="y"?B:R,X=g==="y"?M:F,W=g==="y"?"height":"width",H=w[g],ve=H+v[Y],G=H-v[X],he=u?-k[W]/2:0,$e=O===te?j[W]:k[W],ae=O===te?-k[W]:-j[W],me=t.elements.arrow,ee=u&&me?Me(me):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:$t(),ie=q[Y],ge=q[X],_=ce(0,j[W],ee[W]),ke=E?j[W]/2-he-_-ie-P.mainAxis:$e-_-ie-P.mainAxis,Tt=E?-j[W]/2+he+_+ge+P.mainAxis:ae+_+ge+P.mainAxis,Ce=t.elements.arrow&&de(t.elements.arrow),Lt=Ce?g==="y"?Ce.clientTop||0:Ce.clientLeft||0:0,ze=(A=S==null?void 0:S[g])!=null?A:0,Mt=H+ke-ze-Lt,Ft=H+Tt-ze,Ve=ce(u?Oe(ve,Mt):ve,H,u?J(G,Ft):G);w[g]=Ve,I[g]=Ve-H}if(s){var qe,It=g==="x"?B:R,Ht=g==="x"?M:F,K=w[x],ye=x==="y"?"height":"width",Ue=K+v[It],Ye=K-v[Ht],Se=[B,R].indexOf(b)!==-1,Xe=(qe=S==null?void 0:S[x])!=null?qe:0,Ge=Se?Ue:K-j[ye]-k[ye]-Xe+P.altAxis,_e=Se?K+j[ye]+k[ye]-Xe-P.altAxis:Ye,Ke=u&&Se?Pr(Ge,K,_e):ce(u?Ge:Ue,K,u?_e:Ye);w[x]=Ke,I[x]=Ke-K}t.modifiersData[n]=I}}const rn={name:"preventOverflow",enabled:!0,phase:"main",fn:tn,requiresIfExists:["offset"]};function nn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function on(e){return e===T(e)||!L(e)?Ie(e):nn(e)}function an(e){var t=e.getBoundingClientRect(),r=re(t.width)/e.offsetWidth||1,n=re(t.height)/e.offsetHeight||1;return r!==1||n!==1}function sn(e,t,r){r===void 0&&(r=!1);var n=L(t),o=L(t)&&an(t),a=U(t),c=ne(e,o,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((z(t)!=="body"||Ne(a))&&(s=on(t)),L(t)?(i=ne(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=He(a))),{x:c.left+s.scrollLeft-i.x,y:c.top+s.scrollTop-i.y,width:c.width,height:c.height}}function cn(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&o(i)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function ln(e){var t=cn(e);return xr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function fn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function un(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ft={placement:"bottom",modifiers:[],strategy:"absolute"};function ut(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function pn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?ft:o;return function(s,i,f){f===void 0&&(f=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ft,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},p=[],m=!1,u={state:l,setOptions:function(b){var O=typeof b=="function"?b(l.options):b;h(),l.options=Object.assign({},a,l.options,O),l.scrollParents={reference:Q(s)?le(s):s.contextElement?le(s.contextElement):[],popper:le(i)};var E=ln(un([].concat(n,l.options.modifiers)));return l.orderedModifiers=E.filter(function(g){return g.enabled}),y(),u.update()},forceUpdate:function(){if(!m){var b=l.elements,O=b.reference,E=b.popper;if(ut(O,E)){l.rects={reference:sn(O,de(E),l.options.strategy==="fixed"),popper:Me(E)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(P){return l.modifiersData[P.name]=Object.assign({},P.data)});for(var g=0;g<l.orderedModifiers.length;g++){if(l.reset===!0){l.reset=!1,g=-1;continue}var x=l.orderedModifiers[g],w=x.fn,j=x.options,k=j===void 0?{}:j,$=x.name;typeof w=="function"&&(l=w({state:l,options:k,name:$,instance:u})||l)}}}},update:fn(function(){return new Promise(function(v){u.forceUpdate(),v(l)})}),destroy:function(){h(),m=!0}};if(!ut(s,i))return u;u.setOptions(f).then(function(v){!m&&f.onFirstUpdate&&f.onFirstUpdate(v)});function y(){l.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,E=O===void 0?{}:O,g=v.effect;if(typeof g=="function"){var x=g({state:l,name:b,instance:u,options:E}),w=function(){};p.push(x||w)}})}function h(){p.forEach(function(v){return v()}),p=[]}return u}}var dn=[Tr,Qr,Rr,Or,Zr,Yr,rn,Sr,Gr],vn=pn({defaultModifiers:dn}),hn=typeof Element<"u",mn=typeof Map=="function",gn=typeof Set=="function",yn=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function be(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!be(e[n],t[n]))return!1;return!0}var a;if(mn&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(n=a.next()).done;)if(!t.has(n.value[0]))return!1;for(a=e.entries();!(n=a.next()).done;)if(!be(n.value[1],t.get(n.value[0])))return!1;return!0}if(gn&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(n=a.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(yn&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;if(hn&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((o[n]==="_owner"||o[n]==="__v"||o[n]==="__o")&&e.$$typeof)&&!be(e[o[n]],t[o[n]]))return!1;return!0}return e!==e&&t!==t}var xn=function(t,r){try{return be(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const wn=Nt(xn);var bn=[],On=function(t,r,n){n===void 0&&(n={});var o=D.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||bn},c=D.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=c[0],i=c[1],f=D.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(u){var y=u.state,h=Object.keys(y.elements);zt.flushSync(function(){i({styles:tt(h.map(function(v){return[v,y.styles[v]||{}]})),attributes:tt(h.map(function(v){return[v,y.attributes[v]]}))})})},requires:["computeStyles"]}},[]),l=D.useMemo(function(){var m={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[f,{name:"applyStyles",enabled:!1}])};return wn(o.current,m)?o.current||m:(o.current=m,m)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,f]),p=D.useRef();return rt(function(){p.current&&p.current.setOptions(l)},[l]),rt(function(){if(!(t==null||r==null)){var m=n.createPopper||vn,u=m(t,r,l);return p.current=u,function(){u.destroy(),p.current=null}}},[t,r,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}},Dt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pt=Z.createContext&&Z.createContext(Dt),jn=["attr","size","title"];function En(e,t){if(e==null)return{};var r=Pn(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Pn(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},je.apply(this,arguments)}function dt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(r),!0).forEach(function(n){$n(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $n(e,t,r){return t=kn(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function kn(e){var t=Cn(e,"string");return typeof t=="symbol"?t:t+""}function Cn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bt(e){return e&&e.map((t,r)=>Z.createElement(t.tag,Ee({key:r},t.attr),Bt(t.child)))}function Rt(e){return t=>Z.createElement(Sn,je({attr:Ee({},e.attr)},t),Bt(e.child))}function Sn(e){var t=r=>{var{attr:n,size:o,title:a}=e,c=En(e,jn),s=o||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),Z.createElement("svg",je({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:i,style:Ee(Ee({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&Z.createElement("title",null,a),e.children)};return pt!==void 0?Z.createElement(pt.Consumer,null,r=>t(r)):t(Dt)}function An(e){return Rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"},child:[]}]})(e)}function Dn(e){return Rt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(e)}const Bn=C.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: ${e=>e.theme.colors.linkColor};
  transition: color 250ms ${e=>e.theme.transition};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};
  }
`,Rn=C.div`
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
`,Wn=C.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Be=C(An)`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.linkColor};
  transition: stroke 250ms ${e=>e.theme.transition};
`,Re=C(Dn)`
  width: 16px;
  height: 16px;
  stroke: ${e=>e.theme.colors.linkColor};
  transition: stroke 250ms ${e=>e.theme.transition};
`,vt=C.button`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover
    ${Re},
    &:focus
    ${Re},
    &:hover
    ${Be},
    &:focus
    ${Be} {
    stroke: ${e=>e.theme.colors.mainGreen};
  }
`,ht=C.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,mt=C.input`
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
`,Tn=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    align-items: flex-start;
  }
`,Ln=C.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`,Wt=C.button`
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
`,Mn=C(Wt)`
  max-width: 145px;
  color: ${e=>e.theme.colors.white};
  background-color: transparent;
  border-color: ${e=>e.theme.colors.btnBorder};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.white};
  }
`,gt=C.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,yt=C.svg`
  width: 28px;
  height: 28px;
`,xt=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,wt=C.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 32px;
  }
`,bt=C.span`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${e=>e.theme.colors.formTextColor};
`,Fn=({closeModal:e,word:t})=>{var i,f;const r=We(),{register:n,handleSubmit:o,formState:{errors:a,dirtyFields:c}}=ar({mode:"onChange",resolver:ir(sr),defaultValues:{ua:t.ua,en:t.en}}),s=l=>{const p={...l,category:t.category};t.isIrregular!==void 0&&(p.isIrregular=t.isIrregular),console.log(p),r(Vt({id:t._id,data:p})),e()};return d.jsxs("form",{onSubmit:o(s),children:[d.jsxs(Tn,{children:[d.jsxs(wt,{children:[d.jsxs(xt,{children:[d.jsx(yt,{children:d.jsx("use",{href:`${Ze}#ukraine`})}),d.jsx(gt,{children:"Ukrainian"})]}),d.jsx(mt,{...n("ua"),type:"text"}),(c.ua||a.ua)&&d.jsx(bt,{children:(i=a.ua)==null?void 0:i.message})]}),d.jsxs(wt,{children:[d.jsxs(xt,{children:[d.jsx(yt,{children:d.jsx("use",{href:`${Ze}#uk`})}),d.jsx(gt,{children:"English"})]}),d.jsx(mt,{...n("en"),type:"text"}),(c.en||a.en)&&d.jsx(bt,{children:(f=a.en)==null?void 0:f.message})]})]}),d.jsxs(Ln,{children:[d.jsx(Wt,{type:"submit",children:"Save"}),d.jsx(Mn,{type:"button",onClick:()=>e(),children:"Cancel"})]})]})},In=({id:e,word:t})=>{const[r,n]=D.useState(!1),[o,a]=D.useState(null),[c,s]=D.useState(null),{styles:i,attributes:f}=On(o,c,{placement:"bottom"}),l=We(),{isModalOpen:p,openModal:m,closeModal:u}=qt(),y=()=>{n(!r)},h=D.useCallback(O=>{c&&!c.contains(O.target)&&o&&!o.contains(O.target)&&n(!1)},[c,o]),v=D.useCallback(O=>{O.key==="Escape"&&n(!1)},[]);D.useEffect(()=>(r?(document.addEventListener("mousedown",h),document.addEventListener("keydown",v)):(document.removeEventListener("mousedown",h),document.removeEventListener("keydown",v)),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",v)}),[r,h,v]);const b=()=>{n(!1),m()};return d.jsxs(d.Fragment,{children:[d.jsx(Bn,{type:"button",ref:a,onClick:y,children:"..."}),r&&d.jsx(Rn,{ref:s,style:i.popper,...f.popper,children:d.jsxs(Wn,{children:[d.jsx("li",{children:d.jsxs(vt,{type:"button",onClick:b,children:[d.jsx(Be,{}),d.jsx(ht,{children:"Edit"})]})}),d.jsx("li",{children:d.jsxs(vt,{type:"button",onClick:()=>l(Ut(e)),children:[d.jsx(Re,{}),d.jsx(ht,{children:"Delete"})]})})]})}),d.jsx(Yt,{isModalOpen:p,closeModal:u,className:"edit",children:d.jsx(Fn,{closeModal:u,word:t})})]})},Un=()=>{const e=We(),t=Je(Qt),r=Je(er),n=t.length===0&&!r.keyword&&!r.category?"dictionary":"",o=r.keyword||r.category;D.useEffect(()=>{e(Xt()),e(Qe()),e(Gt()),e(_t())},[e]);const a=[{Header:()=>d.jsx(et,{text:"word"}),accessor:"en"},{Header:()=>d.jsx(et,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{Header:"Progress",accessor:"progress",Cell:({row:c})=>d.jsx(or,{progress:c.original.progress})},{accessor:"_id",Cell:({row:c})=>d.jsx(In,{id:c.original._id,word:c.original})}];return d.jsxs(d.Fragment,{children:[d.jsx(tr,{fetch:Qe,setCategory:Kt,setIsIrregular:Zt,setKeyword:Jt,className:n}),t.length!==0?d.jsx(rr,{columnsData:a,tableData:t,className:"dictionary"}):d.jsx(d.Fragment,{children:d.jsx(nr,{title:o?"There are no words found in your dictionary for this category.":"You don't have words in your dictionary right now.",text:o?"Please create or add a word from the list of recommended words for this category to start learning.":"Please create or add a word to start learning. We want to improve your vocabulary and expand your knowledge, so please share words you would like to add to your learning."})})]})};export{Un as default};
