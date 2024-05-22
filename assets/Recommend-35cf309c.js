import{a as n,u as i,j as t,i as x,o as p,p as l,c as a,b as u,q as d,t as f,v as g,w}from"./index-40b06e4f.js";import{D as y,W as j,N as b,T as c}from"./WordsTable-eeda8310.js";const k=e=>e.recommend.recommendFilter,T=e=>e.recommend.recommendedWords,W=n.span`
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
`,C=({id:e})=>{const o=i(),s=()=>{console.log(e),o(p(e)),o(l())};return t.jsxs($,{type:"button",onClick:s,children:[t.jsx(W,{children:"Add to dictionary"}),t.jsx(r,{children:t.jsx("use",{href:`${x}#link-arrow`})})]})},F=()=>{const e=i(),o=a(T),s=a(k);u.useEffect(()=>{e(d()),e(l())},[e]);const m=[{Header:()=>t.jsx(c,{text:"word"}),accessor:"en"},{Header:()=>t.jsx(c,{text:"translation"}),accessor:"ua"},{Header:"Category",accessor:"category"},{accessor:"_id",Cell:({row:h})=>t.jsx(C,{id:h.original._id})}];return t.jsxs(t.Fragment,{children:[t.jsx(y,{className:"recommend",fetch:d,setCategory:f,setIsIrregular:g,setKeyword:w}),o.length!==0&&t.jsx(t.Fragment,{children:t.jsx(j,{columnsData:m,tableData:o})}),(s.keyword||s.category)&&o.length===0&&t.jsx(b,{title:"Sorry, we did not find words in our database according to your request.",text:"Try searching for other words or add the desired word to your dictionary for further study."})]})};export{F as default};
