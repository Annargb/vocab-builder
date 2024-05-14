import{u as h,j as s,l as g,a as j}from"./index-02b5c493.js";import{u as w,F as b,T as f,S as v,a as S,I as y,L as d,b as l,c,P as L,d as F,e as P,N as I,o as C,l as N,f as k}from"./FormMessage-8d56cc05.js";import{u as B}from"./index.esm-41ea0b5e.js";const T=()=>{var o,n;const m=h(),{register:r,handleSubmit:p,formState:{errors:e,dirtyFields:i}}=B({mode:"onChange",resolver:C(N)}),x=t=>{console.log(t),m(g(t))},{isVisiblePassword:a,changeVisibility:u}=w();return s.jsxs(b,{children:[s.jsx(f,{children:"Login"}),s.jsx(v,{children:"Please enter your login details to continue using our service:"}),s.jsxs(S,{onSubmit:p(x),children:[s.jsxs(y,{children:[s.jsxs(d,{children:[s.jsx(l,{...r("email"),type:"text",placeholder:"Email",className:i.email||e.email?e.email?"error":"valid":""}),(i.email||e.email)&&s.jsx(c,{error:e.email!==void 0,children:((o=e.email)==null?void 0:o.message)||"Success email"})]}),s.jsxs(d,{children:[s.jsx(l,{...r("password"),type:a?"text":"password",placeholder:"Password",className:i.password||e.password?e.password?"error":"valid":""}),s.jsx(L,{changeVisibility:u,isVisiblePassword:a}),(i.password||e.password)&&s.jsx(c,{error:e.password!==void 0,children:((n=e.password)==null?void 0:n.message)||"Success password"})]})]}),s.jsx(F,{type:"submit",children:"Login"})]}),s.jsx(P,{children:s.jsx(I,{to:"/register",children:"Register"})})]})},V=j.div`
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
`,D=()=>s.jsxs(V,{children:[s.jsx(k,{}),s.jsx(T,{})]});export{D as default};
