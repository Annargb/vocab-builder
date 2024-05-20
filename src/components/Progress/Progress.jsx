import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as v from "./Progress.styled";

export const Progress = ({ progress }) => {
  return (
    <v.ProgressContainer>
      <v.ProgressText>{progress}%</v.ProgressText>
      <v.ProgressWrapper>
        <CircularProgressbar
          value={progress}
          //   text={`${progress}%`}
          styles={buildStyles({
            pathColor: "#2bd627", // Колір заповненої частини
            trailColor: "#d4f8d3", // Колір незаповненої частини
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
