import * as v from "./UserNav.styled";

export const UserNav = ({ className }) => {
  return (
    <v.NavWrapper className={className}>
      <v.NavItem to="/dictionary" className={className}>
        Dictionary
      </v.NavItem>
      <v.NavItem to="/recommend" className={className}>
        Recommend
      </v.NavItem>
      <v.NavItem to="/training" className={className}>
        Training
      </v.NavItem>
    </v.NavWrapper>
  );
};
