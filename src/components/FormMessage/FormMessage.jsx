import * as v from "./FormMessage.styled";
import icons from "../../images/icons.svg";

export const FormMessage = ({ children }) => {
  return (
    <v.MessageText>
      <v.MessageIcon>
        <use href={`${icons}#error`} />
      </v.MessageIcon>
      {children}
    </v.MessageText>
  );
};

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
