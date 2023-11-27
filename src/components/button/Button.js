import "./Button.css";
export const Button = ({ children, ClASSS, style, onClick }) => {
  return (
    <button className={`button ${ClASSS}`} style={style} onClick={onClick}>
      {children}
    </button>
  );
};
