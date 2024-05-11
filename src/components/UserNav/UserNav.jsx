import * as v from "./UserNav.styled";

export const UserNav = ({ className }) => {
  return (
    <v.NavWrapper className={className}>
      <v.NavItem to="/dictionary">Dictionary</v.NavItem>
      <v.NavItem to="/recommend">Recommend</v.NavItem>
      <v.NavItem to="/training">Training</v.NavItem>
    </v.NavWrapper>
  );
};
