import{a as t,L as d,j as e}from"./index-1530df29.js";const s="/vocab-builder/assets/list-mobile-1x-1ad86977.png",a="/vocab-builder/assets/list-mobile-2x-199294f3.png",r="/vocab-builder/assets/list-tablet-1x-b2f0ad25.png",x="/vocab-builder/assets/list-tablet-2x-49f3447b.png",p="/vocab-builder/assets/list-desktop-1x-f82d8533.png",c="/vocab-builder/assets/list-desktop-2x-d6e828c5.png",l=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 75px 0;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    width: 902px;
    margin: 0 auto;
  }

  &.training {
    padding: 75px 0;

    @media screen and (min-width: 768px) {
      padding: 140px 0 227px 0;
    }

    @media screen and (min-width: 1440px) {
      padding: 193px 0 230px 0;
    }
  }
`,m=t.div`
  @media screen and (min-width: 768px) {
    width: 581px;
  }
`,h=t.div`
  flex-shrink: 0;
  width: 144px;
  height: 174px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-image: image-set(url(${s}) 1x, url(${a}) 2x);

  @media screen and (min-width: 768px) {
    width: 205px;
    height: 240px;
    background-image: image-set(url(${r}) 1x, url(${x}) 2x);
  }

  @media screen and (min-width: 1440px) {
    width: 203px;
    height: 240px;
    background-image: image-set(
      url(${p}) 1x,
      url(${c}) 2x
    );
  }
`,g=t.h1`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
  }
`,b=t.p`
  font-weight: 400;
  font-size: 14px;
  color: ${i=>i.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  &.training {
    margin-bottom: 132px;

    @media screen and (min-width: 768px) {
      margin-bottom: 64px;
    }
  }
`,u=t(d)`
  display: none;

  &.training {
    display: inline-block;
    width: 100%;
    max-width: 343px;
    height: 56px;
    padding: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: ${i=>i.theme.colors.white};
    border-radius: 30px;
    background-color: ${i=>i.theme.colors.mainGreen};
    transition: background-color 250ms ${i=>i.theme.transition};

    &:hover,
    &:focus {
      background-color: ${i=>i.theme.colors.mainGreenHover};
    }

    @media screen and (min-width: 768px) {
      width: 215px;
      padding: 14px;
      font-size: 18px;
      line-height: 1.56;
    }
  }
`,f=({title:i,text:o,className:n})=>e.jsxs(l,{className:n,children:[e.jsx(h,{}),e.jsxs(m,{children:[e.jsx(g,{children:i}),e.jsx(b,{className:n,children:o}),e.jsx(u,{to:"/dictionary",className:n,children:"Add word"})]})]});export{f as N};
