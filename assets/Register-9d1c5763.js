import{u as j,j as e,r as w,a as b}from"./index-02b5c493.js";import{u as f,F as v,T as S,S as y,a as F,I as N,L as i,b as t,c as n,P as L,d as P,e as R,N as C,o as I,r as T,f as k}from"./FormMessage-8d56cc05.js";import{u as B}from"./index.esm-41ea0b5e.js";const V=({$register:p})=>{var d,l,m;const x=j(),{register:a,handleSubmit:u,formState:{errors:s,dirtyFields:r}}=B({mode:"onChange",resolver:I(T)}),h=c=>{console.log(c),x(w(c))},{isVisiblePassword:o,changeVisibility:g}=f();return e.jsxs(v,{children:[e.jsx(S,{children:"Register"}),e.jsx(y,{$register:p,children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs(F,{onSubmit:u(h),children:[e.jsxs(N,{children:[e.jsxs(i,{children:[e.jsx(t,{...a("name"),type:"text",placeholder:"Name",className:r.name||s.name?s.name?"error":"valid":""}),(r.name||s.name)&&e.jsx(n,{error:s.name!==void 0,children:((d=s.name)==null?void 0:d.message)||"Success name"})]}),e.jsxs(i,{children:[e.jsx(t,{...a("email"),type:"text",placeholder:"Email",className:r.email||s.email?s.email?"error":"valid":""}),(r.email||s.email)&&e.jsx(n,{error:s.email!==void 0,children:((l=s.email)==null?void 0:l.message)||"Success email"})]}),e.jsxs(i,{children:[e.jsx(t,{...a("password"),type:o?"text":"password",placeholder:"Password",className:r.password||s.password?s.password?"error":"valid":""}),e.jsx(L,{changeVisibility:g,isVisiblePassword:o}),(r.password||s.password)&&e.jsx(n,{error:s.password!==void 0,children:((m=s.password)==null?void 0:m.message)||"Success password"})]})]}),e.jsx(P,{type:"submit",children:"Register"})]}),e.jsx(R,{children:e.jsx(C,{to:"/login",children:"Login"})})]})},E=b.div`
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
`,D=()=>e.jsxs(E,{children:[e.jsx(k,{$register:!0}),e.jsx(V,{$register:!0})]});export{D as default};
