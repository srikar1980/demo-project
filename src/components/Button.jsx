const Button = ({
  text,
  width,
  height,
  bgColor,
  textColor,
  type = "button",
  ...rest
}) => {
  const baseStyle = {
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const buttonStyle = {
    ...baseStyle,
    width,
    height,
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
