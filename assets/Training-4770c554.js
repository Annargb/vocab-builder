import{a as n,b as a,u as b,k,j as t,i as l,G as L,H as R,o as V,x as W}from"./index-1530df29.js";import{N as P}from"./NotFoundBlock-b2eb0ecb.js";import{P as A}from"./Progress-207ac9fd.js";const j=e=>e.training.tasks,U=n.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 116px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 18px;
    margin-bottom: 40px;
    border-radius: 15px;
    background-color: ${e=>e.theme.colors.snowWhite};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 1240px;
    height: 338px;
    margin-bottom: 80px;
  }
`,D=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`,H=n.button`
  width: 100%;
  padding: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.white};
  background-color: ${e=>e.theme.colors.mainGreen};
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 203px;
    font-size: 18px;
    line-height: 1.56;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
  }
`,O=n.button`
  font-weight: 700;
  font-size: 16px;
  color: ${e=>e.theme.colors.linkColor};

  @media screen and (min-width: 768px) {
    width: 203px;
    font-size: 18px;
    line-height: 1.56;
    color: ${e=>e.theme.colors.mainGreen};
    border: 1px solid ${e=>e.theme.colors.mainGreen};
    border-radius: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
  }
`,g=n.label`
  position: relative;
  width: 100%;
  max-width: 343px;
  height: 195px;

  @media screen and (min-width: 768px) {
    min-width: 668px;
    height: 282px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 602px;
    height: 302px;
  }
`,$=n.textarea`
  width: 100%;
  max-width: 343px;
  height: 195px;
  padding: 22px 22px 50px 22px;
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
    min-width: 668px;
    height: 282px;
    font-size: 20px;
    padding: 22px 140px 22px 22px;
    /* padding: 22px 140px 50px 22px; */
  }

  @media screen and (min-width: 1440px) {
    min-width: 602px;
    height: 302px;
    border-bottom: none;
    border-right: 1px solid ${e=>e.theme.colors.tableBorder};
  }
`,Y=n($)`
  text-transform: capitalize;
  border-bottom: none;
  border-radius: 0 0 8px 8px;

  @media screen and (min-width: 1440px) {
    border-right: none;
  }
`,p=n.svg`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.mainGreen};
  transition: fill 250ms ${e=>e.theme.transition};
`,q=n.button`
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

  &:hover ${p}, &:focus ${p} {
    fill: ${e=>e.theme.colors.black};
  }
`,u=n.div`
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
`,w=n.svg`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,f=n.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`,J=()=>{const[e,r]=a.useState(0),[s,x]=a.useState(""),[d,y]=a.useState([]),v=b(),c=k(j),o=c[e],z=o.ua||o.en,C=o.task==="en"?"English":"Ukrainian",I=o.task==="en"?"uk":"ukraine",N=o.task==="ua"?"English":"Ukrainian",S=o.task==="ua"?"uk":"ukraine",h=(i,E)=>{console.log(i);const G=i.task,T={...i,[G]:E},m=[...d,T];y(m),console.log(m)},B=()=>{s&&h(o,s),x(""),r(i=>i+1)},F=()=>{console.log(s),h(o,s),console.log(d),v(L(d))};return t.jsxs("div",{children:[t.jsxs(U,{children:[t.jsxs(g,{children:[t.jsx($,{type:"text",value:s,placeholder:"Введіть переклад",onChange:i=>x(i.target.value)}),c.length-1>e&&t.jsxs(q,{onClick:B,type:"button",children:["Next",t.jsx(p,{children:t.jsx("use",{href:`${l}#link-arrow`})})]}),t.jsxs(u,{children:[t.jsx(w,{children:t.jsx("use",{href:`${l}#${I}`})}),t.jsx(f,{children:C})]})]}),t.jsxs(g,{children:[t.jsx(Y,{type:"text",value:z,readOnly:!0}),t.jsxs(u,{children:[t.jsx(w,{children:t.jsx("use",{href:`${l}#${S}`})}),t.jsx(f,{children:N})]})]})]}),t.jsxs(D,{children:[t.jsx(H,{type:"button",onClick:F,children:"Save"}),t.jsx(O,{type:"button",children:"Cancel"})]})]})},X=()=>{const e=b(),r=k(j);return a.useEffect(()=>{e(R()),e(V()),e(W())},[e]),t.jsx(t.Fragment,{children:r.length===0?t.jsx(P,{title:"You don't have a single word to learn right now.",text:"Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study.",className:"training"}):t.jsxs(t.Fragment,{children:[t.jsx(A,{className:"training",progress:r.length}),t.jsx(J,{})]})})};export{X as default};
