import{b as Se,k as Er,a as J,j as N,i as _t,u as Ir,m as Fr,n as Lt,o as Gr,p as kr,q as Ar}from"./index-671224a3.js";import{D as zr}from"./Dashboard-f105c7d2.js";var Vt={exports:{}},Oe={exports:{}};(function(k,oe){(function(z,x){x(oe,Se)})(Er,function(z,x){function ge(e,t,n,r,i,o,u){try{var s=e[o](u),l=s.value}catch(d){return void n(d)}s.done?t(l):Promise.resolve(l).then(r,i)}function he(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function u(l){ge(o,r,i,u,s,"next",l)}function s(l){ge(o,r,i,u,s,"throw",l)}u(void 0)})}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function Ce(e){var t=function(n,r){if(typeof n!="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var o=i.call(n,r||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}(e,"string");return typeof t=="symbol"?t:String(t)}x=x&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x;var a={init:"init"},ee=function(e){var t=e.value;return t===void 0?"":t},Pe=function(){return x.createElement(x.Fragment,null," ")},de={Cell:ee,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function Le(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(r,i){var o=i.style,u=i.className;return r=p({},r,{},se(i,["style","className"])),o&&(r.style=r.style?p({},r.style||{},{},o||{}):o),u&&(r.className=r.className?r.className+" "+u:u),r.className===""&&delete r.className,r},{})}var V=function(e,t){return t===void 0&&(t={}),function(n){return n===void 0&&(n={}),[].concat(e,[n]).reduce(function(r,i){return function o(u,s,l){return typeof s=="function"?o({},s(u,l)):Array.isArray(s)?Le.apply(void 0,[u].concat(s)):Le(u,s)}(r,i,p({},t,{userProps:n}))},{})}},Y=function(e,t,n,r){return n===void 0&&(n={}),e.reduce(function(i,o){return o(i,n)},t)},le=function(e,t,n){return n===void 0&&(n={}),e.forEach(function(r){r(t,n)})};function ie(e,t,n,r){e.findIndex(function(i){return i.pluginName===n}),t.forEach(function(i){e.findIndex(function(o){return o.pluginName===i})})}function ne(e,t){return typeof e=="function"?e(t):e}function L(e){var t=x.useRef();return t.current=e,x.useCallback(function(){return t.current},[])}var De=typeof document<"u"?x.useLayoutEffect:x.useEffect;function Q(e,t){var n=x.useRef(!1);De(function(){n.current&&e(),n.current=!0},t)}function Be(e,t,n){return n===void 0&&(n={}),function(r,i){i===void 0&&(i={});var o=typeof r=="string"?t[r]:r;if(o===void 0)throw console.info(t),new Error("Renderer Error ☝️");return Ne(o,p({},e,{column:t},n,{},i))}}function Ne(e,t){return function(r){return typeof r=="function"&&(i=Object.getPrototypeOf(r)).prototype&&i.prototype.isReactComponent;var i}(n=e)||typeof n=="function"||function(r){return typeof r=="object"&&typeof r.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(r.$$typeof.description)}(n)?x.createElement(e,t):e;var n}function _e(e,t,n){return n===void 0&&(n=0),e.map(function(r){return $e(r=p({},r,{parent:t,depth:n})),r.columns&&(r.columns=_e(r.columns,r,n+1)),r})}function Ve(e){return Ue(e,"columns")}function $e(e){var t=e.id,n=e.accessor,r=e.Header;if(typeof n=="string"){t=t||n;var i=n.split(".");n=function(o){return function(u,s,l){if(!s)return u;var d,m=typeof s=="function"?s:JSON.stringify(s),f=qe.get(m)||function(){var g=function(c){return function h(w,y){if(y===void 0&&(y=[]),Array.isArray(w))for(var S=0;S<w.length;S+=1)h(w[S],y);else y.push(w);return y}(c).map(function(h){return String(h).replace(".","_")}).join(".").replace(Xt,".").replace(qt,"").split(".")}(s);return qe.set(m,g),g}();try{d=f.reduce(function(g,c){return g[c]},u)}catch{}return d!==void 0?d:l}(o,i)}}if(!t&&typeof r=="string"&&r&&(t=r),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function Xe(e,t){if(!t)throw new Error;return Object.assign(e,p({Header:Pe,Footer:Pe},de,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function $t(e,t,n){n===void 0&&(n=function(){return{}});for(var r=[],i=e,o=0,u=function(){return o++},s=function(){var l={headers:[]},d=[],m=i.some(function(f){return f.parent});i.forEach(function(f){var g,c=[].concat(d).reverse()[0];m&&(f.parent?g=p({},f.parent,{originalId:f.parent.id,id:f.parent.id+"_"+u(),headers:[f]},n(f)):g=Xe(p({originalId:f.id+"_placeholder",id:f.id+"_placeholder_"+u(),placeholderOf:f,headers:[f]},n(f)),t),c&&c.originalId===g.originalId?c.headers.push(f):d.push(g)),l.headers.push(f)}),r.push(l),i=d};i.length;)s();return r.reverse()}var qe=new Map;function te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<t.length;r+=1)if(t[r]!==void 0)return t[r]}function Ke(e){if(typeof e=="function")return e}function Ue(e,t){var n=[];return function r(i){i.forEach(function(o){o[t]?r(o[t]):n.push(o)})}(e),n}function Je(e,t){var n=t.manualExpandedKey,r=t.expanded,i=t.expandSubRows,o=i===void 0||i,u=[];return e.forEach(function(s){return function l(d,m){m===void 0&&(m=!0),d.isExpanded=d.original&&d.original[n]||r[d.id],d.canExpand=d.subRows&&!!d.subRows.length,m&&u.push(d),d.subRows&&d.subRows.length&&d.isExpanded&&d.subRows.forEach(function(f){return l(f,o)})}(s)}),u}function ce(e,t,n){return Ke(e)||t[e]||n[e]||n.text}function Ee(e,t,n){return e?e(t,n):t===void 0}function me(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var Ie=null,Xt=/\[/g,qt=/\]/g,Kt=function(e){return p({role:"table"},e)},Ut=function(e){return p({role:"rowgroup"},e)},Jt=function(e,t){var n=t.column;return p({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},Yt=function(e,t){var n=t.column;return p({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},Qt=function(e,t){return p({key:"headerGroup_"+t.index,role:"row"},e)},Zt=function(e,t){return p({key:"footerGroup_"+t.index},e)},en=function(e,t){return p({key:"row_"+t.row.id,role:"row"},e)},tn=function(e,t){var n=t.cell;return p({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function nn(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[Kt],getTableBodyProps:[Ut],getHeaderGroupProps:[Qt],getFooterGroupProps:[Zt],getHeaderProps:[Jt],getFooterProps:[Yt],getRowProps:[en],getCellProps:[tn],useFinalInstance:[]}}a.resetHiddenColumns="resetHiddenColumns",a.toggleHideColumn="toggleHideColumn",a.setHiddenColumns="setHiddenColumns",a.toggleHideAllColumns="toggleHideAllColumns";var Ye=function(e){e.getToggleHiddenProps=[rn],e.getToggleHideAllColumnsProps=[on],e.stateReducers.push(un),e.useInstanceBeforeDimensions.push(an),e.headerGroupsDeps.push(function(t,n){var r=n.instance;return[].concat(t,[r.state.hiddenColumns])}),e.useInstance.push(sn)};Ye.pluginName="useColumnVisibility";var rn=function(e,t){var n=t.column;return[e,{onChange:function(r){n.toggleHidden(!r.target.checked)},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},on=function(e,t){var n=t.instance;return[e,{onChange:function(r){n.toggleHideAllColumns(!r.target.checked)},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function un(e,t,n,r){if(t.type===a.init)return p({hiddenColumns:[]},e);if(t.type===a.resetHiddenColumns)return p({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(t.type===a.toggleHideColumn){var i=(t.value!==void 0?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter(function(o){return o!==t.columnId});return p({},e,{hiddenColumns:i})}return t.type===a.setHiddenColumns?p({},e,{hiddenColumns:ne(t.value,e.hiddenColumns)}):t.type===a.toggleHideAllColumns?p({},e,{hiddenColumns:(t.value!==void 0?t.value:!e.hiddenColumns.length)?r.allColumns.map(function(o){return o.id}):[]}):void 0}function an(e){var t=e.headers,n=e.state.hiddenColumns;x.useRef(!1).current;var r=0;t.forEach(function(i){return r+=function o(u,s){u.isVisible=s&&!n.includes(u.id);var l=0;return u.headers&&u.headers.length?u.headers.forEach(function(d){return l+=o(d,u.isVisible)}):l=u.isVisible?1:0,u.totalVisibleHeaderCount=l,l}(i,!0)})}function sn(e){var t=e.columns,n=e.flatHeaders,r=e.dispatch,i=e.allColumns,o=e.getHooks,u=e.state.hiddenColumns,s=e.autoResetHiddenColumns,l=s===void 0||s,d=L(e),m=i.length===u.length,f=x.useCallback(function(y,S){return r({type:a.toggleHideColumn,columnId:y,value:S})},[r]),g=x.useCallback(function(y){return r({type:a.setHiddenColumns,value:y})},[r]),c=x.useCallback(function(y){return r({type:a.toggleHideAllColumns,value:y})},[r]),h=V(o().getToggleHideAllColumnsProps,{instance:d()});n.forEach(function(y){y.toggleHidden=function(S){r({type:a.toggleHideColumn,columnId:y.id,value:S})},y.getToggleHiddenProps=V(o().getToggleHiddenProps,{instance:d(),column:y})});var w=L(l);Q(function(){w()&&r({type:a.resetHiddenColumns})},[r,t]),Object.assign(e,{allColumnsHidden:m,toggleHideColumn:f,setHiddenColumns:g,toggleHideAllColumns:c,getToggleHideAllColumnsProps:h})}var ln={},dn={},cn=function(e,t,n){return e},pn=function(e,t){return e.subRows||[]},fn=function(e,t,n){return""+(n?[n.id,t].join("."):t)},gn=function(e){return e};function Qe(e){var t=e.initialState,n=t===void 0?ln:t,r=e.defaultColumn,i=r===void 0?dn:r,o=e.getSubRows,u=o===void 0?pn:o,s=e.getRowId,l=s===void 0?fn:s,d=e.stateReducer,m=d===void 0?cn:d,f=e.useControlledState,g=f===void 0?gn:f;return p({},se(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:i,getSubRows:u,getRowId:l,stateReducer:m,useControlledState:g})}function Ze(e,t){t===void 0&&(t=0);var n=0,r=0,i=0,o=0;return e.forEach(function(u){var s=u.headers;if(u.totalLeft=t,s&&s.length){var l=Ze(s,t),d=l[0],m=l[1],f=l[2],g=l[3];u.totalMinWidth=d,u.totalWidth=m,u.totalMaxWidth=f,u.totalFlexWidth=g}else u.totalMinWidth=u.minWidth,u.totalWidth=Math.min(Math.max(u.minWidth,u.width),u.maxWidth),u.totalMaxWidth=u.maxWidth,u.totalFlexWidth=u.canResize?u.totalWidth:0;u.isVisible&&(t+=u.totalWidth,n+=u.totalMinWidth,r+=u.totalWidth,i+=u.totalMaxWidth,o+=u.totalFlexWidth)}),[n,r,i,o]}function hn(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.rowsById,o=e.column,u=e.getRowId,s=e.getSubRows,l=e.accessValueHooks,d=e.getInstance;t.forEach(function(m,f){return function g(c,h,w,y,S){w===void 0&&(w=0);var A=c,b=u(c,h,y),v=i[b];if(v)v.subRows&&v.originalSubRows.forEach(function(R,I){return g(R,I,w+1,v)});else if((v={id:b,original:A,index:h,depth:w,cells:[{}]}).cells.map=me,v.cells.filter=me,v.cells.forEach=me,v.cells[0].getCellProps=me,v.values={},S.push(v),r.push(v),i[b]=v,v.originalSubRows=s(c,h),v.originalSubRows){var G=[];v.originalSubRows.forEach(function(R,I){return g(R,I,w+1,v,G)}),v.subRows=G}o.accessor&&(v.values[o.id]=o.accessor(c,h,v,S,t)),v.values[o.id]=Y(l,v.values[o.id],{row:v,column:o,instance:d()})}(m,f,0,void 0,n)})}a.resetExpanded="resetExpanded",a.toggleRowExpanded="toggleRowExpanded",a.toggleAllRowsExpanded="toggleAllRowsExpanded";var et=function(e){e.getToggleAllRowsExpandedProps=[mn],e.getToggleRowExpandedProps=[vn],e.stateReducers.push(wn),e.useInstance.push(yn),e.prepareRow.push(xn)};et.pluginName="useExpanded";var mn=function(e,t){var n=t.instance;return[e,{onClick:function(r){n.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},vn=function(e,t){var n=t.row;return[e,{onClick:function(){n.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function wn(e,t,n,r){if(t.type===a.init)return p({expanded:{}},e);if(t.type===a.resetExpanded)return p({},e,{expanded:r.initialState.expanded||{}});if(t.type===a.toggleAllRowsExpanded){var i=t.value,o=r.rowsById,u=Object.keys(o).length===Object.keys(e.expanded).length;if(i!==void 0?i:!u){var s={};return Object.keys(o).forEach(function(h){s[h]=!0}),p({},e,{expanded:s})}return p({},e,{expanded:{}})}if(t.type===a.toggleRowExpanded){var l,d=t.id,m=t.value,f=e.expanded[d],g=m!==void 0?m:!f;if(!f&&g)return p({},e,{expanded:p({},e.expanded,(l={},l[d]=!0,l))});if(f&&!g){var c=e.expanded;return c[d],p({},e,{expanded:se(c,[d].map(Ce))})}return e}}function yn(e){var t=e.data,n=e.rows,r=e.rowsById,i=e.manualExpandedKey,o=i===void 0?"expanded":i,u=e.paginateExpandedRows,s=u===void 0||u,l=e.expandSubRows,d=l===void 0||l,m=e.autoResetExpanded,f=m===void 0||m,g=e.getHooks,c=e.plugins,h=e.state.expanded,w=e.dispatch;ie(c,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var y=L(f),S=!!(Object.keys(r).length&&Object.keys(h).length);S&&Object.keys(r).some(function(H){return!h[H]})&&(S=!1),Q(function(){y()&&w({type:a.resetExpanded})},[w,t]);var A=x.useCallback(function(H,P){w({type:a.toggleRowExpanded,id:H,value:P})},[w]),b=x.useCallback(function(H){return w({type:a.toggleAllRowsExpanded,value:H})},[w]),v=x.useMemo(function(){return s?Je(n,{manualExpandedKey:o,expanded:h,expandSubRows:d}):n},[s,n,o,h,d]),G=x.useMemo(function(){return function(H){var P=0;return Object.keys(H).forEach(function(E){var O=E.split(".");P=Math.max(P,O.length)}),P}(h)},[h]),R=L(e),I=V(g().getToggleAllRowsExpandedProps,{instance:R()});Object.assign(e,{preExpandedRows:n,expandedRows:v,rows:v,expandedDepth:G,isAllRowsExpanded:S,toggleRowExpanded:A,toggleAllRowsExpanded:b,getToggleAllRowsExpandedProps:I})}function xn(e,t){var n=t.instance.getHooks,r=t.instance;e.toggleRowExpanded=function(i){return r.toggleRowExpanded(e.id,i)},e.getToggleRowExpandedProps=V(n().getToggleRowExpandedProps,{instance:r,row:e})}var tt=function(e,t,n){return e=e.filter(function(r){return t.some(function(i){var o=r.values[i];return String(o).toLowerCase().includes(String(n).toLowerCase())})})};tt.autoRemove=function(e){return!e};var nt=function(e,t,n){return e.filter(function(r){return t.some(function(i){var o=r.values[i];return o===void 0||String(o).toLowerCase()===String(n).toLowerCase()})})};nt.autoRemove=function(e){return!e};var rt=function(e,t,n){return e.filter(function(r){return t.some(function(i){var o=r.values[i];return o===void 0||String(o)===String(n)})})};rt.autoRemove=function(e){return!e};var ot=function(e,t,n){return e.filter(function(r){return t.some(function(i){return r.values[i].includes(n)})})};ot.autoRemove=function(e){return!e||!e.length};var it=function(e,t,n){return e.filter(function(r){return t.some(function(i){var o=r.values[i];return o&&o.length&&n.every(function(u){return o.includes(u)})})})};it.autoRemove=function(e){return!e||!e.length};var ut=function(e,t,n){return e.filter(function(r){return t.some(function(i){var o=r.values[i];return o&&o.length&&n.some(function(u){return o.includes(u)})})})};ut.autoRemove=function(e){return!e||!e.length};var at=function(e,t,n){return e.filter(function(r){return t.some(function(i){var o=r.values[i];return n.includes(o)})})};at.autoRemove=function(e){return!e||!e.length};var st=function(e,t,n){return e.filter(function(r){return t.some(function(i){return r.values[i]===n})})};st.autoRemove=function(e){return e===void 0};var lt=function(e,t,n){return e.filter(function(r){return t.some(function(i){return r.values[i]==n})})};lt.autoRemove=function(e){return e==null};var dt=function(e,t,n){var r=n||[],i=r[0],o=r[1];if((i=typeof i=="number"?i:-1/0)>(o=typeof o=="number"?o:1/0)){var u=i;i=o,o=u}return e.filter(function(s){return t.some(function(l){var d=s.values[l];return d>=i&&d<=o})})};dt.autoRemove=function(e){return!e||typeof e[0]!="number"&&typeof e[1]!="number"};var pe=Object.freeze({__proto__:null,text:tt,exactText:nt,exactTextCase:rt,includes:ot,includesAll:it,includesSome:ut,includesValue:at,exact:st,equals:lt,between:dt});a.resetFilters="resetFilters",a.setFilter="setFilter",a.setAllFilters="setAllFilters";var ct=function(e){e.stateReducers.push(Rn),e.useInstance.push(bn)};function Rn(e,t,n,r){if(t.type===a.init)return p({filters:[]},e);if(t.type===a.resetFilters)return p({},e,{filters:r.initialState.filters||[]});if(t.type===a.setFilter){var i=t.columnId,o=t.filterValue,u=r.allColumns,s=r.filterTypes,l=u.find(function(w){return w.id===i});if(!l)throw new Error("React-Table: Could not find a column with id: "+i);var d=ce(l.filter,s||{},pe),m=e.filters.find(function(w){return w.id===i}),f=ne(o,m&&m.value);return Ee(d.autoRemove,f,l)?p({},e,{filters:e.filters.filter(function(w){return w.id!==i})}):p({},e,m?{filters:e.filters.map(function(w){return w.id===i?{id:i,value:f}:w})}:{filters:[].concat(e.filters,[{id:i,value:f}])})}if(t.type===a.setAllFilters){var g=t.filters,c=r.allColumns,h=r.filterTypes;return p({},e,{filters:ne(g,e.filters).filter(function(w){var y=c.find(function(S){return S.id===w.id});return!Ee(ce(y.filter,h||{},pe).autoRemove,w.value,y)})})}}function bn(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.rowsById,o=e.allColumns,u=e.filterTypes,s=e.manualFilters,l=e.defaultCanFilter,d=l!==void 0&&l,m=e.disableFilters,f=e.state.filters,g=e.dispatch,c=e.autoResetFilters,h=c===void 0||c,w=x.useCallback(function(R,I){g({type:a.setFilter,columnId:R,filterValue:I})},[g]),y=x.useCallback(function(R){g({type:a.setAllFilters,filters:R})},[g]);o.forEach(function(R){var I=R.id,H=R.accessor,P=R.defaultCanFilter,E=R.disableFilters;R.canFilter=H?te(E!==!0&&void 0,m!==!0&&void 0,!0):te(P,d,!1),R.setFilter=function(F){return w(R.id,F)};var O=f.find(function(F){return F.id===I});R.filterValue=O&&O.value});var S=x.useMemo(function(){if(s||!f.length)return[n,r,i];var R=[],I={};return[function H(P,E){E===void 0&&(E=0);var O=P;return(O=f.reduce(function(F,j){var W=j.id,M=j.value,C=o.find(function(_){return _.id===W});if(!C)return F;E===0&&(C.preFilteredRows=F);var T=ce(C.filter,u||{},pe);return T?(C.filteredRows=T(F,[W],M),C.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+C.id+"."),F)},P)).forEach(function(F){R.push(F),I[F.id]=F,F.subRows&&(F.subRows=F.subRows&&F.subRows.length>0?H(F.subRows,E+1):F.subRows)}),O}(n),R,I]},[s,f,n,r,i,o,u]),A=S[0],b=S[1],v=S[2];x.useMemo(function(){o.filter(function(R){return!f.find(function(I){return I.id===R.id})}).forEach(function(R){R.preFilteredRows=A,R.filteredRows=A})},[A,f,o]);var G=L(h);Q(function(){G()&&g({type:a.resetFilters})},[g,s?null:t]),Object.assign(e,{preFilteredRows:n,preFilteredFlatRows:r,preFilteredRowsById:i,filteredRows:A,filteredFlatRows:b,filteredRowsById:v,rows:A,flatRows:b,rowsById:v,setFilter:w,setAllFilters:y})}ct.pluginName="useFilters",a.resetGlobalFilter="resetGlobalFilter",a.setGlobalFilter="setGlobalFilter";var pt=function(e){e.stateReducers.push(Sn),e.useInstance.push(Cn)};function Sn(e,t,n,r){if(t.type===a.resetGlobalFilter)return p({},e,{globalFilter:r.initialState.globalFilter||void 0});if(t.type===a.setGlobalFilter){var i=t.filterValue,o=r.userFilterTypes,u=ce(r.globalFilter,o||{},pe),s=ne(i,e.globalFilter);return Ee(u.autoRemove,s)?(e.globalFilter,se(e,["globalFilter"])):p({},e,{globalFilter:s})}}function Cn(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.rowsById,o=e.allColumns,u=e.filterTypes,s=e.globalFilter,l=e.manualGlobalFilter,d=e.state.globalFilter,m=e.dispatch,f=e.autoResetGlobalFilter,g=f===void 0||f,c=e.disableGlobalFilter,h=x.useCallback(function(v){m({type:a.setGlobalFilter,filterValue:v})},[m]),w=x.useMemo(function(){if(l||d===void 0)return[n,r,i];var v=[],G={},R=ce(s,u||{},pe);if(!R)return console.warn("Could not find a valid 'globalFilter' option."),n;o.forEach(function(H){var P=H.disableGlobalFilter;H.canFilter=te(P!==!0&&void 0,c!==!0&&void 0,!0)});var I=o.filter(function(H){return H.canFilter===!0});return[function H(P){return(P=R(P,I.map(function(E){return E.id}),d)).forEach(function(E){v.push(E),G[E.id]=E,E.subRows=E.subRows&&E.subRows.length?H(E.subRows):E.subRows}),P}(n),v,G]},[l,d,s,u,o,n,r,i,c]),y=w[0],S=w[1],A=w[2],b=L(g);Q(function(){b()&&m({type:a.resetGlobalFilter})},[m,l?null:t]),Object.assign(e,{preGlobalFilteredRows:n,preGlobalFilteredFlatRows:r,preGlobalFilteredRowsById:i,globalFilteredRows:y,globalFilteredFlatRows:S,globalFilteredRowsById:A,rows:y,flatRows:S,rowsById:A,setGlobalFilter:h,disableGlobalFilter:c})}function ft(e,t){return t.reduce(function(n,r){return n+(typeof r=="number"?r:0)},0)}pt.pluginName="useGlobalFilter";var gt=Object.freeze({__proto__:null,sum:ft,min:function(e){var t=e[0]||0;return e.forEach(function(n){typeof n=="number"&&(t=Math.min(t,n))}),t},max:function(e){var t=e[0]||0;return e.forEach(function(n){typeof n=="number"&&(t=Math.max(t,n))}),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach(function(r){typeof r=="number"&&(t=Math.min(t,r),n=Math.max(n,r))}),t+".."+n},average:function(e){return ft(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort(function(r,i){return r-i});return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),Pn=[],Bn={};a.resetGroupBy="resetGroupBy",a.setGroupBy="setGroupBy",a.toggleGroupBy="toggleGroupBy";var ht=function(e){e.getGroupByToggleProps=[En],e.stateReducers.push(In),e.visibleColumnsDeps.push(function(t,n){var r=n.instance;return[].concat(t,[r.state.groupBy])}),e.visibleColumns.push(Fn),e.useInstance.push(kn),e.prepareRow.push(An)};ht.pluginName="useGroupBy";var En=function(e,t){var n=t.header;return[e,{onClick:n.canGroupBy?function(r){r.persist(),n.toggleGroupBy()}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function In(e,t,n,r){if(t.type===a.init)return p({groupBy:[]},e);if(t.type===a.resetGroupBy)return p({},e,{groupBy:r.initialState.groupBy||[]});if(t.type===a.setGroupBy)return p({},e,{groupBy:t.value});if(t.type===a.toggleGroupBy){var i=t.columnId,o=t.value,u=o!==void 0?o:!e.groupBy.includes(i);return p({},e,u?{groupBy:[].concat(e.groupBy,[i])}:{groupBy:e.groupBy.filter(function(s){return s!==i})})}}function Fn(e,t){var n=t.instance.state.groupBy,r=n.map(function(o){return e.find(function(u){return u.id===o})}).filter(Boolean),i=e.filter(function(o){return!n.includes(o.id)});return(e=[].concat(r,i)).forEach(function(o){o.isGrouped=n.includes(o.id),o.groupedIndex=n.indexOf(o.id)}),e}var Gn={};function kn(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.rowsById,o=e.allColumns,u=e.flatHeaders,s=e.groupByFn,l=s===void 0?mt:s,d=e.manualGroupBy,m=e.aggregations,f=m===void 0?Gn:m,g=e.plugins,c=e.state.groupBy,h=e.dispatch,w=e.autoResetGroupBy,y=w===void 0||w,S=e.disableGroupBy,A=e.defaultCanGroupBy,b=e.getHooks;ie(g,["useColumnOrder","useFilters"],"useGroupBy");var v=L(e);o.forEach(function(C){var T=C.accessor,_=C.defaultGroupBy,K=C.disableGroupBy;C.canGroupBy=T?te(C.canGroupBy,K!==!0&&void 0,S!==!0&&void 0,!0):te(C.canGroupBy,_,A,!1),C.canGroupBy&&(C.toggleGroupBy=function(){return e.toggleGroupBy(C.id)}),C.Aggregated=C.Aggregated||C.Cell});var G=x.useCallback(function(C,T){h({type:a.toggleGroupBy,columnId:C,value:T})},[h]),R=x.useCallback(function(C){h({type:a.setGroupBy,value:C})},[h]);u.forEach(function(C){C.getGroupByToggleProps=V(b().getGroupByToggleProps,{instance:v(),header:C})});var I=x.useMemo(function(){if(d||!c.length)return[n,r,i,Pn,Bn,r,i];var C=c.filter(function(q){return o.find(function(ue){return ue.id===q})}),T=[],_={},K=[],B={},D=[],$={},U=function q(ue,re,Ht){if(re===void 0&&(re=0),re===C.length)return ue.map(function(we){return p({},we,{depth:re})});var Te=C[re],xr=l(ue,Te);return Object.entries(xr).map(function(we,Rr){var Tt=we[0],ye=we[1],xe=Te+":"+Tt,Wt=q(ye,re+1,xe=Ht?Ht+">"+xe:xe),jt=re?Ue(ye,"leafRows"):ye,br=function(Z,We,Cr){var Re={};return o.forEach(function(X){if(C.includes(X.id))Re[X.id]=We[0]?We[0].values[X.id]:null;else{var Ot=typeof X.aggregate=="function"?X.aggregate:f[X.aggregate]||gt[X.aggregate];if(Ot){var Pr=We.map(function(be){return be.values[X.id]}),Br=Z.map(function(be){var je=be.values[X.id];if(!Cr&&X.aggregateValue){var Mt=typeof X.aggregateValue=="function"?X.aggregateValue:f[X.aggregateValue]||gt[X.aggregateValue];if(!Mt)throw console.info({column:X}),new Error("React Table: Invalid column.aggregateValue option for column listed above");je=Mt(je,be,X)}return je});Re[X.id]=Ot(Br,Pr)}else{if(X.aggregate)throw console.info({column:X}),new Error("React Table: Invalid column.aggregate option for column listed above");Re[X.id]=null}}}),Re}(jt,ye,re),Sr={id:xe,isGrouped:!0,groupByID:Te,groupByVal:Tt,values:br,subRows:Wt,leafRows:jt,depth:re,index:Rr};return Wt.forEach(function(Z){T.push(Z),_[Z.id]=Z,Z.isGrouped?(K.push(Z),B[Z.id]=Z):(D.push(Z),$[Z.id]=Z)}),Sr})}(n);return U.forEach(function(q){T.push(q),_[q.id]=q,q.isGrouped?(K.push(q),B[q.id]=q):(D.push(q),$[q.id]=q)}),[U,T,_,K,B,D,$]},[d,c,n,r,i,o,f,l]),H=I[0],P=I[1],E=I[2],O=I[3],F=I[4],j=I[5],W=I[6],M=L(y);Q(function(){M()&&h({type:a.resetGroupBy})},[h,d?null:t]),Object.assign(e,{preGroupedRows:n,preGroupedFlatRow:r,preGroupedRowsById:i,groupedRows:H,groupedFlatRows:P,groupedRowsById:E,onlyGroupedFlatRows:O,onlyGroupedRowsById:F,nonGroupedFlatRows:j,nonGroupedRowsById:W,rows:H,flatRows:P,rowsById:E,toggleGroupBy:G,setGroupBy:R})}function An(e){e.allCells.forEach(function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&((n=e.subRows)==null?void 0:n.length)})}function mt(e,t){return e.reduce(function(n,r,i){var o=""+r.values[t];return n[o]=Array.isArray(n[o])?n[o]:[],n[o].push(r),n},{})}var vt=/([0-9]+)/gm;function Fe(e,t){return e===t?0:e>t?1:-1}function fe(e,t,n){return[e.values[n],t.values[n]]}function wt(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}var zn=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var r=fe(e,t,n),i=r[0],o=r[1];for(i=wt(i),o=wt(o),i=i.split(vt).filter(Boolean),o=o.split(vt).filter(Boolean);i.length&&o.length;){var u=i.shift(),s=o.shift(),l=parseInt(u,10),d=parseInt(s,10),m=[l,d].sort();if(isNaN(m[0])){if(u>s)return 1;if(s>u)return-1}else{if(isNaN(m[1]))return isNaN(l)?-1:1;if(l>d)return 1;if(d>l)return-1}}return i.length-o.length},datetime:function(e,t,n){var r=fe(e,t,n),i=r[0],o=r[1];return Fe(i=i.getTime(),o=o.getTime())},basic:function(e,t,n){var r=fe(e,t,n);return Fe(r[0],r[1])},string:function(e,t,n){var r=fe(e,t,n),i=r[0],o=r[1];for(i=i.split("").filter(Boolean),o=o.split("").filter(Boolean);i.length&&o.length;){var u=i.shift(),s=o.shift(),l=u.toLowerCase(),d=s.toLowerCase();if(l>d)return 1;if(d>l)return-1;if(u>s)return 1;if(s>u)return-1}return i.length-o.length},number:function(e,t,n){var r=fe(e,t,n),i=r[0],o=r[1],u=/[^0-9.]/gi;return Fe(i=Number(String(i).replace(u,"")),o=Number(String(o).replace(u,"")))}});a.resetSortBy="resetSortBy",a.setSortBy="setSortBy",a.toggleSortBy="toggleSortBy",a.clearSortBy="clearSortBy",de.sortType="alphanumeric",de.sortDescFirst=!1;var yt=function(e){e.getSortByToggleProps=[Hn],e.stateReducers.push(Tn),e.useInstance.push(Wn)};yt.pluginName="useSortBy";var Hn=function(e,t){var n=t.instance,r=t.column,i=n.isMultiSortEvent,o=i===void 0?function(u){return u.shiftKey}:i;return[e,{onClick:r.canSort?function(u){u.persist(),r.toggleSortBy(void 0,!n.disableMultiSort&&o(u))}:void 0,style:{cursor:r.canSort?"pointer":void 0},title:r.canSort?"Toggle SortBy":void 0}]};function Tn(e,t,n,r){if(t.type===a.init)return p({sortBy:[]},e);if(t.type===a.resetSortBy)return p({},e,{sortBy:r.initialState.sortBy||[]});if(t.type===a.clearSortBy)return p({},e,{sortBy:e.sortBy.filter(function(v){return v.id!==t.columnId})});if(t.type===a.setSortBy)return p({},e,{sortBy:t.sortBy});if(t.type===a.toggleSortBy){var i,o=t.columnId,u=t.desc,s=t.multi,l=r.allColumns,d=r.disableMultiSort,m=r.disableSortRemove,f=r.disableMultiRemove,g=r.maxMultiSortColCount,c=g===void 0?Number.MAX_SAFE_INTEGER:g,h=e.sortBy,w=l.find(function(v){return v.id===o}).sortDescFirst,y=h.find(function(v){return v.id===o}),S=h.findIndex(function(v){return v.id===o}),A=u!=null,b=[];return(i=!d&&s?y?"toggle":"add":S!==h.length-1||h.length!==1?"replace":y?"toggle":"replace")!="toggle"||m||A||s&&f||!(y&&y.desc&&!w||!y.desc&&w)||(i="remove"),i==="replace"?b=[{id:o,desc:A?u:w}]:i==="add"?(b=[].concat(h,[{id:o,desc:A?u:w}])).splice(0,b.length-c):i==="toggle"?b=h.map(function(v){return v.id===o?p({},v,{desc:A?u:!y.desc}):v}):i==="remove"&&(b=h.filter(function(v){return v.id!==o})),p({},e,{sortBy:b})}}function Wn(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.allColumns,o=e.orderByFn,u=o===void 0?xt:o,s=e.sortTypes,l=e.manualSortBy,d=e.defaultCanSort,m=e.disableSortBy,f=e.flatHeaders,g=e.state.sortBy,c=e.dispatch,h=e.plugins,w=e.getHooks,y=e.autoResetSortBy,S=y===void 0||y;ie(h,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var A=x.useCallback(function(P){c({type:a.setSortBy,sortBy:P})},[c]),b=x.useCallback(function(P,E,O){c({type:a.toggleSortBy,columnId:P,desc:E,multi:O})},[c]),v=L(e);f.forEach(function(P){var E=P.accessor,O=P.canSort,F=P.disableSortBy,j=P.id,W=E?te(F!==!0&&void 0,m!==!0&&void 0,!0):te(d,O,!1);P.canSort=W,P.canSort&&(P.toggleSortBy=function(C,T){return b(P.id,C,T)},P.clearSortBy=function(){c({type:a.clearSortBy,columnId:P.id})}),P.getSortByToggleProps=V(w().getSortByToggleProps,{instance:v(),column:P});var M=g.find(function(C){return C.id===j});P.isSorted=!!M,P.sortedIndex=g.findIndex(function(C){return C.id===j}),P.isSortedDesc=P.isSorted?M.desc:void 0});var G=x.useMemo(function(){if(l||!g.length)return[n,r];var P=[],E=g.filter(function(O){return i.find(function(F){return F.id===O.id})});return[function O(F){var j=u(F,E.map(function(W){var M=i.find(function(_){return _.id===W.id});if(!M)throw new Error("React-Table: Could not find a column with id: "+W.id+" while sorting");var C=M.sortType,T=Ke(C)||(s||{})[C]||zn[C];if(!T)throw new Error("React-Table: Could not find a valid sortType of '"+C+"' for column '"+W.id+"'.");return function(_,K){return T(_,K,W.id,W.desc)}}),E.map(function(W){var M=i.find(function(C){return C.id===W.id});return M&&M.sortInverted?W.desc:!W.desc}));return j.forEach(function(W){P.push(W),W.subRows&&W.subRows.length!==0&&(W.subRows=O(W.subRows))}),j}(n),P]},[l,g,n,r,i,u,s]),R=G[0],I=G[1],H=L(S);Q(function(){H()&&c({type:a.resetSortBy})},[l?null:t]),Object.assign(e,{preSortedRows:n,preSortedFlatRows:r,sortedRows:R,sortedFlatRows:I,rows:R,flatRows:I,setSortBy:A,toggleSortBy:b})}function xt(e,t,n){return[].concat(e).sort(function(r,i){for(var o=0;o<t.length;o+=1){var u=t[o],s=n[o]===!1||n[o]==="desc",l=u(r,i);if(l!==0)return s?-l:l}return n[0]?r.index-i.index:i.index-r.index})}a.resetPage="resetPage",a.gotoPage="gotoPage",a.setPageSize="setPageSize";var Rt=function(e){e.stateReducers.push(jn),e.useInstance.push(On)};function jn(e,t,n,r){if(t.type===a.init)return p({pageSize:10,pageIndex:0},e);if(t.type===a.resetPage)return p({},e,{pageIndex:r.initialState.pageIndex||0});if(t.type===a.gotoPage){var i=r.pageCount,o=r.page,u=ne(t.pageIndex,e.pageIndex),s=!1;return u>e.pageIndex?s=i===-1?o.length>=e.pageSize:u<i:u<e.pageIndex&&(s=u>-1),s?p({},e,{pageIndex:u}):e}if(t.type===a.setPageSize){var l=t.pageSize,d=e.pageSize*e.pageIndex;return p({},e,{pageIndex:Math.floor(d/l),pageSize:l})}}function On(e){var t=e.rows,n=e.autoResetPage,r=n===void 0||n,i=e.manualExpandedKey,o=i===void 0?"expanded":i,u=e.plugins,s=e.pageCount,l=e.paginateExpandedRows,d=l===void 0||l,m=e.expandSubRows,f=m===void 0||m,g=e.state,c=g.pageSize,h=g.pageIndex,w=g.expanded,y=g.globalFilter,S=g.filters,A=g.groupBy,b=g.sortBy,v=e.dispatch,G=e.data,R=e.manualPagination;ie(u,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var I=L(r);Q(function(){I()&&v({type:a.resetPage})},[v,R?null:G,y,S,A,b]);var H=R?s:Math.ceil(t.length/c),P=x.useMemo(function(){return H>0?[].concat(new Array(H)).fill(null).map(function(T,_){return _}):[]},[H]),E=x.useMemo(function(){var T;if(R)T=t;else{var _=c*h,K=_+c;T=t.slice(_,K)}return d?T:Je(T,{manualExpandedKey:o,expanded:w,expandSubRows:f})},[f,w,o,R,h,c,d,t]),O=h>0,F=H===-1?E.length>=c:h<H-1,j=x.useCallback(function(T){v({type:a.gotoPage,pageIndex:T})},[v]),W=x.useCallback(function(){return j(function(T){return T-1})},[j]),M=x.useCallback(function(){return j(function(T){return T+1})},[j]),C=x.useCallback(function(T){v({type:a.setPageSize,pageSize:T})},[v]);Object.assign(e,{pageOptions:P,pageCount:H,page:E,canPreviousPage:O,canNextPage:F,gotoPage:j,previousPage:W,nextPage:M,setPageSize:C})}Rt.pluginName="usePagination",a.resetPivot="resetPivot",a.togglePivot="togglePivot";var bt=function(e){e.getPivotToggleProps=[Mn],e.stateReducers.push(Ln),e.useInstanceAfterData.push(Dn),e.allColumns.push(Nn),e.accessValue.push(_n),e.materializedColumns.push(Vn),e.materializedColumnsDeps.push($n),e.visibleColumns.push(Xn),e.visibleColumnsDeps.push(qn),e.useInstance.push(Kn),e.prepareRow.push(Un)};bt.pluginName="usePivotColumns";var St=[],Mn=function(e,t){var n=t.header;return[e,{onClick:n.canPivot?function(r){r.persist(),n.togglePivot()}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function Ln(e,t,n,r){if(t.type===a.init)return p({pivotColumns:St},e);if(t.type===a.resetPivot)return p({},e,{pivotColumns:r.initialState.pivotColumns||St});if(t.type===a.togglePivot){var i=t.columnId,o=t.value,u=o!==void 0?o:!e.pivotColumns.includes(i);return p({},e,u?{pivotColumns:[].concat(e.pivotColumns,[i])}:{pivotColumns:e.pivotColumns.filter(function(s){return s!==i})})}}function Dn(e){e.allColumns.forEach(function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id)})}function Nn(e,t){var n=t.instance;return e.forEach(function(r){r.isPivotSource=n.state.pivotColumns.includes(r.id),r.uniqueValues=new Set}),e}function _n(e,t){var n=t.column;return n.uniqueValues&&e!==void 0&&n.uniqueValues.add(e),e}function Vn(e,t){var n=t.instance,r=n.allColumns,i=n.state;if(!i.pivotColumns.length||!i.groupBy||!i.groupBy.length)return e;var o=i.pivotColumns.map(function(l){return r.find(function(d){return d.id===l})}).filter(Boolean),u=r.filter(function(l){return!l.isPivotSource&&!i.groupBy.includes(l.id)&&!i.pivotColumns.includes(l.id)}),s=Ve(function l(d,m,f){d===void 0&&(d=0),f===void 0&&(f=[]);var g=o[d];return g?Array.from(g.uniqueValues).sort().map(function(c){var h=p({},g,{Header:g.PivotHeader||typeof g.header=="string"?g.Header+": "+c:c,isPivotGroup:!0,parent:m,depth:d,id:m?m.id+"."+g.id+"."+c:g.id+"."+c,pivotValue:c});return h.columns=l(d+1,h,[].concat(f,[function(w){return w.values[g.id]===c}])),h}):u.map(function(c){return p({},c,{canPivot:!1,isPivoted:!0,parent:m,depth:d,id:""+(m?m.id+"."+c.id:c.id),accessor:function(h,w,y){if(f.every(function(S){return S(y)}))return y.values[c.id]}})})}());return[].concat(e,s)}function $n(e,t){var n=t.instance.state,r=n.pivotColumns,i=n.groupBy;return[].concat(e,[r,i])}function Xn(e,t){var n=t.instance.state;return e=e.filter(function(r){return!r.isPivotSource}),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter(function(r){return r.isGrouped||r.isPivoted})),e}function qn(e,t){var n=t.instance;return[].concat(e,[n.state.pivotColumns,n.state.groupBy])}function Kn(e){var t=e.columns,n=e.allColumns,r=e.flatHeaders,i=e.getHooks,o=e.plugins,u=e.dispatch,s=e.autoResetPivot,l=s===void 0||s,d=e.manaulPivot,m=e.disablePivot,f=e.defaultCanPivot;ie(o,["useGroupBy"],"usePivotColumns");var g=L(e);n.forEach(function(h){var w=h.accessor,y=h.defaultPivot,S=h.disablePivot;h.canPivot=w?te(h.canPivot,S!==!0&&void 0,m!==!0&&void 0,!0):te(h.canPivot,y,f,!1),h.canPivot&&(h.togglePivot=function(){return e.togglePivot(h.id)}),h.Aggregated=h.Aggregated||h.Cell}),r.forEach(function(h){h.getPivotToggleProps=V(i().getPivotToggleProps,{instance:g(),header:h})});var c=L(l);Q(function(){c()&&u({type:a.resetPivot})},[u,d?null:t]),Object.assign(e,{togglePivot:function(h,w){u({type:a.togglePivot,columnId:h,value:w})}})}function Un(e){e.allCells.forEach(function(t){t.isPivoted=t.column.isPivoted})}a.resetSelectedRows="resetSelectedRows",a.toggleAllRowsSelected="toggleAllRowsSelected",a.toggleRowSelected="toggleRowSelected",a.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var Ct=function(e){e.getToggleRowSelectedProps=[Jn],e.getToggleAllRowsSelectedProps=[Yn],e.getToggleAllPageRowsSelectedProps=[Qn],e.stateReducers.push(Zn),e.useInstance.push(er),e.prepareRow.push(tr)};Ct.pluginName="useRowSelect";var Jn=function(e,t){var n=t.instance,r=t.row,i=n.manualRowSelectedKey,o=i===void 0?"isSelected":i;return[e,{onChange:function(u){r.toggleRowSelected(u.target.checked)},style:{cursor:"pointer"},checked:!(!r.original||!r.original[o])||r.isSelected,title:"Toggle Row Selected",indeterminate:r.isSomeSelected}]},Yn=function(e,t){var n=t.instance;return[e,{onChange:function(r){n.toggleAllRowsSelected(r.target.checked)},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:!!(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},Qn=function(e,t){var n=t.instance;return[e,{onChange:function(r){n.toggleAllPageRowsSelected(r.target.checked)},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:!!(!n.isAllPageRowsSelected&&n.page.some(function(r){var i=r.id;return n.state.selectedRowIds[i]}))}]};function Zn(e,t,n,r){if(t.type===a.init)return p({selectedRowIds:{}},e);if(t.type===a.resetSelectedRows)return p({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(t.type===a.toggleAllRowsSelected){var i=t.value,o=r.isAllRowsSelected,u=r.rowsById,s=r.nonGroupedRowsById,l=s===void 0?u:s,d=i!==void 0?i:!o,m=Object.assign({},e.selectedRowIds);return d?Object.keys(l).forEach(function(j){m[j]=!0}):Object.keys(l).forEach(function(j){delete m[j]}),p({},e,{selectedRowIds:m})}if(t.type===a.toggleRowSelected){var f=t.id,g=t.value,c=r.rowsById,h=r.selectSubRows,w=h===void 0||h,y=r.getSubRows,S=e.selectedRowIds[f],A=g!==void 0?g:!S;if(S===A)return e;var b=p({},e.selectedRowIds);return function j(W){var M=c[W];if(M&&(M.isGrouped||(A?b[W]=!0:delete b[W]),w&&y(M)))return y(M).forEach(function(C){return j(C.id)})}(f),p({},e,{selectedRowIds:b})}if(t.type===a.toggleAllPageRowsSelected){var v=t.value,G=r.page,R=r.rowsById,I=r.selectSubRows,H=I===void 0||I,P=r.isAllPageRowsSelected,E=r.getSubRows,O=v!==void 0?v:!P,F=p({},e.selectedRowIds);return G.forEach(function(j){return function W(M){var C=R[M];if(C.isGrouped||(O?F[M]=!0:delete F[M]),H&&E(C))return E(C).forEach(function(T){return W(T.id)})}(j.id)}),p({},e,{selectedRowIds:F})}return e}function er(e){var t=e.data,n=e.rows,r=e.getHooks,i=e.plugins,o=e.rowsById,u=e.nonGroupedRowsById,s=u===void 0?o:u,l=e.autoResetSelectedRows,d=l===void 0||l,m=e.state.selectedRowIds,f=e.selectSubRows,g=f===void 0||f,c=e.dispatch,h=e.page,w=e.getSubRows;ie(i,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var y=x.useMemo(function(){var E=[];return n.forEach(function(O){var F=g?function j(W,M,C){if(M[W.id])return!0;var T=C(W);if(T&&T.length){var _=!0,K=!1;return T.forEach(function(B){K&&!_||(j(B,M,C)?K=!0:_=!1)}),!!_||!!K&&null}return!1}(O,m,w):!!m[O.id];O.isSelected=!!F,O.isSomeSelected=F===null,F&&E.push(O)}),E},[n,g,m,w]),S=!!(Object.keys(s).length&&Object.keys(m).length),A=S;S&&Object.keys(s).some(function(E){return!m[E]})&&(S=!1),S||h&&h.length&&h.some(function(E){var O=E.id;return!m[O]})&&(A=!1);var b=L(d);Q(function(){b()&&c({type:a.resetSelectedRows})},[c,t]);var v=x.useCallback(function(E){return c({type:a.toggleAllRowsSelected,value:E})},[c]),G=x.useCallback(function(E){return c({type:a.toggleAllPageRowsSelected,value:E})},[c]),R=x.useCallback(function(E,O){return c({type:a.toggleRowSelected,id:E,value:O})},[c]),I=L(e),H=V(r().getToggleAllRowsSelectedProps,{instance:I()}),P=V(r().getToggleAllPageRowsSelectedProps,{instance:I()});Object.assign(e,{selectedFlatRows:y,isAllRowsSelected:S,isAllPageRowsSelected:A,toggleRowSelected:R,toggleAllRowsSelected:v,getToggleAllRowsSelectedProps:H,getToggleAllPageRowsSelectedProps:P,toggleAllPageRowsSelected:G})}function tr(e,t){var n=t.instance;e.toggleRowSelected=function(r){return n.toggleRowSelected(e.id,r)},e.getToggleRowSelectedProps=V(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e})}var Pt=function(e){return{}},Bt=function(e){return{}};a.setRowState="setRowState",a.setCellState="setCellState",a.resetRowState="resetRowState";var Et=function(e){e.stateReducers.push(nr),e.useInstance.push(rr),e.prepareRow.push(or)};function nr(e,t,n,r){var i=r.initialRowStateAccessor,o=i===void 0?Pt:i,u=r.initialCellStateAccessor,s=u===void 0?Bt:u,l=r.rowsById;if(t.type===a.init)return p({rowState:{}},e);if(t.type===a.resetRowState)return p({},e,{rowState:r.initialState.rowState||{}});if(t.type===a.setRowState){var d,m=t.rowId,f=t.value,g=e.rowState[m]!==void 0?e.rowState[m]:o(l[m]);return p({},e,{rowState:p({},e.rowState,(d={},d[m]=ne(f,g),d))})}if(t.type===a.setCellState){var c,h,w,y,S,A=t.rowId,b=t.columnId,v=t.value,G=e.rowState[A]!==void 0?e.rowState[A]:o(l[A]),R=(G==null||(c=G.cellState)==null?void 0:c[b])!==void 0?G.cellState[b]:s((h=l[A])==null||(w=h.cells)==null?void 0:w.find(function(I){return I.column.id===b}));return p({},e,{rowState:p({},e.rowState,(S={},S[A]=p({},G,{cellState:p({},G.cellState||{},(y={},y[b]=ne(v,R),y))}),S))})}}function rr(e){var t=e.autoResetRowState,n=t===void 0||t,r=e.data,i=e.dispatch,o=x.useCallback(function(l,d){return i({type:a.setRowState,rowId:l,value:d})},[i]),u=x.useCallback(function(l,d,m){return i({type:a.setCellState,rowId:l,columnId:d,value:m})},[i]),s=L(n);Q(function(){s()&&i({type:a.resetRowState})},[r]),Object.assign(e,{setRowState:o,setCellState:u})}function or(e,t){var n=t.instance,r=n.initialRowStateAccessor,i=r===void 0?Pt:r,o=n.initialCellStateAccessor,u=o===void 0?Bt:o,s=n.state.rowState;e&&(e.state=s[e.id]!==void 0?s[e.id]:i(e),e.setState=function(l){return n.setRowState(e.id,l)},e.cells.forEach(function(l){e.state.cellState||(e.state.cellState={}),l.state=e.state.cellState[l.column.id]!==void 0?e.state.cellState[l.column.id]:u(l),l.setState=function(d){return n.setCellState(e.id,l.column.id,d)}}))}Et.pluginName="useRowState",a.resetColumnOrder="resetColumnOrder",a.setColumnOrder="setColumnOrder";var It=function(e){e.stateReducers.push(ir),e.visibleColumnsDeps.push(function(t,n){var r=n.instance;return[].concat(t,[r.state.columnOrder])}),e.visibleColumns.push(ur),e.useInstance.push(ar)};function ir(e,t,n,r){return t.type===a.init?p({columnOrder:[]},e):t.type===a.resetColumnOrder?p({},e,{columnOrder:r.initialState.columnOrder||[]}):t.type===a.setColumnOrder?p({},e,{columnOrder:ne(t.columnOrder,e.columnOrder)}):void 0}function ur(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var r=[].concat(n),i=[].concat(e),o=[],u=function(){var s=r.shift(),l=i.findIndex(function(d){return d.id===s});l>-1&&o.push(i.splice(l,1)[0])};i.length&&r.length;)u();return[].concat(o,i)}function ar(e){var t=e.dispatch;e.setColumnOrder=x.useCallback(function(n){return t({type:a.setColumnOrder,columnOrder:n})},[t])}It.pluginName="useColumnOrder",de.canResize=!0,a.columnStartResizing="columnStartResizing",a.columnResizing="columnResizing",a.columnDoneResizing="columnDoneResizing",a.resetResize="resetResize";var Ft=function(e){e.getResizerProps=[sr],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(lr),e.useInstance.push(cr),e.useInstanceBeforeDimensions.push(dr)},sr=function(e,t){var n=t.instance,r=t.header,i=n.dispatch,o=function(u,s){var l=!1;if(u.type==="touchstart"){if(u.touches&&u.touches.length>1)return;l=!0}var d,m,f=function(b){var v=[];return function G(R){R.columns&&R.columns.length&&R.columns.map(G),v.push(R)}(b),v}(s).map(function(b){return[b.id,b.totalWidth]}),g=l?Math.round(u.touches[0].clientX):u.clientX,c=function(){window.cancelAnimationFrame(d),d=null,i({type:a.columnDoneResizing})},h=function(){window.cancelAnimationFrame(d),d=null,i({type:a.columnResizing,clientX:m})},w=function(b){m=b,d||(d=window.requestAnimationFrame(h))},y={mouse:{moveEvent:"mousemove",moveHandler:function(b){return w(b.clientX)},upEvent:"mouseup",upHandler:function(b){document.removeEventListener("mousemove",y.mouse.moveHandler),document.removeEventListener("mouseup",y.mouse.upHandler),c()}},touch:{moveEvent:"touchmove",moveHandler:function(b){return b.cancelable&&(b.preventDefault(),b.stopPropagation()),w(b.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(b){document.removeEventListener(y.touch.moveEvent,y.touch.moveHandler),document.removeEventListener(y.touch.upEvent,y.touch.moveHandler),c()}}},S=l?y.touch:y.mouse,A=!!function(){if(typeof Ie=="boolean")return Ie;var b=!1;try{var v={get passive(){return b=!0,!1}};window.addEventListener("test",null,v),window.removeEventListener("test",null,v)}catch{b=!1}return Ie=b}()&&{passive:!1};document.addEventListener(S.moveEvent,S.moveHandler,A),document.addEventListener(S.upEvent,S.upHandler,A),i({type:a.columnStartResizing,columnId:s.id,columnWidth:s.totalWidth,headerIdWidths:f,clientX:g})};return[e,{onMouseDown:function(u){return u.persist()||o(u,r)},onTouchStart:function(u){return u.persist()||o(u,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function lr(e,t){if(t.type===a.init)return p({columnResizing:{columnWidths:{}}},e);if(t.type===a.resetResize)return p({},e,{columnResizing:{columnWidths:{}}});if(t.type===a.columnStartResizing){var n=t.clientX,r=t.columnId,i=t.columnWidth,o=t.headerIdWidths;return p({},e,{columnResizing:p({},e.columnResizing,{startX:n,headerIdWidths:o,columnWidth:i,isResizingColumn:r})})}if(t.type===a.columnResizing){var u=t.clientX,s=e.columnResizing,l=s.startX,d=s.columnWidth,m=s.headerIdWidths,f=(u-l)/d,g={};return(m===void 0?[]:m).forEach(function(c){var h=c[0],w=c[1];g[h]=Math.max(w+w*f,0)}),p({},e,{columnResizing:p({},e.columnResizing,{columnWidths:p({},e.columnResizing.columnWidths,{},g)})})}return t.type===a.columnDoneResizing?p({},e,{columnResizing:p({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}Ft.pluginName="useResizeColumns";var dr=function(e){var t=e.flatHeaders,n=e.disableResizing,r=e.getHooks,i=e.state.columnResizing,o=L(e);t.forEach(function(u){var s=te(u.disableResizing!==!0&&void 0,n!==!0&&void 0,!0);u.canResize=s,u.width=i.columnWidths[u.id]||u.originalWidth||u.width,u.isResizing=i.isResizingColumn===u.id,s&&(u.getResizerProps=V(r().getResizerProps,{instance:o(),header:u}))})};function cr(e){var t=e.plugins,n=e.dispatch,r=e.autoResetResize,i=r===void 0||r,o=e.columns;ie(t,["useAbsoluteLayout"],"useResizeColumns");var u=L(i);Q(function(){u()&&n({type:a.resetResize})},[o]);var s=x.useCallback(function(){return n({type:a.resetResize})},[n]);Object.assign(e,{resetResizing:s})}var Ge={position:"absolute",top:0},Gt=function(e){e.getTableBodyProps.push(ve),e.getRowProps.push(ve),e.getHeaderGroupProps.push(ve),e.getFooterGroupProps.push(ve),e.getHeaderProps.push(function(t,n){var r=n.column;return[t,{style:p({},Ge,{left:r.totalLeft+"px",width:r.totalWidth+"px"})}]}),e.getCellProps.push(function(t,n){var r=n.cell;return[t,{style:p({},Ge,{left:r.column.totalLeft+"px",width:r.column.totalWidth+"px"})}]}),e.getFooterProps.push(function(t,n){var r=n.column;return[t,{style:p({},Ge,{left:r.totalLeft+"px",width:r.totalWidth+"px"})}]})};Gt.pluginName="useAbsoluteLayout";var ve=function(e,t){return[e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},ke={display:"inline-block",boxSizing:"border-box"},Ae=function(e,t){return[e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},kt=function(e){e.getRowProps.push(Ae),e.getHeaderGroupProps.push(Ae),e.getFooterGroupProps.push(Ae),e.getHeaderProps.push(function(t,n){var r=n.column;return[t,{style:p({},ke,{width:r.totalWidth+"px"})}]}),e.getCellProps.push(function(t,n){var r=n.cell;return[t,{style:p({},ke,{width:r.column.totalWidth+"px"})}]}),e.getFooterProps.push(function(t,n){var r=n.column;return[t,{style:p({},ke,{width:r.totalWidth+"px"})}]})};function At(e){e.getTableProps.push(pr),e.getRowProps.push(ze),e.getHeaderGroupProps.push(ze),e.getFooterGroupProps.push(ze),e.getHeaderProps.push(fr),e.getCellProps.push(gr),e.getFooterProps.push(hr)}kt.pluginName="useBlockLayout",At.pluginName="useFlexLayout";var pr=function(e,t){return[e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},ze=function(e,t){return[e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},fr=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},gr=function(e,t){var n=t.cell;return[e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},hr=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function zt(e){e.stateReducers.push(yr),e.getTableProps.push(mr),e.getHeaderProps.push(vr),e.getRowProps.push(wr)}a.columnStartResizing="columnStartResizing",a.columnResizing="columnResizing",a.columnDoneResizing="columnDoneResizing",a.resetResize="resetResize",zt.pluginName="useGridLayout";var mr=function(e,t){var n=t.instance;return[e,{style:{display:"grid",gridTemplateColumns:n.visibleColumns.map(function(r){var i;return n.state.gridLayout.columnWidths[r.id]?n.state.gridLayout.columnWidths[r.id]+"px":(i=n.state.columnResizing)!=null&&i.isResizingColumn?n.state.gridLayout.startWidths[r.id]+"px":typeof r.width=="number"?r.width+"px":r.width}).join(" ")}}]},vr=function(e,t){var n=t.column;return[e,{id:"header-cell-"+n.id,style:{position:"sticky",gridColumn:"span "+n.totalVisibleHeaderCount}}]},wr=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:"1 / "+(n.cells.length+1)}}]:[e,{}]};function yr(e,t,n,r){if(t.type===a.init)return p({gridLayout:{columnWidths:{}}},e);if(t.type===a.resetResize)return p({},e,{gridLayout:{columnWidths:{}}});if(t.type===a.columnStartResizing){var i=t.columnId,o=t.headerIdWidths,u=He(i);if(u!==void 0){var s=r.visibleColumns.reduce(function(v,G){var R;return p({},v,((R={})[G.id]=He(G.id),R))},{}),l=r.visibleColumns.reduce(function(v,G){var R;return p({},v,((R={})[G.id]=G.minWidth,R))},{}),d=r.visibleColumns.reduce(function(v,G){var R;return p({},v,((R={})[G.id]=G.maxWidth,R))},{}),m=o.map(function(v){var G=v[0];return[G,He(G)]});return p({},e,{gridLayout:p({},e.gridLayout,{startWidths:s,minWidths:l,maxWidths:d,headerIdGridWidths:m,columnWidth:u})})}return e}if(t.type===a.columnResizing){var f=t.clientX,g=e.columnResizing.startX,c=e.gridLayout,h=c.columnWidth,w=c.minWidths,y=c.maxWidths,S=c.headerIdGridWidths,A=(f-g)/h,b={};return(S===void 0?[]:S).forEach(function(v){var G=v[0],R=v[1];b[G]=Math.min(Math.max(w[G],R+R*A),y[G])}),p({},e,{gridLayout:p({},e.gridLayout,{columnWidths:p({},e.gridLayout.columnWidths,{},b)})})}return t.type===a.columnDoneResizing?p({},e,{gridLayout:p({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function He(e){var t,n=(t=document.getElementById("header-cell-"+e))==null?void 0:t.offsetWidth;if(n!==void 0)return n}z._UNSTABLE_usePivotColumns=bt,z.actions=a,z.defaultColumn=de,z.defaultGroupByFn=mt,z.defaultOrderByFn=xt,z.defaultRenderer=ee,z.emptyRenderer=Pe,z.ensurePluginOrder=ie,z.flexRender=Ne,z.functionalUpdate=ne,z.loopHooks=le,z.makePropGetter=V,z.makeRenderer=Be,z.reduceHooks=Y,z.safeUseLayoutEffect=De,z.useAbsoluteLayout=Gt,z.useAsyncDebounce=function(e,t){t===void 0&&(t=0);var n=x.useRef({}),r=L(e),i=L(t);return x.useCallback(function(){var o=he(regeneratorRuntime.mark(function u(){var s,l,d,m=arguments;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:for(s=m.length,l=new Array(s),d=0;d<s;d++)l[d]=m[d];return n.current.promise||(n.current.promise=new Promise(function(g,c){n.current.resolve=g,n.current.reject=c})),n.current.timeout&&clearTimeout(n.current.timeout),n.current.timeout=setTimeout(he(regeneratorRuntime.mark(function g(){return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return delete n.current.timeout,c.prev=1,c.t0=n.current,c.next=5,r().apply(void 0,l);case 5:c.t1=c.sent,c.t0.resolve.call(c.t0,c.t1),c.next=12;break;case 9:c.prev=9,c.t2=c.catch(1),n.current.reject(c.t2);case 12:return c.prev=12,delete n.current.promise,c.finish(12);case 15:case"end":return c.stop()}},g,null,[[1,9,12,15]])})),i()),f.abrupt("return",n.current.promise);case 5:case"end":return f.stop()}},u)}));return function(){return o.apply(this,arguments)}}(),[r,i])},z.useBlockLayout=kt,z.useColumnOrder=It,z.useExpanded=et,z.useFilters=ct,z.useFlexLayout=At,z.useGetLatest=L,z.useGlobalFilter=pt,z.useGridLayout=zt,z.useGroupBy=ht,z.useMountedLayoutEffect=Q,z.usePagination=Rt,z.useResizeColumns=Ft,z.useRowSelect=Ct,z.useRowState=Et,z.useSortBy=yt,z.useTable=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e=Qe(e),n=[Ye].concat(n);var i=x.useRef({}),o=L(i.current);Object.assign(o(),p({},e,{plugins:n,hooks:nn()})),n.filter(Boolean).forEach(function(B){B(o().hooks)});var u=L(o().hooks);o().getHooks=u,delete o().hooks,Object.assign(o(),Y(u().useOptions,Qe(e)));var s=o(),l=s.data,d=s.columns,m=s.initialState,f=s.defaultColumn,g=s.getSubRows,c=s.getRowId,h=s.stateReducer,w=s.useControlledState,y=L(h),S=x.useCallback(function(B,D){if(!D.type)throw console.info({action:D}),new Error("Unknown Action 👆");return[].concat(u().stateReducers,Array.isArray(y())?y():[y()]).reduce(function($,U){return U($,D,B,o())||$},B)},[u,y,o]),A=x.useReducer(S,void 0,function(){return S(m,{type:a.init})}),b=A[0],v=A[1],G=Y([].concat(u().useControlledState,[w]),b,{instance:o()});Object.assign(o(),{state:G,dispatch:v});var R=x.useMemo(function(){return _e(Y(u().columns,d,{instance:o()}))},[u,o,d].concat(Y(u().columnsDeps,[],{instance:o()})));o().columns=R;var I=x.useMemo(function(){return Y(u().allColumns,Ve(R),{instance:o()}).map($e)},[R,u,o].concat(Y(u().allColumnsDeps,[],{instance:o()})));o().allColumns=I;var H=x.useMemo(function(){for(var B=[],D=[],$={},U=[].concat(I);U.length;){var q=U.shift();hn({data:l,rows:B,flatRows:D,rowsById:$,column:q,getRowId:c,getSubRows:g,accessValueHooks:u().accessValue,getInstance:o})}return[B,D,$]},[I,l,c,g,u,o]),P=H[0],E=H[1],O=H[2];Object.assign(o(),{rows:P,initialRows:[].concat(P),flatRows:E,rowsById:O}),le(u().useInstanceAfterData,o());var F=x.useMemo(function(){return Y(u().visibleColumns,I,{instance:o()}).map(function(B){return Xe(B,f)})},[u,I,o,f].concat(Y(u().visibleColumnsDeps,[],{instance:o()})));I=x.useMemo(function(){var B=[].concat(F);return I.forEach(function(D){B.find(function($){return $.id===D.id})||B.push(D)}),B},[I,F]),o().allColumns=I;var j=x.useMemo(function(){return Y(u().headerGroups,$t(F,f),o())},[u,F,f,o].concat(Y(u().headerGroupsDeps,[],{instance:o()})));o().headerGroups=j;var W=x.useMemo(function(){return j.length?j[0].headers:[]},[j]);o().headers=W,o().flatHeaders=j.reduce(function(B,D){return[].concat(B,D.headers)},[]),le(u().useInstanceBeforeDimensions,o());var M=F.filter(function(B){return B.isVisible}).map(function(B){return B.id}).sort().join("_");F=x.useMemo(function(){return F.filter(function(B){return B.isVisible})},[F,M]),o().visibleColumns=F;var C=Ze(W),T=C[0],_=C[1],K=C[2];return o().totalColumnsMinWidth=T,o().totalColumnsWidth=_,o().totalColumnsMaxWidth=K,le(u().useInstance,o()),[].concat(o().flatHeaders,o().allColumns).forEach(function(B){B.render=Be(o(),B),B.getHeaderProps=V(u().getHeaderProps,{instance:o(),column:B}),B.getFooterProps=V(u().getFooterProps,{instance:o(),column:B})}),o().headerGroups=x.useMemo(function(){return j.filter(function(B,D){return B.headers=B.headers.filter(function($){return $.headers?function U(q){return q.filter(function(ue){return ue.headers?U(ue.headers):ue.isVisible}).length}($.headers):$.isVisible}),!!B.headers.length&&(B.getHeaderGroupProps=V(u().getHeaderGroupProps,{instance:o(),headerGroup:B,index:D}),B.getFooterGroupProps=V(u().getFooterGroupProps,{instance:o(),headerGroup:B,index:D}),!0)})},[j,o,u]),o().footerGroups=[].concat(o().headerGroups).reverse(),o().prepareRow=x.useCallback(function(B){B.getRowProps=V(u().getRowProps,{instance:o(),row:B}),B.allCells=I.map(function(D){var $=B.values[D.id],U={column:D,row:B,value:$};return U.getCellProps=V(u().getCellProps,{instance:o(),cell:U}),U.render=Be(o(),D,{row:B,cell:U,value:$}),U}),B.cells=F.map(function(D){return B.allCells.find(function($){return $.column.id===D.id})}),le(u().prepareRow,B,{instance:o()})},[u,o,I,F]),o().getTableProps=V(u().getTableProps,{instance:o()}),o().getTableBodyProps=V(u().getTableBodyProps,{instance:o()}),le(u().useFinalInstance,o()),o()},Object.defineProperty(z,"__esModule",{value:!0})})})(Oe,Oe.exports);var Hr=Oe.exports;Vt.exports=Hr;var Tr=Vt.exports;const Wr=J.div`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    padding: 18px;
    border-radius: 15px;
    background-color: ${k=>k.theme.colors.white};
  }
`,jr=J.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${k=>k.theme.colors.white};

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 668px;
  }

  @media screen and (min-width: 1440px) {
    width: 1204px;
  }
`,Or=J.thead`
  background-color: ${k=>k.theme.colors.formBgColor};
`,Mr=J.th`
  padding: 8px;
  font-weight: 500;
  font-size: 16px;
  color: ${k=>k.theme.colors.black};
  border-bottom: 1px solid ${k=>k.theme.colors.tableBorder};

  &:not(:last-child) {
    border-right: 1px solid ${k=>k.theme.colors.tableBorder};
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
`,ae=J.td`
  padding: 8px;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;

  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;

  color: ${k=>k.theme.colors.black};

  @media screen and (min-width: 375px) {
    padding: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`,Dt=J.tr`
  & > ${ae}:not(:first-child) {
    border-left: 1px solid ${k=>k.theme.colors.tableBorder};
  }

  & > ${ae}:not(:last-child) {
    border-right: 1px solid ${k=>k.theme.colors.tableBorder};
  }

  & > ${ae} {
    border-bottom: 1px solid ${k=>k.theme.colors.tableBorder};
  }

  /* &:not(:last-child) > ${ae} {
    border-bottom: 1px solid ${k=>k.theme.colors.tableBorder};
  } */

  @media screen and (min-width: 375px) {
    & > ${ae}:last-child {
      padding: 14px 9px;
    }
  }

  @media screen and (max-width: 767px) {
    &:last-child > ${ae} {
      border-bottom: none;
    }
  }
`,Lr=J(Mr)`
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
      padding: 16px 16px 14px 16px;
    }

    &:nth-child(3) {
      padding: 16px 16px 12px 16px;
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
`,Dr=J(ae)`
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
`,Nr=({columnsData:k,tableData:oe})=>{const z=Se.useMemo(()=>k,[k]),x=Se.useMemo(()=>oe,[oe]),{getTableProps:ge,getTableBodyProps:he,headerGroups:p,rows:se,prepareRow:Ce}=Tr.useTable({columns:z,data:x});return N.jsx(Wr,{children:N.jsxs(jr,{...ge(),children:[N.jsx(Or,{children:p.map(a=>N.jsx(Dt,{...a.getHeaderGroupProps(),children:a.headers.map(ee=>N.jsx(Lr,{...ee.getHeaderProps(),children:ee.render("Header")},ee.id))},a.id))}),N.jsx("tbody",{...he(),children:se.map(a=>(Ce(a),N.jsx(Dt,{...a.getRowProps(),children:a.cells.map(ee=>N.jsx(Dr,{...ee.getCellProps(),children:ee.render("Cell")},ee.column.id))},a.id)))})]})})},_r=k=>k.recommend.recommendedWords,Vr=J.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
    color: ${k=>k.theme.colors.black};
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,Me=J.svg`
  width: 20px;
  height: 20px;
  fill: ${k=>k.theme.colors.mainGreen};
  transition: fill 250ms ${k=>k.theme.transition};
`,$r=J.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  &:hover ${Me}, &:focus ${Me} {
    fill: ${k=>k.theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    width: 120px;
    height: 41px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 165px;
    height: 22px;
  }
`,Xr=({id:k})=>N.jsxs($r,{type:"button",onClick:()=>console.log(k),children:[N.jsx(Vr,{children:"Add to dictionary"}),N.jsx(Me,{children:N.jsx("use",{href:`${_t}#link-arrow`})})]}),qr=J.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,Kr=J.svg`
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
`,Ur=J.span`
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  color: ${k=>k.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`,Nt=({text:k})=>{const oe=k==="word"?"uk":"ukraine";return N.jsxs(qr,{children:[N.jsx(Ur,{children:k}),N.jsx(Kr,{children:N.jsx("use",{href:`${_t}#${oe}`})})]})},Qr=()=>{const k=Ir(),oe=Fr(_r);Se.useEffect(()=>{k(Lt())},[k]);const z=[{Header:()=>N.jsx(Nt,{text:"word"}),accessor:"en"},{Header:()=>N.jsx(Nt,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{accessor:"_id",Cell:({row:x})=>N.jsx(Xr,{id:x.original._id})}];return N.jsxs(N.Fragment,{children:[N.jsx(zr,{className:"recommend",fetch:Lt,setCategory:Gr,setIsIrregular:kr,setKeyword:Ar}),N.jsx(Nr,{columnsData:z,tableData:oe})]})};export{Qr as default};
