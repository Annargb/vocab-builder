import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";
// import CircularProgress from "@mui/material/CircularProgress";

export const ProgressContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 88px;
  justify-content: space-between;

  &.training {
    width: 100%;
    padding-top: 24px;
    margin-bottom: 8px;
    justify-content: flex-end;
  }
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

  &.training {
    display: none;
  }
`;

export const ProgressWrapper = styled.div`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }

  &.training {
    width: 44px;
    height: 44px;
  }
`;

export const StyledCircularProgressbar = styled(CircularProgressbar)`
  .CircularProgressbar-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    fill: #121417;
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
