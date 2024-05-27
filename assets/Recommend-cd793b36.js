import{a as n,u as c,j as t,i as h,v as x,k as a,b as p,w as i,p as f,x as u,y as g,z as y,A as w}from"./index-c6437887.js";import{D as j,W as b,T as d}from"./WordsTable-47dee0f5.js";import{N as k}from"./NotFoundBlock-f1559890.js";import"./schemas-b7fb753a.js";const D=e=>e.recommend.recommendFilter,T=e=>e.recommend.recommendedWords,W=n.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
    color: ${e=>e.theme.colors.black};
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,r=n.svg`
  width: 20px;
  height: 20px;
  fill: ${e=>e.theme.colors.mainGreen};
  transition: fill 250ms ${e=>e.theme.transition};
`,$=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  &:hover ${r}, &:focus ${r} {
    fill: ${e=>e.theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    width: 120px;
    height: 41px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 165px;
    height: 22px;
  }
`,C=({id:e})=>{const s=c(),o=()=>{s(x(e))};return t.jsxs($,{type:"button",onClick:o,children:[t.jsx(W,{children:"Add to dictionary"}),t.jsx(r,{children:t.jsx("use",{href:`${h}#link-arrow`})})]})},H=()=>{const e=c(),s=a(T),o=a(D);p.useEffect(()=>{e(i()),e(f()),e(u())},[e]);const l=[{Header:()=>t.jsx(d,{text:"word"}),accessor:"en"},{Header:()=>t.jsx(d,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{accessor:"_id",Cell:({row:m})=>t.jsx(C,{id:m.original._id})}];return t.jsxs(t.Fragment,{children:[t.jsx(j,{className:"recommend",fetch:i,setCategory:g,setIsIrregular:y,setKeyword:w}),s.length!==0&&t.jsx(t.Fragment,{children:t.jsx(b,{columnsData:l,tableData:s})}),(o.keyword||o.category)&&s.length===0&&t.jsx(k,{title:"Sorry, we did not find words in our database according to your request.",text:"Try searching for other words or add the desired word to your dictionary for further study."})]})};export{H as default};
