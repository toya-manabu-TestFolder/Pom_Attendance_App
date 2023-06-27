import "./button.css";

function Button({ children, color = "default" }) {
  return <button ckassName={color}>{children}</button>;
}
export default Button;
