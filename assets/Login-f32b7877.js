import{u as h,j as s,l as g,a as j}from"./index-95618c50.js";import{u as w,a as b,F as v,T as S,S as f,b as y,I as L,L as t,c as d,d as l,P as F,e as P,f as I,N as C,o as N,l as k,g as B}from"./FormMessage-f80721e5.js";const T=()=>{var n,o;const c=h(),{register:a,handleSubmit:m,formState:{errors:e,dirtyFields:i}}=w({mode:"onChange",resolver:N(k)}),p=u=>{c(g(u))},{isVisiblePassword:r,changeVisibility:x}=b();return s.jsxs(v,{children:[s.jsx(S,{children:"Login"}),s.jsx(f,{children:"Please enter your login details to continue using our service:"}),s.jsxs(y,{onSubmit:m(p),children:[s.jsxs(L,{children:[s.jsxs(t,{children:[s.jsx(d,{...a("email"),type:"text",placeholder:"Email",className:i.email||e.email?e.email?"error":"valid":""}),(i.email||e.email)&&s.jsx(l,{error:e.email!==void 0,children:((n=e.email)==null?void 0:n.message)||"Success email"})]}),s.jsxs(t,{children:[s.jsx(d,{...a("password"),type:r?"text":"password",placeholder:"Password",className:i.password||e.password?e.password?"error":"valid":""}),s.jsx(F,{changeVisibility:x,isVisiblePassword:r}),(i.password||e.password)&&s.jsx(l,{error:e.password!==void 0,children:((o=e.password)==null?void 0:o.message)||"Success password"})]})]}),s.jsx(P,{type:"submit",children:"Login"})]}),s.jsx(I,{children:s.jsx(C,{to:"/register",children:"Register"})})]})},V=j.div`
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
`,W=()=>s.jsxs(V,{children:[s.jsx(B,{}),s.jsx(T,{})]});export{W as default};
