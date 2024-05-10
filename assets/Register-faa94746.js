import{j as e,u}from"./index-84439b6f.js";import{u as g,a as j,F as w,T as b,S as f,b as v,I as S,L as i,c as n,d as o,P as y,e as F,f as N,N as L,o as P,r as R,g as C}from"./FormMessage-30b3d051.js";const I=()=>{var d,l,m;const{register:a,handleSubmit:c,formState:{errors:s,dirtyFields:r}}=g({mode:"onChange",resolver:P(R)}),x=h=>console.log(h),{isVisiblePassword:t,changeVisibility:p}=j();return e.jsxs(w,{children:[e.jsx(b,{children:"Register"}),e.jsx(f,{children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs(v,{onSubmit:c(x),children:[e.jsxs(S,{children:[e.jsxs(i,{children:[e.jsx(n,{...a("name"),type:"text",placeholder:"Name",className:r.name?s.name?"error":"valid":""}),console.log(s.name),(r.name||s.name)&&e.jsx(o,{error:s.name!==void 0,children:((d=s.name)==null?void 0:d.message)||"Success name"})]}),e.jsxs(i,{children:[e.jsx(n,{...a("email"),type:"text",placeholder:"Email",className:r.email?s.email?"error":"valid":""}),(r.email||s.email)&&e.jsx(o,{error:s.email!==void 0,children:((l=s.email)==null?void 0:l.message)||"Success email"})]}),e.jsxs(i,{children:[e.jsx(n,{...a("password"),type:t?"text":"password",placeholder:"Password",className:r.password?s.password?"error":"valid":""}),e.jsx(y,{changeVisibility:p,isVisiblePassword:t}),(r.password||s.password)&&e.jsx(o,{error:s.password!==void 0,children:((m=s.password)==null?void 0:m.message)||"Success password"})]})]}),e.jsx(F,{type:"submit",children:"Register"})]}),e.jsx(N,{children:e.jsx(L,{to:"/login",children:"Login"})})]})},T=u.div`
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
`,V=()=>e.jsxs(T,{children:[e.jsx(C,{$register:!0}),e.jsx(I,{})]});export{V as default};
