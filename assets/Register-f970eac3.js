import{u as r,j as e,i as x}from"./index-caf411e3.js";import{u as p,a as h,F as g,T as u,S as j,b as f,I as w,L as t,c as a,P as b,d as y,e as v,N as S,o as F,r as N,f as I}from"./useVisiblePassword-7337fdcd.js";r.span`
  position: absolute;
  left: 0;
  bottom: -22px;
  /* display: inline-flex;
  align-items: center;
  justify-content: center; */
  gap: 4px;
`;const L=r.svg`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`,P=r.span`
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
`,n=({children:i})=>e.jsxs(P,{children:[e.jsx(L,{children:e.jsx("use",{href:`${x}#error`})}),i]}),R=()=>{const{register:i,handleSubmit:l,formState:{errors:s}}=p({resolver:F(N)}),d=m=>console.log(m),{isVisiblePassword:o,changeVisibility:c}=h();return e.jsxs(g,{children:[e.jsx(u,{children:"Register"}),e.jsx(j,{children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs(f,{onSubmit:l(d),children:[e.jsxs(w,{children:[e.jsxs(t,{children:[e.jsx(a,{...i("name"),type:"text",placeholder:"Name",className:s.name?"error":"valid"}),s.name&&e.jsx(n,{children:s.name.message})]}),e.jsxs(t,{children:[e.jsx(a,{...i("email"),type:"text",placeholder:"Email",className:s.email?"error":"valid"}),s.email&&e.jsx(n,{children:s.email.message})]}),e.jsxs(t,{children:[e.jsx(a,{...i("password"),type:o?"text":"password",placeholder:"Password",className:s.password?"error":"valid"}),s.password&&e.jsx(n,{children:s.password.message}),e.jsx(b,{changeVisibility:c,isVisiblePassword:o})]})]}),e.jsx(y,{type:"submit",children:"Register"})]}),e.jsx(v,{children:e.jsx(S,{to:"/login",children:"Login"})})]})},T=r.div`
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
    padding: 40px 0 80px 0;
  }
`,C=()=>e.jsxs(T,{children:[e.jsx(I,{$register:!0}),e.jsx(R,{})]});export{C as default};
