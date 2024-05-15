import{a as p,d as ze,j as v,g as Ne,L as Pe,i as K,b as Ie}from"./index-3c6b2a24.js";import{g as W,s as B,a as Ve}from"./index.esm-1808fbe4.js";const Re="/vocab-builder/assets/homebg-mobile-1x-9d83dd05.png",Me="/vocab-builder/assets/homebg-mobile-2x-febfa171.png",Ue="/vocab-builder/assets/homebg-desktop-1x-ffc1ff6b.png",qe=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`,Ze=p.div`
  flex-shrink: 0;
  width: 100%;
  background-repeat: no-repeat;
  background-image: image-set(url(${Re}) 1x, url(${Me}) 2x);

  @media screen and (max-width: 767px) {
    max-width: 247px;
    min-height: 191px;
  }

  @media screen and (min-width: 768px) {
    background-image: none;
  }

  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 435px;
    background-image: image-set(url(${Ue}) 1x, url(${ze}) 2x);
  }
`,Le=p.p`
  margin-bottom: 35px;
  font-weight: 400;
  font-size: 14px;
  color: ${r=>r.theme.colors.textColor};

  @media screen and (max-width: 767px) {
    display: ${({$register:r})=>{switch(r){case!0:return"none";default:return"block"}}};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.5;
  }
`,Ht=({$register:r})=>v.jsxs(qe,{$register:r,children:[v.jsx(Ze,{}),v.jsx(Le,{$register:r,children:"Word · Translation · Grammar · Progress"})]});var he=function(r,e,t){if(r&&"reportValidity"in r){var s=W(t,e);r.setCustomValidity(s&&s.message||""),r.reportValidity()}},ve=function(r,e){var t=function(n){var i=e.fields[n];i&&i.ref&&"reportValidity"in i.ref?he(i.ref,n,r):i.refs&&i.refs.forEach(function(a){return he(a,n,r)})};for(var s in e.fields)t(s)},Ge=function(r,e){e.shouldUseNativeValidation&&ve(r,e);var t={};for(var s in r){var n=W(e.fields,s),i=Object.assign(r[s]||{},{ref:n&&n.ref});if(Ye(e.names||Object.keys(r),s)){var a=Object.assign({},W(t,s));B(a,"root",i),B(t,s,a)}else B(t,s,i)}return t},Ye=function(r,e){return r.some(function(t){return t.startsWith(e+".")})};function Kt(r,e,t){return e===void 0&&(e={}),t===void 0&&(t={}),function(s,n,i){try{return Promise.resolve(function(a,o){try{var u=(e.context,Promise.resolve(r[t.mode==="sync"?"validateSync":"validate"](s,Object.assign({abortEarly:!1},e,{context:n}))).then(function(l){return i.shouldUseNativeValidation&&ve({},i),{values:t.raw?s:l,errors:{}}}))}catch(l){return o(l)}return u&&u.then?u.then(void 0,o):u}(0,function(a){if(!a.inner)throw a;return{values:{},errors:Ge((o=a,u=!i.shouldUseNativeValidation&&i.criteriaMode==="all",(o.inner||[]).reduce(function(l,c){if(l[c.path]||(l[c.path]={message:c.message,type:c.type}),u){var f=l[c.path].types,d=f&&f[c.type];l[c.path]=Ve(c.path,u,l,c.type,d?[].concat(d,c.message):c.message)}return l},{})),i)};var o,u}))}catch(a){return Promise.reject(a)}}}function D(r){this._maxSize=r,this.clear()}D.prototype.clear=function(){this._size=0,this._values=Object.create(null)};D.prototype.get=function(r){return this._values[r]};D.prototype.set=function(r,e){return this._size>=this._maxSize&&this.clear(),r in this._values||this._size++,this._values[r]=e};var Be=/[^.^\]^[]+|(?=\[\]|\.\.)/g,$e=/^\d+$/,Xe=/^\d/,He=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Ke=/^\s*(['"]?)(.*?)(\1)\s*$/,re=512,pe=new D(re),me=new D(re),xe=new D(re),T={Cache:D,split:J,normalizePath:X,setter:function(r){var e=X(r);return me.get(r)||me.set(r,function(s,n){for(var i=0,a=e.length,o=s;i<a-1;){var u=e[i];if(u==="__proto__"||u==="constructor"||u==="prototype")return s;o=o[e[i++]]}o[e[i]]=n})},getter:function(r,e){var t=X(r);return xe.get(r)||xe.set(r,function(n){for(var i=0,a=t.length;i<a;)if(n!=null||!e)n=n[t[i++]];else return;return n})},join:function(r){return r.reduce(function(e,t){return e+(se(t)||$e.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(r,e,t){We(Array.isArray(r)?r:J(r),e,t)}};function X(r){return pe.get(r)||pe.set(r,J(r).map(function(e){return e.replace(Ke,"$2")}))}function J(r){return r.match(Be)||[""]}function We(r,e,t){var s=r.length,n,i,a,o;for(i=0;i<s;i++)n=r[i],n&&(et(n)&&(n='"'+n+'"'),o=se(n),a=!o&&/^\d+$/.test(n),e.call(t,n,o,a,i,r))}function se(r){return typeof r=="string"&&r&&["'",'"'].indexOf(r.charAt(0))!==-1}function Je(r){return r.match(Xe)&&!r.match($e)}function Qe(r){return He.test(r)}function et(r){return!se(r)&&(Je(r)||Qe(r))}const tt=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,U=r=>r.match(tt)||[],q=r=>r[0].toUpperCase()+r.slice(1),ne=(r,e)=>U(r).join(e).toLowerCase(),_e=r=>U(r).reduce((e,t)=>`${e}${e?t[0].toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()}`,""),rt=r=>q(_e(r)),st=r=>ne(r,"_"),nt=r=>ne(r,"-"),it=r=>q(ne(r," ")),at=r=>U(r).map(q).join(" ");var H={words:U,upperFirst:q,camelCase:_e,pascalCase:rt,snakeCase:st,kebabCase:nt,sentenceCase:it,titleCase:at},ie={exports:{}};ie.exports=function(r){return Fe(ot(r),r)};ie.exports.array=Fe;function Fe(r,e){var t=r.length,s=new Array(t),n={},i=t,a=ut(e),o=lt(r);for(e.forEach(function(l){if(!o.has(l[0])||!o.has(l[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)n[i]||u(r[i],i,new Set);return s;function u(l,c,f){if(f.has(l)){var d;try{d=", node was:"+JSON.stringify(l)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!o.has(l))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(l));if(!n[c]){n[c]=!0;var m=a.get(l)||new Set;if(m=Array.from(m),c=m.length){f.add(l);do{var y=m[--c];u(y,o.get(y),f)}while(c);f.delete(l)}s[--t]=l}}}function ot(r){for(var e=new Set,t=0,s=r.length;t<s;t++){var n=r[t];e.add(n[0]),e.add(n[1])}return Array.from(e)}function ut(r){for(var e=new Map,t=0,s=r.length;t<s;t++){var n=r[t];e.has(n[0])||e.set(n[0],new Set),e.has(n[1])||e.set(n[1],new Set),e.get(n[0]).add(n[1])}return e}function lt(r){for(var e=new Map,t=0,s=r.length;t<s;t++)e.set(r[t],t);return e}var ct=ie.exports;const ft=Ne(ct),dt=Object.prototype.toString,ht=Error.prototype.toString,pt=RegExp.prototype.toString,mt=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",xt=/^Symbol\((.*)\)(.*)$/;function gt(r){return r!=+r?"NaN":r===0&&1/r<0?"-0":""+r}function ge(r,e=!1){if(r==null||r===!0||r===!1)return""+r;const t=typeof r;if(t==="number")return gt(r);if(t==="string")return e?`"${r}"`:r;if(t==="function")return"[Function "+(r.name||"anonymous")+"]";if(t==="symbol")return mt.call(r).replace(xt,"Symbol($1)");const s=dt.call(r).slice(8,-1);return s==="Date"?isNaN(r.getTime())?""+r:r.toISOString(r):s==="Error"||r instanceof Error?"["+ht.call(r)+"]":s==="RegExp"?pt.call(r):null}function E(r,e){let t=ge(r,e);return t!==null?t:JSON.stringify(r,function(s,n){let i=ge(this[s],e);return i!==null?i:n},2)}function Ee(r){return r==null?[]:[].concat(r)}let ke,Se,Oe,bt=/\$\{\s*(\w+)\s*\}/g;ke=Symbol.toStringTag;class be{constructor(e,t,s,n){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[ke]="Error",this.name="ValidationError",this.value=t,this.path=s,this.type=n,this.errors=[],this.inner=[],Ee(e).forEach(i=>{if(g.isError(i)){this.errors.push(...i.errors);const a=i.inner.length?i.inner:[i];this.inner.push(...a)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Se=Symbol.hasInstance;Oe=Symbol.toStringTag;class g extends Error{static formatError(e,t){const s=t.label||t.path||"this";return s!==t.path&&(t=Object.assign({},t,{path:s})),typeof e=="string"?e.replace(bt,(n,i)=>E(t[i])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,s,n,i){const a=new be(e,t,s,n);if(i)return a;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Oe]="Error",this.name=a.name,this.message=a.message,this.type=a.type,this.value=a.value,this.path=a.path,this.errors=a.errors,this.inner=a.inner,Error.captureStackTrace&&Error.captureStackTrace(this,g)}static[Se](e){return be[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let w={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:r,type:e,value:t,originalValue:s})=>{const n=s!=null&&s!==t?` (cast from the value \`${E(s,!0)}\`).`:".";return e!=="mixed"?`${r} must be a \`${e}\` type, but the final value was: \`${E(t,!0)}\``+n:`${r} must match the configured type. The validated value was: \`${E(t,!0)}\``+n}},x={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},yt={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Q={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},wt={isValue:"${path} field must be ${value}"},ee={noUnknown:"${path} field has unspecified keys: ${unknown}"},vt={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},$t={notType:r=>{const{path:e,value:t,spec:s}=r,n=s.types.length;if(Array.isArray(t)){if(t.length<n)return`${e} tuple value has too few items, expected a length of ${n} but got ${t.length} for value: \`${E(t,!0)}\``;if(t.length>n)return`${e} tuple value has too many items, expected a length of ${n} but got ${t.length} for value: \`${E(t,!0)}\``}return g.formatError(w.notType,r)}};Object.assign(Object.create(null),{mixed:w,string:x,number:yt,date:Q,object:ee,array:vt,boolean:wt,tuple:$t});const ae=r=>r&&r.__isYupSchema__;class R{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:s,then:n,otherwise:i}=t,a=typeof s=="function"?s:(...o)=>o.every(u=>u===s);return new R(e,(o,u)=>{var l;let c=a(...o)?n:i;return(l=c==null?void 0:c(u))!=null?l:u})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let s=this.refs.map(i=>i.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),n=this.fn(s,e,t);if(n===void 0||n===e)return e;if(!ae(n))throw new TypeError("conditions must return a schema object");return n.resolve(t)}}const I={context:"$",value:"."};class A{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===I.context,this.isValue=this.key[0]===I.value,this.isSibling=!this.isContext&&!this.isValue;let s=this.isContext?I.context:this.isValue?I.value:"";this.path=this.key.slice(s.length),this.getter=this.path&&T.getter(this.path,!0),this.map=t.map}getValue(e,t,s){let n=this.isContext?s:this.isValue?e:t;return this.getter&&(n=this.getter(n||{})),this.map&&(n=this.map(n)),n}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}A.prototype.__isYupRef=!0;const O=r=>r==null;function j(r){function e({value:t,path:s="",options:n,originalValue:i,schema:a},o,u){const{name:l,test:c,params:f,message:d,skipAbsent:m}=r;let{parent:y,context:b,abortEarly:F=a.spec.abortEarly,disableStackTrace:N=a.spec.disableStackTrace}=n;function k(h){return A.isRef(h)?h.getValue(t,y,b):h}function ue(h={}){const S=Object.assign({value:t,originalValue:i,label:a.spec.label,path:h.path||s,spec:a.spec,disableStackTrace:h.disableStackTrace||N},f,h.params);for(const de of Object.keys(S))S[de]=k(S[de]);const fe=new g(g.formatError(h.message||d,S),t,S.path,h.type||l,S.disableStackTrace);return fe.params=S,fe}const L=F?o:u;let G={path:s,parent:y,type:l,from:n.from,createError:ue,resolve:k,options:n,originalValue:i,schema:a};const Y=h=>{g.isError(h)?L(h):h?u(null):L(ue())},le=h=>{g.isError(h)?L(h):o(h)};if(m&&O(t))return Y(!0);let P;try{var ce;if(P=c.call(G,t,G),typeof((ce=P)==null?void 0:ce.then)=="function"){if(n.sync)throw new Error(`Validation test of type: "${G.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(P).then(Y,le)}}catch(h){le(h);return}Y(P)}return e.OPTIONS=r,e}function _t(r,e,t,s=t){let n,i,a;return e?(T.forEach(e,(o,u,l)=>{let c=u?o.slice(1,o.length-1):o;r=r.resolve({context:s,parent:n,value:t});let f=r.type==="tuple",d=l?parseInt(c,10):0;if(r.innerType||f){if(f&&!l)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(t&&d>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${e}. because there is no value at that index. `);n=t,t=t&&t[d],r=f?r.spec.types[d]:r.innerType}if(!l){if(!r.fields||!r.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${r.type}")`);n=t,t=t&&t[c],r=r.fields[c]}i=c,a=u?"["+o+"]":"."+o}),{schema:r,parent:n,parentPath:i}):{parent:n,parentPath:e,schema:r}}class M extends Set{describe(){const e=[];for(const t of this.values())e.push(A.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const s of this.values())t.push(e(s));return t}clone(){return new M(this.values())}merge(e,t){const s=this.clone();return e.forEach(n=>s.add(n)),t.forEach(n=>s.delete(n)),s}}function C(r,e=new Map){if(ae(r)||!r||typeof r!="object")return r;if(e.has(r))return e.get(r);let t;if(r instanceof Date)t=new Date(r.getTime()),e.set(r,t);else if(r instanceof RegExp)t=new RegExp(r),e.set(r,t);else if(Array.isArray(r)){t=new Array(r.length),e.set(r,t);for(let s=0;s<r.length;s++)t[s]=C(r[s],e)}else if(r instanceof Map){t=new Map,e.set(r,t);for(const[s,n]of r.entries())t.set(s,C(n,e))}else if(r instanceof Set){t=new Set,e.set(r,t);for(const s of r)t.add(C(s,e))}else if(r instanceof Object){t={},e.set(r,t);for(const[s,n]of Object.entries(r))t[s]=C(n,e)}else throw Error(`Unable to clone ${r}`);return t}class ${constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new M,this._blacklist=new M,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(w.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=C(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let s=e(this);return this._mutate=t,s}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,s=e.clone();const n=Object.assign({},t.spec,s.spec);return s.spec=n,s.internalTests=Object.assign({},t.internalTests,s.internalTests),s._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),s._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),s.tests=t.tests,s.exclusiveTests=t.exclusiveTests,s.withMutation(i=>{e.tests.forEach(a=>{i.test(a.OPTIONS)})}),s.transforms=[...t.transforms,...s.transforms],s}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let s=t.conditions;t=t.clone(),t.conditions=[],t=s.reduce((n,i)=>i.resolve(n,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,s,n,i;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(s=e.abortEarly)!=null?s:this.spec.abortEarly,recursive:(n=e.recursive)!=null?n:this.spec.recursive,disableStackTrace:(i=e.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(e,t={}){let s=this.resolve(Object.assign({value:e},t)),n=t.assert==="ignore-optionality",i=s._cast(e,t);if(t.assert!==!1&&!s.isType(i)){if(n&&O(i))return i;let a=E(e),o=E(i);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${a} 
`+(o!==a?`result of cast: ${o}`:""))}return i}_cast(e,t){let s=e===void 0?e:this.transforms.reduce((n,i)=>i.call(this,n,e,this),e);return s===void 0&&(s=this.getDefault(t)),s}_validate(e,t={},s,n){let{path:i,originalValue:a=e,strict:o=this.spec.strict}=t,u=e;o||(u=this._cast(u,Object.assign({assert:!1},t)));let l=[];for(let c of Object.values(this.internalTests))c&&l.push(c);this.runTests({path:i,value:u,originalValue:a,options:t,tests:l},s,c=>{if(c.length)return n(c,u);this.runTests({path:i,value:u,originalValue:a,options:t,tests:this.tests},s,n)})}runTests(e,t,s){let n=!1,{tests:i,value:a,originalValue:o,path:u,options:l}=e,c=b=>{n||(n=!0,t(b,a))},f=b=>{n||(n=!0,s(b,a))},d=i.length,m=[];if(!d)return f([]);let y={value:a,originalValue:o,path:u,options:l,schema:this};for(let b=0;b<i.length;b++){const F=i[b];F(y,c,function(k){k&&(Array.isArray(k)?m.push(...k):m.push(k)),--d<=0&&f(m)})}}asNestedTest({key:e,index:t,parent:s,parentPath:n,originalParent:i,options:a}){const o=e??t;if(o==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof o=="number";let l=s[o];const c=Object.assign({},a,{strict:!0,parent:s,value:l,originalValue:i[o],key:void 0,[u?"index":"key"]:o,path:u||o.includes(".")?`${n||""}[${u?o:`"${o}"`}]`:(n?`${n}.`:"")+e});return(f,d,m)=>this.resolve(c)._validate(l,c,d,m)}validate(e,t){var s;let n=this.resolve(Object.assign({},t,{value:e})),i=(s=t==null?void 0:t.disableStackTrace)!=null?s:n.spec.disableStackTrace;return new Promise((a,o)=>n._validate(e,t,(u,l)=>{g.isError(u)&&(u.value=l),o(u)},(u,l)=>{u.length?o(new g(u,l,void 0,void 0,i)):a(l)}))}validateSync(e,t){var s;let n=this.resolve(Object.assign({},t,{value:e})),i,a=(s=t==null?void 0:t.disableStackTrace)!=null?s:n.spec.disableStackTrace;return n._validate(e,Object.assign({},t,{sync:!0}),(o,u)=>{throw g.isError(o)&&(o.value=u),o},(o,u)=>{if(o.length)throw new g(o,e,void 0,void 0,a);i=u}),i}isValid(e,t){return this.validate(e,t).then(()=>!0,s=>{if(g.isError(s))return!1;throw s})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(s){if(g.isError(s))return!1;throw s}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):C(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const s=this.clone({nullable:e});return s.internalTests.nullable=j({message:t,name:"nullable",test(n){return n===null?this.schema.spec.nullable:!0}}),s}optionality(e,t){const s=this.clone({optional:e});return s.internalTests.optionality=j({message:t,name:"optionality",test(n){return n===void 0?this.schema.spec.optional:!0}}),s}optional(){return this.optionality(!0)}defined(e=w.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=w.notNull){return this.nullability(!1,e)}required(e=w.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=w.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let s=this.clone(),n=j(t),i=t.exclusive||t.name&&s.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(s.exclusiveTests[t.name]=!!t.exclusive),s.tests=s.tests.filter(a=>!(a.OPTIONS.name===t.name&&(i||a.OPTIONS.test===n.OPTIONS.test))),s.tests.push(n),s}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let s=this.clone(),n=Ee(e).map(i=>new A(i));return n.forEach(i=>{i.isSibling&&s.deps.push(i.key)}),s.conditions.push(typeof t=="function"?new R(n,t):R.fromOptions(n,t)),s}typeError(e){let t=this.clone();return t.internalTests.typeError=j({message:e,name:"typeError",skipAbsent:!0,test(s){return this.schema._typeCheck(s)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=w.oneOf){let s=this.clone();return e.forEach(n=>{s._whitelist.add(n),s._blacklist.delete(n)}),s.internalTests.whiteList=j({message:t,name:"oneOf",skipAbsent:!0,test(n){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(n)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),s}notOneOf(e,t=w.notOneOf){let s=this.clone();return e.forEach(n=>{s._blacklist.add(n),s._whitelist.delete(n)}),s.internalTests.blacklist=j({message:t,name:"notOneOf",test(n){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(n)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),s}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:s,meta:n,optional:i,nullable:a}=t.spec;return{meta:n,label:s,optional:i,nullable:a,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,l,c)=>c.findIndex(f=>f.name===u.name)===l)}}}$.prototype.__isYupSchema__=!0;for(const r of["validate","validateSync"])$.prototype[`${r}At`]=function(e,t,s={}){const{parent:n,parentPath:i,schema:a}=_t(this,e,t,s.context);return a[r](n&&n[i],Object.assign({},s,{parent:n,path:e}))};for(const r of["equals","is"])$.prototype[r]=$.prototype.oneOf;for(const r of["not","nope"])$.prototype[r]=$.prototype.notOneOf;const Ft=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Et(r){const e=te(r);if(!e)return Date.parse?Date.parse(r):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function te(r){var e,t;const s=Ft.exec(r);return s?{year:_(s[1]),month:_(s[2],1)-1,day:_(s[3],1),hour:_(s[4]),minute:_(s[5]),second:_(s[6]),millisecond:s[7]?_(s[7].substring(0,3)):0,precision:(e=(t=s[7])==null?void 0:t.length)!=null?e:void 0,z:s[8]||void 0,plusMinus:s[9]||void 0,hourOffset:_(s[10]),minuteOffset:_(s[11])}:null}function _(r,e=0){return Number(r)||e}let kt=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,St=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Ot=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Tt="^\\d{4}-\\d{2}-\\d{2}",Dt="\\d{2}:\\d{2}:\\d{2}",At="(([+-]\\d{2}(:?\\d{2})?)|Z)",jt=new RegExp(`${Tt}T${Dt}(\\.\\d+)?${At}$`),Ct=r=>O(r)||r===r.trim(),zt={}.toString();function z(){return new Te}class Te extends ${constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,s)=>{if(!s.spec.coerce||s.isType(e)||Array.isArray(e))return e;const n=e!=null&&e.toString?e.toString():e;return n===zt?e:n})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||w.required,name:"required",skipAbsent:!0,test:s=>!!s.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=x.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(s){return s.length===this.resolve(e)}})}min(e,t=x.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s.length>=this.resolve(e)}})}max(e,t=x.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(s){return s.length<=this.resolve(e)}})}matches(e,t){let s=!1,n,i;return t&&(typeof t=="object"?{excludeEmptyString:s=!1,message:n,name:i}=t:n=t),this.test({name:i||"matches",message:n||x.matches,params:{regex:e},skipAbsent:!0,test:a=>a===""&&s||a.search(e)!==-1})}email(e=x.email){return this.matches(kt,{name:"email",message:e,excludeEmptyString:!0})}url(e=x.url){return this.matches(St,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=x.uuid){return this.matches(Ot,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t="",s,n;return e&&(typeof e=="object"?{message:t="",allowOffset:s=!1,precision:n=void 0}=e:t=e),this.matches(jt,{name:"datetime",message:t||x.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:t||x.datetime_offset,params:{allowOffset:s},skipAbsent:!0,test:i=>{if(!i||s)return!0;const a=te(i);return a?!!a.z:!1}}).test({name:"datetime_precision",message:t||x.datetime_precision,params:{precision:n},skipAbsent:!0,test:i=>{if(!i||n==null)return!0;const a=te(i);return a?a.precision===n:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=x.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:Ct})}lowercase(e=x.lowercase){return this.transform(t=>O(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>O(t)||t===t.toLowerCase()})}uppercase(e=x.uppercase){return this.transform(t=>O(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>O(t)||t===t.toUpperCase()})}}z.prototype=Te.prototype;let Nt=new Date(""),Pt=r=>Object.prototype.toString.call(r)==="[object Date]";class Z extends ${constructor(){super({type:"date",check(e){return Pt(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,s)=>!s.spec.coerce||s.isType(e)||e===null?e:(e=Et(e),isNaN(e)?Z.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let s;if(A.isRef(e))s=e;else{let n=this.cast(e);if(!this._typeCheck(n))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);s=n}return s}min(e,t=Q.min){let s=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(n){return n>=this.resolve(s)}})}max(e,t=Q.max){let s=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(n){return n<=this.resolve(s)}})}}Z.INVALID_DATE=Nt;Z.prototype;function It(r,e=[]){let t=[],s=new Set,n=new Set(e.map(([a,o])=>`${a}-${o}`));function i(a,o){let u=T.split(a)[0];s.add(u),n.has(`${o}-${u}`)||t.push([o,u])}for(const a of Object.keys(r)){let o=r[a];s.add(a),A.isRef(o)&&o.isSibling?i(o.path,a):ae(o)&&"deps"in o&&o.deps.forEach(u=>i(u,a))}return ft.array(Array.from(s),t).reverse()}function ye(r,e){let t=1/0;return r.some((s,n)=>{var i;if((i=e.path)!=null&&i.includes(s))return t=n,!0}),t}function De(r){return(e,t)=>ye(r,e)-ye(r,t)}const Vt=(r,e,t)=>{if(typeof r!="string")return r;let s=r;try{s=JSON.parse(r)}catch{}return t.isType(s)?s:r};function V(r){if("fields"in r){const e={};for(const[t,s]of Object.entries(r.fields))e[t]=V(s);return r.setFields(e)}if(r.type==="array"){const e=r.optional();return e.innerType&&(e.innerType=V(e.innerType)),e}return r.type==="tuple"?r.optional().clone({types:r.spec.types.map(V)}):"optional"in r?r.optional():r}const Rt=(r,e)=>{const t=[...T.normalizePath(e)];if(t.length===1)return t[0]in r;let s=t.pop(),n=T.getter(T.join(t),!0)(r);return!!(n&&s in n)};let we=r=>Object.prototype.toString.call(r)==="[object Object]";function Mt(r,e){let t=Object.keys(r.fields);return Object.keys(e).filter(s=>t.indexOf(s)===-1)}const Ut=De([]);function oe(r){return new Ae(r)}class Ae extends ${constructor(e){super({type:"object",check(t){return we(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=Ut,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var s;let n=super._cast(e,t);if(n===void 0)return this.getDefault(t);if(!this._typeCheck(n))return n;let i=this.fields,a=(s=t.stripUnknown)!=null?s:this.spec.noUnknown,o=[].concat(this._nodes,Object.keys(n).filter(f=>!this._nodes.includes(f))),u={},l=Object.assign({},t,{parent:u,__validating:t.__validating||!1}),c=!1;for(const f of o){let d=i[f],m=f in n;if(d){let y,b=n[f];l.path=(t.path?`${t.path}.`:"")+f,d=d.resolve({value:b,context:t.context,parent:u});let F=d instanceof $?d.spec:void 0,N=F==null?void 0:F.strict;if(F!=null&&F.strip){c=c||f in n;continue}y=!t.__validating||!N?d.cast(n[f],l):n[f],y!==void 0&&(u[f]=y)}else m&&!a&&(u[f]=n[f]);(m!==f in u||u[f]!==n[f])&&(c=!0)}return c?u:n}_validate(e,t={},s,n){let{from:i=[],originalValue:a=e,recursive:o=this.spec.recursive}=t;t.from=[{schema:this,value:a},...i],t.__validating=!0,t.originalValue=a,super._validate(e,t,s,(u,l)=>{if(!o||!we(l)){n(u,l);return}a=a||l;let c=[];for(let f of this._nodes){let d=this.fields[f];!d||A.isRef(d)||c.push(d.asNestedTest({options:t,key:f,parent:l,parentPath:t.path,originalParent:a}))}this.runTests({tests:c,value:l,originalValue:a,options:t},s,f=>{n(f.sort(this._sortErrors).concat(u),l)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),s=t.fields;for(let[n,i]of Object.entries(this.fields)){const a=s[n];s[n]=a===void 0?i:a}return t.withMutation(n=>n.setFields(s,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(s=>{var n;const i=this.fields[s];let a=e;(n=a)!=null&&n.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),t[s]=i&&"getDefault"in i?i.getDefault(a):void 0}),t}setFields(e,t){let s=this.clone();return s.fields=e,s._nodes=It(e,t),s._sortErrors=De(Object.keys(e)),t&&(s._excludedEdges=t),s}shape(e,t=[]){return this.clone().withMutation(s=>{let n=s._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),n=[...s._excludedEdges,...t]),s.setFields(Object.assign(s.fields,e),n)})}partial(){const e={};for(const[t,s]of Object.entries(this.fields))e[t]="optional"in s&&s.optional instanceof Function?s.optional():s;return this.setFields(e)}deepPartial(){return V(this)}pick(e){const t={};for(const s of e)this.fields[s]&&(t[s]=this.fields[s]);return this.setFields(t,this._excludedEdges.filter(([s,n])=>e.includes(s)&&e.includes(n)))}omit(e){const t=[];for(const s of Object.keys(this.fields))e.includes(s)||t.push(s);return this.pick(t)}from(e,t,s){let n=T.getter(e,!0);return this.transform(i=>{if(!i)return i;let a=i;return Rt(i,e)&&(a=Object.assign({},i),s||delete a[e],a[t]=n(i)),a})}json(){return this.transform(Vt)}noUnknown(e=!0,t=ee.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let s=this.test({name:"noUnknown",exclusive:!0,message:t,test(n){if(n==null)return!0;const i=Mt(this.schema,n);return!e||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return s.spec.noUnknown=e,s}unknown(e=!0,t=ee.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const s={};for(const n of Object.keys(t))s[e(n)]=t[n];return s})}camelCase(){return this.transformKeys(H.camelCase)}snakeCase(){return this.transformKeys(H.snakeCase)}constantCase(){return this.transformKeys(e=>H.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),s=super.describe(e);s.fields={};for(const[i,a]of Object.entries(t.fields)){var n;let o=e;(n=o)!=null&&n.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[i]})),s.fields[i]=a.describe(o)}return s}}oe.prototype=Ae.prototype;const je=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,Ce=/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,Wt=oe().shape({email:z().trim().required("Email is required").matches(je,"Please enter a valid email"),password:z().trim().required("Password is required").matches(Ce,"The password must consist of 6 English letters and 1 number")}),Jt=oe().shape({name:z().trim().required("Name is required").min(2,"Name must contain at least 2 characters").max(40,"Too long name"),email:z().trim().required("Email is required").matches(je,"Please enter a valid email"),password:z().trim().required("Password is required").matches(Ce,"The password must consist of 6 English letters and 1 number")}),Qt=p.div`
  position: absolute;
  right: 0;
  width: 100%;
  padding: 32px 16px 57px 16px;
  border-radius: 25px 25px 0 0;
  background-color: ${r=>r.theme.colors.formBgColor};

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    position: static;
    width: 627px;
    padding: 48px 64px;
    border-radius: 30px;
  }
`,er=p.form`
  margin-bottom: 16px;
`,tr=p.h1`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${r=>r.theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 1.2;
  }
`,rr=p.p`
  /* margin-bottom: 16px; */
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${r=>r.theme.colors.textColor};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({$register:r})=>{switch(r){case!0:return"16px";default:return"40px"}}};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 1.5;
  }
`,sr=p.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`,nr=p.label`
  position: relative;
  width: 100%;
  height: 56px;

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`,ir=p.input`
  width: 100%;
  padding: 16px 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${r=>r.theme.colors.black};
  background-color: inherit;
  border: 1px solid;
  border-color: ${r=>r.theme.colors.borderColor};
  border-radius: 15px;
  outline: none;
  transition: border-color 250ms ${r=>r.theme.transition};

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${r=>r.theme.colors.black};
  }

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  &.error {
    border-color: ${r=>r.theme.colors.errorColor};
  }

  &.valid {
    border-color: ${r=>r.theme.colors.successColor};
  }

  &:hover,
  &:focus {
    border-color: ${r=>r.theme.colors.mainGreen};
  }
`,ar=p.button`
  width: 100%;
  padding: 16px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${r=>r.theme.colors.white};
  border-radius: 30px;
  background-color: ${r=>r.theme.colors.mainGreen};
  transition: background-color 250ms ${r=>r.theme.transition};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
  }

  &:hover,
  &:focus {
    background-color: ${r=>r.theme.colors.mainGreenHover};
  }
`,or=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ur=p(Pe)`
  position: relative;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${r=>r.theme.colors.linkColor};
  transition: color 250ms ${r=>r.theme.transition};

  &::after {
    content: "";
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${r=>r.theme.colors.linkColor};
    transition: background-color 250ms ${r=>r.theme.transition};
  }

  &:hover,
  &:focus {
    color: ${r=>r.theme.colors.black};

    &::after {
      background-color: ${r=>r.theme.colors.black};
    }
  }
`,qt=p.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  width: 20px;
  height: 20px;
`,Zt=p.svg`
  width: 20px;
  height: 20px;
  fill: ${r=>r.theme.colors.black};
`,lr=({isVisiblePassword:r,changeVisibility:e})=>v.jsx(qt,{type:"button",onClick:()=>e(),children:v.jsx(Zt,{children:r?v.jsx("use",{href:`${K}#eye`}):v.jsx("use",{href:`${K}#eye-off`})})}),cr=()=>{const[r,e]=Ie.useState(!1);return{isVisiblePassword:r,changeVisibility:()=>e(!r)}},Lt=p.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  vertical-align: middle;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
    top: -1px;
  }
`,Gt=p.span`
  position: absolute;
  left: 0;
  top: 56px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  transition: color 250ms ${r=>r.theme.transition};
  color: ${({$error:r})=>{switch(r){case!0:return e=>e.theme.colors.errorColor;default:return e=>e.theme.colors.successColor}}};

  @media screen and (min-width: 768px) {
    top: 58px;
  }
`,fr=({children:r,error:e})=>v.jsxs(Gt,{$error:e,children:[v.jsx(Lt,{children:v.jsx("use",{href:`${K}#${e?"error":"success"}`})}),r]});export{Qt as F,sr as I,nr as L,ur as N,lr as P,rr as S,tr as T,er as a,ir as b,fr as c,ar as d,or as e,Ht as f,Wt as l,Kt as o,Jt as r,cr as u};
