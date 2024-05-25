import{a as Z,b as O,B as Ka,D as _r,c as Za,k as Wt,u as Mo,j as M,i as ct,E as Ja,L as Qa,f as eu,C as tu,g as nu,F as ru}from"./index-fd174d5e.js";import{u as ou,o as iu,a as au}from"./schemas-9e7ffba8.js";const uu=Z.h2`
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
`,su=Z.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.formTextColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
  }
`,Nr=Z.input`
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
`,lu=Z.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    align-items: flex-start;
  }
`,cu=Z.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`,Bo=Z.button`
  max-width: 159px;
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
`,du=Z(Bo)`
  max-width: 145px;
  color: ${e=>e.theme.colors.white};
  background-color: transparent;
  border-color: ${e=>e.theme.colors.btnBorder};

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.white};
  }
`,Ur=Z.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,Xr=Z.svg`
  width: 28px;
  height: 28px;
`,qr=Z.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Yr=Z.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 32px;
  }
`,fu=Z.div`
  position: absolute;
  top: 56px;
  display: flex;
  align-items: center;
  gap: 16px;
`,Kr=Z.input`
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
`,Zr=Z.label`
  font-weight: 400;
  font-size: 12px;
  color: ${e=>e.theme.colors.white};
  cursor: pointer;
`,Jr=Z.div`
  display: flex;
  align-items: self-end;
  gap: 8px;
`,pu=Z.div`
  position: relative;
  margin-bottom: 62px;

  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
`,hu=Z.span`
  position: absolute;
  top: 88px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${e=>e.theme.colors.formTextColor};
`,Sn=Z.span`
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
`,mu=Z.label`
  position: relative;
`,ko=e=>e.dictionary.selectOptions,gu=e=>e.dictionary.totalCount,ef=e=>e.dictionary.dictionaryFilter,tf=e=>e.dictionary.ownWords,vu=e=>e.dictionary.error;function at(e){"@babel/helpers - typeof";return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(e)}function bu(e,t){if(at(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,t||"default");if(at(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function To(e){var t=bu(e,"string");return at(t)=="symbol"?t:t+""}function bt(e,t,o){return t=To(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Qr(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,i)}return o}function K(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Qr(Object(o),!0).forEach(function(i){bt(e,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Qr(Object(o)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))})}return e}function xu(e){if(Array.isArray(e))return e}function yu(e,t){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var i,r,c,u,g=[],f=!0,l=!1;try{if(c=(o=o.call(e)).next,t===0){if(Object(o)!==o)return;f=!1}else for(;!(f=(i=c.call(o)).done)&&(g.push(i.value),g.length!==t);f=!0);}catch(v){l=!0,r=v}finally{try{if(!f&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(l)throw r}}return g}}function Mn(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}function Vo(e,t){if(e){if(typeof e=="string")return Mn(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Mn(e,t)}}function wu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tt(e,t){return xu(e)||yu(e,t)||Vo(e,t)||wu()}function Cu(e,t){if(e==null)return{};var o={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;o[i]=e[i]}return o}function nt(e,t){if(e==null)return{};var o=Cu(e,t),i,r;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)i=c[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var Su=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Eu(e){var t=e.defaultInputValue,o=t===void 0?"":t,i=e.defaultMenuIsOpen,r=i===void 0?!1:i,c=e.defaultValue,u=c===void 0?null:c,g=e.inputValue,f=e.menuIsOpen,l=e.onChange,v=e.onInputChange,b=e.onMenuClose,P=e.onMenuOpen,I=e.value,F=nt(e,Su),w=O.useState(g!==void 0?g:o),S=tt(w,2),E=S[0],$=S[1],A=O.useState(f!==void 0?f:r),X=tt(A,2),N=X[0],ee=X[1],W=O.useState(I!==void 0?I:u),oe=tt(W,2),me=oe[0],Fe=oe[1],De=O.useCallback(function(Ie,_e){typeof l=="function"&&l(Ie,_e),Fe(Ie)},[l]),Pe=O.useCallback(function(Ie,_e){var He;typeof v=="function"&&(He=v(Ie,_e)),$(He!==void 0?He:Ie)},[v]),Ge=O.useCallback(function(){typeof P=="function"&&P(),ee(!0)},[P]),Ce=O.useCallback(function(){typeof b=="function"&&b(),ee(!1)},[b]),ye=g!==void 0?g:E,ve=f!==void 0?f:N,$e=I!==void 0?I:me;return K(K({},F),{},{inputValue:ye,menuIsOpen:ve,onChange:De,onInputChange:Pe,onMenuClose:Ce,onMenuOpen:Ge,value:$e})}function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},Q.apply(this,arguments)}function Ru(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function eo(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,To(i.key),i)}}function Fu(e,t,o){return t&&eo(e.prototype,t),o&&eo(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bn(e,t){return Bn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Bn(e,t)}function Pu(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Bn(e,t)}function Gt(e){return Gt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Gt(e)}function Lo(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Lo=function(){return!!e})()}function Iu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ou(e,t){if(t&&(at(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Iu(e)}function Au(e){var t=Lo();return function(){var i=Gt(e),r;if(t){var c=Gt(this).constructor;r=Reflect.construct(i,arguments,c)}else r=i.apply(this,arguments);return Ou(this,r)}}function Du(e){if(Array.isArray(e))return Mn(e)}function Mu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zn(e){return Du(e)||Mu(e)||Vo(e)||Bu()}function ku(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Tu(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Vu=function(){function e(o){var i=this;this._insertTag=function(r){var c;i.tags.length===0?i.insertionPoint?c=i.insertionPoint.nextSibling:i.prepend?c=i.container.firstChild:c=i.before:c=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,c),i.tags.push(r)},this.isSpeedy=o.speedy===void 0?!0:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Tu(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var c=ku(r);try{c.insertRule(i,c.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){return i.parentNode&&i.parentNode.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Be="-ms-",_t="-moz-",de="-webkit-",$o="comm",Wn="rule",Gn="decl",Lu="@import",Ho="@keyframes",$u="@layer",Hu=Math.abs,Zt=String.fromCharCode,ju=Object.assign;function zu(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function jo(e){return e.trim()}function Wu(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,o){return e.replace(t,o)}function kn(e,t){return e.indexOf(t)}function Me(e,t){return e.charCodeAt(t)|0}function xt(e,t,o){return e.slice(t,o)}function Ze(e){return e.length}function _n(e){return e.length}function Bt(e,t){return t.push(e),e}function Gu(e,t){return e.map(t).join("")}var Jt=1,dt=1,zo=0,Le=0,Re=0,pt="";function Qt(e,t,o,i,r,c,u){return{value:e,root:t,parent:o,type:i,props:r,children:c,line:Jt,column:dt,length:u,return:""}}function gt(e,t){return ju(Qt("",null,null,"",null,null,0),e,{length:-e.length},t)}function _u(){return Re}function Nu(){return Re=Le>0?Me(pt,--Le):0,dt--,Re===10&&(dt=1,Jt--),Re}function ze(){return Re=Le<zo?Me(pt,Le++):0,dt++,Re===10&&(dt=1,Jt++),Re}function Qe(){return Me(pt,Le)}function $t(){return Le}function Ct(e,t){return xt(pt,e,t)}function yt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wo(e){return Jt=dt=1,zo=Ze(pt=e),Le=0,[]}function Go(e){return pt="",e}function Ht(e){return jo(Ct(Le-1,Tn(e===91?e+2:e===40?e+1:e)))}function Uu(e){for(;(Re=Qe())&&Re<33;)ze();return yt(e)>2||yt(Re)>3?"":" "}function Xu(e,t){for(;--t&&ze()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Ct(e,$t()+(t<6&&Qe()==32&&ze()==32))}function Tn(e){for(;ze();)switch(Re){case e:return Le;case 34:case 39:e!==34&&e!==39&&Tn(Re);break;case 40:e===41&&Tn(e);break;case 92:ze();break}return Le}function qu(e,t){for(;ze()&&e+Re!==47+10;)if(e+Re===42+42&&Qe()===47)break;return"/*"+Ct(t,Le-1)+"*"+Zt(e===47?e:ze())}function Yu(e){for(;!yt(Qe());)ze();return Ct(e,Le)}function Ku(e){return Go(jt("",null,null,null,[""],e=Wo(e),0,[0],e))}function jt(e,t,o,i,r,c,u,g,f){for(var l=0,v=0,b=u,P=0,I=0,F=0,w=1,S=1,E=1,$=0,A="",X=r,N=c,ee=i,W=A;S;)switch(F=$,$=ze()){case 40:if(F!=108&&Me(W,b-1)==58){kn(W+=fe(Ht($),"&","&\f"),"&\f")!=-1&&(E=-1);break}case 34:case 39:case 91:W+=Ht($);break;case 9:case 10:case 13:case 32:W+=Uu(F);break;case 92:W+=Xu($t()-1,7);continue;case 47:switch(Qe()){case 42:case 47:Bt(Zu(qu(ze(),$t()),t,o),f);break;default:W+="/"}break;case 123*w:g[l++]=Ze(W)*E;case 125*w:case 59:case 0:switch($){case 0:case 125:S=0;case 59+v:E==-1&&(W=fe(W,/\f/g,"")),I>0&&Ze(W)-b&&Bt(I>32?no(W+";",i,o,b-1):no(fe(W," ","")+";",i,o,b-2),f);break;case 59:W+=";";default:if(Bt(ee=to(W,t,o,l,v,r,g,A,X=[],N=[],b),c),$===123)if(v===0)jt(W,t,ee,ee,X,c,b,g,N);else switch(P===99&&Me(W,3)===110?100:P){case 100:case 108:case 109:case 115:jt(e,ee,ee,i&&Bt(to(e,ee,ee,0,0,r,g,A,r,X=[],b),N),r,N,b,g,i?X:N);break;default:jt(W,ee,ee,ee,[""],N,0,g,N)}}l=v=I=0,w=E=1,A=W="",b=u;break;case 58:b=1+Ze(W),I=F;default:if(w<1){if($==123)--w;else if($==125&&w++==0&&Nu()==125)continue}switch(W+=Zt($),$*w){case 38:E=v>0?1:(W+="\f",-1);break;case 44:g[l++]=(Ze(W)-1)*E,E=1;break;case 64:Qe()===45&&(W+=Ht(ze())),P=Qe(),v=b=Ze(A=W+=Yu($t())),$++;break;case 45:F===45&&Ze(W)==2&&(w=0)}}return c}function to(e,t,o,i,r,c,u,g,f,l,v){for(var b=r-1,P=r===0?c:[""],I=_n(P),F=0,w=0,S=0;F<i;++F)for(var E=0,$=xt(e,b+1,b=Hu(w=u[F])),A=e;E<I;++E)(A=jo(w>0?P[E]+" "+$:fe($,/&\f/g,P[E])))&&(f[S++]=A);return Qt(e,t,o,r===0?Wn:g,f,l,v)}function Zu(e,t,o){return Qt(e,t,o,$o,Zt(_u()),xt(e,2,-2),0)}function no(e,t,o,i){return Qt(e,t,o,Gn,xt(e,0,i),xt(e,i+1,-1),i)}function lt(e,t){for(var o="",i=_n(e),r=0;r<i;r++)o+=t(e[r],r,e,t)||"";return o}function Ju(e,t,o,i){switch(e.type){case $u:if(e.children.length)break;case Lu:case Gn:return e.return=e.return||e.value;case $o:return"";case Ho:return e.return=e.value+"{"+lt(e.children,i)+"}";case Wn:e.value=e.props.join(",")}return Ze(o=lt(e.children,i))?e.return=e.value+"{"+o+"}":""}function Qu(e){var t=_n(e);return function(o,i,r,c){for(var u="",g=0;g<t;g++)u+=e[g](o,i,r,c)||"";return u}}function es(e){return function(t){t.root||(t=t.return)&&e(t)}}var ts=function(t,o,i){for(var r=0,c=0;r=c,c=Qe(),r===38&&c===12&&(o[i]=1),!yt(c);)ze();return Ct(t,Le)},ns=function(t,o){var i=-1,r=44;do switch(yt(r)){case 0:r===38&&Qe()===12&&(o[i]=1),t[i]+=ts(Le-1,o,i);break;case 2:t[i]+=Ht(r);break;case 4:if(r===44){t[++i]=Qe()===58?"&\f":"",o[i]=t[i].length;break}default:t[i]+=Zt(r)}while(r=ze());return t},rs=function(t,o){return Go(ns(Wo(t),o))},ro=new WeakMap,os=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var o=t.value,i=t.parent,r=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&o.charCodeAt(0)!==58&&!ro.get(i))&&!r){ro.set(t,!0);for(var c=[],u=rs(o,c),g=i.props,f=0,l=0;f<u.length;f++)for(var v=0;v<g.length;v++,l++)t.props[l]=c[f]?u[f].replace(/&\f/g,g[v]):g[v]+" "+u[f]}}},is=function(t){if(t.type==="decl"){var o=t.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(t.return="",t.value="")}};function _o(e,t){switch(zu(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+_t+e+Be+e+e;case 6828:case 4268:return de+e+Be+e+e;case 6165:return de+e+Be+"flex-"+e+e;case 5187:return de+e+fe(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+Be+"flex-$1$2")+e;case 5443:return de+e+Be+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return de+e+Be+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+Be+fe(e,"shrink","negative")+e;case 5292:return de+e+Be+fe(e,"basis","preferred-size")+e;case 6060:return de+"box-"+fe(e,"-grow","")+de+e+Be+fe(e,"grow","positive")+e;case 4554:return de+fe(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+_t+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~kn(e,"stretch")?_o(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Me(e,t+1)!==115)break;case 6444:switch(Me(e,Ze(e)-3-(~kn(e,"!important")&&10))){case 107:return fe(e,":",":"+de)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(Me(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+Be+"$2box$3")+e}break;case 5936:switch(Me(e,t+11)){case 114:return de+e+Be+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+Be+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+Be+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+Be+e+e}return e}var as=function(t,o,i,r){if(t.length>-1&&!t.return)switch(t.type){case Gn:t.return=_o(t.value,t.length);break;case Ho:return lt([gt(t,{value:fe(t.value,"@","@"+de)})],r);case Wn:if(t.length)return Gu(t.props,function(c){switch(Wu(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return lt([gt(t,{props:[fe(c,/:(read-\w+)/,":"+_t+"$1")]})],r);case"::placeholder":return lt([gt(t,{props:[fe(c,/:(plac\w+)/,":"+de+"input-$1")]}),gt(t,{props:[fe(c,/:(plac\w+)/,":"+_t+"$1")]}),gt(t,{props:[fe(c,/:(plac\w+)/,Be+"input-$1")]})],r)}return""})}},us=[as],ss=function(t){var o=t.key;if(o==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(w){var S=w.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var r=t.stylisPlugins||us,c={},u,g=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(w){for(var S=w.getAttribute("data-emotion").split(" "),E=1;E<S.length;E++)c[S[E]]=!0;g.push(w)});var f,l=[os,is];{var v,b=[Ju,es(function(w){v.insert(w)})],P=Qu(l.concat(r,b)),I=function(S){return lt(Ku(S),P)};f=function(S,E,$,A){v=$,I(S?S+"{"+E.styles+"}":E.styles),A&&(F.inserted[E.name]=!0)}}var F={key:o,sheet:new Vu({key:o,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:c,registered:{},insert:f};return F.sheet.hydrate(g),F},No={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=typeof Symbol=="function"&&Symbol.for,Nn=Ae?Symbol.for("react.element"):60103,Un=Ae?Symbol.for("react.portal"):60106,en=Ae?Symbol.for("react.fragment"):60107,tn=Ae?Symbol.for("react.strict_mode"):60108,nn=Ae?Symbol.for("react.profiler"):60114,rn=Ae?Symbol.for("react.provider"):60109,on=Ae?Symbol.for("react.context"):60110,Xn=Ae?Symbol.for("react.async_mode"):60111,an=Ae?Symbol.for("react.concurrent_mode"):60111,un=Ae?Symbol.for("react.forward_ref"):60112,sn=Ae?Symbol.for("react.suspense"):60113,ls=Ae?Symbol.for("react.suspense_list"):60120,ln=Ae?Symbol.for("react.memo"):60115,cn=Ae?Symbol.for("react.lazy"):60116,cs=Ae?Symbol.for("react.block"):60121,ds=Ae?Symbol.for("react.fundamental"):60117,fs=Ae?Symbol.for("react.responder"):60118,ps=Ae?Symbol.for("react.scope"):60119;function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nn:switch(e=e.type,e){case Xn:case an:case en:case nn:case tn:case sn:return e;default:switch(e=e&&e.$$typeof,e){case on:case un:case cn:case ln:case rn:return e;default:return t}}case Un:return t}}}function Uo(e){return We(e)===an}pe.AsyncMode=Xn;pe.ConcurrentMode=an;pe.ContextConsumer=on;pe.ContextProvider=rn;pe.Element=Nn;pe.ForwardRef=un;pe.Fragment=en;pe.Lazy=cn;pe.Memo=ln;pe.Portal=Un;pe.Profiler=nn;pe.StrictMode=tn;pe.Suspense=sn;pe.isAsyncMode=function(e){return Uo(e)||We(e)===Xn};pe.isConcurrentMode=Uo;pe.isContextConsumer=function(e){return We(e)===on};pe.isContextProvider=function(e){return We(e)===rn};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nn};pe.isForwardRef=function(e){return We(e)===un};pe.isFragment=function(e){return We(e)===en};pe.isLazy=function(e){return We(e)===cn};pe.isMemo=function(e){return We(e)===ln};pe.isPortal=function(e){return We(e)===Un};pe.isProfiler=function(e){return We(e)===nn};pe.isStrictMode=function(e){return We(e)===tn};pe.isSuspense=function(e){return We(e)===sn};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===en||e===an||e===nn||e===tn||e===sn||e===ls||typeof e=="object"&&e!==null&&(e.$$typeof===cn||e.$$typeof===ln||e.$$typeof===rn||e.$$typeof===on||e.$$typeof===un||e.$$typeof===ds||e.$$typeof===fs||e.$$typeof===ps||e.$$typeof===cs)};pe.typeOf=We;No.exports=pe;var hs=No.exports,Xo=hs,ms={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qo={};qo[Xo.ForwardRef]=ms;qo[Xo.Memo]=gs;var vs=!0;function bs(e,t,o){var i="";return o.split(" ").forEach(function(r){e[r]!==void 0?t.push(e[r]+";"):i+=r+" "}),i}var Yo=function(t,o,i){var r=t.key+"-"+o.name;(i===!1||vs===!1)&&t.registered[r]===void 0&&(t.registered[r]=o.styles)},xs=function(t,o,i){Yo(t,o,i);var r=t.key+"-"+o.name;if(t.inserted[o.name]===void 0){var c=o;do t.insert(o===c?"."+r:"",c,t.sheet,!0),c=c.next;while(c!==void 0)}};function ys(e){for(var t=0,o,i=0,r=e.length;r>=4;++i,r-=4)o=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,t=(o&65535)*1540483477+((o>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(r){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ws={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cs=/[A-Z]|^ms/g,Ss=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ko=function(t){return t.charCodeAt(1)===45},oo=function(t){return t!=null&&typeof t!="boolean"},En=Ka(function(e){return Ko(e)?e:e.replace(Cs,"-$&").toLowerCase()}),io=function(t,o){switch(t){case"animation":case"animationName":if(typeof o=="string")return o.replace(Ss,function(i,r,c){return Je={name:r,styles:c,next:Je},r})}return ws[t]!==1&&!Ko(t)&&typeof o=="number"&&o!==0?o+"px":o};function wt(e,t,o){if(o==null)return"";if(o.__emotion_styles!==void 0)return o;switch(typeof o){case"boolean":return"";case"object":{if(o.anim===1)return Je={name:o.name,styles:o.styles,next:Je},o.name;if(o.styles!==void 0){var i=o.next;if(i!==void 0)for(;i!==void 0;)Je={name:i.name,styles:i.styles,next:Je},i=i.next;var r=o.styles+";";return r}return Es(e,t,o)}case"function":{if(e!==void 0){var c=Je,u=o(e);return Je=c,wt(e,t,u)}break}}if(t==null)return o;var g=t[o];return g!==void 0?g:o}function Es(e,t,o){var i="";if(Array.isArray(o))for(var r=0;r<o.length;r++)i+=wt(e,t,o[r])+";";else for(var c in o){var u=o[c];if(typeof u!="object")t!=null&&t[u]!==void 0?i+=c+"{"+t[u]+"}":oo(u)&&(i+=En(c)+":"+io(c,u)+";");else if(Array.isArray(u)&&typeof u[0]=="string"&&(t==null||t[u[0]]===void 0))for(var g=0;g<u.length;g++)oo(u[g])&&(i+=En(c)+":"+io(c,u[g])+";");else{var f=wt(e,t,u);switch(c){case"animation":case"animationName":{i+=En(c)+":"+f+";";break}default:i+=c+"{"+f+"}"}}}return i}var ao=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Je,Zo=function(t,o,i){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,c="";Je=void 0;var u=t[0];u==null||u.raw===void 0?(r=!1,c+=wt(i,o,u)):c+=u[0];for(var g=1;g<t.length;g++)c+=wt(i,o,t[g]),r&&(c+=u[g]);ao.lastIndex=0;for(var f="",l;(l=ao.exec(c))!==null;)f+="-"+l[1];var v=ys(c)+f;return{name:v,styles:c,next:Je}},Rs=function(t){return t()},Fs=_r["useInsertionEffect"]?_r["useInsertionEffect"]:!1,Ps=Fs||Rs,qn={}.hasOwnProperty,Jo=O.createContext(typeof HTMLElement<"u"?ss({key:"css"}):null);Jo.Provider;var Is=function(t){return O.forwardRef(function(o,i){var r=O.useContext(Jo);return t(o,r,i)})},Os=O.createContext({}),Vn="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",As=function(t,o){var i={};for(var r in o)qn.call(o,r)&&(i[r]=o[r]);return i[Vn]=t,i},Ds=function(t){var o=t.cache,i=t.serialized,r=t.isStringTag;return Yo(o,i,r),Ps(function(){return xs(o,i,r)}),null},Ms=Is(function(e,t,o){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var r=e[Vn],c=[i],u="";typeof e.className=="string"?u=bs(t.registered,c,e.className):e.className!=null&&(u=e.className+" ");var g=Zo(c,void 0,O.useContext(Os));u+=t.key+"-"+g.name;var f={};for(var l in e)qn.call(e,l)&&l!=="css"&&l!==Vn&&(f[l]=e[l]);return f.ref=o,f.className=u,O.createElement(O.Fragment,null,O.createElement(Ds,{cache:t,serialized:g,isStringTag:typeof r=="string"}),O.createElement(r,f))}),Bs=Ms,U=function(t,o){var i=arguments;if(o==null||!qn.call(o,"css"))return O.createElement.apply(void 0,i);var r=i.length,c=new Array(r);c[0]=Bs,c[1]=As(t,o);for(var u=2;u<r;u++)c[u]=i[u];return O.createElement.apply(null,c)};function Yn(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return Zo(t)}var ks=function(){var t=Yn.apply(void 0,arguments),o="animation-"+t.name;return{name:o,styles:"@keyframes "+o+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Ts(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Vs=Math.min,Ls=Math.max,Nt=Math.round,kt=Math.floor,Ut=e=>({x:e,y:e});function $s(e){const{x:t,y:o,width:i,height:r}=e;return{width:i,height:r,top:o,left:t,right:t+i,bottom:o+r,x:t,y:o}}function Qo(e){return ti(e)?(e.nodeName||"").toLowerCase():"#document"}function qe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ei(e){var t;return(t=(ti(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ti(e){return e instanceof Node||e instanceof qe(e).Node}function Ln(e){return e instanceof Element||e instanceof qe(e).Element}function Kn(e){return e instanceof HTMLElement||e instanceof qe(e).HTMLElement}function uo(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof qe(e).ShadowRoot}function ni(e){const{overflow:t,overflowX:o,overflowY:i,display:r}=Zn(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(r)}function Hs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function js(e){return["html","body","#document"].includes(Qo(e))}function Zn(e){return qe(e).getComputedStyle(e)}function zs(e){if(Qo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||uo(e)&&e.host||ei(e);return uo(t)?t.host:t}function ri(e){const t=zs(e);return js(t)?e.ownerDocument?e.ownerDocument.body:e.body:Kn(t)&&ni(t)?t:ri(t)}function Xt(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const r=ri(e),c=r===((i=e.ownerDocument)==null?void 0:i.body),u=qe(r);return c?t.concat(u,u.visualViewport||[],ni(r)?r:[],u.frameElement&&o?Xt(u.frameElement):[]):t.concat(r,Xt(r,[],o))}function Ws(e){const t=Zn(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Kn(e),c=r?e.offsetWidth:o,u=r?e.offsetHeight:i,g=Nt(o)!==c||Nt(i)!==u;return g&&(o=c,i=u),{width:o,height:i,$:g}}function Jn(e){return Ln(e)?e:e.contextElement}function Rn(e){const t=Jn(e);if(!Kn(t))return Ut(1);const o=t.getBoundingClientRect(),{width:i,height:r,$:c}=Ws(t);let u=(c?Nt(o.width):o.width)/i,g=(c?Nt(o.height):o.height)/r;return(!u||!Number.isFinite(u))&&(u=1),(!g||!Number.isFinite(g))&&(g=1),{x:u,y:g}}const Gs=Ut(0);function _s(e){const t=qe(e);return!Hs()||!t.visualViewport?Gs:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ns(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==qe(e)?!1:t}function so(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const r=e.getBoundingClientRect(),c=Jn(e);let u=Ut(1);t&&(i?Ln(i)&&(u=Rn(i)):u=Rn(e));const g=Ns(c,o,i)?_s(c):Ut(0);let f=(r.left+g.x)/u.x,l=(r.top+g.y)/u.y,v=r.width/u.x,b=r.height/u.y;if(c){const P=qe(c),I=i&&Ln(i)?qe(i):i;let F=P,w=F.frameElement;for(;w&&i&&I!==F;){const S=Rn(w),E=w.getBoundingClientRect(),$=Zn(w),A=E.left+(w.clientLeft+parseFloat($.paddingLeft))*S.x,X=E.top+(w.clientTop+parseFloat($.paddingTop))*S.y;f*=S.x,l*=S.y,v*=S.x,b*=S.y,f+=A,l+=X,F=qe(w),w=F.frameElement}}return $s({width:v,height:b,x:f,y:l})}function Us(e,t){let o=null,i;const r=ei(e);function c(){var g;clearTimeout(i),(g=o)==null||g.disconnect(),o=null}function u(g,f){g===void 0&&(g=!1),f===void 0&&(f=1),c();const{left:l,top:v,width:b,height:P}=e.getBoundingClientRect();if(g||t(),!b||!P)return;const I=kt(v),F=kt(r.clientWidth-(l+b)),w=kt(r.clientHeight-(v+P)),S=kt(l),$={rootMargin:-I+"px "+-F+"px "+-w+"px "+-S+"px",threshold:Ls(0,Vs(1,f))||1};let A=!0;function X(N){const ee=N[0].intersectionRatio;if(ee!==f){if(!A)return u();ee?u(!1,ee):i=setTimeout(()=>{u(!1,1e-7)},1e3)}A=!1}try{o=new IntersectionObserver(X,{...$,root:r.ownerDocument})}catch{o=new IntersectionObserver(X,$)}o.observe(e)}return u(!0),c}function Xs(e,t,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:c=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:f=!1}=i,l=Jn(e),v=r||c?[...l?Xt(l):[],...Xt(t)]:[];v.forEach(E=>{r&&E.addEventListener("scroll",o,{passive:!0}),c&&E.addEventListener("resize",o)});const b=l&&g?Us(l,o):null;let P=-1,I=null;u&&(I=new ResizeObserver(E=>{let[$]=E;$&&$.target===l&&I&&(I.unobserve(t),cancelAnimationFrame(P),P=requestAnimationFrame(()=>{var A;(A=I)==null||A.observe(t)})),o()}),l&&!f&&I.observe(l),I.observe(t));let F,w=f?so(e):null;f&&S();function S(){const E=so(e);w&&(E.x!==w.x||E.y!==w.y||E.width!==w.width||E.height!==w.height)&&o(),w=E,F=requestAnimationFrame(S)}return o(),()=>{var E;v.forEach($=>{r&&$.removeEventListener("scroll",o),c&&$.removeEventListener("resize",o)}),b==null||b(),(E=I)==null||E.disconnect(),I=null,f&&cancelAnimationFrame(F)}}var $n=O.useLayoutEffect,qs=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],qt=function(){};function Ys(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function Ks(e,t){for(var o=arguments.length,i=new Array(o>2?o-2:0),r=2;r<o;r++)i[r-2]=arguments[r];var c=[].concat(i);if(t&&e)for(var u in t)t.hasOwnProperty(u)&&t[u]&&c.push("".concat(Ys(e,u)));return c.filter(function(g){return g}).map(function(g){return String(g).trim()}).join(" ")}var lo=function(t){return il(t)?t.filter(Boolean):at(t)==="object"&&t!==null?[t]:[]},oi=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var o=nt(t,qs);return K({},o)},xe=function(t,o,i){var r=t.cx,c=t.getStyles,u=t.getClassNames,g=t.className;return{css:c(o,t),className:r(i??{},u(o,t),g)}};function dn(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Zs(e){return dn(e)?window.innerHeight:e.clientHeight}function ii(e){return dn(e)?window.pageYOffset:e.scrollTop}function Yt(e,t){if(dn(e)){window.scrollTo(0,t);return}e.scrollTop=t}function Js(e){var t=getComputedStyle(e),o=t.position==="absolute",i=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var r=e;r=r.parentElement;)if(t=getComputedStyle(r),!(o&&t.position==="static")&&i.test(t.overflow+t.overflowY+t.overflowX))return r;return document.documentElement}function Qs(e,t,o,i){return o*((e=e/i-1)*e*e+1)+t}function Tt(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:qt,r=ii(e),c=t-r,u=10,g=0;function f(){g+=u;var l=Qs(g,r,c,o);Yt(e,l),g<o?window.requestAnimationFrame(f):i(e)}f()}function co(e,t){var o=e.getBoundingClientRect(),i=t.getBoundingClientRect(),r=t.offsetHeight/3;i.bottom+r>o.bottom?Yt(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+r,e.scrollHeight)):i.top-r<o.top&&Yt(e,Math.max(t.offsetTop-r,0))}function el(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function fo(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function tl(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var ai=!1,nl={get passive(){return ai=!0}},Vt=typeof window<"u"?window:{};Vt.addEventListener&&Vt.removeEventListener&&(Vt.addEventListener("p",qt,nl),Vt.removeEventListener("p",qt,!1));var rl=ai;function ol(e){return e!=null}function il(e){return Array.isArray(e)}function Lt(e,t,o){return e?t:o}var al=function(t){for(var o=arguments.length,i=new Array(o>1?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var c=Object.entries(t).filter(function(u){var g=tt(u,1),f=g[0];return!i.includes(f)});return c.reduce(function(u,g){var f=tt(g,2),l=f[0],v=f[1];return u[l]=v,u},{})},ul=["children","innerProps"],sl=["children","innerProps"];function ll(e){var t=e.maxHeight,o=e.menuEl,i=e.minHeight,r=e.placement,c=e.shouldScroll,u=e.isFixedPosition,g=e.controlHeight,f=Js(o),l={placement:"bottom",maxHeight:t};if(!o||!o.offsetParent)return l;var v=f.getBoundingClientRect(),b=v.height,P=o.getBoundingClientRect(),I=P.bottom,F=P.height,w=P.top,S=o.offsetParent.getBoundingClientRect(),E=S.top,$=u?window.innerHeight:Zs(f),A=ii(f),X=parseInt(getComputedStyle(o).marginBottom,10),N=parseInt(getComputedStyle(o).marginTop,10),ee=E-N,W=$-w,oe=ee+A,me=b-A-w,Fe=I-$+A+X,De=A+w-N,Pe=160;switch(r){case"auto":case"bottom":if(W>=F)return{placement:"bottom",maxHeight:t};if(me>=F&&!u)return c&&Tt(f,Fe,Pe),{placement:"bottom",maxHeight:t};if(!u&&me>=i||u&&W>=i){c&&Tt(f,Fe,Pe);var Ge=u?W-X:me-X;return{placement:"bottom",maxHeight:Ge}}if(r==="auto"||u){var Ce=t,ye=u?ee:oe;return ye>=i&&(Ce=Math.min(ye-X-g,t)),{placement:"top",maxHeight:Ce}}if(r==="bottom")return c&&Yt(f,Fe),{placement:"bottom",maxHeight:t};break;case"top":if(ee>=F)return{placement:"top",maxHeight:t};if(oe>=F&&!u)return c&&Tt(f,De,Pe),{placement:"top",maxHeight:t};if(!u&&oe>=i||u&&ee>=i){var ve=t;return(!u&&oe>=i||u&&ee>=i)&&(ve=u?ee-N:oe-N),c&&Tt(f,De,Pe),{placement:"top",maxHeight:ve}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(r,'".'))}return l}function cl(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var ui=function(t){return t==="auto"?"bottom":t},dl=function(t,o){var i,r=t.placement,c=t.theme,u=c.borderRadius,g=c.spacing,f=c.colors;return K((i={label:"menu"},bt(i,cl(r),"100%"),bt(i,"position","absolute"),bt(i,"width","100%"),bt(i,"zIndex",1),i),o?{}:{backgroundColor:f.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:g.menuGutter,marginTop:g.menuGutter})},si=O.createContext(null),fl=function(t){var o=t.children,i=t.minMenuHeight,r=t.maxMenuHeight,c=t.menuPlacement,u=t.menuPosition,g=t.menuShouldScrollIntoView,f=t.theme,l=O.useContext(si)||{},v=l.setPortalPlacement,b=O.useRef(null),P=O.useState(r),I=tt(P,2),F=I[0],w=I[1],S=O.useState(null),E=tt(S,2),$=E[0],A=E[1],X=f.spacing.controlHeight;return $n(function(){var N=b.current;if(N){var ee=u==="fixed",W=g&&!ee,oe=ll({maxHeight:r,menuEl:N,minHeight:i,placement:c,shouldScroll:W,isFixedPosition:ee,controlHeight:X});w(oe.maxHeight),A(oe.placement),v==null||v(oe.placement)}},[r,c,u,g,i,v,X]),o({ref:b,placerProps:K(K({},t),{},{placement:$||ui(c),maxHeight:F})})},pl=function(t){var o=t.children,i=t.innerRef,r=t.innerProps;return U("div",Q({},xe(t,"menu",{menu:!0}),{ref:i},r),o)},hl=pl,ml=function(t,o){var i=t.maxHeight,r=t.theme.spacing.baseUnit;return K({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:r,paddingTop:r})},gl=function(t){var o=t.children,i=t.innerProps,r=t.innerRef,c=t.isMulti;return U("div",Q({},xe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":c}),{ref:r},i),o)},li=function(t,o){var i=t.theme,r=i.spacing.baseUnit,c=i.colors;return K({textAlign:"center"},o?{}:{color:c.neutral40,padding:"".concat(r*2,"px ").concat(r*3,"px")})},vl=li,bl=li,xl=function(t){var o=t.children,i=o===void 0?"No options":o,r=t.innerProps,c=nt(t,ul);return U("div",Q({},xe(K(K({},c),{},{children:i,innerProps:r}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),r),i)},yl=function(t){var o=t.children,i=o===void 0?"Loading...":o,r=t.innerProps,c=nt(t,sl);return U("div",Q({},xe(K(K({},c),{},{children:i,innerProps:r}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),r),i)},wl=function(t){var o=t.rect,i=t.offset,r=t.position;return{left:o.left,position:r,top:i,width:o.width,zIndex:1}},Cl=function(t){var o=t.appendTo,i=t.children,r=t.controlElement,c=t.innerProps,u=t.menuPlacement,g=t.menuPosition,f=O.useRef(null),l=O.useRef(null),v=O.useState(ui(u)),b=tt(v,2),P=b[0],I=b[1],F=O.useMemo(function(){return{setPortalPlacement:I}},[]),w=O.useState(null),S=tt(w,2),E=S[0],$=S[1],A=O.useCallback(function(){if(r){var W=el(r),oe=g==="fixed"?0:window.pageYOffset,me=W[P]+oe;(me!==(E==null?void 0:E.offset)||W.left!==(E==null?void 0:E.rect.left)||W.width!==(E==null?void 0:E.rect.width))&&$({offset:me,rect:W})}},[r,g,P,E==null?void 0:E.offset,E==null?void 0:E.rect.left,E==null?void 0:E.rect.width]);$n(function(){A()},[A]);var X=O.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),r&&f.current&&(l.current=Xs(r,f.current,A,{elementResize:"ResizeObserver"in window}))},[r,A]);$n(function(){X()},[X]);var N=O.useCallback(function(W){f.current=W,X()},[X]);if(!o&&g!=="fixed"||!E)return null;var ee=U("div",Q({ref:N},xe(K(K({},t),{},{offset:E.offset,position:g,rect:E.rect}),"menuPortal",{"menu-portal":!0}),c),i);return U(si.Provider,{value:F},o?Za.createPortal(ee,o):ee)},Sl=function(t){var o=t.isDisabled,i=t.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},El=function(t){var o=t.children,i=t.innerProps,r=t.isDisabled,c=t.isRtl;return U("div",Q({},xe(t,"container",{"--is-disabled":r,"--is-rtl":c}),i),o)},Rl=function(t,o){var i=t.theme.spacing,r=t.isMulti,c=t.hasValue,u=t.selectProps.controlShouldRenderValue;return K({alignItems:"center",display:r&&c&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},Fl=function(t){var o=t.children,i=t.innerProps,r=t.isMulti,c=t.hasValue;return U("div",Q({},xe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":r,"value-container--has-value":c}),i),o)},Pl=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Il=function(t){var o=t.children,i=t.innerProps;return U("div",Q({},xe(t,"indicatorsContainer",{indicators:!0}),i),o)},po,Ol=["size"],Al=["innerProps","isRtl","size"],Dl={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},ci=function(t){var o=t.size,i=nt(t,Ol);return U("svg",Q({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Dl},i))},Qn=function(t){return U(ci,Q({size:20},t),U("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},di=function(t){return U(ci,Q({size:20},t),U("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},fi=function(t,o){var i=t.isFocused,r=t.theme,c=r.spacing.baseUnit,u=r.colors;return K({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:i?u.neutral60:u.neutral20,padding:c*2,":hover":{color:i?u.neutral80:u.neutral40}})},Ml=fi,Bl=function(t){var o=t.children,i=t.innerProps;return U("div",Q({},xe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),o||U(di,null))},kl=fi,Tl=function(t){var o=t.children,i=t.innerProps;return U("div",Q({},xe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),o||U(Qn,null))},Vl=function(t,o){var i=t.isDisabled,r=t.theme,c=r.spacing.baseUnit,u=r.colors;return K({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:c*2,marginTop:c*2})},Ll=function(t){var o=t.innerProps;return U("span",Q({},o,xe(t,"indicatorSeparator",{"indicator-separator":!0})))},$l=ks(po||(po=Ts([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Hl=function(t,o){var i=t.isFocused,r=t.size,c=t.theme,u=c.colors,g=c.spacing.baseUnit;return K({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:r,lineHeight:1,marginRight:r,textAlign:"center",verticalAlign:"middle"},o?{}:{color:i?u.neutral60:u.neutral20,padding:g*2})},Fn=function(t){var o=t.delay,i=t.offset;return U("span",{css:Yn({animation:"".concat($l," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},jl=function(t){var o=t.innerProps,i=t.isRtl,r=t.size,c=r===void 0?4:r,u=nt(t,Al);return U("div",Q({},xe(K(K({},u),{},{innerProps:o,isRtl:i,size:c}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),U(Fn,{delay:0,offset:i}),U(Fn,{delay:160,offset:!0}),U(Fn,{delay:320,offset:!i}))},zl=function(t,o){var i=t.isDisabled,r=t.isFocused,c=t.theme,u=c.colors,g=c.borderRadius,f=c.spacing;return K({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:f.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:r?u.primary:u.neutral20,borderRadius:g,borderStyle:"solid",borderWidth:1,boxShadow:r?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:r?u.primary:u.neutral30}})},Wl=function(t){var o=t.children,i=t.isDisabled,r=t.isFocused,c=t.innerRef,u=t.innerProps,g=t.menuIsOpen;return U("div",Q({ref:c},xe(t,"control",{control:!0,"control--is-disabled":i,"control--is-focused":r,"control--menu-is-open":g}),u,{"aria-disabled":i||void 0}),o)},Gl=Wl,_l=["data"],Nl=function(t,o){var i=t.theme.spacing;return o?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},Ul=function(t){var o=t.children,i=t.cx,r=t.getStyles,c=t.getClassNames,u=t.Heading,g=t.headingProps,f=t.innerProps,l=t.label,v=t.theme,b=t.selectProps;return U("div",Q({},xe(t,"group",{group:!0}),f),U(u,Q({},g,{selectProps:b,theme:v,getStyles:r,getClassNames:c,cx:i}),l),U("div",null,o))},Xl=function(t,o){var i=t.theme,r=i.colors,c=i.spacing;return K({label:"group",cursor:"default",display:"block"},o?{}:{color:r.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:c.baseUnit*3,paddingRight:c.baseUnit*3,textTransform:"uppercase"})},ql=function(t){var o=oi(t);o.data;var i=nt(o,_l);return U("div",Q({},xe(t,"groupHeading",{"group-heading":!0}),i))},Yl=Ul,Kl=["innerRef","isDisabled","isHidden","inputClassName"],Zl=function(t,o){var i=t.isDisabled,r=t.value,c=t.theme,u=c.spacing,g=c.colors;return K(K({visibility:i?"hidden":"visible",transform:r?"translateZ(0)":""},Jl),o?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:g.neutral80})},pi={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Jl={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":K({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},pi)},Ql=function(t){return K({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},pi)},ec=function(t){var o=t.cx,i=t.value,r=oi(t),c=r.innerRef,u=r.isDisabled,g=r.isHidden,f=r.inputClassName,l=nt(r,Kl);return U("div",Q({},xe(t,"input",{"input-container":!0}),{"data-value":i||""}),U("input",Q({className:o({input:!0},f),ref:c,style:Ql(g),disabled:u},l)))},tc=ec,nc=function(t,o){var i=t.theme,r=i.spacing,c=i.borderRadius,u=i.colors;return K({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:u.neutral10,borderRadius:c/2,margin:r.baseUnit/2})},rc=function(t,o){var i=t.theme,r=i.borderRadius,c=i.colors,u=t.cropWithEllipsis;return K({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:r/2,color:c.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},oc=function(t,o){var i=t.theme,r=i.spacing,c=i.borderRadius,u=i.colors,g=t.isFocused;return K({alignItems:"center",display:"flex"},o?{}:{borderRadius:c/2,backgroundColor:g?u.dangerLight:void 0,paddingLeft:r.baseUnit,paddingRight:r.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},hi=function(t){var o=t.children,i=t.innerProps;return U("div",i,o)},ic=hi,ac=hi;function uc(e){var t=e.children,o=e.innerProps;return U("div",Q({role:"button"},o),t||U(Qn,{size:14}))}var sc=function(t){var o=t.children,i=t.components,r=t.data,c=t.innerProps,u=t.isDisabled,g=t.removeProps,f=t.selectProps,l=i.Container,v=i.Label,b=i.Remove;return U(l,{data:r,innerProps:K(K({},xe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),c),selectProps:f},U(v,{data:r,innerProps:K({},xe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:f},o),U(b,{data:r,innerProps:K(K({},xe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},g),selectProps:f}))},lc=sc,cc=function(t,o){var i=t.isDisabled,r=t.isFocused,c=t.isSelected,u=t.theme,g=u.spacing,f=u.colors;return K({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:c?f.primary:r?f.primary25:"transparent",color:i?f.neutral20:c?f.neutral0:"inherit",padding:"".concat(g.baseUnit*2,"px ").concat(g.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:c?f.primary:f.primary50}})},dc=function(t){var o=t.children,i=t.isDisabled,r=t.isFocused,c=t.isSelected,u=t.innerRef,g=t.innerProps;return U("div",Q({},xe(t,"option",{option:!0,"option--is-disabled":i,"option--is-focused":r,"option--is-selected":c}),{ref:u,"aria-disabled":i},g),o)},fc=dc,pc=function(t,o){var i=t.theme,r=i.spacing,c=i.colors;return K({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:c.neutral50,marginLeft:r.baseUnit/2,marginRight:r.baseUnit/2})},hc=function(t){var o=t.children,i=t.innerProps;return U("div",Q({},xe(t,"placeholder",{placeholder:!0}),i),o)},mc=hc,gc=function(t,o){var i=t.isDisabled,r=t.theme,c=r.spacing,u=r.colors;return K({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:i?u.neutral40:u.neutral80,marginLeft:c.baseUnit/2,marginRight:c.baseUnit/2})},vc=function(t){var o=t.children,i=t.isDisabled,r=t.innerProps;return U("div",Q({},xe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),r),o)},bc=vc,xc={ClearIndicator:Tl,Control:Gl,DropdownIndicator:Bl,DownChevron:di,CrossIcon:Qn,Group:Yl,GroupHeading:ql,IndicatorsContainer:Il,IndicatorSeparator:Ll,Input:tc,LoadingIndicator:jl,Menu:hl,MenuList:gl,MenuPortal:Cl,LoadingMessage:yl,NoOptionsMessage:xl,MultiValue:lc,MultiValueContainer:ic,MultiValueLabel:ac,MultiValueRemove:uc,Option:fc,Placeholder:mc,SelectContainer:El,SingleValue:bc,ValueContainer:Fl},yc=function(t){return K(K({},xc),t.components)},ho=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function wc(e,t){return!!(e===t||ho(e)&&ho(t))}function Cc(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(!wc(e[o],t[o]))return!1;return!0}function Sc(e,t){t===void 0&&(t=Cc);var o=null;function i(){for(var r=[],c=0;c<arguments.length;c++)r[c]=arguments[c];if(o&&o.lastThis===this&&t(r,o.lastArgs))return o.lastResult;var u=e.apply(this,r);return o={lastResult:u,lastArgs:r,lastThis:this},u}return i.clear=function(){o=null},i}var Ec={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Rc=function(t){return U("span",Q({css:Ec},t))},mo=Rc,Fc={guidance:function(t){var o=t.isSearchable,i=t.isMulti,r=t.tabSelectsValue,c=t.context,u=t.isInitialFocus;switch(c){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(r?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(t["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var o=t.action,i=t.label,r=i===void 0?"":i,c=t.labels,u=t.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(r,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(c.length>1?"s":""," ").concat(c.join(","),", selected.");case"select-option":return u?"option ".concat(r," is disabled. Select another option."):"option ".concat(r,", selected.");default:return""}},onFocus:function(t){var o=t.context,i=t.focused,r=t.options,c=t.label,u=c===void 0?"":c,g=t.selectValue,f=t.isDisabled,l=t.isSelected,v=t.isAppleDevice,b=function(w,S){return w&&w.length?"".concat(w.indexOf(S)+1," of ").concat(w.length):""};if(o==="value"&&g)return"value ".concat(u," focused, ").concat(b(g,i),".");if(o==="menu"&&v){var P=f?" disabled":"",I="".concat(l?" selected":"").concat(P);return"".concat(u).concat(I,", ").concat(b(r,i),".")}return""},onFilter:function(t){var o=t.inputValue,i=t.resultsMessage;return"".concat(i).concat(o?" for search term "+o:"",".")}},Pc=function(t){var o=t.ariaSelection,i=t.focusedOption,r=t.focusedValue,c=t.focusableOptions,u=t.isFocused,g=t.selectValue,f=t.selectProps,l=t.id,v=t.isAppleDevice,b=f.ariaLiveMessages,P=f.getOptionLabel,I=f.inputValue,F=f.isMulti,w=f.isOptionDisabled,S=f.isSearchable,E=f.menuIsOpen,$=f.options,A=f.screenReaderStatus,X=f.tabSelectsValue,N=f.isLoading,ee=f["aria-label"],W=f["aria-live"],oe=O.useMemo(function(){return K(K({},Fc),b||{})},[b]),me=O.useMemo(function(){var ye="";if(o&&oe.onChange){var ve=o.option,$e=o.options,Ie=o.removedValue,_e=o.removedValues,He=o.value,rt=function(Xe){return Array.isArray(Xe)?null:Xe},we=Ie||ve||rt(He),ke=we?P(we):"",Ue=$e||_e||void 0,Ye=Ue?Ue.map(P):[],je=K({isDisabled:we&&w(we,g),label:ke,labels:Ye},o);ye=oe.onChange(je)}return ye},[o,oe,w,g,P]),Fe=O.useMemo(function(){var ye="",ve=i||r,$e=!!(i&&g&&g.includes(i));if(ve&&oe.onFocus){var Ie={focused:ve,label:P(ve),isDisabled:w(ve,g),isSelected:$e,options:c,context:ve===i?"menu":"value",selectValue:g,isAppleDevice:v};ye=oe.onFocus(Ie)}return ye},[i,r,P,w,oe,c,g,v]),De=O.useMemo(function(){var ye="";if(E&&$.length&&!N&&oe.onFilter){var ve=A({count:c.length});ye=oe.onFilter({inputValue:I,resultsMessage:ve})}return ye},[c,I,E,oe,$,A,N]),Pe=(o==null?void 0:o.action)==="initial-input-focus",Ge=O.useMemo(function(){var ye="";if(oe.guidance){var ve=r?"value":E?"menu":"input";ye=oe.guidance({"aria-label":ee,context:ve,isDisabled:i&&w(i,g),isMulti:F,isSearchable:S,tabSelectsValue:X,isInitialFocus:Pe})}return ye},[ee,i,r,F,w,S,E,oe,g,X,Pe]),Ce=U(O.Fragment,null,U("span",{id:"aria-selection"},me),U("span",{id:"aria-focused"},Fe),U("span",{id:"aria-results"},De),U("span",{id:"aria-guidance"},Ge));return U(O.Fragment,null,U(mo,{id:l},Pe&&Ce),U(mo,{"aria-live":W,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!Pe&&Ce))},Ic=Pc,Hn=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Oc=new RegExp("["+Hn.map(function(e){return e.letters}).join("")+"]","g"),mi={};for(var Pn=0;Pn<Hn.length;Pn++)for(var In=Hn[Pn],On=0;On<In.letters.length;On++)mi[In.letters[On]]=In.base;var gi=function(t){return t.replace(Oc,function(o){return mi[o]})},Ac=Sc(gi),go=function(t){return t.replace(/^\s+|\s+$/g,"")},Dc=function(t){return"".concat(t.label," ").concat(t.value)},Mc=function(t){return function(o,i){if(o.data.__isNew__)return!0;var r=K({ignoreCase:!0,ignoreAccents:!0,stringify:Dc,trim:!0,matchFrom:"any"},t),c=r.ignoreCase,u=r.ignoreAccents,g=r.stringify,f=r.trim,l=r.matchFrom,v=f?go(i):i,b=f?go(g(o)):g(o);return c&&(v=v.toLowerCase(),b=b.toLowerCase()),u&&(v=Ac(v),b=gi(b)),l==="start"?b.substr(0,v.length)===v:b.indexOf(v)>-1}},Bc=["innerRef"];function kc(e){var t=e.innerRef,o=nt(e,Bc),i=al(o,"onExited","in","enter","exit","appear");return U("input",Q({ref:t},i,{css:Yn({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Tc=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Vc(e){var t=e.isEnabled,o=e.onBottomArrive,i=e.onBottomLeave,r=e.onTopArrive,c=e.onTopLeave,u=O.useRef(!1),g=O.useRef(!1),f=O.useRef(0),l=O.useRef(null),v=O.useCallback(function(S,E){if(l.current!==null){var $=l.current,A=$.scrollTop,X=$.scrollHeight,N=$.clientHeight,ee=l.current,W=E>0,oe=X-N-A,me=!1;oe>E&&u.current&&(i&&i(S),u.current=!1),W&&g.current&&(c&&c(S),g.current=!1),W&&E>oe?(o&&!u.current&&o(S),ee.scrollTop=X,me=!0,u.current=!0):!W&&-E>A&&(r&&!g.current&&r(S),ee.scrollTop=0,me=!0,g.current=!0),me&&Tc(S)}},[o,i,r,c]),b=O.useCallback(function(S){v(S,S.deltaY)},[v]),P=O.useCallback(function(S){f.current=S.changedTouches[0].clientY},[]),I=O.useCallback(function(S){var E=f.current-S.changedTouches[0].clientY;v(S,E)},[v]),F=O.useCallback(function(S){if(S){var E=rl?{passive:!1}:!1;S.addEventListener("wheel",b,E),S.addEventListener("touchstart",P,E),S.addEventListener("touchmove",I,E)}},[I,P,b]),w=O.useCallback(function(S){S&&(S.removeEventListener("wheel",b,!1),S.removeEventListener("touchstart",P,!1),S.removeEventListener("touchmove",I,!1))},[I,P,b]);return O.useEffect(function(){if(t){var S=l.current;return F(S),function(){w(S)}}},[t,F,w]),function(S){l.current=S}}var vo=["boxSizing","height","overflow","paddingRight","position"],bo={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function xo(e){e.preventDefault()}function yo(e){e.stopPropagation()}function wo(){var e=this.scrollTop,t=this.scrollHeight,o=e+this.offsetHeight;e===0?this.scrollTop=1:o===t&&(this.scrollTop=e-1)}function Co(){return"ontouchstart"in window||navigator.maxTouchPoints}var So=!!(typeof window<"u"&&window.document&&window.document.createElement),vt=0,st={capture:!1,passive:!1};function Lc(e){var t=e.isEnabled,o=e.accountForScrollbars,i=o===void 0?!0:o,r=O.useRef({}),c=O.useRef(null),u=O.useCallback(function(f){if(So){var l=document.body,v=l&&l.style;if(i&&vo.forEach(function(F){var w=v&&v[F];r.current[F]=w}),i&&vt<1){var b=parseInt(r.current.paddingRight,10)||0,P=document.body?document.body.clientWidth:0,I=window.innerWidth-P+b||0;Object.keys(bo).forEach(function(F){var w=bo[F];v&&(v[F]=w)}),v&&(v.paddingRight="".concat(I,"px"))}l&&Co()&&(l.addEventListener("touchmove",xo,st),f&&(f.addEventListener("touchstart",wo,st),f.addEventListener("touchmove",yo,st))),vt+=1}},[i]),g=O.useCallback(function(f){if(So){var l=document.body,v=l&&l.style;vt=Math.max(vt-1,0),i&&vt<1&&vo.forEach(function(b){var P=r.current[b];v&&(v[b]=P)}),l&&Co()&&(l.removeEventListener("touchmove",xo,st),f&&(f.removeEventListener("touchstart",wo,st),f.removeEventListener("touchmove",yo,st)))}},[i]);return O.useEffect(function(){if(t){var f=c.current;return u(f),function(){g(f)}}},[t,u,g]),function(f){c.current=f}}var $c=function(t){var o=t.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},Hc={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function jc(e){var t=e.children,o=e.lockEnabled,i=e.captureEnabled,r=i===void 0?!0:i,c=e.onBottomArrive,u=e.onBottomLeave,g=e.onTopArrive,f=e.onTopLeave,l=Vc({isEnabled:r,onBottomArrive:c,onBottomLeave:u,onTopArrive:g,onTopLeave:f}),v=Lc({isEnabled:o}),b=function(I){l(I),v(I)};return U(O.Fragment,null,o&&U("div",{onClick:$c,css:Hc}),t(b))}var zc={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Wc=function(t){var o=t.name,i=t.onFocus;return U("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:zc,value:"",onChange:function(){}})},Gc=Wc;function er(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function _c(){return er(/^iPhone/i)}function vi(){return er(/^Mac/i)}function Nc(){return er(/^iPad/i)||vi()&&navigator.maxTouchPoints>1}function Uc(){return _c()||Nc()}function Xc(){return vi()||Uc()}var qc=function(t){return t.label},Yc=function(t){return t.label},Kc=function(t){return t.value},Zc=function(t){return!!t.isDisabled},Jc={clearIndicator:kl,container:Sl,control:zl,dropdownIndicator:Ml,group:Nl,groupHeading:Xl,indicatorsContainer:Pl,indicatorSeparator:Vl,input:Zl,loadingIndicator:Hl,loadingMessage:bl,menu:dl,menuList:ml,menuPortal:wl,multiValue:nc,multiValueLabel:rc,multiValueRemove:oc,noOptionsMessage:vl,option:cc,placeholder:pc,singleValue:gc,valueContainer:Rl},Qc={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},ed=4,bi=4,td=38,nd=bi*2,rd={baseUnit:bi,controlHeight:td,menuGutter:nd},An={borderRadius:ed,colors:Qc,spacing:rd},od={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:fo(),captureMenuScroll:!fo(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Mc(),formatGroupLabel:qc,getOptionLabel:Yc,getOptionValue:Kc,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Zc,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!tl(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var o=t.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Eo(e,t,o,i){var r=wi(e,t,o),c=Ci(e,t,o),u=yi(e,t),g=Kt(e,t);return{type:"option",data:t,isDisabled:r,isSelected:c,label:u,value:g,index:i}}function zt(e,t){return e.options.map(function(o,i){if("options"in o){var r=o.options.map(function(u,g){return Eo(e,u,t,g)}).filter(function(u){return Fo(e,u)});return r.length>0?{type:"group",data:o,options:r,index:i}:void 0}var c=Eo(e,o,t,i);return Fo(e,c)?c:void 0}).filter(ol)}function xi(e){return e.reduce(function(t,o){return o.type==="group"?t.push.apply(t,zn(o.options.map(function(i){return i.data}))):t.push(o.data),t},[])}function Ro(e,t){return e.reduce(function(o,i){return i.type==="group"?o.push.apply(o,zn(i.options.map(function(r){return{data:r.data,id:"".concat(t,"-").concat(i.index,"-").concat(r.index)}}))):o.push({data:i.data,id:"".concat(t,"-").concat(i.index)}),o},[])}function id(e,t){return xi(zt(e,t))}function Fo(e,t){var o=e.inputValue,i=o===void 0?"":o,r=t.data,c=t.isSelected,u=t.label,g=t.value;return(!Ei(e)||!c)&&Si(e,{label:u,value:g,data:r},i)}function ad(e,t){var o=e.focusedValue,i=e.selectValue,r=i.indexOf(o);if(r>-1){var c=t.indexOf(o);if(c>-1)return o;if(r<t.length)return t[r]}return null}function ud(e,t){var o=e.focusedOption;return o&&t.indexOf(o)>-1?o:t[0]}var Dn=function(t,o){var i,r=(i=t.find(function(c){return c.data===o}))===null||i===void 0?void 0:i.id;return r||null},yi=function(t,o){return t.getOptionLabel(o)},Kt=function(t,o){return t.getOptionValue(o)};function wi(e,t,o){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,o):!1}function Ci(e,t,o){if(o.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,o);var i=Kt(e,t);return o.some(function(r){return Kt(e,r)===i})}function Si(e,t,o){return e.filterOption?e.filterOption(t,o):!0}var Ei=function(t){var o=t.hideSelectedOptions,i=t.isMulti;return o===void 0?i:o},sd=1,Ri=function(e){Pu(o,e);var t=Au(o);function o(i){var r;if(Ru(this,o),r=t.call(this,i),r.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},r.blockOptionHover=!1,r.isComposing=!1,r.commonProps=void 0,r.initialTouchX=0,r.initialTouchY=0,r.openAfterFocus=!1,r.scrollToFocusedOptionOnUpdate=!1,r.userIsDragging=void 0,r.isAppleDevice=Xc(),r.controlRef=null,r.getControlRef=function(f){r.controlRef=f},r.focusedOptionRef=null,r.getFocusedOptionRef=function(f){r.focusedOptionRef=f},r.menuListRef=null,r.getMenuListRef=function(f){r.menuListRef=f},r.inputRef=null,r.getInputRef=function(f){r.inputRef=f},r.focus=r.focusInput,r.blur=r.blurInput,r.onChange=function(f,l){var v=r.props,b=v.onChange,P=v.name;l.name=P,r.ariaOnChange(f,l),b(f,l)},r.setValue=function(f,l,v){var b=r.props,P=b.closeMenuOnSelect,I=b.isMulti,F=b.inputValue;r.onInputChange("",{action:"set-value",prevInputValue:F}),P&&(r.setState({inputIsHiddenAfterUpdate:!I}),r.onMenuClose()),r.setState({clearFocusValueOnUpdate:!0}),r.onChange(f,{action:l,option:v})},r.selectOption=function(f){var l=r.props,v=l.blurInputOnSelect,b=l.isMulti,P=l.name,I=r.state.selectValue,F=b&&r.isOptionSelected(f,I),w=r.isOptionDisabled(f,I);if(F){var S=r.getOptionValue(f);r.setValue(I.filter(function(E){return r.getOptionValue(E)!==S}),"deselect-option",f)}else if(!w)b?r.setValue([].concat(zn(I),[f]),"select-option",f):r.setValue(f,"select-option");else{r.ariaOnChange(f,{action:"select-option",option:f,name:P});return}v&&r.blurInput()},r.removeValue=function(f){var l=r.props.isMulti,v=r.state.selectValue,b=r.getOptionValue(f),P=v.filter(function(F){return r.getOptionValue(F)!==b}),I=Lt(l,P,P[0]||null);r.onChange(I,{action:"remove-value",removedValue:f}),r.focusInput()},r.clearValue=function(){var f=r.state.selectValue;r.onChange(Lt(r.props.isMulti,[],null),{action:"clear",removedValues:f})},r.popValue=function(){var f=r.props.isMulti,l=r.state.selectValue,v=l[l.length-1],b=l.slice(0,l.length-1),P=Lt(f,b,b[0]||null);r.onChange(P,{action:"pop-value",removedValue:v})},r.getFocusedOptionId=function(f){return Dn(r.state.focusableOptionsWithIds,f)},r.getFocusableOptionsWithIds=function(){return Ro(zt(r.props,r.state.selectValue),r.getElementId("option"))},r.getValue=function(){return r.state.selectValue},r.cx=function(){for(var f=arguments.length,l=new Array(f),v=0;v<f;v++)l[v]=arguments[v];return Ks.apply(void 0,[r.props.classNamePrefix].concat(l))},r.getOptionLabel=function(f){return yi(r.props,f)},r.getOptionValue=function(f){return Kt(r.props,f)},r.getStyles=function(f,l){var v=r.props.unstyled,b=Jc[f](l,v);b.boxSizing="border-box";var P=r.props.styles[f];return P?P(b,l):b},r.getClassNames=function(f,l){var v,b;return(v=(b=r.props.classNames)[f])===null||v===void 0?void 0:v.call(b,l)},r.getElementId=function(f){return"".concat(r.state.instancePrefix,"-").concat(f)},r.getComponents=function(){return yc(r.props)},r.buildCategorizedOptions=function(){return zt(r.props,r.state.selectValue)},r.getCategorizedOptions=function(){return r.props.menuIsOpen?r.buildCategorizedOptions():[]},r.buildFocusableOptions=function(){return xi(r.buildCategorizedOptions())},r.getFocusableOptions=function(){return r.props.menuIsOpen?r.buildFocusableOptions():[]},r.ariaOnChange=function(f,l){r.setState({ariaSelection:K({value:f},l)})},r.onMenuMouseDown=function(f){f.button===0&&(f.stopPropagation(),f.preventDefault(),r.focusInput())},r.onMenuMouseMove=function(f){r.blockOptionHover=!1},r.onControlMouseDown=function(f){if(!f.defaultPrevented){var l=r.props.openMenuOnClick;r.state.isFocused?r.props.menuIsOpen?f.target.tagName!=="INPUT"&&f.target.tagName!=="TEXTAREA"&&r.onMenuClose():l&&r.openMenu("first"):(l&&(r.openAfterFocus=!0),r.focusInput()),f.target.tagName!=="INPUT"&&f.target.tagName!=="TEXTAREA"&&f.preventDefault()}},r.onDropdownIndicatorMouseDown=function(f){if(!(f&&f.type==="mousedown"&&f.button!==0)&&!r.props.isDisabled){var l=r.props,v=l.isMulti,b=l.menuIsOpen;r.focusInput(),b?(r.setState({inputIsHiddenAfterUpdate:!v}),r.onMenuClose()):r.openMenu("first"),f.preventDefault()}},r.onClearIndicatorMouseDown=function(f){f&&f.type==="mousedown"&&f.button!==0||(r.clearValue(),f.preventDefault(),r.openAfterFocus=!1,f.type==="touchend"?r.focusInput():setTimeout(function(){return r.focusInput()}))},r.onScroll=function(f){typeof r.props.closeMenuOnScroll=="boolean"?f.target instanceof HTMLElement&&dn(f.target)&&r.props.onMenuClose():typeof r.props.closeMenuOnScroll=="function"&&r.props.closeMenuOnScroll(f)&&r.props.onMenuClose()},r.onCompositionStart=function(){r.isComposing=!0},r.onCompositionEnd=function(){r.isComposing=!1},r.onTouchStart=function(f){var l=f.touches,v=l&&l.item(0);v&&(r.initialTouchX=v.clientX,r.initialTouchY=v.clientY,r.userIsDragging=!1)},r.onTouchMove=function(f){var l=f.touches,v=l&&l.item(0);if(v){var b=Math.abs(v.clientX-r.initialTouchX),P=Math.abs(v.clientY-r.initialTouchY),I=5;r.userIsDragging=b>I||P>I}},r.onTouchEnd=function(f){r.userIsDragging||(r.controlRef&&!r.controlRef.contains(f.target)&&r.menuListRef&&!r.menuListRef.contains(f.target)&&r.blurInput(),r.initialTouchX=0,r.initialTouchY=0)},r.onControlTouchEnd=function(f){r.userIsDragging||r.onControlMouseDown(f)},r.onClearIndicatorTouchEnd=function(f){r.userIsDragging||r.onClearIndicatorMouseDown(f)},r.onDropdownIndicatorTouchEnd=function(f){r.userIsDragging||r.onDropdownIndicatorMouseDown(f)},r.handleInputChange=function(f){var l=r.props.inputValue,v=f.currentTarget.value;r.setState({inputIsHiddenAfterUpdate:!1}),r.onInputChange(v,{action:"input-change",prevInputValue:l}),r.props.menuIsOpen||r.onMenuOpen()},r.onInputFocus=function(f){r.props.onFocus&&r.props.onFocus(f),r.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(r.openAfterFocus||r.props.openMenuOnFocus)&&r.openMenu("first"),r.openAfterFocus=!1},r.onInputBlur=function(f){var l=r.props.inputValue;if(r.menuListRef&&r.menuListRef.contains(document.activeElement)){r.inputRef.focus();return}r.props.onBlur&&r.props.onBlur(f),r.onInputChange("",{action:"input-blur",prevInputValue:l}),r.onMenuClose(),r.setState({focusedValue:null,isFocused:!1})},r.onOptionHover=function(f){if(!(r.blockOptionHover||r.state.focusedOption===f)){var l=r.getFocusableOptions(),v=l.indexOf(f);r.setState({focusedOption:f,focusedOptionId:v>-1?r.getFocusedOptionId(f):null})}},r.shouldHideSelectedOptions=function(){return Ei(r.props)},r.onValueInputFocus=function(f){f.preventDefault(),f.stopPropagation(),r.focus()},r.onKeyDown=function(f){var l=r.props,v=l.isMulti,b=l.backspaceRemovesValue,P=l.escapeClearsValue,I=l.inputValue,F=l.isClearable,w=l.isDisabled,S=l.menuIsOpen,E=l.onKeyDown,$=l.tabSelectsValue,A=l.openMenuOnFocus,X=r.state,N=X.focusedOption,ee=X.focusedValue,W=X.selectValue;if(!w&&!(typeof E=="function"&&(E(f),f.defaultPrevented))){switch(r.blockOptionHover=!0,f.key){case"ArrowLeft":if(!v||I)return;r.focusValue("previous");break;case"ArrowRight":if(!v||I)return;r.focusValue("next");break;case"Delete":case"Backspace":if(I)return;if(ee)r.removeValue(ee);else{if(!b)return;v?r.popValue():F&&r.clearValue()}break;case"Tab":if(r.isComposing||f.shiftKey||!S||!$||!N||A&&r.isOptionSelected(N,W))return;r.selectOption(N);break;case"Enter":if(f.keyCode===229)break;if(S){if(!N||r.isComposing)return;r.selectOption(N);break}return;case"Escape":S?(r.setState({inputIsHiddenAfterUpdate:!1}),r.onInputChange("",{action:"menu-close",prevInputValue:I}),r.onMenuClose()):F&&P&&r.clearValue();break;case" ":if(I)return;if(!S){r.openMenu("first");break}if(!N)return;r.selectOption(N);break;case"ArrowUp":S?r.focusOption("up"):r.openMenu("last");break;case"ArrowDown":S?r.focusOption("down"):r.openMenu("first");break;case"PageUp":if(!S)return;r.focusOption("pageup");break;case"PageDown":if(!S)return;r.focusOption("pagedown");break;case"Home":if(!S)return;r.focusOption("first");break;case"End":if(!S)return;r.focusOption("last");break;default:return}f.preventDefault()}},r.state.instancePrefix="react-select-"+(r.props.instanceId||++sd),r.state.selectValue=lo(i.value),i.menuIsOpen&&r.state.selectValue.length){var c=r.getFocusableOptionsWithIds(),u=r.buildFocusableOptions(),g=u.indexOf(r.state.selectValue[0]);r.state.focusableOptionsWithIds=c,r.state.focusedOption=u[g],r.state.focusedOptionId=Dn(c,u[g])}return r}return Fu(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&co(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(r){var c=this.props,u=c.isDisabled,g=c.menuIsOpen,f=this.state.isFocused;(f&&!u&&r.isDisabled||f&&g&&!r.menuIsOpen)&&this.focusInput(),f&&u&&!r.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!f&&!u&&r.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(co(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(r,c){this.props.onInputChange(r,c)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(r){var c=this,u=this.state,g=u.selectValue,f=u.isFocused,l=this.buildFocusableOptions(),v=r==="first"?0:l.length-1;if(!this.props.isMulti){var b=l.indexOf(g[0]);b>-1&&(v=b)}this.scrollToFocusedOptionOnUpdate=!(f&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[v],focusedOptionId:this.getFocusedOptionId(l[v])},function(){return c.onMenuOpen()})}},{key:"focusValue",value:function(r){var c=this.state,u=c.selectValue,g=c.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var f=u.indexOf(g);g||(f=-1);var l=u.length-1,v=-1;if(u.length){switch(r){case"previous":f===0?v=0:f===-1?v=l:v=f-1;break;case"next":f>-1&&f<l&&(v=f+1);break}this.setState({inputIsHidden:v!==-1,focusedValue:u[v]})}}}},{key:"focusOption",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",c=this.props.pageSize,u=this.state.focusedOption,g=this.getFocusableOptions();if(g.length){var f=0,l=g.indexOf(u);u||(l=-1),r==="up"?f=l>0?l-1:g.length-1:r==="down"?f=(l+1)%g.length:r==="pageup"?(f=l-c,f<0&&(f=0)):r==="pagedown"?(f=l+c,f>g.length-1&&(f=g.length-1)):r==="last"&&(f=g.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:g[f],focusedValue:null,focusedOptionId:this.getFocusedOptionId(g[f])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(An):K(K({},An),this.props.theme):An}},{key:"getCommonProps",value:function(){var r=this.clearValue,c=this.cx,u=this.getStyles,g=this.getClassNames,f=this.getValue,l=this.selectOption,v=this.setValue,b=this.props,P=b.isMulti,I=b.isRtl,F=b.options,w=this.hasValue();return{clearValue:r,cx:c,getStyles:u,getClassNames:g,getValue:f,hasValue:w,isMulti:P,isRtl:I,options:F,selectOption:l,selectProps:b,setValue:v,theme:this.getTheme()}}},{key:"hasValue",value:function(){var r=this.state.selectValue;return r.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var r=this.props,c=r.isClearable,u=r.isMulti;return c===void 0?u:c}},{key:"isOptionDisabled",value:function(r,c){return wi(this.props,r,c)}},{key:"isOptionSelected",value:function(r,c){return Ci(this.props,r,c)}},{key:"filterOption",value:function(r,c){return Si(this.props,r,c)}},{key:"formatOptionLabel",value:function(r,c){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,g=this.state.selectValue;return this.props.formatOptionLabel(r,{context:c,inputValue:u,selectValue:g})}else return this.getOptionLabel(r)}},{key:"formatGroupLabel",value:function(r){return this.props.formatGroupLabel(r)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var r=this.props,c=r.isDisabled,u=r.isSearchable,g=r.inputId,f=r.inputValue,l=r.tabIndex,v=r.form,b=r.menuIsOpen,P=r.required,I=this.getComponents(),F=I.Input,w=this.state,S=w.inputIsHidden,E=w.ariaSelection,$=this.commonProps,A=g||this.getElementId("input"),X=K(K(K({"aria-autocomplete":"list","aria-expanded":b,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":P,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},b&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(E==null?void 0:E.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?O.createElement(F,Q({},$,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:A,innerRef:this.getInputRef,isDisabled:c,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:v,type:"text",value:f},X)):O.createElement(kc,Q({id:A,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:qt,onFocus:this.onInputFocus,disabled:c,tabIndex:l,inputMode:"none",form:v,value:""},X))}},{key:"renderPlaceholderOrValue",value:function(){var r=this,c=this.getComponents(),u=c.MultiValue,g=c.MultiValueContainer,f=c.MultiValueLabel,l=c.MultiValueRemove,v=c.SingleValue,b=c.Placeholder,P=this.commonProps,I=this.props,F=I.controlShouldRenderValue,w=I.isDisabled,S=I.isMulti,E=I.inputValue,$=I.placeholder,A=this.state,X=A.selectValue,N=A.focusedValue,ee=A.isFocused;if(!this.hasValue()||!F)return E?null:O.createElement(b,Q({},P,{key:"placeholder",isDisabled:w,isFocused:ee,innerProps:{id:this.getElementId("placeholder")}}),$);if(S)return X.map(function(oe,me){var Fe=oe===N,De="".concat(r.getOptionLabel(oe),"-").concat(r.getOptionValue(oe));return O.createElement(u,Q({},P,{components:{Container:g,Label:f,Remove:l},isFocused:Fe,isDisabled:w,key:De,index:me,removeProps:{onClick:function(){return r.removeValue(oe)},onTouchEnd:function(){return r.removeValue(oe)},onMouseDown:function(Ge){Ge.preventDefault()}},data:oe}),r.formatOptionLabel(oe,"value"))});if(E)return null;var W=X[0];return O.createElement(v,Q({},P,{data:W,isDisabled:w}),this.formatOptionLabel(W,"value"))}},{key:"renderClearIndicator",value:function(){var r=this.getComponents(),c=r.ClearIndicator,u=this.commonProps,g=this.props,f=g.isDisabled,l=g.isLoading,v=this.state.isFocused;if(!this.isClearable()||!c||f||!this.hasValue()||l)return null;var b={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(c,Q({},u,{innerProps:b,isFocused:v}))}},{key:"renderLoadingIndicator",value:function(){var r=this.getComponents(),c=r.LoadingIndicator,u=this.commonProps,g=this.props,f=g.isDisabled,l=g.isLoading,v=this.state.isFocused;if(!c||!l)return null;var b={"aria-hidden":"true"};return O.createElement(c,Q({},u,{innerProps:b,isDisabled:f,isFocused:v}))}},{key:"renderIndicatorSeparator",value:function(){var r=this.getComponents(),c=r.DropdownIndicator,u=r.IndicatorSeparator;if(!c||!u)return null;var g=this.commonProps,f=this.props.isDisabled,l=this.state.isFocused;return O.createElement(u,Q({},g,{isDisabled:f,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var r=this.getComponents(),c=r.DropdownIndicator;if(!c)return null;var u=this.commonProps,g=this.props.isDisabled,f=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return O.createElement(c,Q({},u,{innerProps:l,isDisabled:g,isFocused:f}))}},{key:"renderMenu",value:function(){var r=this,c=this.getComponents(),u=c.Group,g=c.GroupHeading,f=c.Menu,l=c.MenuList,v=c.MenuPortal,b=c.LoadingMessage,P=c.NoOptionsMessage,I=c.Option,F=this.commonProps,w=this.state.focusedOption,S=this.props,E=S.captureMenuScroll,$=S.inputValue,A=S.isLoading,X=S.loadingMessage,N=S.minMenuHeight,ee=S.maxMenuHeight,W=S.menuIsOpen,oe=S.menuPlacement,me=S.menuPosition,Fe=S.menuPortalTarget,De=S.menuShouldBlockScroll,Pe=S.menuShouldScrollIntoView,Ge=S.noOptionsMessage,Ce=S.onMenuScrollToTop,ye=S.onMenuScrollToBottom;if(!W)return null;var ve=function(ke,Ue){var Ye=ke.type,je=ke.data,Ke=ke.isDisabled,Xe=ke.isSelected,ut=ke.label,fn=ke.value,St=w===je,Et=Ke?void 0:function(){return r.onOptionHover(je)},Rt=Ke?void 0:function(){return r.selectOption(je)},Ft="".concat(r.getElementId("option"),"-").concat(Ue),pn={id:Ft,onClick:Rt,onMouseMove:Et,onMouseOver:Et,tabIndex:-1,role:"option","aria-selected":r.isAppleDevice?void 0:Xe};return O.createElement(I,Q({},F,{innerProps:pn,data:je,isDisabled:Ke,isSelected:Xe,key:Ft,label:ut,type:Ye,value:fn,isFocused:St,innerRef:St?r.getFocusedOptionRef:void 0}),r.formatOptionLabel(ke.data,"menu"))},$e;if(this.hasOptions())$e=this.getCategorizedOptions().map(function(we){if(we.type==="group"){var ke=we.data,Ue=we.options,Ye=we.index,je="".concat(r.getElementId("group"),"-").concat(Ye),Ke="".concat(je,"-heading");return O.createElement(u,Q({},F,{key:je,data:ke,options:Ue,Heading:g,headingProps:{id:Ke,data:we.data},label:r.formatGroupLabel(we.data)}),we.options.map(function(Xe){return ve(Xe,"".concat(Ye,"-").concat(Xe.index))}))}else if(we.type==="option")return ve(we,"".concat(we.index))});else if(A){var Ie=X({inputValue:$});if(Ie===null)return null;$e=O.createElement(b,F,Ie)}else{var _e=Ge({inputValue:$});if(_e===null)return null;$e=O.createElement(P,F,_e)}var He={minMenuHeight:N,maxMenuHeight:ee,menuPlacement:oe,menuPosition:me,menuShouldScrollIntoView:Pe},rt=O.createElement(fl,Q({},F,He),function(we){var ke=we.ref,Ue=we.placerProps,Ye=Ue.placement,je=Ue.maxHeight;return O.createElement(f,Q({},F,He,{innerRef:ke,innerProps:{onMouseDown:r.onMenuMouseDown,onMouseMove:r.onMenuMouseMove},isLoading:A,placement:Ye}),O.createElement(jc,{captureEnabled:E,onTopArrive:Ce,onBottomArrive:ye,lockEnabled:De},function(Ke){return O.createElement(l,Q({},F,{innerRef:function(ut){r.getMenuListRef(ut),Ke(ut)},innerProps:{role:"listbox","aria-multiselectable":F.isMulti,id:r.getElementId("listbox")},isLoading:A,maxHeight:je,focusedOption:w}),$e)}))});return Fe||me==="fixed"?O.createElement(v,Q({},F,{appendTo:Fe,controlElement:this.controlRef,menuPlacement:oe,menuPosition:me}),rt):rt}},{key:"renderFormField",value:function(){var r=this,c=this.props,u=c.delimiter,g=c.isDisabled,f=c.isMulti,l=c.name,v=c.required,b=this.state.selectValue;if(v&&!this.hasValue()&&!g)return O.createElement(Gc,{name:l,onFocus:this.onValueInputFocus});if(!(!l||g))if(f)if(u){var P=b.map(function(w){return r.getOptionValue(w)}).join(u);return O.createElement("input",{name:l,type:"hidden",value:P})}else{var I=b.length>0?b.map(function(w,S){return O.createElement("input",{key:"i-".concat(S),name:l,type:"hidden",value:r.getOptionValue(w)})}):O.createElement("input",{name:l,type:"hidden",value:""});return O.createElement("div",null,I)}else{var F=b[0]?this.getOptionValue(b[0]):"";return O.createElement("input",{name:l,type:"hidden",value:F})}}},{key:"renderLiveRegion",value:function(){var r=this.commonProps,c=this.state,u=c.ariaSelection,g=c.focusedOption,f=c.focusedValue,l=c.isFocused,v=c.selectValue,b=this.getFocusableOptions();return O.createElement(Ic,Q({},r,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:g,focusedValue:f,isFocused:l,selectValue:v,focusableOptions:b,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var r=this.getComponents(),c=r.Control,u=r.IndicatorsContainer,g=r.SelectContainer,f=r.ValueContainer,l=this.props,v=l.className,b=l.id,P=l.isDisabled,I=l.menuIsOpen,F=this.state.isFocused,w=this.commonProps=this.getCommonProps();return O.createElement(g,Q({},w,{className:v,innerProps:{id:b,onKeyDown:this.onKeyDown},isDisabled:P,isFocused:F}),this.renderLiveRegion(),O.createElement(c,Q({},w,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:P,isFocused:F,menuIsOpen:I}),O.createElement(f,Q({},w,{isDisabled:P}),this.renderPlaceholderOrValue(),this.renderInput()),O.createElement(u,Q({},w,{isDisabled:P}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(r,c){var u=c.prevProps,g=c.clearFocusValueOnUpdate,f=c.inputIsHiddenAfterUpdate,l=c.ariaSelection,v=c.isFocused,b=c.prevWasFocused,P=c.instancePrefix,I=r.options,F=r.value,w=r.menuIsOpen,S=r.inputValue,E=r.isMulti,$=lo(F),A={};if(u&&(F!==u.value||I!==u.options||w!==u.menuIsOpen||S!==u.inputValue)){var X=w?id(r,$):[],N=w?Ro(zt(r,$),"".concat(P,"-option")):[],ee=g?ad(c,$):null,W=ud(c,X),oe=Dn(N,W);A={selectValue:$,focusedOption:W,focusedOptionId:oe,focusableOptionsWithIds:N,focusedValue:ee,clearFocusValueOnUpdate:!1}}var me=f!=null&&r!==u?{inputIsHidden:f,inputIsHiddenAfterUpdate:void 0}:{},Fe=l,De=v&&b;return v&&!De&&(Fe={value:Lt(E,$,$[0]||null),options:$,action:"initial-input-focus"},De=!b),(l==null?void 0:l.action)==="initial-input-focus"&&(Fe=null),K(K(K({},A),me),{},{prevProps:r,ariaSelection:Fe,prevWasFocused:De})}}]),o}(O.Component);Ri.defaultProps=od;var ld=O.forwardRef(function(e,t){var o=Eu(e);return O.createElement(Ri,Q({ref:t},o))}),Fi=ld;const cd={option:(e,{isFocused:t,isSelected:o})=>({...e,fontWeight:"500",fontSize:"16px",lineHeight:"1.5",background:"#fff",color:t||o?"#85aa9f":"#121417",textwrap:"nowrap",cursor:"pointer",padding:"0",transition:"color 250ms linear"}),control:(e,{selectProps:t})=>({...e,backgroundColor:"transparrent",borderRadius:"15px",width:"343px",height:"48px",border:t.menuIsOpen?"1px solid #85aa9f":"1px solid rgba(18, 20, 23, 0.1)",boxShadow:"none",color:"#121417",transition:"border-color 250ms linear","&:hover":{borderColor:"#85aa9f"},"&:focus":{borderColor:"#85aa9f"},"@media (min-width: 768px)":{width:"164px"}}),dropdownIndicator:e=>({...e,display:"flex",justifyContent:"flex-end",color:"#121417",padding:"14px 24px 14px 0","&:hover":{color:"#85aa9f",fill:"#85aa9f",cursor:"pointer"},"&:focus":{color:"#85aa9f",fill:"#85aa9f"}}),valueContainer:e=>({...e,padding:"12px 0 12px 24px"}),menu:e=>({...e,maxWidth:"343px",background:"#fff",borderRadius:"15px",margin:"8px 0 0 0",boxShadow:"0 4px 47px 0 rgba(18, 20, 23, 0.08)",cursor:"pointer",padding:"12px 6px 12px 0","@media (min-width: 768px)":{maxWidth:"164px"}}),menuList:e=>({...e,display:"flex",flexDirection:"column",gap:"8px",maxWidth:"343px",maxHeight:"240px",borderRadius:"15px",overflowX:"hidden",paddingLeft:"24px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:"#f8f8f8",borderRadius:"12px"},"@media (min-width: 768px)":{maxWidth:"164px"}}),indicatorSeparator:e=>({...e,display:"none"}),placeholder:e=>({...e,color:"#121417",fontWeight:"500",fontSize:"16px",lineHeight:"1.5"}),singleValue:e=>({...e,fontWeight:"500",fontSize:"16px",lineHeight:"1.5"}),container:e=>({...e,display:"flex",alignItems:"center",height:"48px","@media (max-width: 767px)":{width:"100%"}}),input:e=>({...e,fontWeight:"500",fontSize:"16px",lineHeight:"1.5",padding:"0",margin:"0",color:"#121417"})},dd={option:(e,{isFocused:t,isSelected:o})=>({...e,fontWeight:"500",fontSize:"16px",lineHeight:"1.5",background:"#fff",color:t||o?"#85aa9f":"rgba(18, 20, 23, 0.5)",textwrap:"nowrap",cursor:"pointer",padding:"0",transition:"color 250ms linear"}),control:e=>({...e,backgroundColor:"transparrent",borderRadius:"15px",width:"343px",height:"48px",border:"1px solid #d1d5db",boxShadow:"none",color:"#fcfcfc",transition:"border-color 250ms linear","&:hover":{borderColor:"#d1d5db"},"&:focus":{borderColor:"#d1d5db"},"@media (min-width: 768px)":{width:"204px",border:"1px solid rgba(252, 252, 252, 0.3)"}}),dropdownIndicator:e=>({...e,display:"flex",justifyContent:"flex-end",color:"#fcfcfc",padding:"14px 24px 14px 0",cursor:"pointer","&:hover":{color:"#fff",fill:"#fff",cursor:"pointer"},"&:focus":{color:"#fff",fill:"#fff"}}),valueContainer:e=>({...e,padding:"12px 0 12px 24px"}),menu:e=>({...e,maxWidth:"343px",background:"#fff",borderRadius:"15px",margin:"8px 0 0 0",boxShadow:"0 4px 47px 0 rgba(18, 20, 23, 0.08)",cursor:"pointer",padding:"12px 6px 12px 0","@media (min-width: 768px)":{maxWidth:"204px"}}),menuList:e=>({...e,display:"flex",flexDirection:"column",gap:"8px",maxWidth:"343px",maxHeight:"240px",borderRadius:"15px",overflowX:"hidden",paddingLeft:"24px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:"#f8f8f8",borderRadius:"12px"},"@media (min-width: 768px)":{maxWidth:"204px"}}),indicatorSeparator:e=>({...e,display:"none"}),placeholder:e=>({...e,color:"#fcfcfc",fontWeight:"500",fontSize:"16px",lineHeight:"1.5"}),singleValue:e=>({...e,fontWeight:"500",fontSize:"16px",lineHeight:"1.5",color:"#fcfcfc"}),container:e=>({...e,display:"flex",alignItems:"center",height:"48px","@media (max-width: 767px)":{width:"100%"}}),input:e=>({...e,fontWeight:"500",fontSize:"16px",lineHeight:"1.5",padding:"0",margin:"0",color:"#fcfcfc"})},fd=({closeModal:e})=>{var S,E,$;const t=Wt(ko),[o,i]=O.useState(null),r=Mo(),c=Wt(vu),{register:u,handleSubmit:g,setValue:f,watch:l,formState:{errors:v,dirtyFields:b}}=ou({mode:"onChange",resolver:iu(au)}),P=A=>{A.category==="verb"?f("isIrregular",I==="irregular"):delete A.isIrregular,delete A.verbType,console.log(A),r(Ja(A)),!c&&e()},I=l("verbType","regular"),F=A=>{i(A),f("category",A?A.value:null)},w=A=>{const X=A.target.value;console.log(X),f("verbType",X),console.log(X)};return M.jsxs("div",{children:[M.jsx(uu,{children:"Add word"}),M.jsx(su,{children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."}),M.jsxs("form",{onSubmit:g(P),children:[M.jsxs(pu,{children:[M.jsxs(mu,{children:[M.jsx(Fi,{defaultValue:o,onChange:F,options:t,placeholder:"Categories",styles:dd}),M.jsx("input",{type:"hidden",...u("category"),value:o||""}),v.category&&M.jsx(Sn,{className:"category",children:(S=v.category)==null?void 0:S.message})]}),o&&o.value==="verb"&&M.jsxs(M.Fragment,{children:[M.jsxs(fu,{children:[M.jsxs(Jr,{children:[M.jsx(Kr,{type:"radio",id:"regular",value:"regular",checked:I==="regular",onChange:w,...u("verbType")}),M.jsx(Zr,{htmlFor:"regular",children:"Regular"})]}),M.jsxs(Jr,{children:[M.jsx(Kr,{type:"radio",id:"irregular",value:"irregular",checked:I==="irregular",onChange:w,...u("verbType")}),M.jsx(Zr,{htmlFor:"irregular",children:"Irregular"})]})]}),I==="irregular"&&M.jsx(hu,{children:"Such data must be entered in the format I form-II form-III form."})]})]}),M.jsxs(lu,{children:[M.jsxs(Yr,{children:[M.jsxs(qr,{children:[M.jsx(Xr,{children:M.jsx("use",{href:`${ct}#ukraine`})}),M.jsx(Ur,{children:"Ukrainian"})]}),M.jsx(Nr,{...u("ua"),type:"text"}),(b.ua||v.ua)&&M.jsx(Sn,{children:(E=v.ua)==null?void 0:E.message})]}),M.jsxs(Yr,{children:[M.jsxs(qr,{children:[M.jsx(Xr,{children:M.jsx("use",{href:`${ct}#uk`})}),M.jsx(Ur,{children:"English"})]}),M.jsx(Nr,{...u("en"),type:"text"}),(b.en||v.en)&&M.jsx(Sn,{children:($=v.en)==null?void 0:$.message})]})]}),M.jsxs(cu,{children:[M.jsx(Bo,{type:"submit",children:"Add"}),M.jsx(du,{type:"button",onClick:()=>e(),children:"Cancel"})]})]})]})},pd=Z.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Po=Z.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
`,ft=Z.svg`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.mainGreen};
  transition: fill 250ms ${e=>e.theme.transition};
`,hd=Z.button`
  display: flex;
  gap: 8px;

  &:hover ${ft}, &:focus ${ft} {
    fill: ${e=>e.theme.colors.black};
  }

  &.recommend {
    display: none;
  }
`,md=Z(Qa)`
  display: flex;
  gap: 8px;

  &:hover ${ft}, &:focus ${ft} {
    fill: ${e=>e.theme.colors.black};
  }
`,gd=({className:e})=>{const{isModalOpen:t,openModal:o,closeModal:i}=eu();return M.jsxs(M.Fragment,{children:[M.jsxs(pd,{children:[M.jsxs(hd,{type:"button",className:e,onClick:()=>o(),children:[M.jsx(Po,{children:"Add word"}),M.jsx(ft,{children:M.jsx("use",{href:`${ct}#plus`})})]}),M.jsxs(md,{to:"/training",children:[M.jsx(Po,{children:"Train oneself"}),M.jsx(ft,{children:M.jsx("use",{href:`${ct}#link-arrow`})})]})]}),M.jsx(tu,{isModalOpen:t,closeModal:i,className:"addWord",children:M.jsx(fd,{closeModal:i})})]})};var tr={exports:{}};function Pi(e,t=100,o={}){if(typeof e!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);if(t<0)throw new RangeError("`wait` must not be negative.");const{immediate:i}=typeof o=="boolean"?{immediate:o}:o;let r,c,u,g,f;function l(){const b=Date.now()-g;if(b<t&&b>=0)u=setTimeout(l,t-b);else if(u=void 0,!i){const P=r,I=c;r=void 0,c=void 0,f=e.apply(P,I)}}const v=function(...b){if(r&&this!==r)throw new Error("Debounced method called with different contexts.");r=this,c=b,g=Date.now();const P=i&&!u;if(u||(u=setTimeout(l,t)),P){const I=r,F=c;r=void 0,c=void 0,f=e.apply(I,F)}return f};return v.clear=()=>{u&&(clearTimeout(u),u=void 0)},v.flush=()=>{if(!u)return;const b=r,P=c;r=void 0,c=void 0,f=e.apply(b,P),clearTimeout(u),u=void 0},v}tr.exports.debounce=Pi;tr.exports=Pi;var vd=tr.exports;const bd=nu(vd),xd=Z.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* margin-bottom: 14px; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  &.dictionary {
    display: none;
  }
`,yd=Z.label`
  position: relative;
  width: 100%;
  height: 48px;

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 274px;
  }
`,wd=Z.input`
  width: 100%;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
  background-color: inherit;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.borderColor};
  border-radius: 15px;
  outline: none;
  transition: border-color 250ms ${e=>e.theme.transition};

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};
  }

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 274px;
  }

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.mainGreen};
  }
`,Cd=Z.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  width: 20px;
  height: 20px;
`,Sd=Z.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Io=Z.input`
  flex-shrink: 0;
  position: relative;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid;
  border-radius: 50%;
  border-color: ${e=>e.theme.colors.radioColor};
  outline: none;
  cursor: pointer;
  transition: border-color 250ms ${e=>e.theme.transition};

  &:checked {
    border-color: ${e=>e.theme.colors.mainGreen};

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${e=>e.theme.colors.mainGreen};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.mainGreen};
  }
`,Oo=Z.label`
  font-weight: 400;
  font-size: 14px;
  color: ${e=>e.theme.colors.black};
  cursor: pointer;
`,Ao=Z.div`
  display: flex;
  align-items: self-end;
  gap: 8px;
`,Ed=({fetch:e,setCategory:t,setKeyword:o,setIsIrregular:i,className:r})=>{const c=Wt(ko),[u,g]=O.useState(null),[f,l]=O.useState("regular"),v=Mo(),b=w=>{v(t(w?w.value:"")),g(w),w&&w.value!=="verb"&&v(i(!1)),v(e())},P=w=>{l(w.target.value),v(i(w.target.value==="irregular")),v(e())},I=bd(w=>{console.log("Searching for:",w),v(o(w)),v(e())},300),F=w=>{const S=w.target.value.trim();I(S)};return M.jsxs(xd,{className:r,$notVerb:u&&u.value!=="verb",children:[M.jsxs(yd,{children:[M.jsx(wd,{type:"text",placeholder:"Find the word",onChange:F}),M.jsx(Cd,{children:M.jsx("use",{href:`${ct}#search`})})]}),M.jsx(Fi,{defaultValue:u,onChange:b,options:c,placeholder:"Categories",styles:cd}),u&&u.value==="verb"&&M.jsxs(Sd,{children:[M.jsxs(Ao,{children:[M.jsx(Io,{type:"radio",id:"regular",value:"regular",checked:f==="regular",onChange:P}),M.jsx(Oo,{htmlFor:"regular",children:"Regular"})]}),M.jsxs(Ao,{children:[M.jsx(Io,{type:"radio",id:"irregular",value:"irregular",checked:f==="irregular",onChange:P}),M.jsx(Oo,{htmlFor:"irregular",children:"Irregular"})]})]})]})},Rd=Z.p`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.linkColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Fd=Z.span`
  font-weight: 500;
  font-size: 20px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`,Pd=()=>{const e=Wt(gu);return M.jsx(M.Fragment,{children:M.jsxs(Rd,{children:["To study:",M.jsxs(Fd,{children:[" ",e]})]})})},Id=Z.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 28px;
    padding-top: 80px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`,Od=Z.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`,nf=({className:e,fetch:t,setCategory:o,setKeyword:i,setIsIrregular:r,openModal:c})=>M.jsxs(Id,{children:[M.jsx(Ed,{fetch:t,setCategory:o,setKeyword:i,setIsIrregular:r,className:e}),M.jsxs(Od,{children:[M.jsx(Pd,{}),M.jsx(gd,{className:e,openModal:c})]})]}),Ad="/vocab-builder/assets/list-mobile-1x-1ad86977.png",Dd="/vocab-builder/assets/list-mobile-2x-199294f3.png",Md="/vocab-builder/assets/list-tablet-1x-b2f0ad25.png",Bd="/vocab-builder/assets/list-tablet-2x-49f3447b.png",kd="/vocab-builder/assets/list-desktop-1x-f82d8533.png",Td="/vocab-builder/assets/list-desktop-2x-d6e828c5.png",Vd=Z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 75px 0;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    width: 902px;
    margin: 0 auto;
  }

  &.training {
    padding: 75px 0;

    @media screen and (min-width: 768px) {
      padding: 140px 0 227px 0;
    }

    @media screen and (min-width: 1440px) {
      padding: 193px 0 230px 0;
    }
  }
`,Ld=Z.div`
  @media screen and (min-width: 768px) {
    width: 581px;
  }
`,$d=Z.div`
  flex-shrink: 0;
  width: 144px;
  height: 174px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-image: image-set(url(${Ad}) 1x, url(${Dd}) 2x);
  /* 
  @media screen and (min-width: 375px) {
    width: 144px;
    height: 174px;
  } */

  @media screen and (min-width: 768px) {
    width: 205px;
    height: 240px;
    background-image: image-set(url(${Md}) 1x, url(${Bd}) 2x);
  }

  @media screen and (min-width: 1440px) {
    width: 203px;
    height: 240px;
    background-image: image-set(
      url(${kd}) 1x,
      url(${Td}) 2x
    );
  }
`,Hd=Z.h1`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
  }
`,jd=Z.p`
  font-weight: 400;
  font-size: 14px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,rf=({title:e,text:t})=>M.jsxs(Vd,{children:[M.jsx($d,{}),M.jsxs(Ld,{children:[M.jsx(Hd,{children:e}),M.jsx(jd,{children:t})]})]}),zd=Z.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,Wd=Z.svg`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`,Gd=Z.span`
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`,of=({text:e})=>{const t=e==="word"?"uk":"ukraine";return M.jsxs(zd,{children:[M.jsx(Gd,{children:e}),M.jsx(Wd,{children:M.jsx("use",{href:`${ct}#${t}`})})]})};var Ii={exports:{}},jn={exports:{}};(function(e,t){(function(o,i){i(t,O)})(ru,function(o,i){function r(n,a,s,d,h,p,m){try{var x=n[p](m),y=x.value}catch(C){return void s(C)}x.done?a(y):Promise.resolve(y).then(d,h)}function c(n){return function(){var a=this,s=arguments;return new Promise(function(d,h){var p=n.apply(a,s);function m(y){r(p,d,h,m,x,"next",y)}function x(y){r(p,d,h,m,x,"throw",y)}m(void 0)})}}function u(){return(u=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(n[d]=s[d])}return n}).apply(this,arguments)}function g(n,a){if(n==null)return{};var s,d,h={},p=Object.keys(n);for(d=0;d<p.length;d++)s=p[d],a.indexOf(s)>=0||(h[s]=n[s]);return h}function f(n){var a=function(s,d){if(typeof s!="object"||s===null)return s;var h=s[Symbol.toPrimitive];if(h!==void 0){var p=h.call(s,d||"default");if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(s)}(n,"string");return typeof a=="symbol"?a:String(a)}i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;var l={init:"init"},v=function(n){var a=n.value;return a===void 0?"":a},b=function(){return i.createElement(i.Fragment,null," ")},P={Cell:v,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function I(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return a.reduce(function(d,h){var p=h.style,m=h.className;return d=u({},d,{},g(h,["style","className"])),p&&(d.style=d.style?u({},d.style||{},{},p||{}):p),m&&(d.className=d.className?d.className+" "+m:m),d.className===""&&delete d.className,d},{})}var F=function(n,a){return a===void 0&&(a={}),function(s){return s===void 0&&(s={}),[].concat(n,[s]).reduce(function(d,h){return function p(m,x,y){return typeof x=="function"?p({},x(m,y)):Array.isArray(x)?I.apply(void 0,[m].concat(x)):I(m,x)}(d,h,u({},a,{userProps:s}))},{})}},w=function(n,a,s,d){return s===void 0&&(s={}),n.reduce(function(h,p){return p(h,s)},a)},S=function(n,a,s){return s===void 0&&(s={}),n.forEach(function(d){d(a,s)})};function E(n,a,s,d){n.findIndex(function(h){return h.pluginName===s}),a.forEach(function(h){n.findIndex(function(p){return p.pluginName===h})})}function $(n,a){return typeof n=="function"?n(a):n}function A(n){var a=i.useRef();return a.current=n,i.useCallback(function(){return a.current},[])}var X=typeof document<"u"?i.useLayoutEffect:i.useEffect;function N(n,a){var s=i.useRef(!1);X(function(){s.current&&n(),s.current=!0},a)}function ee(n,a,s){return s===void 0&&(s={}),function(d,h){h===void 0&&(h={});var p=typeof d=="string"?a[d]:d;if(p===void 0)throw console.info(a),new Error("Renderer Error ☝️");return W(p,u({},n,{column:a},s,{},h))}}function W(n,a){return function(d){return typeof d=="function"&&(h=Object.getPrototypeOf(d)).prototype&&h.prototype.isReactComponent;var h}(s=n)||typeof s=="function"||function(d){return typeof d=="object"&&typeof d.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(d.$$typeof.description)}(s)?i.createElement(n,a):n;var s}function oe(n,a,s){return s===void 0&&(s=0),n.map(function(d){return Fe(d=u({},d,{parent:a,depth:s})),d.columns&&(d.columns=oe(d.columns,d,s+1)),d})}function me(n){return ve(n,"columns")}function Fe(n){var a=n.id,s=n.accessor,d=n.Header;if(typeof s=="string"){a=a||s;var h=s.split(".");s=function(p){return function(m,x,y){if(!x)return m;var C,T=typeof x=="function"?x:JSON.stringify(x),D=Ge.get(T)||function(){var B=function(R){return function k(L,H){if(H===void 0&&(H=[]),Array.isArray(L))for(var G=0;G<L.length;G+=1)k(L[G],H);else H.push(L);return H}(R).map(function(k){return String(k).replace(".","_")}).join(".").replace(we,".").replace(ke,"").split(".")}(x);return Ge.set(T,B),B}();try{C=D.reduce(function(B,R){return B[R]},m)}catch{}return C!==void 0?C:y}(p,h)}}if(!a&&typeof d=="string"&&d&&(a=d),!a&&n.columns)throw console.error(n),new Error('A column ID (or unique "Header" value) is required!');if(!a)throw console.error(n),new Error("A column ID (or string accessor) is required!");return Object.assign(n,{id:a,accessor:s}),n}function De(n,a){if(!a)throw new Error;return Object.assign(n,u({Header:b,Footer:b},P,{},a,{},n)),Object.assign(n,{originalWidth:n.width}),n}function Pe(n,a,s){s===void 0&&(s=function(){return{}});for(var d=[],h=n,p=0,m=function(){return p++},x=function(){var y={headers:[]},C=[],T=h.some(function(D){return D.parent});h.forEach(function(D){var B,R=[].concat(C).reverse()[0];T&&(D.parent?B=u({},D.parent,{originalId:D.parent.id,id:D.parent.id+"_"+m(),headers:[D]},s(D)):B=De(u({originalId:D.id+"_placeholder",id:D.id+"_placeholder_"+m(),placeholderOf:D,headers:[D]},s(D)),a),R&&R.originalId===B.originalId?R.headers.push(D):C.push(B)),y.headers.push(D)}),d.push(y),h=C};h.length;)x();return d.reverse()}var Ge=new Map;function Ce(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];for(var d=0;d<a.length;d+=1)if(a[d]!==void 0)return a[d]}function ye(n){if(typeof n=="function")return n}function ve(n,a){var s=[];return function d(h){h.forEach(function(p){p[a]?d(p[a]):s.push(p)})}(n),s}function $e(n,a){var s=a.manualExpandedKey,d=a.expanded,h=a.expandSubRows,p=h===void 0||h,m=[];return n.forEach(function(x){return function y(C,T){T===void 0&&(T=!0),C.isExpanded=C.original&&C.original[s]||d[C.id],C.canExpand=C.subRows&&!!C.subRows.length,T&&m.push(C),C.subRows&&C.subRows.length&&C.isExpanded&&C.subRows.forEach(function(D){return y(D,p)})}(x)}),m}function Ie(n,a,s){return ye(n)||a[n]||s[n]||s.text}function _e(n,a,s){return n?n(a,s):a===void 0}function He(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var rt=null,we=/\[/g,ke=/\]/g,Ue=function(n){return u({role:"table"},n)},Ye=function(n){return u({role:"rowgroup"},n)},je=function(n,a){var s=a.column;return u({key:"header_"+s.id,colSpan:s.totalVisibleHeaderCount,role:"columnheader"},n)},Ke=function(n,a){var s=a.column;return u({key:"footer_"+s.id,colSpan:s.totalVisibleHeaderCount},n)},Xe=function(n,a){return u({key:"headerGroup_"+a.index,role:"row"},n)},ut=function(n,a){return u({key:"footerGroup_"+a.index},n)},fn=function(n,a){return u({key:"row_"+a.row.id,role:"row"},n)},St=function(n,a){var s=a.cell;return u({key:"cell_"+s.row.id+"_"+s.column.id,role:"cell"},n)};function Et(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[Ue],getTableBodyProps:[Ye],getHeaderGroupProps:[Xe],getFooterGroupProps:[ut],getHeaderProps:[je],getFooterProps:[Ke],getRowProps:[fn],getCellProps:[St],useFinalInstance:[]}}l.resetHiddenColumns="resetHiddenColumns",l.toggleHideColumn="toggleHideColumn",l.setHiddenColumns="setHiddenColumns",l.toggleHideAllColumns="toggleHideAllColumns";var Rt=function(n){n.getToggleHiddenProps=[Ft],n.getToggleHideAllColumnsProps=[pn],n.stateReducers.push(Oi),n.useInstanceBeforeDimensions.push(Ai),n.headerGroupsDeps.push(function(a,s){var d=s.instance;return[].concat(a,[d.state.hiddenColumns])}),n.useInstance.push(Di)};Rt.pluginName="useColumnVisibility";var Ft=function(n,a){var s=a.column;return[n,{onChange:function(d){s.toggleHidden(!d.target.checked)},style:{cursor:"pointer"},checked:s.isVisible,title:"Toggle Column Visible"}]},pn=function(n,a){var s=a.instance;return[n,{onChange:function(d){s.toggleHideAllColumns(!d.target.checked)},style:{cursor:"pointer"},checked:!s.allColumnsHidden&&!s.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!s.allColumnsHidden&&s.state.hiddenColumns.length}]};function Oi(n,a,s,d){if(a.type===l.init)return u({hiddenColumns:[]},n);if(a.type===l.resetHiddenColumns)return u({},n,{hiddenColumns:d.initialState.hiddenColumns||[]});if(a.type===l.toggleHideColumn){var h=(a.value!==void 0?a.value:!n.hiddenColumns.includes(a.columnId))?[].concat(n.hiddenColumns,[a.columnId]):n.hiddenColumns.filter(function(p){return p!==a.columnId});return u({},n,{hiddenColumns:h})}return a.type===l.setHiddenColumns?u({},n,{hiddenColumns:$(a.value,n.hiddenColumns)}):a.type===l.toggleHideAllColumns?u({},n,{hiddenColumns:(a.value!==void 0?a.value:!n.hiddenColumns.length)?d.allColumns.map(function(p){return p.id}):[]}):void 0}function Ai(n){var a=n.headers,s=n.state.hiddenColumns;i.useRef(!1).current;var d=0;a.forEach(function(h){return d+=function p(m,x){m.isVisible=x&&!s.includes(m.id);var y=0;return m.headers&&m.headers.length?m.headers.forEach(function(C){return y+=p(C,m.isVisible)}):y=m.isVisible?1:0,m.totalVisibleHeaderCount=y,y}(h,!0)})}function Di(n){var a=n.columns,s=n.flatHeaders,d=n.dispatch,h=n.allColumns,p=n.getHooks,m=n.state.hiddenColumns,x=n.autoResetHiddenColumns,y=x===void 0||x,C=A(n),T=h.length===m.length,D=i.useCallback(function(H,G){return d({type:l.toggleHideColumn,columnId:H,value:G})},[d]),B=i.useCallback(function(H){return d({type:l.setHiddenColumns,value:H})},[d]),R=i.useCallback(function(H){return d({type:l.toggleHideAllColumns,value:H})},[d]),k=F(p().getToggleHideAllColumnsProps,{instance:C()});s.forEach(function(H){H.toggleHidden=function(G){d({type:l.toggleHideColumn,columnId:H.id,value:G})},H.getToggleHiddenProps=F(p().getToggleHiddenProps,{instance:C(),column:H})});var L=A(y);N(function(){L()&&d({type:l.resetHiddenColumns})},[d,a]),Object.assign(n,{allColumnsHidden:T,toggleHideColumn:D,setHiddenColumns:B,toggleHideAllColumns:R,getToggleHideAllColumnsProps:k})}var Mi={},Bi={},ki=function(n,a,s){return n},Ti=function(n,a){return n.subRows||[]},Vi=function(n,a,s){return""+(s?[s.id,a].join("."):a)},Li=function(n){return n};function nr(n){var a=n.initialState,s=a===void 0?Mi:a,d=n.defaultColumn,h=d===void 0?Bi:d,p=n.getSubRows,m=p===void 0?Ti:p,x=n.getRowId,y=x===void 0?Vi:x,C=n.stateReducer,T=C===void 0?ki:C,D=n.useControlledState,B=D===void 0?Li:D;return u({},g(n,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:s,defaultColumn:h,getSubRows:m,getRowId:y,stateReducer:T,useControlledState:B})}function rr(n,a){a===void 0&&(a=0);var s=0,d=0,h=0,p=0;return n.forEach(function(m){var x=m.headers;if(m.totalLeft=a,x&&x.length){var y=rr(x,a),C=y[0],T=y[1],D=y[2],B=y[3];m.totalMinWidth=C,m.totalWidth=T,m.totalMaxWidth=D,m.totalFlexWidth=B}else m.totalMinWidth=m.minWidth,m.totalWidth=Math.min(Math.max(m.minWidth,m.width),m.maxWidth),m.totalMaxWidth=m.maxWidth,m.totalFlexWidth=m.canResize?m.totalWidth:0;m.isVisible&&(a+=m.totalWidth,s+=m.totalMinWidth,d+=m.totalWidth,h+=m.totalMaxWidth,p+=m.totalFlexWidth)}),[s,d,h,p]}function $i(n){var a=n.data,s=n.rows,d=n.flatRows,h=n.rowsById,p=n.column,m=n.getRowId,x=n.getSubRows,y=n.accessValueHooks,C=n.getInstance;a.forEach(function(T,D){return function B(R,k,L,H,G){L===void 0&&(L=0);var ie=R,z=m(R,k,H),V=h[z];if(V)V.subRows&&V.originalSubRows.forEach(function(j,te){return B(j,te,L+1,V)});else if((V={id:z,original:ie,index:k,depth:L,cells:[{}]}).cells.map=He,V.cells.filter=He,V.cells.forEach=He,V.cells[0].getCellProps=He,V.values={},G.push(V),d.push(V),h[z]=V,V.originalSubRows=x(R,k),V.originalSubRows){var re=[];V.originalSubRows.forEach(function(j,te){return B(j,te,L+1,V,re)}),V.subRows=re}p.accessor&&(V.values[p.id]=p.accessor(R,k,V,G,a)),V.values[p.id]=w(y,V.values[p.id],{row:V,column:p,instance:C()})}(T,D,0,void 0,s)})}l.resetExpanded="resetExpanded",l.toggleRowExpanded="toggleRowExpanded",l.toggleAllRowsExpanded="toggleAllRowsExpanded";var or=function(n){n.getToggleAllRowsExpandedProps=[Hi],n.getToggleRowExpandedProps=[ji],n.stateReducers.push(zi),n.useInstance.push(Wi),n.prepareRow.push(Gi)};or.pluginName="useExpanded";var Hi=function(n,a){var s=a.instance;return[n,{onClick:function(d){s.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},ji=function(n,a){var s=a.row;return[n,{onClick:function(){s.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function zi(n,a,s,d){if(a.type===l.init)return u({expanded:{}},n);if(a.type===l.resetExpanded)return u({},n,{expanded:d.initialState.expanded||{}});if(a.type===l.toggleAllRowsExpanded){var h=a.value,p=d.rowsById,m=Object.keys(p).length===Object.keys(n.expanded).length;if(h!==void 0?h:!m){var x={};return Object.keys(p).forEach(function(k){x[k]=!0}),u({},n,{expanded:x})}return u({},n,{expanded:{}})}if(a.type===l.toggleRowExpanded){var y,C=a.id,T=a.value,D=n.expanded[C],B=T!==void 0?T:!D;if(!D&&B)return u({},n,{expanded:u({},n.expanded,(y={},y[C]=!0,y))});if(D&&!B){var R=n.expanded;return R[C],u({},n,{expanded:g(R,[C].map(f))})}return n}}function Wi(n){var a=n.data,s=n.rows,d=n.rowsById,h=n.manualExpandedKey,p=h===void 0?"expanded":h,m=n.paginateExpandedRows,x=m===void 0||m,y=n.expandSubRows,C=y===void 0||y,T=n.autoResetExpanded,D=T===void 0||T,B=n.getHooks,R=n.plugins,k=n.state.expanded,L=n.dispatch;E(R,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var H=A(D),G=!!(Object.keys(d).length&&Object.keys(k).length);G&&Object.keys(d).some(function(ae){return!k[ae]})&&(G=!1),N(function(){H()&&L({type:l.resetExpanded})},[L,a]);var ie=i.useCallback(function(ae,q){L({type:l.toggleRowExpanded,id:ae,value:q})},[L]),z=i.useCallback(function(ae){return L({type:l.toggleAllRowsExpanded,value:ae})},[L]),V=i.useMemo(function(){return x?$e(s,{manualExpandedKey:p,expanded:k,expandSubRows:C}):s},[x,s,p,k,C]),re=i.useMemo(function(){return function(ae){var q=0;return Object.keys(ae).forEach(function(J){var ce=J.split(".");q=Math.max(q,ce.length)}),q}(k)},[k]),j=A(n),te=F(B().getToggleAllRowsExpandedProps,{instance:j()});Object.assign(n,{preExpandedRows:s,expandedRows:V,rows:V,expandedDepth:re,isAllRowsExpanded:G,toggleRowExpanded:ie,toggleAllRowsExpanded:z,getToggleAllRowsExpandedProps:te})}function Gi(n,a){var s=a.instance.getHooks,d=a.instance;n.toggleRowExpanded=function(h){return d.toggleRowExpanded(n.id,h)},n.getToggleRowExpandedProps=F(s().getToggleRowExpandedProps,{instance:d,row:n})}var ir=function(n,a,s){return n=n.filter(function(d){return a.some(function(h){var p=d.values[h];return String(p).toLowerCase().includes(String(s).toLowerCase())})})};ir.autoRemove=function(n){return!n};var ar=function(n,a,s){return n.filter(function(d){return a.some(function(h){var p=d.values[h];return p===void 0||String(p).toLowerCase()===String(s).toLowerCase()})})};ar.autoRemove=function(n){return!n};var ur=function(n,a,s){return n.filter(function(d){return a.some(function(h){var p=d.values[h];return p===void 0||String(p)===String(s)})})};ur.autoRemove=function(n){return!n};var sr=function(n,a,s){return n.filter(function(d){return a.some(function(h){return d.values[h].includes(s)})})};sr.autoRemove=function(n){return!n||!n.length};var lr=function(n,a,s){return n.filter(function(d){return a.some(function(h){var p=d.values[h];return p&&p.length&&s.every(function(m){return p.includes(m)})})})};lr.autoRemove=function(n){return!n||!n.length};var cr=function(n,a,s){return n.filter(function(d){return a.some(function(h){var p=d.values[h];return p&&p.length&&s.some(function(m){return p.includes(m)})})})};cr.autoRemove=function(n){return!n||!n.length};var dr=function(n,a,s){return n.filter(function(d){return a.some(function(h){var p=d.values[h];return s.includes(p)})})};dr.autoRemove=function(n){return!n||!n.length};var fr=function(n,a,s){return n.filter(function(d){return a.some(function(h){return d.values[h]===s})})};fr.autoRemove=function(n){return n===void 0};var pr=function(n,a,s){return n.filter(function(d){return a.some(function(h){return d.values[h]==s})})};pr.autoRemove=function(n){return n==null};var hr=function(n,a,s){var d=s||[],h=d[0],p=d[1];if((h=typeof h=="number"?h:-1/0)>(p=typeof p=="number"?p:1/0)){var m=h;h=p,p=m}return n.filter(function(x){return a.some(function(y){var C=x.values[y];return C>=h&&C<=p})})};hr.autoRemove=function(n){return!n||typeof n[0]!="number"&&typeof n[1]!="number"};var ht=Object.freeze({__proto__:null,text:ir,exactText:ar,exactTextCase:ur,includes:sr,includesAll:lr,includesSome:cr,includesValue:dr,exact:fr,equals:pr,between:hr});l.resetFilters="resetFilters",l.setFilter="setFilter",l.setAllFilters="setAllFilters";var mr=function(n){n.stateReducers.push(_i),n.useInstance.push(Ni)};function _i(n,a,s,d){if(a.type===l.init)return u({filters:[]},n);if(a.type===l.resetFilters)return u({},n,{filters:d.initialState.filters||[]});if(a.type===l.setFilter){var h=a.columnId,p=a.filterValue,m=d.allColumns,x=d.filterTypes,y=m.find(function(L){return L.id===h});if(!y)throw new Error("React-Table: Could not find a column with id: "+h);var C=Ie(y.filter,x||{},ht),T=n.filters.find(function(L){return L.id===h}),D=$(p,T&&T.value);return _e(C.autoRemove,D,y)?u({},n,{filters:n.filters.filter(function(L){return L.id!==h})}):u({},n,T?{filters:n.filters.map(function(L){return L.id===h?{id:h,value:D}:L})}:{filters:[].concat(n.filters,[{id:h,value:D}])})}if(a.type===l.setAllFilters){var B=a.filters,R=d.allColumns,k=d.filterTypes;return u({},n,{filters:$(B,n.filters).filter(function(L){var H=R.find(function(G){return G.id===L.id});return!_e(Ie(H.filter,k||{},ht).autoRemove,L.value,H)})})}}function Ni(n){var a=n.data,s=n.rows,d=n.flatRows,h=n.rowsById,p=n.allColumns,m=n.filterTypes,x=n.manualFilters,y=n.defaultCanFilter,C=y!==void 0&&y,T=n.disableFilters,D=n.state.filters,B=n.dispatch,R=n.autoResetFilters,k=R===void 0||R,L=i.useCallback(function(j,te){B({type:l.setFilter,columnId:j,filterValue:te})},[B]),H=i.useCallback(function(j){B({type:l.setAllFilters,filters:j})},[B]);p.forEach(function(j){var te=j.id,ae=j.accessor,q=j.defaultCanFilter,J=j.disableFilters;j.canFilter=ae?Ce(J!==!0&&void 0,T!==!0&&void 0,!0):Ce(q,C,!1),j.setFilter=function(ne){return L(j.id,ne)};var ce=D.find(function(ne){return ne.id===te});j.filterValue=ce&&ce.value});var G=i.useMemo(function(){if(x||!D.length)return[s,d,h];var j=[],te={};return[function ae(q,J){J===void 0&&(J=0);var ce=q;return(ce=D.reduce(function(ne,le){var se=le.id,he=le.value,_=p.find(function(be){return be.id===se});if(!_)return ne;J===0&&(_.preFilteredRows=ne);var ue=Ie(_.filter,m||{},ht);return ue?(_.filteredRows=ue(ne,[se],he),_.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+_.id+"."),ne)},q)).forEach(function(ne){j.push(ne),te[ne.id]=ne,ne.subRows&&(ne.subRows=ne.subRows&&ne.subRows.length>0?ae(ne.subRows,J+1):ne.subRows)}),ce}(s),j,te]},[x,D,s,d,h,p,m]),ie=G[0],z=G[1],V=G[2];i.useMemo(function(){p.filter(function(j){return!D.find(function(te){return te.id===j.id})}).forEach(function(j){j.preFilteredRows=ie,j.filteredRows=ie})},[ie,D,p]);var re=A(k);N(function(){re()&&B({type:l.resetFilters})},[B,x?null:a]),Object.assign(n,{preFilteredRows:s,preFilteredFlatRows:d,preFilteredRowsById:h,filteredRows:ie,filteredFlatRows:z,filteredRowsById:V,rows:ie,flatRows:z,rowsById:V,setFilter:L,setAllFilters:H})}mr.pluginName="useFilters",l.resetGlobalFilter="resetGlobalFilter",l.setGlobalFilter="setGlobalFilter";var gr=function(n){n.stateReducers.push(Ui),n.useInstance.push(Xi)};function Ui(n,a,s,d){if(a.type===l.resetGlobalFilter)return u({},n,{globalFilter:d.initialState.globalFilter||void 0});if(a.type===l.setGlobalFilter){var h=a.filterValue,p=d.userFilterTypes,m=Ie(d.globalFilter,p||{},ht),x=$(h,n.globalFilter);return _e(m.autoRemove,x)?(n.globalFilter,g(n,["globalFilter"])):u({},n,{globalFilter:x})}}function Xi(n){var a=n.data,s=n.rows,d=n.flatRows,h=n.rowsById,p=n.allColumns,m=n.filterTypes,x=n.globalFilter,y=n.manualGlobalFilter,C=n.state.globalFilter,T=n.dispatch,D=n.autoResetGlobalFilter,B=D===void 0||D,R=n.disableGlobalFilter,k=i.useCallback(function(V){T({type:l.setGlobalFilter,filterValue:V})},[T]),L=i.useMemo(function(){if(y||C===void 0)return[s,d,h];var V=[],re={},j=Ie(x,m||{},ht);if(!j)return console.warn("Could not find a valid 'globalFilter' option."),s;p.forEach(function(ae){var q=ae.disableGlobalFilter;ae.canFilter=Ce(q!==!0&&void 0,R!==!0&&void 0,!0)});var te=p.filter(function(ae){return ae.canFilter===!0});return[function ae(q){return(q=j(q,te.map(function(J){return J.id}),C)).forEach(function(J){V.push(J),re[J.id]=J,J.subRows=J.subRows&&J.subRows.length?ae(J.subRows):J.subRows}),q}(s),V,re]},[y,C,x,m,p,s,d,h,R]),H=L[0],G=L[1],ie=L[2],z=A(B);N(function(){z()&&T({type:l.resetGlobalFilter})},[T,y?null:a]),Object.assign(n,{preGlobalFilteredRows:s,preGlobalFilteredFlatRows:d,preGlobalFilteredRowsById:h,globalFilteredRows:H,globalFilteredFlatRows:G,globalFilteredRowsById:ie,rows:H,flatRows:G,rowsById:ie,setGlobalFilter:k,disableGlobalFilter:R})}function vr(n,a){return a.reduce(function(s,d){return s+(typeof d=="number"?d:0)},0)}gr.pluginName="useGlobalFilter";var br=Object.freeze({__proto__:null,sum:vr,min:function(n){var a=n[0]||0;return n.forEach(function(s){typeof s=="number"&&(a=Math.min(a,s))}),a},max:function(n){var a=n[0]||0;return n.forEach(function(s){typeof s=="number"&&(a=Math.max(a,s))}),a},minMax:function(n){var a=n[0]||0,s=n[0]||0;return n.forEach(function(d){typeof d=="number"&&(a=Math.min(a,d),s=Math.max(s,d))}),a+".."+s},average:function(n){return vr(0,n)/n.length},median:function(n){if(!n.length)return null;var a=Math.floor(n.length/2),s=[].concat(n).sort(function(d,h){return d-h});return n.length%2!=0?s[a]:(s[a-1]+s[a])/2},unique:function(n){return Array.from(new Set(n).values())},uniqueCount:function(n){return new Set(n).size},count:function(n){return n.length}}),qi=[],Yi={};l.resetGroupBy="resetGroupBy",l.setGroupBy="setGroupBy",l.toggleGroupBy="toggleGroupBy";var xr=function(n){n.getGroupByToggleProps=[Ki],n.stateReducers.push(Zi),n.visibleColumnsDeps.push(function(a,s){var d=s.instance;return[].concat(a,[d.state.groupBy])}),n.visibleColumns.push(Ji),n.useInstance.push(ea),n.prepareRow.push(ta)};xr.pluginName="useGroupBy";var Ki=function(n,a){var s=a.header;return[n,{onClick:s.canGroupBy?function(d){d.persist(),s.toggleGroupBy()}:void 0,style:{cursor:s.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function Zi(n,a,s,d){if(a.type===l.init)return u({groupBy:[]},n);if(a.type===l.resetGroupBy)return u({},n,{groupBy:d.initialState.groupBy||[]});if(a.type===l.setGroupBy)return u({},n,{groupBy:a.value});if(a.type===l.toggleGroupBy){var h=a.columnId,p=a.value,m=p!==void 0?p:!n.groupBy.includes(h);return u({},n,m?{groupBy:[].concat(n.groupBy,[h])}:{groupBy:n.groupBy.filter(function(x){return x!==h})})}}function Ji(n,a){var s=a.instance.state.groupBy,d=s.map(function(p){return n.find(function(m){return m.id===p})}).filter(Boolean),h=n.filter(function(p){return!s.includes(p.id)});return(n=[].concat(d,h)).forEach(function(p){p.isGrouped=s.includes(p.id),p.groupedIndex=s.indexOf(p.id)}),n}var Qi={};function ea(n){var a=n.data,s=n.rows,d=n.flatRows,h=n.rowsById,p=n.allColumns,m=n.flatHeaders,x=n.groupByFn,y=x===void 0?yr:x,C=n.manualGroupBy,T=n.aggregations,D=T===void 0?Qi:T,B=n.plugins,R=n.state.groupBy,k=n.dispatch,L=n.autoResetGroupBy,H=L===void 0||L,G=n.disableGroupBy,ie=n.defaultCanGroupBy,z=n.getHooks;E(B,["useColumnOrder","useFilters"],"useGroupBy");var V=A(n);p.forEach(function(_){var ue=_.accessor,be=_.defaultGroupBy,Te=_.disableGroupBy;_.canGroupBy=ue?Ce(_.canGroupBy,Te!==!0&&void 0,G!==!0&&void 0,!0):Ce(_.canGroupBy,be,ie,!1),_.canGroupBy&&(_.toggleGroupBy=function(){return n.toggleGroupBy(_.id)}),_.Aggregated=_.Aggregated||_.Cell});var re=i.useCallback(function(_,ue){k({type:l.toggleGroupBy,columnId:_,value:ue})},[k]),j=i.useCallback(function(_){k({type:l.setGroupBy,value:_})},[k]);m.forEach(function(_){_.getGroupByToggleProps=F(z().getGroupByToggleProps,{instance:V(),header:_})});var te=i.useMemo(function(){if(C||!R.length)return[s,d,h,qi,Yi,d,h];var _=R.filter(function(Oe){return p.find(function(ot){return ot.id===Oe})}),ue=[],be={},Te=[],Y={},ge=[],Se={},Ve=function Oe(ot,et,$r){if(et===void 0&&(et=0),et===_.length)return ot.map(function(It){return u({},It,{depth:et})});var yn=_[et],Ga=y(ot,yn);return Object.entries(Ga).map(function(It,_a){var Hr=It[0],Ot=It[1],At=yn+":"+Hr,jr=Oe(Ot,et+1,At=$r?$r+">"+At:At),zr=et?ve(Ot,"leafRows"):Ot,Na=function(Ne,wn,Xa){var Dt={};return p.forEach(function(Ee){if(_.includes(Ee.id))Dt[Ee.id]=wn[0]?wn[0].values[Ee.id]:null;else{var Wr=typeof Ee.aggregate=="function"?Ee.aggregate:D[Ee.aggregate]||br[Ee.aggregate];if(Wr){var qa=wn.map(function(Mt){return Mt.values[Ee.id]}),Ya=Ne.map(function(Mt){var Cn=Mt.values[Ee.id];if(!Xa&&Ee.aggregateValue){var Gr=typeof Ee.aggregateValue=="function"?Ee.aggregateValue:D[Ee.aggregateValue]||br[Ee.aggregateValue];if(!Gr)throw console.info({column:Ee}),new Error("React Table: Invalid column.aggregateValue option for column listed above");Cn=Gr(Cn,Mt,Ee)}return Cn});Dt[Ee.id]=Wr(Ya,qa)}else{if(Ee.aggregate)throw console.info({column:Ee}),new Error("React Table: Invalid column.aggregate option for column listed above");Dt[Ee.id]=null}}}),Dt}(zr,Ot,et),Ua={id:At,isGrouped:!0,groupByID:yn,groupByVal:Hr,values:Na,subRows:jr,leafRows:zr,depth:et,index:_a};return jr.forEach(function(Ne){ue.push(Ne),be[Ne.id]=Ne,Ne.isGrouped?(Te.push(Ne),Y[Ne.id]=Ne):(ge.push(Ne),Se[Ne.id]=Ne)}),Ua})}(s);return Ve.forEach(function(Oe){ue.push(Oe),be[Oe.id]=Oe,Oe.isGrouped?(Te.push(Oe),Y[Oe.id]=Oe):(ge.push(Oe),Se[Oe.id]=Oe)}),[Ve,ue,be,Te,Y,ge,Se]},[C,R,s,d,h,p,D,y]),ae=te[0],q=te[1],J=te[2],ce=te[3],ne=te[4],le=te[5],se=te[6],he=A(H);N(function(){he()&&k({type:l.resetGroupBy})},[k,C?null:a]),Object.assign(n,{preGroupedRows:s,preGroupedFlatRow:d,preGroupedRowsById:h,groupedRows:ae,groupedFlatRows:q,groupedRowsById:J,onlyGroupedFlatRows:ce,onlyGroupedRowsById:ne,nonGroupedFlatRows:le,nonGroupedRowsById:se,rows:ae,flatRows:q,rowsById:J,toggleGroupBy:re,setGroupBy:j})}function ta(n){n.allCells.forEach(function(a){var s;a.isGrouped=a.column.isGrouped&&a.column.id===n.groupByID,a.isPlaceholder=!a.isGrouped&&a.column.isGrouped,a.isAggregated=!a.isGrouped&&!a.isPlaceholder&&((s=n.subRows)==null?void 0:s.length)})}function yr(n,a){return n.reduce(function(s,d,h){var p=""+d.values[a];return s[p]=Array.isArray(s[p])?s[p]:[],s[p].push(d),s},{})}var wr=/([0-9]+)/gm;function hn(n,a){return n===a?0:n>a?1:-1}function mt(n,a,s){return[n.values[s],a.values[s]]}function Cr(n){return typeof n=="number"?isNaN(n)||n===1/0||n===-1/0?"":String(n):typeof n=="string"?n:""}var na=Object.freeze({__proto__:null,alphanumeric:function(n,a,s){var d=mt(n,a,s),h=d[0],p=d[1];for(h=Cr(h),p=Cr(p),h=h.split(wr).filter(Boolean),p=p.split(wr).filter(Boolean);h.length&&p.length;){var m=h.shift(),x=p.shift(),y=parseInt(m,10),C=parseInt(x,10),T=[y,C].sort();if(isNaN(T[0])){if(m>x)return 1;if(x>m)return-1}else{if(isNaN(T[1]))return isNaN(y)?-1:1;if(y>C)return 1;if(C>y)return-1}}return h.length-p.length},datetime:function(n,a,s){var d=mt(n,a,s),h=d[0],p=d[1];return hn(h=h.getTime(),p=p.getTime())},basic:function(n,a,s){var d=mt(n,a,s);return hn(d[0],d[1])},string:function(n,a,s){var d=mt(n,a,s),h=d[0],p=d[1];for(h=h.split("").filter(Boolean),p=p.split("").filter(Boolean);h.length&&p.length;){var m=h.shift(),x=p.shift(),y=m.toLowerCase(),C=x.toLowerCase();if(y>C)return 1;if(C>y)return-1;if(m>x)return 1;if(x>m)return-1}return h.length-p.length},number:function(n,a,s){var d=mt(n,a,s),h=d[0],p=d[1],m=/[^0-9.]/gi;return hn(h=Number(String(h).replace(m,"")),p=Number(String(p).replace(m,"")))}});l.resetSortBy="resetSortBy",l.setSortBy="setSortBy",l.toggleSortBy="toggleSortBy",l.clearSortBy="clearSortBy",P.sortType="alphanumeric",P.sortDescFirst=!1;var Sr=function(n){n.getSortByToggleProps=[ra],n.stateReducers.push(oa),n.useInstance.push(ia)};Sr.pluginName="useSortBy";var ra=function(n,a){var s=a.instance,d=a.column,h=s.isMultiSortEvent,p=h===void 0?function(m){return m.shiftKey}:h;return[n,{onClick:d.canSort?function(m){m.persist(),d.toggleSortBy(void 0,!s.disableMultiSort&&p(m))}:void 0,style:{cursor:d.canSort?"pointer":void 0},title:d.canSort?"Toggle SortBy":void 0}]};function oa(n,a,s,d){if(a.type===l.init)return u({sortBy:[]},n);if(a.type===l.resetSortBy)return u({},n,{sortBy:d.initialState.sortBy||[]});if(a.type===l.clearSortBy)return u({},n,{sortBy:n.sortBy.filter(function(V){return V.id!==a.columnId})});if(a.type===l.setSortBy)return u({},n,{sortBy:a.sortBy});if(a.type===l.toggleSortBy){var h,p=a.columnId,m=a.desc,x=a.multi,y=d.allColumns,C=d.disableMultiSort,T=d.disableSortRemove,D=d.disableMultiRemove,B=d.maxMultiSortColCount,R=B===void 0?Number.MAX_SAFE_INTEGER:B,k=n.sortBy,L=y.find(function(V){return V.id===p}).sortDescFirst,H=k.find(function(V){return V.id===p}),G=k.findIndex(function(V){return V.id===p}),ie=m!=null,z=[];return(h=!C&&x?H?"toggle":"add":G!==k.length-1||k.length!==1?"replace":H?"toggle":"replace")!="toggle"||T||ie||x&&D||!(H&&H.desc&&!L||!H.desc&&L)||(h="remove"),h==="replace"?z=[{id:p,desc:ie?m:L}]:h==="add"?(z=[].concat(k,[{id:p,desc:ie?m:L}])).splice(0,z.length-R):h==="toggle"?z=k.map(function(V){return V.id===p?u({},V,{desc:ie?m:!H.desc}):V}):h==="remove"&&(z=k.filter(function(V){return V.id!==p})),u({},n,{sortBy:z})}}function ia(n){var a=n.data,s=n.rows,d=n.flatRows,h=n.allColumns,p=n.orderByFn,m=p===void 0?Er:p,x=n.sortTypes,y=n.manualSortBy,C=n.defaultCanSort,T=n.disableSortBy,D=n.flatHeaders,B=n.state.sortBy,R=n.dispatch,k=n.plugins,L=n.getHooks,H=n.autoResetSortBy,G=H===void 0||H;E(k,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var ie=i.useCallback(function(q){R({type:l.setSortBy,sortBy:q})},[R]),z=i.useCallback(function(q,J,ce){R({type:l.toggleSortBy,columnId:q,desc:J,multi:ce})},[R]),V=A(n);D.forEach(function(q){var J=q.accessor,ce=q.canSort,ne=q.disableSortBy,le=q.id,se=J?Ce(ne!==!0&&void 0,T!==!0&&void 0,!0):Ce(C,ce,!1);q.canSort=se,q.canSort&&(q.toggleSortBy=function(_,ue){return z(q.id,_,ue)},q.clearSortBy=function(){R({type:l.clearSortBy,columnId:q.id})}),q.getSortByToggleProps=F(L().getSortByToggleProps,{instance:V(),column:q});var he=B.find(function(_){return _.id===le});q.isSorted=!!he,q.sortedIndex=B.findIndex(function(_){return _.id===le}),q.isSortedDesc=q.isSorted?he.desc:void 0});var re=i.useMemo(function(){if(y||!B.length)return[s,d];var q=[],J=B.filter(function(ce){return h.find(function(ne){return ne.id===ce.id})});return[function ce(ne){var le=m(ne,J.map(function(se){var he=h.find(function(be){return be.id===se.id});if(!he)throw new Error("React-Table: Could not find a column with id: "+se.id+" while sorting");var _=he.sortType,ue=ye(_)||(x||{})[_]||na[_];if(!ue)throw new Error("React-Table: Could not find a valid sortType of '"+_+"' for column '"+se.id+"'.");return function(be,Te){return ue(be,Te,se.id,se.desc)}}),J.map(function(se){var he=h.find(function(_){return _.id===se.id});return he&&he.sortInverted?se.desc:!se.desc}));return le.forEach(function(se){q.push(se),se.subRows&&se.subRows.length!==0&&(se.subRows=ce(se.subRows))}),le}(s),q]},[y,B,s,d,h,m,x]),j=re[0],te=re[1],ae=A(G);N(function(){ae()&&R({type:l.resetSortBy})},[y?null:a]),Object.assign(n,{preSortedRows:s,preSortedFlatRows:d,sortedRows:j,sortedFlatRows:te,rows:j,flatRows:te,setSortBy:ie,toggleSortBy:z})}function Er(n,a,s){return[].concat(n).sort(function(d,h){for(var p=0;p<a.length;p+=1){var m=a[p],x=s[p]===!1||s[p]==="desc",y=m(d,h);if(y!==0)return x?-y:y}return s[0]?d.index-h.index:h.index-d.index})}l.resetPage="resetPage",l.gotoPage="gotoPage",l.setPageSize="setPageSize";var Rr=function(n){n.stateReducers.push(aa),n.useInstance.push(ua)};function aa(n,a,s,d){if(a.type===l.init)return u({pageSize:10,pageIndex:0},n);if(a.type===l.resetPage)return u({},n,{pageIndex:d.initialState.pageIndex||0});if(a.type===l.gotoPage){var h=d.pageCount,p=d.page,m=$(a.pageIndex,n.pageIndex),x=!1;return m>n.pageIndex?x=h===-1?p.length>=n.pageSize:m<h:m<n.pageIndex&&(x=m>-1),x?u({},n,{pageIndex:m}):n}if(a.type===l.setPageSize){var y=a.pageSize,C=n.pageSize*n.pageIndex;return u({},n,{pageIndex:Math.floor(C/y),pageSize:y})}}function ua(n){var a=n.rows,s=n.autoResetPage,d=s===void 0||s,h=n.manualExpandedKey,p=h===void 0?"expanded":h,m=n.plugins,x=n.pageCount,y=n.paginateExpandedRows,C=y===void 0||y,T=n.expandSubRows,D=T===void 0||T,B=n.state,R=B.pageSize,k=B.pageIndex,L=B.expanded,H=B.globalFilter,G=B.filters,ie=B.groupBy,z=B.sortBy,V=n.dispatch,re=n.data,j=n.manualPagination;E(m,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var te=A(d);N(function(){te()&&V({type:l.resetPage})},[V,j?null:re,H,G,ie,z]);var ae=j?x:Math.ceil(a.length/R),q=i.useMemo(function(){return ae>0?[].concat(new Array(ae)).fill(null).map(function(ue,be){return be}):[]},[ae]),J=i.useMemo(function(){var ue;if(j)ue=a;else{var be=R*k,Te=be+R;ue=a.slice(be,Te)}return C?ue:$e(ue,{manualExpandedKey:p,expanded:L,expandSubRows:D})},[D,L,p,j,k,R,C,a]),ce=k>0,ne=ae===-1?J.length>=R:k<ae-1,le=i.useCallback(function(ue){V({type:l.gotoPage,pageIndex:ue})},[V]),se=i.useCallback(function(){return le(function(ue){return ue-1})},[le]),he=i.useCallback(function(){return le(function(ue){return ue+1})},[le]),_=i.useCallback(function(ue){V({type:l.setPageSize,pageSize:ue})},[V]);Object.assign(n,{pageOptions:q,pageCount:ae,page:J,canPreviousPage:ce,canNextPage:ne,gotoPage:le,previousPage:se,nextPage:he,setPageSize:_})}Rr.pluginName="usePagination",l.resetPivot="resetPivot",l.togglePivot="togglePivot";var Fr=function(n){n.getPivotToggleProps=[sa],n.stateReducers.push(la),n.useInstanceAfterData.push(ca),n.allColumns.push(da),n.accessValue.push(fa),n.materializedColumns.push(pa),n.materializedColumnsDeps.push(ha),n.visibleColumns.push(ma),n.visibleColumnsDeps.push(ga),n.useInstance.push(va),n.prepareRow.push(ba)};Fr.pluginName="usePivotColumns";var Pr=[],sa=function(n,a){var s=a.header;return[n,{onClick:s.canPivot?function(d){d.persist(),s.togglePivot()}:void 0,style:{cursor:s.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function la(n,a,s,d){if(a.type===l.init)return u({pivotColumns:Pr},n);if(a.type===l.resetPivot)return u({},n,{pivotColumns:d.initialState.pivotColumns||Pr});if(a.type===l.togglePivot){var h=a.columnId,p=a.value,m=p!==void 0?p:!n.pivotColumns.includes(h);return u({},n,m?{pivotColumns:[].concat(n.pivotColumns,[h])}:{pivotColumns:n.pivotColumns.filter(function(x){return x!==h})})}}function ca(n){n.allColumns.forEach(function(a){a.isPivotSource=n.state.pivotColumns.includes(a.id)})}function da(n,a){var s=a.instance;return n.forEach(function(d){d.isPivotSource=s.state.pivotColumns.includes(d.id),d.uniqueValues=new Set}),n}function fa(n,a){var s=a.column;return s.uniqueValues&&n!==void 0&&s.uniqueValues.add(n),n}function pa(n,a){var s=a.instance,d=s.allColumns,h=s.state;if(!h.pivotColumns.length||!h.groupBy||!h.groupBy.length)return n;var p=h.pivotColumns.map(function(y){return d.find(function(C){return C.id===y})}).filter(Boolean),m=d.filter(function(y){return!y.isPivotSource&&!h.groupBy.includes(y.id)&&!h.pivotColumns.includes(y.id)}),x=me(function y(C,T,D){C===void 0&&(C=0),D===void 0&&(D=[]);var B=p[C];return B?Array.from(B.uniqueValues).sort().map(function(R){var k=u({},B,{Header:B.PivotHeader||typeof B.header=="string"?B.Header+": "+R:R,isPivotGroup:!0,parent:T,depth:C,id:T?T.id+"."+B.id+"."+R:B.id+"."+R,pivotValue:R});return k.columns=y(C+1,k,[].concat(D,[function(L){return L.values[B.id]===R}])),k}):m.map(function(R){return u({},R,{canPivot:!1,isPivoted:!0,parent:T,depth:C,id:""+(T?T.id+"."+R.id:R.id),accessor:function(k,L,H){if(D.every(function(G){return G(H)}))return H.values[R.id]}})})}());return[].concat(n,x)}function ha(n,a){var s=a.instance.state,d=s.pivotColumns,h=s.groupBy;return[].concat(n,[d,h])}function ma(n,a){var s=a.instance.state;return n=n.filter(function(d){return!d.isPivotSource}),s.pivotColumns.length&&s.groupBy&&s.groupBy.length&&(n=n.filter(function(d){return d.isGrouped||d.isPivoted})),n}function ga(n,a){var s=a.instance;return[].concat(n,[s.state.pivotColumns,s.state.groupBy])}function va(n){var a=n.columns,s=n.allColumns,d=n.flatHeaders,h=n.getHooks,p=n.plugins,m=n.dispatch,x=n.autoResetPivot,y=x===void 0||x,C=n.manaulPivot,T=n.disablePivot,D=n.defaultCanPivot;E(p,["useGroupBy"],"usePivotColumns");var B=A(n);s.forEach(function(k){var L=k.accessor,H=k.defaultPivot,G=k.disablePivot;k.canPivot=L?Ce(k.canPivot,G!==!0&&void 0,T!==!0&&void 0,!0):Ce(k.canPivot,H,D,!1),k.canPivot&&(k.togglePivot=function(){return n.togglePivot(k.id)}),k.Aggregated=k.Aggregated||k.Cell}),d.forEach(function(k){k.getPivotToggleProps=F(h().getPivotToggleProps,{instance:B(),header:k})});var R=A(y);N(function(){R()&&m({type:l.resetPivot})},[m,C?null:a]),Object.assign(n,{togglePivot:function(k,L){m({type:l.togglePivot,columnId:k,value:L})}})}function ba(n){n.allCells.forEach(function(a){a.isPivoted=a.column.isPivoted})}l.resetSelectedRows="resetSelectedRows",l.toggleAllRowsSelected="toggleAllRowsSelected",l.toggleRowSelected="toggleRowSelected",l.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var Ir=function(n){n.getToggleRowSelectedProps=[xa],n.getToggleAllRowsSelectedProps=[ya],n.getToggleAllPageRowsSelectedProps=[wa],n.stateReducers.push(Ca),n.useInstance.push(Sa),n.prepareRow.push(Ea)};Ir.pluginName="useRowSelect";var xa=function(n,a){var s=a.instance,d=a.row,h=s.manualRowSelectedKey,p=h===void 0?"isSelected":h;return[n,{onChange:function(m){d.toggleRowSelected(m.target.checked)},style:{cursor:"pointer"},checked:!(!d.original||!d.original[p])||d.isSelected,title:"Toggle Row Selected",indeterminate:d.isSomeSelected}]},ya=function(n,a){var s=a.instance;return[n,{onChange:function(d){s.toggleAllRowsSelected(d.target.checked)},style:{cursor:"pointer"},checked:s.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:!!(!s.isAllRowsSelected&&Object.keys(s.state.selectedRowIds).length)}]},wa=function(n,a){var s=a.instance;return[n,{onChange:function(d){s.toggleAllPageRowsSelected(d.target.checked)},style:{cursor:"pointer"},checked:s.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:!!(!s.isAllPageRowsSelected&&s.page.some(function(d){var h=d.id;return s.state.selectedRowIds[h]}))}]};function Ca(n,a,s,d){if(a.type===l.init)return u({selectedRowIds:{}},n);if(a.type===l.resetSelectedRows)return u({},n,{selectedRowIds:d.initialState.selectedRowIds||{}});if(a.type===l.toggleAllRowsSelected){var h=a.value,p=d.isAllRowsSelected,m=d.rowsById,x=d.nonGroupedRowsById,y=x===void 0?m:x,C=h!==void 0?h:!p,T=Object.assign({},n.selectedRowIds);return C?Object.keys(y).forEach(function(le){T[le]=!0}):Object.keys(y).forEach(function(le){delete T[le]}),u({},n,{selectedRowIds:T})}if(a.type===l.toggleRowSelected){var D=a.id,B=a.value,R=d.rowsById,k=d.selectSubRows,L=k===void 0||k,H=d.getSubRows,G=n.selectedRowIds[D],ie=B!==void 0?B:!G;if(G===ie)return n;var z=u({},n.selectedRowIds);return function le(se){var he=R[se];if(he&&(he.isGrouped||(ie?z[se]=!0:delete z[se]),L&&H(he)))return H(he).forEach(function(_){return le(_.id)})}(D),u({},n,{selectedRowIds:z})}if(a.type===l.toggleAllPageRowsSelected){var V=a.value,re=d.page,j=d.rowsById,te=d.selectSubRows,ae=te===void 0||te,q=d.isAllPageRowsSelected,J=d.getSubRows,ce=V!==void 0?V:!q,ne=u({},n.selectedRowIds);return re.forEach(function(le){return function se(he){var _=j[he];if(_.isGrouped||(ce?ne[he]=!0:delete ne[he]),ae&&J(_))return J(_).forEach(function(ue){return se(ue.id)})}(le.id)}),u({},n,{selectedRowIds:ne})}return n}function Sa(n){var a=n.data,s=n.rows,d=n.getHooks,h=n.plugins,p=n.rowsById,m=n.nonGroupedRowsById,x=m===void 0?p:m,y=n.autoResetSelectedRows,C=y===void 0||y,T=n.state.selectedRowIds,D=n.selectSubRows,B=D===void 0||D,R=n.dispatch,k=n.page,L=n.getSubRows;E(h,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var H=i.useMemo(function(){var J=[];return s.forEach(function(ce){var ne=B?function le(se,he,_){if(he[se.id])return!0;var ue=_(se);if(ue&&ue.length){var be=!0,Te=!1;return ue.forEach(function(Y){Te&&!be||(le(Y,he,_)?Te=!0:be=!1)}),!!be||!!Te&&null}return!1}(ce,T,L):!!T[ce.id];ce.isSelected=!!ne,ce.isSomeSelected=ne===null,ne&&J.push(ce)}),J},[s,B,T,L]),G=!!(Object.keys(x).length&&Object.keys(T).length),ie=G;G&&Object.keys(x).some(function(J){return!T[J]})&&(G=!1),G||k&&k.length&&k.some(function(J){var ce=J.id;return!T[ce]})&&(ie=!1);var z=A(C);N(function(){z()&&R({type:l.resetSelectedRows})},[R,a]);var V=i.useCallback(function(J){return R({type:l.toggleAllRowsSelected,value:J})},[R]),re=i.useCallback(function(J){return R({type:l.toggleAllPageRowsSelected,value:J})},[R]),j=i.useCallback(function(J,ce){return R({type:l.toggleRowSelected,id:J,value:ce})},[R]),te=A(n),ae=F(d().getToggleAllRowsSelectedProps,{instance:te()}),q=F(d().getToggleAllPageRowsSelectedProps,{instance:te()});Object.assign(n,{selectedFlatRows:H,isAllRowsSelected:G,isAllPageRowsSelected:ie,toggleRowSelected:j,toggleAllRowsSelected:V,getToggleAllRowsSelectedProps:ae,getToggleAllPageRowsSelectedProps:q,toggleAllPageRowsSelected:re})}function Ea(n,a){var s=a.instance;n.toggleRowSelected=function(d){return s.toggleRowSelected(n.id,d)},n.getToggleRowSelectedProps=F(s.getHooks().getToggleRowSelectedProps,{instance:s,row:n})}var Or=function(n){return{}},Ar=function(n){return{}};l.setRowState="setRowState",l.setCellState="setCellState",l.resetRowState="resetRowState";var Dr=function(n){n.stateReducers.push(Ra),n.useInstance.push(Fa),n.prepareRow.push(Pa)};function Ra(n,a,s,d){var h=d.initialRowStateAccessor,p=h===void 0?Or:h,m=d.initialCellStateAccessor,x=m===void 0?Ar:m,y=d.rowsById;if(a.type===l.init)return u({rowState:{}},n);if(a.type===l.resetRowState)return u({},n,{rowState:d.initialState.rowState||{}});if(a.type===l.setRowState){var C,T=a.rowId,D=a.value,B=n.rowState[T]!==void 0?n.rowState[T]:p(y[T]);return u({},n,{rowState:u({},n.rowState,(C={},C[T]=$(D,B),C))})}if(a.type===l.setCellState){var R,k,L,H,G,ie=a.rowId,z=a.columnId,V=a.value,re=n.rowState[ie]!==void 0?n.rowState[ie]:p(y[ie]),j=(re==null||(R=re.cellState)==null?void 0:R[z])!==void 0?re.cellState[z]:x((k=y[ie])==null||(L=k.cells)==null?void 0:L.find(function(te){return te.column.id===z}));return u({},n,{rowState:u({},n.rowState,(G={},G[ie]=u({},re,{cellState:u({},re.cellState||{},(H={},H[z]=$(V,j),H))}),G))})}}function Fa(n){var a=n.autoResetRowState,s=a===void 0||a,d=n.data,h=n.dispatch,p=i.useCallback(function(y,C){return h({type:l.setRowState,rowId:y,value:C})},[h]),m=i.useCallback(function(y,C,T){return h({type:l.setCellState,rowId:y,columnId:C,value:T})},[h]),x=A(s);N(function(){x()&&h({type:l.resetRowState})},[d]),Object.assign(n,{setRowState:p,setCellState:m})}function Pa(n,a){var s=a.instance,d=s.initialRowStateAccessor,h=d===void 0?Or:d,p=s.initialCellStateAccessor,m=p===void 0?Ar:p,x=s.state.rowState;n&&(n.state=x[n.id]!==void 0?x[n.id]:h(n),n.setState=function(y){return s.setRowState(n.id,y)},n.cells.forEach(function(y){n.state.cellState||(n.state.cellState={}),y.state=n.state.cellState[y.column.id]!==void 0?n.state.cellState[y.column.id]:m(y),y.setState=function(C){return s.setCellState(n.id,y.column.id,C)}}))}Dr.pluginName="useRowState",l.resetColumnOrder="resetColumnOrder",l.setColumnOrder="setColumnOrder";var Mr=function(n){n.stateReducers.push(Ia),n.visibleColumnsDeps.push(function(a,s){var d=s.instance;return[].concat(a,[d.state.columnOrder])}),n.visibleColumns.push(Oa),n.useInstance.push(Aa)};function Ia(n,a,s,d){return a.type===l.init?u({columnOrder:[]},n):a.type===l.resetColumnOrder?u({},n,{columnOrder:d.initialState.columnOrder||[]}):a.type===l.setColumnOrder?u({},n,{columnOrder:$(a.columnOrder,n.columnOrder)}):void 0}function Oa(n,a){var s=a.instance.state.columnOrder;if(!s||!s.length)return n;for(var d=[].concat(s),h=[].concat(n),p=[],m=function(){var x=d.shift(),y=h.findIndex(function(C){return C.id===x});y>-1&&p.push(h.splice(y,1)[0])};h.length&&d.length;)m();return[].concat(p,h)}function Aa(n){var a=n.dispatch;n.setColumnOrder=i.useCallback(function(s){return a({type:l.setColumnOrder,columnOrder:s})},[a])}Mr.pluginName="useColumnOrder",P.canResize=!0,l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize";var Br=function(n){n.getResizerProps=[Da],n.getHeaderProps.push({style:{position:"relative"}}),n.stateReducers.push(Ma),n.useInstance.push(ka),n.useInstanceBeforeDimensions.push(Ba)},Da=function(n,a){var s=a.instance,d=a.header,h=s.dispatch,p=function(m,x){var y=!1;if(m.type==="touchstart"){if(m.touches&&m.touches.length>1)return;y=!0}var C,T,D=function(z){var V=[];return function re(j){j.columns&&j.columns.length&&j.columns.map(re),V.push(j)}(z),V}(x).map(function(z){return[z.id,z.totalWidth]}),B=y?Math.round(m.touches[0].clientX):m.clientX,R=function(){window.cancelAnimationFrame(C),C=null,h({type:l.columnDoneResizing})},k=function(){window.cancelAnimationFrame(C),C=null,h({type:l.columnResizing,clientX:T})},L=function(z){T=z,C||(C=window.requestAnimationFrame(k))},H={mouse:{moveEvent:"mousemove",moveHandler:function(z){return L(z.clientX)},upEvent:"mouseup",upHandler:function(z){document.removeEventListener("mousemove",H.mouse.moveHandler),document.removeEventListener("mouseup",H.mouse.upHandler),R()}},touch:{moveEvent:"touchmove",moveHandler:function(z){return z.cancelable&&(z.preventDefault(),z.stopPropagation()),L(z.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(z){document.removeEventListener(H.touch.moveEvent,H.touch.moveHandler),document.removeEventListener(H.touch.upEvent,H.touch.moveHandler),R()}}},G=y?H.touch:H.mouse,ie=!!function(){if(typeof rt=="boolean")return rt;var z=!1;try{var V={get passive(){return z=!0,!1}};window.addEventListener("test",null,V),window.removeEventListener("test",null,V)}catch{z=!1}return rt=z}()&&{passive:!1};document.addEventListener(G.moveEvent,G.moveHandler,ie),document.addEventListener(G.upEvent,G.upHandler,ie),h({type:l.columnStartResizing,columnId:x.id,columnWidth:x.totalWidth,headerIdWidths:D,clientX:B})};return[n,{onMouseDown:function(m){return m.persist()||p(m,d)},onTouchStart:function(m){return m.persist()||p(m,d)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Ma(n,a){if(a.type===l.init)return u({columnResizing:{columnWidths:{}}},n);if(a.type===l.resetResize)return u({},n,{columnResizing:{columnWidths:{}}});if(a.type===l.columnStartResizing){var s=a.clientX,d=a.columnId,h=a.columnWidth,p=a.headerIdWidths;return u({},n,{columnResizing:u({},n.columnResizing,{startX:s,headerIdWidths:p,columnWidth:h,isResizingColumn:d})})}if(a.type===l.columnResizing){var m=a.clientX,x=n.columnResizing,y=x.startX,C=x.columnWidth,T=x.headerIdWidths,D=(m-y)/C,B={};return(T===void 0?[]:T).forEach(function(R){var k=R[0],L=R[1];B[k]=Math.max(L+L*D,0)}),u({},n,{columnResizing:u({},n.columnResizing,{columnWidths:u({},n.columnResizing.columnWidths,{},B)})})}return a.type===l.columnDoneResizing?u({},n,{columnResizing:u({},n.columnResizing,{startX:null,isResizingColumn:null})}):void 0}Br.pluginName="useResizeColumns";var Ba=function(n){var a=n.flatHeaders,s=n.disableResizing,d=n.getHooks,h=n.state.columnResizing,p=A(n);a.forEach(function(m){var x=Ce(m.disableResizing!==!0&&void 0,s!==!0&&void 0,!0);m.canResize=x,m.width=h.columnWidths[m.id]||m.originalWidth||m.width,m.isResizing=h.isResizingColumn===m.id,x&&(m.getResizerProps=F(d().getResizerProps,{instance:p(),header:m}))})};function ka(n){var a=n.plugins,s=n.dispatch,d=n.autoResetResize,h=d===void 0||d,p=n.columns;E(a,["useAbsoluteLayout"],"useResizeColumns");var m=A(h);N(function(){m()&&s({type:l.resetResize})},[p]);var x=i.useCallback(function(){return s({type:l.resetResize})},[s]);Object.assign(n,{resetResizing:x})}var mn={position:"absolute",top:0},kr=function(n){n.getTableBodyProps.push(Pt),n.getRowProps.push(Pt),n.getHeaderGroupProps.push(Pt),n.getFooterGroupProps.push(Pt),n.getHeaderProps.push(function(a,s){var d=s.column;return[a,{style:u({},mn,{left:d.totalLeft+"px",width:d.totalWidth+"px"})}]}),n.getCellProps.push(function(a,s){var d=s.cell;return[a,{style:u({},mn,{left:d.column.totalLeft+"px",width:d.column.totalWidth+"px"})}]}),n.getFooterProps.push(function(a,s){var d=s.column;return[a,{style:u({},mn,{left:d.totalLeft+"px",width:d.totalWidth+"px"})}]})};kr.pluginName="useAbsoluteLayout";var Pt=function(n,a){return[n,{style:{position:"relative",width:a.instance.totalColumnsWidth+"px"}}]},gn={display:"inline-block",boxSizing:"border-box"},vn=function(n,a){return[n,{style:{display:"flex",width:a.instance.totalColumnsWidth+"px"}}]},Tr=function(n){n.getRowProps.push(vn),n.getHeaderGroupProps.push(vn),n.getFooterGroupProps.push(vn),n.getHeaderProps.push(function(a,s){var d=s.column;return[a,{style:u({},gn,{width:d.totalWidth+"px"})}]}),n.getCellProps.push(function(a,s){var d=s.cell;return[a,{style:u({},gn,{width:d.column.totalWidth+"px"})}]}),n.getFooterProps.push(function(a,s){var d=s.column;return[a,{style:u({},gn,{width:d.totalWidth+"px"})}]})};function Vr(n){n.getTableProps.push(Ta),n.getRowProps.push(bn),n.getHeaderGroupProps.push(bn),n.getFooterGroupProps.push(bn),n.getHeaderProps.push(Va),n.getCellProps.push(La),n.getFooterProps.push($a)}Tr.pluginName="useBlockLayout",Vr.pluginName="useFlexLayout";var Ta=function(n,a){return[n,{style:{minWidth:a.instance.totalColumnsMinWidth+"px"}}]},bn=function(n,a){return[n,{style:{display:"flex",flex:"1 0 auto",minWidth:a.instance.totalColumnsMinWidth+"px"}}]},Va=function(n,a){var s=a.column;return[n,{style:{boxSizing:"border-box",flex:s.totalFlexWidth?s.totalFlexWidth+" 0 auto":void 0,minWidth:s.totalMinWidth+"px",width:s.totalWidth+"px"}}]},La=function(n,a){var s=a.cell;return[n,{style:{boxSizing:"border-box",flex:s.column.totalFlexWidth+" 0 auto",minWidth:s.column.totalMinWidth+"px",width:s.column.totalWidth+"px"}}]},$a=function(n,a){var s=a.column;return[n,{style:{boxSizing:"border-box",flex:s.totalFlexWidth?s.totalFlexWidth+" 0 auto":void 0,minWidth:s.totalMinWidth+"px",width:s.totalWidth+"px"}}]};function Lr(n){n.stateReducers.push(Wa),n.getTableProps.push(Ha),n.getHeaderProps.push(ja),n.getRowProps.push(za)}l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize",Lr.pluginName="useGridLayout";var Ha=function(n,a){var s=a.instance;return[n,{style:{display:"grid",gridTemplateColumns:s.visibleColumns.map(function(d){var h;return s.state.gridLayout.columnWidths[d.id]?s.state.gridLayout.columnWidths[d.id]+"px":(h=s.state.columnResizing)!=null&&h.isResizingColumn?s.state.gridLayout.startWidths[d.id]+"px":typeof d.width=="number"?d.width+"px":d.width}).join(" ")}}]},ja=function(n,a){var s=a.column;return[n,{id:"header-cell-"+s.id,style:{position:"sticky",gridColumn:"span "+s.totalVisibleHeaderCount}}]},za=function(n,a){var s=a.row;return s.isExpanded?[n,{style:{gridColumn:"1 / "+(s.cells.length+1)}}]:[n,{}]};function Wa(n,a,s,d){if(a.type===l.init)return u({gridLayout:{columnWidths:{}}},n);if(a.type===l.resetResize)return u({},n,{gridLayout:{columnWidths:{}}});if(a.type===l.columnStartResizing){var h=a.columnId,p=a.headerIdWidths,m=xn(h);if(m!==void 0){var x=d.visibleColumns.reduce(function(V,re){var j;return u({},V,((j={})[re.id]=xn(re.id),j))},{}),y=d.visibleColumns.reduce(function(V,re){var j;return u({},V,((j={})[re.id]=re.minWidth,j))},{}),C=d.visibleColumns.reduce(function(V,re){var j;return u({},V,((j={})[re.id]=re.maxWidth,j))},{}),T=p.map(function(V){var re=V[0];return[re,xn(re)]});return u({},n,{gridLayout:u({},n.gridLayout,{startWidths:x,minWidths:y,maxWidths:C,headerIdGridWidths:T,columnWidth:m})})}return n}if(a.type===l.columnResizing){var D=a.clientX,B=n.columnResizing.startX,R=n.gridLayout,k=R.columnWidth,L=R.minWidths,H=R.maxWidths,G=R.headerIdGridWidths,ie=(D-B)/k,z={};return(G===void 0?[]:G).forEach(function(V){var re=V[0],j=V[1];z[re]=Math.min(Math.max(L[re],j+j*ie),H[re])}),u({},n,{gridLayout:u({},n.gridLayout,{columnWidths:u({},n.gridLayout.columnWidths,{},z)})})}return a.type===l.columnDoneResizing?u({},n,{gridLayout:u({},n.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function xn(n){var a,s=(a=document.getElementById("header-cell-"+n))==null?void 0:a.offsetWidth;if(s!==void 0)return s}o._UNSTABLE_usePivotColumns=Fr,o.actions=l,o.defaultColumn=P,o.defaultGroupByFn=yr,o.defaultOrderByFn=Er,o.defaultRenderer=v,o.emptyRenderer=b,o.ensurePluginOrder=E,o.flexRender=W,o.functionalUpdate=$,o.loopHooks=S,o.makePropGetter=F,o.makeRenderer=ee,o.reduceHooks=w,o.safeUseLayoutEffect=X,o.useAbsoluteLayout=kr,o.useAsyncDebounce=function(n,a){a===void 0&&(a=0);var s=i.useRef({}),d=A(n),h=A(a);return i.useCallback(function(){var p=c(regeneratorRuntime.mark(function m(){var x,y,C,T=arguments;return regeneratorRuntime.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:for(x=T.length,y=new Array(x),C=0;C<x;C++)y[C]=T[C];return s.current.promise||(s.current.promise=new Promise(function(B,R){s.current.resolve=B,s.current.reject=R})),s.current.timeout&&clearTimeout(s.current.timeout),s.current.timeout=setTimeout(c(regeneratorRuntime.mark(function B(){return regeneratorRuntime.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return delete s.current.timeout,R.prev=1,R.t0=s.current,R.next=5,d().apply(void 0,y);case 5:R.t1=R.sent,R.t0.resolve.call(R.t0,R.t1),R.next=12;break;case 9:R.prev=9,R.t2=R.catch(1),s.current.reject(R.t2);case 12:return R.prev=12,delete s.current.promise,R.finish(12);case 15:case"end":return R.stop()}},B,null,[[1,9,12,15]])})),h()),D.abrupt("return",s.current.promise);case 5:case"end":return D.stop()}},m)}));return function(){return p.apply(this,arguments)}}(),[d,h])},o.useBlockLayout=Tr,o.useColumnOrder=Mr,o.useExpanded=or,o.useFilters=mr,o.useFlexLayout=Vr,o.useGetLatest=A,o.useGlobalFilter=gr,o.useGridLayout=Lr,o.useGroupBy=xr,o.useMountedLayoutEffect=N,o.usePagination=Rr,o.useResizeColumns=Br,o.useRowSelect=Ir,o.useRowState=Dr,o.useSortBy=Sr,o.useTable=function(n){for(var a=arguments.length,s=new Array(a>1?a-1:0),d=1;d<a;d++)s[d-1]=arguments[d];n=nr(n),s=[Rt].concat(s);var h=i.useRef({}),p=A(h.current);Object.assign(p(),u({},n,{plugins:s,hooks:Et()})),s.filter(Boolean).forEach(function(Y){Y(p().hooks)});var m=A(p().hooks);p().getHooks=m,delete p().hooks,Object.assign(p(),w(m().useOptions,nr(n)));var x=p(),y=x.data,C=x.columns,T=x.initialState,D=x.defaultColumn,B=x.getSubRows,R=x.getRowId,k=x.stateReducer,L=x.useControlledState,H=A(k),G=i.useCallback(function(Y,ge){if(!ge.type)throw console.info({action:ge}),new Error("Unknown Action 👆");return[].concat(m().stateReducers,Array.isArray(H())?H():[H()]).reduce(function(Se,Ve){return Ve(Se,ge,Y,p())||Se},Y)},[m,H,p]),ie=i.useReducer(G,void 0,function(){return G(T,{type:l.init})}),z=ie[0],V=ie[1],re=w([].concat(m().useControlledState,[L]),z,{instance:p()});Object.assign(p(),{state:re,dispatch:V});var j=i.useMemo(function(){return oe(w(m().columns,C,{instance:p()}))},[m,p,C].concat(w(m().columnsDeps,[],{instance:p()})));p().columns=j;var te=i.useMemo(function(){return w(m().allColumns,me(j),{instance:p()}).map(Fe)},[j,m,p].concat(w(m().allColumnsDeps,[],{instance:p()})));p().allColumns=te;var ae=i.useMemo(function(){for(var Y=[],ge=[],Se={},Ve=[].concat(te);Ve.length;){var Oe=Ve.shift();$i({data:y,rows:Y,flatRows:ge,rowsById:Se,column:Oe,getRowId:R,getSubRows:B,accessValueHooks:m().accessValue,getInstance:p})}return[Y,ge,Se]},[te,y,R,B,m,p]),q=ae[0],J=ae[1],ce=ae[2];Object.assign(p(),{rows:q,initialRows:[].concat(q),flatRows:J,rowsById:ce}),S(m().useInstanceAfterData,p());var ne=i.useMemo(function(){return w(m().visibleColumns,te,{instance:p()}).map(function(Y){return De(Y,D)})},[m,te,p,D].concat(w(m().visibleColumnsDeps,[],{instance:p()})));te=i.useMemo(function(){var Y=[].concat(ne);return te.forEach(function(ge){Y.find(function(Se){return Se.id===ge.id})||Y.push(ge)}),Y},[te,ne]),p().allColumns=te;var le=i.useMemo(function(){return w(m().headerGroups,Pe(ne,D),p())},[m,ne,D,p].concat(w(m().headerGroupsDeps,[],{instance:p()})));p().headerGroups=le;var se=i.useMemo(function(){return le.length?le[0].headers:[]},[le]);p().headers=se,p().flatHeaders=le.reduce(function(Y,ge){return[].concat(Y,ge.headers)},[]),S(m().useInstanceBeforeDimensions,p());var he=ne.filter(function(Y){return Y.isVisible}).map(function(Y){return Y.id}).sort().join("_");ne=i.useMemo(function(){return ne.filter(function(Y){return Y.isVisible})},[ne,he]),p().visibleColumns=ne;var _=rr(se),ue=_[0],be=_[1],Te=_[2];return p().totalColumnsMinWidth=ue,p().totalColumnsWidth=be,p().totalColumnsMaxWidth=Te,S(m().useInstance,p()),[].concat(p().flatHeaders,p().allColumns).forEach(function(Y){Y.render=ee(p(),Y),Y.getHeaderProps=F(m().getHeaderProps,{instance:p(),column:Y}),Y.getFooterProps=F(m().getFooterProps,{instance:p(),column:Y})}),p().headerGroups=i.useMemo(function(){return le.filter(function(Y,ge){return Y.headers=Y.headers.filter(function(Se){return Se.headers?function Ve(Oe){return Oe.filter(function(ot){return ot.headers?Ve(ot.headers):ot.isVisible}).length}(Se.headers):Se.isVisible}),!!Y.headers.length&&(Y.getHeaderGroupProps=F(m().getHeaderGroupProps,{instance:p(),headerGroup:Y,index:ge}),Y.getFooterGroupProps=F(m().getFooterGroupProps,{instance:p(),headerGroup:Y,index:ge}),!0)})},[le,p,m]),p().footerGroups=[].concat(p().headerGroups).reverse(),p().prepareRow=i.useCallback(function(Y){Y.getRowProps=F(m().getRowProps,{instance:p(),row:Y}),Y.allCells=te.map(function(ge){var Se=Y.values[ge.id],Ve={column:ge,row:Y,value:Se};return Ve.getCellProps=F(m().getCellProps,{instance:p(),cell:Ve}),Ve.render=ee(p(),ge,{row:Y,cell:Ve,value:Se}),Ve}),Y.cells=ne.map(function(ge){return Y.allCells.find(function(Se){return Se.column.id===ge.id})}),S(m().prepareRow,Y,{instance:p()})},[m,p,te,ne]),p().getTableProps=F(m().getTableProps,{instance:p()}),p().getTableBodyProps=F(m().getTableBodyProps,{instance:p()}),S(m().useFinalInstance,p()),p()},Object.defineProperty(o,"__esModule",{value:!0})})})(jn,jn.exports);var _d=jn.exports;Ii.exports=_d;var Nd=Ii.exports;const Ud=Z.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    padding: 18px;
    border-radius: 15px;
    background-color: ${e=>e.theme.colors.white};
  }
`,Xd=Z.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${e=>e.theme.colors.white};

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 668px;
  }

  @media screen and (min-width: 1440px) {
    width: 1204px;
  }
`,qd=Z.thead`
  background-color: ${e=>e.theme.colors.formBgColor};
`,Yd=Z.th`
  padding: 8px;
  font-weight: 500;
  font-size: 16px;
  color: ${e=>e.theme.colors.black};
  border-bottom: 1px solid ${e=>e.theme.colors.tableBorder};

  &:not(:last-child) {
    border-right: 1px solid ${e=>e.theme.colors.tableBorder};
  }

  &:first-child {
    border-radius: 8px 0 0 0;
  }

  &:last-child {
    padding: 0;
    border-radius: 0 8px 0 0;
  }

  @media screen and (min-width: 375px) {
    padding: 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 22px 20px 22px 22px;
    font-size: 18px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`,it=Z.td`
  padding: 16px 8px;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;

  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;

  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 375px) {
    padding: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`,Do=Z.tr`
  & > ${it}:not(:first-child) {
    border-left: 1px solid ${e=>e.theme.colors.tableBorder};
  }

  & > ${it}:not(:last-child) {
    border-right: 1px solid ${e=>e.theme.colors.tableBorder};
  }

  & > ${it} {
    border-bottom: 1px solid ${e=>e.theme.colors.tableBorder};
  }

  @media screen and (min-width: 375px) {
    & > ${it}:last-child {
      padding: 14px 9px;
    }
  }

  @media screen and (max-width: 767px) {
    &:last-child > ${it} {
      border-bottom: none;
    }
  }

  @media screen and (min-width: 768px) {
    & > ${it}:last-child {
      padding: 14px;
    }
  }
`,Kd=Z(Yd)`
  &:nth-child(1) {
    max-width: 90px;
  }

  &:nth-child(2) {
    max-width: 116px;
  }

  &:nth-child(3) {
    max-width: 99px;
  }

  &:nth-child(4) {
    max-width: 38px;
  }

  @media screen and (min-width: 375px) {
    /* &:nth-child(1) {
      width: 90px;
    }

    &:nth-child(2) {
      width: 116px;
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      width: 99px;
      padding: 16px 16px 12px 16px;
    }

    &:nth-child(4) {
      width: 38px;
    } */
    &:nth-child(2) {
      padding: 16px 14px 16px 16px;
    }

    &:nth-child(3) {
      padding: 16px 12px 16px 16px;
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      max-width: 180px;
    }

    &:nth-child(2) {
      max-width: 180px;
    }

    &:nth-child(3) {
      max-width: 160px;
    }

    &:nth-child(4) {
      max-width: 148px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(1) {
      width: 372px;
    }

    &:nth-child(2) {
      width: 364px;
    }

    &:nth-child(3) {
      width: 260px;
    }

    &:nth-child(4) {
      width: 208px;
    }
  }

  &.dictionary {
    &:nth-child(1) {
      max-width: 82px;
    }

    &:nth-child(2) {
      max-width: 116px;
    }

    &:nth-child(3) {
      max-width: 95px;
    }

    &:nth-child(4) {
      max-width: 50px;
    }

    @media screen and (min-width: 768px) {
      &:nth-child(1) {
        max-width: 160px;
      }

      &:nth-child(2) {
        max-width: 169px;
      }

      &:nth-child(3) {
        max-width: 151px;
      }

      &:nth-child(4) {
        max-width: 122px;
      }

      &:nth-child(5) {
        max-width: 66px;
      }
    }

    @media screen and (min-width: 1440px) {
      &:nth-child(1) {
        width: 280px;
      }

      &:nth-child(2) {
        width: 274px;
      }

      &:nth-child(3) {
        width: 260px;
      }

      &:nth-child(4) {
        width: 254px;
      }

      &:nth-child(5) {
        width: 136px;
      }
    }
  }
`,Zd=Z(it)`
  &:nth-child(1) {
    max-width: 90px;
  }

  &:nth-child(2) {
    max-width: 116px;
  }

  &:nth-child(3) {
    max-width: 99px;
  }

  &:nth-child(4) {
    max-width: 38px;
  }

  @media screen and (min-width: 375px) {
    /* &:nth-child(1) {
      width: 90px;
    }

    &:nth-child(2) {
      width: 116px;
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      width: 99px;
      padding: 16px 16px 12px 16px;
    }

    &:nth-child(4) {
      width: 38px;
      padding: 14px 9px;
    } */
    &:nth-child(2) {
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      padding: 16px 16px 12px 16px;
    }
  }

  /* @media screen and (min-width: 375px) {
    &:nth-child(2) {
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      padding: 16px 16px 12px 16px;
    }

    &:nth-child(4) {
      padding: 14px 9px;
    }
  } */

  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      max-width: 180px;
    }

    &:nth-child(2) {
      max-width: 180px;
    }

    &:nth-child(3) {
      max-width: 160px;
    }

    &:nth-child(4) {
      max-width: 148px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(1) {
      width: 372px;
    }

    &:nth-child(2) {
      width: 364px;
    }

    &:nth-child(3) {
      width: 260px;
    }

    &:nth-child(4) {
      width: 208px;
    }
  }
`,af=({columnsData:e,tableData:t,className:o})=>{const i=O.useMemo(()=>e,[e]),r=O.useMemo(()=>t,[t]),{getTableProps:c,getTableBodyProps:u,headerGroups:g,rows:f,prepareRow:l}=Nd.useTable({columns:i,data:r});return M.jsx(Ud,{children:M.jsxs(Xd,{...c(),children:[M.jsx(qd,{children:g.map(v=>M.jsx(Do,{...v.getHeaderGroupProps(),children:v.headers.map(b=>M.jsx(Kd,{...b.getHeaderProps(),className:o,children:b.render("Header")},b.id))},v.id))}),M.jsx("tbody",{...u(),children:f.map(v=>(l(v),M.jsx(Do,{...v.getRowProps(),children:v.cells.map(b=>M.jsx(Zd,{...b.getCellProps(),className:o,children:b.render("Cell")},b.column.id))},v.id)))})]})})};export{nf as D,rf as N,of as T,af as W,ef as a,tf as s};
