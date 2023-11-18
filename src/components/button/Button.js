import "./Button.css";
export const Button = ({ children , ClASSS , style}) => {
  return <button className={`button ${ClASSS}`} style={style}>{children}</button>;
};
