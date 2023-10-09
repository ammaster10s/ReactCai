import React from "react";

const sizeClasses = {
  txtLexendBold25: "font-bold font-lexend",
  txtLexendBold30Black900: "font-bold font-lexend",
  txtLexendBold65: "font-bold font-lexend",
  txtLexendBold25Teal700: "font-bold font-lexend",
  txtLexendBold30: "font-bold font-lexend",
  txtLexendBold90: "font-bold font-lexend",
  txtLexendBold25WhiteA700: "font-bold font-lexend",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
