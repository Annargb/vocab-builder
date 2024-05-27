import{a as s,b as a,k as f,j as t,i as l,u as T,G as L,o as R,x as V}from"./index-c6437887.js";import{N as B}from"./NotFoundBlock-f1559890.js";import{P}from"./Progress-d394ea98.js";const k=e=>e.training.tasks,W=s.div`
  display: flex;
  flex-direction: column;
`,p=s.label`
  position: relative;
  width: 100%;
  max-width: 343px;
  height: 195px;

  @media screen and (min-width: 768px) {
    width: 668px;
    height: 282px;
  }
`,w=s.textarea`
  width: 100%;
  max-width: 343px;
  height: 195px;
  padding: 22px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
  border: none;
  border-bottom: 1px solid ${e=>e.theme.colors.tableBorder};
  border-radius: 8px 8px 0 0;
  resize: none;
  outline: none;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 668px;
    height: 282px;
    font-size: 20px;
  }
`,D=s(w)`
  text-transform: capitalize;
  border-bottom: none;
  border-radius: 0 0 8px 8px;
`,c=s.svg`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.mainGreen};
  transition: fill 250ms ${e=>e.theme.transition};
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
  color: ${e=>e.theme.colors.linkColor};

  &:hover ${c}, &:focus ${c} {
    fill: ${e=>e.theme.colors.black};
  }
`,u=s.div`
  position: absolute;
  right: 22px;
  bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    top: 22px;
    bottom: auto;
  }
`,g=s.svg`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,m=s.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,U=()=>{const[e,i]=a.useState(0),[r,h]=a.useState(""),[b,j]=a.useState([]),x=f(k),n=x[e],y=n.ua||n.en,$=n.task==="en"?"English":"Ukrainian",v=n.task==="en"?"uk":"ukraine",z=n.task==="ua"?"English":"Ukrainian",I=n.task==="ua"?"uk":"ukraine",N=(o,F)=>{const S=o.task,E={...o,[S]:F},d=[...b,E];j(d),console.log(d)},C=()=>{r&&N(n,r),h(""),i(o=>o+1)};return t.jsxs(W,{children:[t.jsxs(p,{children:[t.jsx(w,{type:"text",value:r,placeholder:"Введіть переклад",onChange:o=>h(o.target.value)}),x.length-1>e&&t.jsxs(G,{onClick:C,type:"button",children:["Next",t.jsx(c,{children:t.jsx("use",{href:`${l}#link-arrow`})})]}),t.jsxs(u,{children:[t.jsx(g,{children:t.jsx("use",{href:`${l}#${v}`})}),t.jsx(m,{children:$})]})]}),t.jsxs(p,{children:[t.jsx(D,{type:"text",value:y,readOnly:!0}),t.jsxs(u,{children:[t.jsx(g,{children:t.jsx("use",{href:`${l}#${I}`})}),t.jsx(m,{children:z})]})]})]})},A=()=>{const e=T(),i=f(k);return a.useEffect(()=>{e(L()),e(R()),e(V())},[e]),t.jsx(t.Fragment,{children:i.length===0?t.jsx(B,{title:"You don't have a single word to learn right now.",text:"Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study.",className:"training"}):t.jsxs(t.Fragment,{children:[t.jsx(P,{className:"training",progress:i.length}),t.jsx(U,{})]})})};export{A as default};
