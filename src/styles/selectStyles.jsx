export const selectStyles = {
  option: (baseStyles, { isFocused, isSelected }) => {
    return {
      ...baseStyles,
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "1.5",
      background: "#fff",
      color: isFocused || isSelected ? "#85aa9f" : "#121417",
      textwrap: "nowrap",
      cursor: "pointer",
      padding: "0",
      transition: "color 250ms linear",
    };
  },

  control: (baseStyles, { selectProps }) => {
    return {
      ...baseStyles,
      backgroundColor: "transparrent",
      borderRadius: "15px",
      width: "343px",
      height: "48px",
      border: selectProps.menuIsOpen
        ? "1px solid #85aa9f"
        : "1px solid rgba(18, 20, 23, 0.1)",
      boxShadow: "none",
      color: "#121417",
      transition: "border-color 250ms linear",
      "&:hover": {
        borderColor: "#85aa9f",
      },
      "&:focus": {
        borderColor: "#85aa9f",
      },

      "@media (min-width: 768px)": {
        width: "164px",
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
      padding: "12px 6px 12px 0",

      "@media (min-width: 768px)": {
        maxWidth: "164px",
      },
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
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#f8f8f8",
        borderRadius: "12px",
      },

      "@media (min-width: 768px)": {
        maxWidth: "164px",
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
      "@media (max-width: 767px)": {
        width: "100%",
      },
    };
  },

  input: (baseStyles) => {
    return {
      ...baseStyles,
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "1.5",
      padding: "0",
      margin: "0",
      color: "#121417",
    };
  },
};

export const addWordSelectStyles = {
  option: (baseStyles, { isFocused, isSelected }) => {
    return {
      ...baseStyles,
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "1.5",
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
      // backgroundColor: "#85aa9f",
      backgroundColor: "transparrent",
      borderRadius: "15px",
      width: "343px",
      height: "48px",
      border: "1px solid #d1d5db",
      boxShadow: "none",
      color: "#fcfcfc",
      transition: "border-color 250ms linear",
      "&:hover": {
        borderColor: "#d1d5db",
      },
      "&:focus": {
        borderColor: "#d1d5db",
      },

      "@media (min-width: 768px)": {
        width: "204px",
        border: "1px solid rgba(252, 252, 252, 0.3)",
      },
    };
  },

  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    display: "flex",
    justifyContent: "flex-end",
    color: "#fcfcfc",
    padding: "14px 24px 14px 0",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
      fill: "#fff",
      cursor: "pointer",
    },
    "&:focus": {
      color: "#fff",
      fill: "#fff",
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
      padding: "12px 6px 12px 0",

      "@media (min-width: 768px)": {
        maxWidth: "204px",
      },
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
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#f8f8f8",
        borderRadius: "12px",
      },

      "@media (min-width: 768px)": {
        maxWidth: "204px",
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
    color: "#fcfcfc",
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
      color: "#fcfcfc",
    };
  },

  container: (baseStyles) => {
    return {
      ...baseStyles,
      display: "flex",
      alignItems: "center",
      height: "48px",
      "@media (max-width: 767px)": {
        width: "100%",
      },
    };
  },

  input: (baseStyles) => {
    return {
      ...baseStyles,
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "1.5",
      padding: "0",
      margin: "0",
      color: "#fcfcfc",
    };
  },
};
