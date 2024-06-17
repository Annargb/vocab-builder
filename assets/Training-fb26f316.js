import{a as n,b as a,u as b,f as W,k as p,j as t,i as l,C as A,G as O,H as U,o as D,x as H}from"./index-3846d3b5.js";import{N as Y}from"./NotFoundBlock-72c9ead1.js";import{P as q}from"./Progress-d4c46e1e.js";const k=e=>e.training.tasks,J=e=>e.training.error,K=n.div`
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
`,Q=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`,X=n.button`
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
`,Z=n.button`
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
`,j=n.textarea`
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
`,_=n(j)`
  text-transform: capitalize;
  border-bottom: none;
  border-radius: 0 0 8px 8px;

  @media screen and (min-width: 1440px) {
    border-right: none;
  }
`,c=n.svg`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.mainGreen};
  transition: fill 250ms ${e=>e.theme.transition};
`,ee=n.button`
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
`,te=()=>{const[e,r]=a.useState(0),[s,x]=a.useState(""),[$,y]=a.useState([]),v=b(),{isModalOpen:z,openModal:C,closeModal:I}=W(),S=p(J),h=p(k),i=h[e],N=i.ua||i.en,B=i.task==="en"?"English":"Ukrainian",E=i.task==="en"?"uk":"ukraine",F=i.task==="ua"?"English":"Ukrainian",G=i.task==="ua"?"uk":"ukraine",m=(o,T)=>new Promise(L=>{console.log(o);const P=o.task,V={...o,[P]:T},d=[...$,V];y(d),console.log(d),L(d)}),M=()=>{s&&m(i,s),x(""),r(o=>o+1)},R=async()=>{console.log(s);const o=await m(i,s);v(O(o)),S||C()};return t.jsxs("div",{children:[t.jsxs(K,{children:[t.jsxs(g,{children:[t.jsx(j,{type:"text",value:s,placeholder:"Введіть переклад",onChange:o=>x(o.target.value)}),h.length-1>e&&t.jsxs(ee,{onClick:M,type:"button",children:["Next",t.jsx(c,{children:t.jsx("use",{href:`${l}#link-arrow`})})]}),t.jsxs(u,{children:[t.jsx(w,{children:t.jsx("use",{href:`${l}#${E}`})}),t.jsx(f,{children:B})]})]}),t.jsxs(g,{children:[t.jsx(_,{type:"text",value:N,readOnly:!0}),t.jsxs(u,{children:[t.jsx(w,{children:t.jsx("use",{href:`${l}#${G}`})}),t.jsx(f,{children:F})]})]})]}),t.jsxs(Q,{children:[t.jsx(X,{type:"button",onClick:R,children:"Save"}),t.jsx(Z,{type:"button",children:"Cancel"})]}),t.jsx(A,{isModalOpen:z,closeModal:I})]})},se=()=>{const e=b(),r=p(k);return a.useEffect(()=>{e(U()),e(D()),e(H())},[e]),t.jsx(t.Fragment,{children:r.length===0?t.jsx(Y,{title:"You don't have a single word to learn right now.",text:"Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study.",className:"training"}):t.jsxs(t.Fragment,{children:[t.jsx(q,{className:"training",progress:r.length}),t.jsx(te,{})]})})};export{se as default};
