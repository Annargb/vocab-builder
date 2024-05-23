import{a as n,u as c,j as t,i as h,t as x,c as a,b as p,v as d,w as u,x as f,y as g,z as w}from"./index-eab53989.js";import{D as y,W as j,N as b,T as i}from"./WordsTable-1e6d68b5.js";const k=e=>e.recommend.recommendFilter,T=e=>e.recommend.recommendedWords,W=n.span`
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
`,C=({id:e})=>{const s=c(),o=()=>{s(x(e))};return t.jsxs($,{type:"button",onClick:o,children:[t.jsx(W,{children:"Add to dictionary"}),t.jsx(r,{children:t.jsx("use",{href:`${h}#link-arrow`})})]})},F=()=>{const e=c(),s=a(T),o=a(k);p.useEffect(()=>{e(d()),e(u())},[e]);const l=[{Header:()=>t.jsx(i,{text:"word"}),accessor:"en"},{Header:()=>t.jsx(i,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{accessor:"_id",Cell:({row:m})=>t.jsx(C,{id:m.original._id})}];return t.jsxs(t.Fragment,{children:[t.jsx(y,{className:"recommend",fetch:d,setCategory:f,setIsIrregular:g,setKeyword:w}),s.length!==0&&t.jsx(t.Fragment,{children:t.jsx(j,{columnsData:l,tableData:s})}),(o.keyword||o.category)&&s.length===0&&t.jsx(b,{title:"Sorry, we did not find words in our database according to your request.",text:"Try searching for other words or add the desired word to your dictionary for further study."})]})};export{F as default};
