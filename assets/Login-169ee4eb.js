import{u as h,j as s,l as g,a as j}from"./index-40b06e4f.js";import{u as w,F as b,T as f,S as v,a as S,I as y,L as t,b as d,c as l,P as L,d as F,e as P,N as I,f as C}from"./FormMessage-bfb9c32f.js";import{u as N,o as k,l as B}from"./schemas-5d4899bf.js";const T=()=>{var n,o;const m=h(),{register:r,handleSubmit:c,formState:{errors:e,dirtyFields:i}}=N({mode:"onChange",resolver:k(B)}),p=u=>{m(g(u))},{isVisiblePassword:a,changeVisibility:x}=w();return s.jsxs(b,{children:[s.jsx(f,{children:"Login"}),s.jsx(v,{children:"Please enter your login details to continue using our service:"}),s.jsxs(S,{onSubmit:c(p),children:[s.jsxs(y,{children:[s.jsxs(t,{children:[s.jsx(d,{...r("email"),type:"text",placeholder:"Email",className:i.email||e.email?e.email?"error":"valid":""}),(i.email||e.email)&&s.jsx(l,{error:e.email!==void 0,children:((n=e.email)==null?void 0:n.message)||"Success email"})]}),s.jsxs(t,{children:[s.jsx(d,{...r("password"),type:a?"text":"password",placeholder:"Password",className:i.password||e.password?e.password?"error":"valid":""}),s.jsx(L,{changeVisibility:x,isVisiblePassword:a}),(i.password||e.password)&&s.jsx(l,{error:e.password!==void 0,children:((o=e.password)==null?void 0:o.message)||"Success password"})]})]}),s.jsx(F,{type:"submit",children:"Login"})]}),s.jsx(P,{children:s.jsx(I,{to:"/register",children:"Register"})})]})},V=j.div`
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
`,D=()=>s.jsxs(V,{children:[s.jsx(C,{}),s.jsx(T,{})]});export{D as default};
