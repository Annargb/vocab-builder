import { useState } from "react";

export const useVisiblePassword = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const changeVisibility = () => setIsVisiblePassword(!isVisiblePassword);

  return {
    isVisiblePassword,
    changeVisibility,
  };
};
