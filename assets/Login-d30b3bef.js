import{j as s,u}from"./index-2e5ded65.js";import{u as g,a as h,F as j,T as w,S as b,b as v,I as S,L as t,c as d,d as l,P as f,e as y,f as L,N as F,o as P,l as C,g as I}from"./FormMessage-0eb53c93.js";const N=()=>{var n,o;const{register:r,handleSubmit:m,formState:{errors:e,dirtyFields:i}}=g({mode:"onChange",resolver:P(C)}),c=x=>console.log(x),{isVisiblePassword:a,changeVisibility:p}=h();return s.jsxs(j,{children:[s.jsx(w,{children:"Login"}),s.jsx(b,{children:"Please enter your login details to continue using our service:"}),s.jsxs(v,{onSubmit:m(c),children:[s.jsxs(S,{children:[s.jsxs(t,{children:[s.jsx(d,{...r("email"),type:"text",placeholder:"Email",className:i.email||e.email?e.email?"error":"valid":""}),(i.email||e.email)&&s.jsx(l,{error:e.email!==void 0,children:((n=e.email)==null?void 0:n.message)||"Success email"})]}),s.jsxs(t,{children:[s.jsx(d,{...r("password"),type:a?"text":"password",placeholder:"Password",className:i.password||e.password?e.password?"error":"valid":""}),s.jsx(f,{changeVisibility:p,isVisiblePassword:a}),(i.password||e.password)&&s.jsx(l,{error:e.password!==void 0,children:((o=e.password)==null?void 0:o.message)||"Success password"})]})]}),s.jsx(y,{type:"submit",children:"Login"})]}),s.jsx(L,{children:s.jsx(F,{to:"/register",children:"Register"})})]})},k=u.div`
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
`,V=()=>s.jsxs(k,{children:[s.jsx(I,{}),s.jsx(N,{})]});export{V as default};
