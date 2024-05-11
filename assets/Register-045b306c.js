import{j as e,u as h}from"./index-2e5ded65.js";import{u as j,a as w,F as b,T as f,S as v,b as S,I as y,L as i,c as n,d as o,P as F,e as N,f as L,N as P,o as R,r as C,g as I}from"./FormMessage-0eb53c93.js";const T=({$register:c})=>{var d,l,m;const{register:a,handleSubmit:p,formState:{errors:s,dirtyFields:r}}=j({mode:"onChange",resolver:R(C)}),x=g=>console.log(g),{isVisiblePassword:t,changeVisibility:u}=w();return e.jsxs(b,{children:[e.jsx(f,{children:"Register"}),e.jsx(v,{$register:c,children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs(S,{onSubmit:p(x),children:[e.jsxs(y,{children:[e.jsxs(i,{children:[e.jsx(n,{...a("name"),type:"text",placeholder:"Name",className:r.name||s.name?s.name?"error":"valid":""}),console.log(s.name),(r.name||s.name)&&e.jsx(o,{error:s.name!==void 0,children:((d=s.name)==null?void 0:d.message)||"Success name"})]}),e.jsxs(i,{children:[e.jsx(n,{...a("email"),type:"text",placeholder:"Email",className:r.email||s.email?s.email?"error":"valid":""}),(r.email||s.email)&&e.jsx(o,{error:s.email!==void 0,children:((l=s.email)==null?void 0:l.message)||"Success email"})]}),e.jsxs(i,{children:[e.jsx(n,{...a("password"),type:t?"text":"password",placeholder:"Password",className:r.password||s.password?s.password?"error":"valid":""}),e.jsx(F,{changeVisibility:u,isVisiblePassword:t}),(r.password||s.password)&&e.jsx(o,{error:s.password!==void 0,children:((m=s.password)==null?void 0:m.message)||"Success password"})]})]}),e.jsx(N,{type:"submit",children:"Register"})]}),e.jsx(L,{children:e.jsx(P,{to:"/login",children:"Login"})})]})},k=h.div`
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
`,E=()=>e.jsxs(k,{children:[e.jsx(I,{$register:!0}),e.jsx(T,{$register:!0})]});export{E as default};
