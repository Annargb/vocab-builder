export const selectStyles = {
  option: (baseStyles, { isFocused, isSelected }) => {
    return {
      ...baseStyles,
      background: "#fff",
      color: isFocused || isSelected ? "#85aa9f" : "rgba(18, 20, 23, 0.5)",
      textwrap: "nowrap",
      cursor: "pointer",
      padding: "0",
      transition: "color 250ms linear",
    };
  },

  control: (baseStyles) => {
    return {
      ...baseStyles,
      borderRadius: "15px",
      width: "343px",
      height: "48px",
      border: "1px solid rgba(18, 20, 23, 0.1)",
      boxShadow: "none",
      color: "#121417",
      transition: "border-color 250ms linear",
      "&:hover": {
        borderColor: "#85aa9f",
      },
      "&:focus": {
        borderColor: "#85aa9f",
      },
    };
  },

  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    display: "flex",
    justifyContent: "flex-end",
    color: "#121417",
    padding: "14px 24px 14px 0",
    "&:hover": {
      color: "#85aa9f",
      fill: "#85aa9f",
      cursor: "pointer",
    },
    "&:focus": {
      color: "#85aa9f",
      fill: "#85aa9f",
    },
  }),

  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "12px 0 12px 24px",
  }),

  menu: (baseStyles) => {
    return {
      ...baseStyles,
      maxWidth: "343px",
      background: "#fff",
      borderRadius: "15px",
      margin: "8px 0 0 0",
      boxShadow: "0 4px 47px 0 rgba(18, 20, 23, 0.08)",
      cursor: "pointer",
      // paddingRight: "6px",
      padding: "12px 6px 12px 0",
    };
  },

  menuList: (baseStyles) => {
    return {
      ...baseStyles,
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      maxWidth: "343px",
      maxHeight: "240px",
      borderRadius: "15px",
      overflowX: "hidden",
      paddingLeft: "24px",

      "::-webkit-scrollbar": {
        width: "8px",
      },
      //дорожка
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      //бегунок
      "::-webkit-scrollbar-thumb": {
        background: "#f8f8f8",
        borderRadius: "12px",
      },
    };
  },

  indicatorSeparator: (baseStyles) => {
    return {
      ...baseStyles,
      display: "none",
    };
  },

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#121417",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.5",
  }),

  singleValue: (baseStyles) => {
    return {
      ...baseStyles,
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "1.5",
    };
  },

  container: (baseStyles) => {
    return {
      ...baseStyles,
      display: "flex",
      alignItems: "center",
      height: "48px",
      width: "100%",
    };
  },

  input: (baseStyles) => {
    return {
      ...baseStyles,
      color: "#121417",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "1.5",
      padding: "0",
      margin: "0",
    };
  },
};