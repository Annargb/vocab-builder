// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as v from "./Progress.styled";

export const Progress = ({ progress, className }) => {
  // const progressPercentage = (currentProgress / totalProgress) * 100;
  return (
    <v.ProgressContainer className={className}>
      <v.ProgressText className={className}>{progress}%</v.ProgressText>
      <v.ProgressWrapper className={className}>
        <v.StyledCircularProgressbar
          value={progress}
          strokeWidth={10}
          text={className === "training" ? `${progress}` : ""}
          styles={buildStyles({
            // pathColor: "#2bd627",
            pathColor: className === "training" ? "#85aa9f" : "#2bd627",
            trailColor: className === "training" ? "#fff" : "#d4f8d3",
            textColor: "#121417",
            // fontWeight: "500",
            // textSize: "16px",
            // lineHeight: "1.5",
          })}
        />
      </v.ProgressWrapper>
    </v.ProgressContainer>
  );
};

// import CircularProgress from "@mui/material/CircularProgress";
// import * as v from "./Progress.styled";

// export const Progress = ({ progress }) => {
//   return (
//     <v.ProgressContainer>
//       <p>{progress}%</p>
//       <CircularProgress
//         variant="determinate"
//         value={progress}
//         style={{ color: "grey" }}
//       />
//     </v.ProgressContainer>
//   );
// };
