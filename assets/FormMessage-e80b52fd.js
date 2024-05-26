import{a as o,d as r,j as i,L as s,i as n,b as a}from"./index-c7777208.js";const c="/vocab-builder/assets/homebg-mobile-1x-9d83dd05.png",d="/vocab-builder/assets/homebg-mobile-2x-febfa171.png",l="/vocab-builder/assets/homebg-desktop-1x-ffc1ff6b.png",p=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`,h=o.div`
  flex-shrink: 0;
  width: 100%;
  background-repeat: no-repeat;
  background-image: image-set(url(${c}) 1x, url(${d}) 2x);

  @media screen and (max-width: 767px) {
    max-width: 247px;
    min-height: 191px;
  }

  @media screen and (min-width: 768px) {
    background-image: none;
  }

  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 435px;
    background-image: image-set(url(${l}) 1x, url(${r}) 2x);
  }
`,m=o.p`
  margin-bottom: 35px;
  font-weight: 400;
  font-size: 14px;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (max-width: 767px) {
    display: ${({$register:e})=>{switch(e){case!0:return"none";default:return"block"}}};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.5;
  }
`,$=({$register:e})=>i.jsxs(p,{$register:e,children:[i.jsx(h,{}),i.jsx(m,{$register:e,children:"Word · Translation · Grammar · Progress"})]}),k=o.div`
  position: absolute;
  right: 0;
  width: 100%;
  padding: 32px 16px 57px 16px;
  border-radius: 25px 25px 0 0;
  background-color: ${e=>e.theme.colors.formBgColor};

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    position: static;
    width: 627px;
    padding: 48px 64px;
    border-radius: 30px;
  }
`,v=o.form`
  margin-bottom: 16px;
`,j=o.h1`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 1.2;
  }
`,y=o.p`
  /* margin-bottom: 16px; */
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({$register:e})=>{switch(e){case!0:return"16px";default:return"40px"}}};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 1.5;
  }
`,C=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`,z=o.label`
  position: relative;
  width: 100%;
  height: 56px;

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`,I=o.input`
  width: 100%;
  padding: 16px 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
  background-color: inherit;
  border: 1px solid;
  border-color: ${e=>e.theme.colors.borderColor};
  border-radius: 15px;
  outline: none;
  transition: border-color 250ms ${e=>e.theme.transition};

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};
  }

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  &.error {
    border-color: ${e=>e.theme.colors.errorColor};
  }

  &.valid {
    border-color: ${e=>e.theme.colors.successColor};
  }

  &:hover,
  &:focus {
    border-color: ${e=>e.theme.colors.mainGreen};
  }
`,P=o.button`
  width: 100%;
  padding: 16px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.white};
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.mainGreen};
  transition: background-color 250ms ${e=>e.theme.transition};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
  }

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.mainGreenHover};
  }
`,L=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,T=o(s)`
  position: relative;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.linkColor};
  transition: color 250ms ${e=>e.theme.transition};

  &::after {
    content: "";
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${e=>e.theme.colors.linkColor};
    transition: background-color 250ms ${e=>e.theme.transition};
  }

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.black};

    &::after {
      background-color: ${e=>e.theme.colors.black};
    }
  }
`,x=o.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  width: 20px;
  height: 20px;
`,g=o.svg`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.black};
`,B=({isVisiblePassword:e,changeVisibility:t})=>i.jsx(x,{type:"button",onClick:()=>t(),children:i.jsx(g,{children:e?i.jsx("use",{href:`${n}#eye`}):i.jsx("use",{href:`${n}#eye-off`})})}),S=()=>{const[e,t]=a.useState(!1);return{isVisiblePassword:e,changeVisibility:()=>t(!e)}},b=o.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  vertical-align: middle;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
    top: -1px;
  }
`,u=o.span`
  position: absolute;
  left: 0;
  top: 56px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  transition: color 250ms ${e=>e.theme.transition};
  color: ${({$error:e})=>{switch(e){case!0:return t=>t.theme.colors.errorColor;default:return t=>t.theme.colors.successColor}}};

  @media screen and (min-width: 768px) {
    top: 58px;
  }
`,V=({children:e,error:t})=>i.jsxs(u,{$error:t,children:[i.jsx(b,{children:i.jsx("use",{href:`${n}#${t?"error":"success"}`})}),e]});export{k as F,C as I,z as L,T as N,B as P,y as S,j as T,v as a,I as b,V as c,P as d,L as e,$ as f,S as u};
