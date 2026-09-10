export const lightColors = {
  bg: "#EFF3F7",
  panel: "#FFFFFF",
  panelAlt: "#FBF6EA",

  text: "#1E2A38",
  subtext: "#5B6B7C",

  accent: "#B9862F",
  primary: "#f26b3f",

  border: "#DCE3EA",

  ribbon: "#3E6B98",
  ribbonText: "#FFFFFF",

  // Additional semantic colors
  success: "#198754",
  warning: "#B9862F",
  danger: "#C0392B",

  overlay: "rgba(15, 23, 32, 0.55)",

  inputBg: "#FFFFFF",
  buttonText: "#FFFFFF",
};

export const darkColors = {
  bg: "#0F1720",
  panel: "#182531",
  panelAlt: "#1D2C3A",

  text: "#E7EDF3",
  subtext: "#9FB0C0",

  accent: "#D9A441",
  primary: "#4E7CA6",

  border: "#28394A",

  ribbon: "#2E5C8A",
  ribbonText: "#F3F7FB",

  // Additional semantic colors
  success: "#45B97C",
  warning: "#D9A441",
  danger: "#E57373",

  overlay: "rgba(0, 0, 0, 0.65)",

  inputBg: "#182531",
  buttonText: "#FFFFFF",
};

export const getThemeColors = (theme) =>
  theme === "dark" ? darkColors : lightColors;
