import{u as j,j as e,r as w,a as b}from"./index-53544f81.js";import{u as f,a as v,F as S,T as y,S as F,b as N,I as L,L as i,c as t,d as n,P,e as R,f as C,N as I,o as T,r as k,g as B}from"./FormMessage-ea2d3160.js";const V=({$register:p})=>{var d,l,m;const x=j(),{register:a,handleSubmit:h,formState:{errors:s,dirtyFields:r}}=f({mode:"onChange",resolver:T(k)}),u=c=>{console.log(c),x(w(c))},{isVisiblePassword:o,changeVisibility:g}=v();return e.jsxs(S,{children:[e.jsx(y,{children:"Register"}),e.jsx(F,{$register:p,children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),e.jsxs(N,{onSubmit:h(u),children:[e.jsxs(L,{children:[e.jsxs(i,{children:[e.jsx(t,{...a("name"),type:"text",placeholder:"Name",className:r.name||s.name?s.name?"error":"valid":""}),(r.name||s.name)&&e.jsx(n,{error:s.name!==void 0,children:((d=s.name)==null?void 0:d.message)||"Success name"})]}),e.jsxs(i,{children:[e.jsx(t,{...a("email"),type:"text",placeholder:"Email",className:r.email||s.email?s.email?"error":"valid":""}),(r.email||s.email)&&e.jsx(n,{error:s.email!==void 0,children:((l=s.email)==null?void 0:l.message)||"Success email"})]}),e.jsxs(i,{children:[e.jsx(t,{...a("password"),type:o?"text":"password",placeholder:"Password",className:r.password||s.password?s.password?"error":"valid":""}),e.jsx(P,{changeVisibility:g,isVisiblePassword:o}),(r.password||s.password)&&e.jsx(n,{error:s.password!==void 0,children:((m=s.password)==null?void 0:m.message)||"Success password"})]})]}),e.jsx(R,{type:"submit",children:"Register"})]}),e.jsx(C,{children:e.jsx(I,{to:"/login",children:"Login"})})]})},E=b.div`
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
`,A=()=>e.jsxs(E,{children:[e.jsx(B,{$register:!0}),e.jsx(V,{$register:!0})]});export{A as default};
