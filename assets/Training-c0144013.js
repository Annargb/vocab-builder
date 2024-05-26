import{a as s,b as r,k as f,j as e,i as l,u as T,G as L,o as R,x as V}from"./index-c7777208.js";import{N as B}from"./NotFoundBlock-16c2f6a1.js";import{P}from"./Progress-f421ee45.js";const k=t=>t.training.tasks,W=s.div`
  display: flex;
  flex-direction: column;
`,p=s.label`
  position: relative;
  width: 100%;
  max-width: 343px;
  height: 195px;
`,j=s.textarea`
  width: 100%;
  max-width: 343px;
  height: 195px;
  padding: 22px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.black};
  border: none;
  border-bottom: 1px solid ${t=>t.theme.colors.tableBorder};
  border-radius: 8px 8px 0 0;
  resize: none;
  outline: none;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: ${t=>t.theme.colors.black};
  }
`,D=s(j)`
  text-transform: capitalize;
  border-bottom: none;
  border-radius: 0 0 8px 8px;
`,c=s.svg`
  width: 20px;
  height: 20px;
  fill: ${t=>t.theme.colors.mainGreen};
  transition: fill 250ms ${t=>t.theme.transition};
`,G=s.button`
  position: absolute;
  left: 22px;
  bottom: 19px;
  display: flex;
  align-items: self-start;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.linkColor};

  &:hover ${c}, &:focus ${c} {
    fill: ${t=>t.theme.colors.black};
  }
`,u=s.div`
  position: absolute;
  right: 22px;
  bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
`,g=s.svg`
  width: 28px;
  height: 28px;
`,m=s.span`
  font-weight: 500;
  font-size: 14px;
  color: ${t=>t.theme.colors.black};
`,U=()=>{const[t,a]=r.useState(0),[i,h]=r.useState(""),[b,w]=r.useState([]),x=f(k),n=x[t],y=n.ua||n.en,$=n.task==="en"?"English":"Ukrainian",v=n.task==="en"?"uk":"ukraine",I=n.task==="ua"?"English":"Ukrainian",N=n.task==="ua"?"uk":"ukraine",z=(o,F)=>{const S=o.task,E={...o,[S]:F},d=[...b,E];w(d),console.log(d)},C=()=>{i&&z(n,i),h(""),a(o=>o+1)};return e.jsxs(W,{children:[e.jsxs(p,{children:[e.jsx(j,{type:"text",value:i,placeholder:"Введіть переклад",onChange:o=>h(o.target.value)}),x.length-1>t&&e.jsxs(G,{onClick:C,type:"button",children:["Next",e.jsx(c,{children:e.jsx("use",{href:`${l}#link-arrow`})})]}),e.jsxs(u,{children:[e.jsx(g,{children:e.jsx("use",{href:`${l}#${v}`})}),e.jsx(m,{children:$})]})]}),e.jsxs(p,{children:[e.jsx(D,{type:"text",value:y,readOnly:!0}),e.jsxs(u,{children:[e.jsx(g,{children:e.jsx("use",{href:`${l}#${N}`})}),e.jsx(m,{children:I})]})]})]})},A=()=>{const t=T(),a=f(k);return r.useEffect(()=>{t(L()),t(R()),t(V())},[t]),e.jsx(e.Fragment,{children:a.length===0?e.jsx(B,{title:"You don't have a single word to learn right now.",text:"Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study.",className:"training"}):e.jsxs(e.Fragment,{children:[e.jsx(P,{className:"training",progress:a.length}),e.jsx(U,{})]})})};export{A as default};
