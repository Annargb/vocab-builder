import{j as e,u}from"./index-84439b6f.js";import{u as g,a as h,F as j,T as w,S as b,b as v,I as S,L as t,c as d,d as l,P as f,e as y,f as L,N as F,o as P,l as C,g as I}from"./FormMessage-30b3d051.js";const N=()=>{var n,o;const{register:r,handleSubmit:c,formState:{errors:s,dirtyFields:i}}=g({mode:"onChange",resolver:P(C)}),m=x=>console.log(x),{isVisiblePassword:a,changeVisibility:p}=h();return e.jsxs(j,{children:[e.jsx(w,{children:"Login"}),e.jsx(b,{children:"Please enter your login details to continue using our service:"}),e.jsxs(v,{onSubmit:c(m),children:[e.jsxs(S,{children:[e.jsxs(t,{children:[e.jsx(d,{...r("email"),type:"text",placeholder:"Email",className:i.email?s.email?"error":"valid":""}),(i.email||s.email)&&e.jsx(l,{error:s.email!==void 0,children:((n=s.email)==null?void 0:n.message)||"Success email"})]}),e.jsxs(t,{children:[e.jsx(d,{...r("password"),type:a?"text":"password",placeholder:"Password",className:i.password?s.password?"error":"valid":""}),e.jsx(f,{changeVisibility:p,isVisiblePassword:a}),(i.password||s.password)&&e.jsx(l,{error:s.password!==void 0,children:((o=s.password)==null?void 0:o.message)||"Success password"})]})]}),e.jsx(y,{type:"submit",children:"Login"})]}),e.jsx(L,{children:e.jsx(F,{to:"/register",children:"Register"})})]})},k=u.div`
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
`,V=()=>e.jsxs(k,{children:[e.jsx(I,{}),e.jsx(N,{})]});export{V as default};
