import{j as e,u as c}from"./index-caf411e3.js";import{u as m,a as x,F as p,T as u,S as h,b as g,I as j,L as a,c as n,P as w,d as b,e as f,N as v,o as L,l as S,f as y}from"./useVisiblePassword-7337fdcd.js";const P=()=>{const{register:i,handleSubmit:t,formState:{errors:s}}=m({resolver:L(S)}),o=l=>console.log(l),{isVisiblePassword:r,changeVisibility:d}=x();return e.jsxs(p,{children:[e.jsx(u,{children:"Login"}),e.jsx(h,{children:"Please enter your login details to continue using our service:"}),e.jsxs(g,{onSubmit:t(o),children:[e.jsxs(j,{children:[e.jsxs(a,{children:[e.jsx(n,{...i("email"),type:"text",placeholder:"Email",className:s.email?"error":"valid"}),s.email&&e.jsx("span",{children:s.email.message})]}),e.jsxs(a,{children:[e.jsx(n,{...i("password"),type:r?"text":"password",placeholder:"Password",className:s.password?"error":"valid"}),s.password&&e.jsx("span",{children:s.password.message}),e.jsx(w,{changeVisibility:d,isVisiblePassword:r})]})]}),e.jsx(b,{type:"submit",children:"Login"})]}),e.jsx(f,{children:e.jsx(v,{to:"/register",children:"Register"})})]})},F=c.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    flex-direction: column-reverse;
    align-items: center;
    height: 936px;
    padding: 116px 0 106px 0;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    padding: 90px 0 104px 0;
  }
`,k=()=>e.jsxs(F,{children:[e.jsx(y,{}),e.jsx(P,{})]});export{k as default};
