import styled from "styled-components";
// import CircularProgress from "@mui/material/CircularProgress";

export const ProgressContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 88px;
  justify-content: space-between;
`;

export const ProgressText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    align-self: center;
    font-weight: 500;
    font-size: 22px;
    color: ${(p) => p.theme.colors.black};
  }
`;

export const ProgressWrapper = styled.div`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

// export const CustomCircularProgress = styled(CircularProgress)(({ p }) => ({
//   circle: {
//     // Колір незаповненої частини
//     stroke: "#d23f3f",
//   },
//   svg: {
//     circle: {
//       // Колір заповненої частини
//       stroke: "#3f51b5",
//     },
//   },
// }));
