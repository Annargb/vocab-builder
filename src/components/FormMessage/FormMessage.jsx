import * as v from "./FormMessage.styled";
import icons from "../../images/icons.svg";

// export const FormMessage = ({ children }) => {
//   return (
//     <v.MessageContainer>
//       <v.MessageIcon>
//         <use href={`${icons}#error`} />
//       </v.MessageIcon>
//       <v.MessageText>{children}</v.MessageText>
//     </v.MessageContainer>
//   );
// };

export const FormMessage = ({ children, error }) => {
  return (
    <v.MessageText $error={error}>
      <v.MessageIcon>
        <use href={`${icons}#${error ? "error" : "success"}`} />
        {/* <use href={`${icons}#error`} /> */}
      </v.MessageIcon>
      {children}
    </v.MessageText>
  );
};
