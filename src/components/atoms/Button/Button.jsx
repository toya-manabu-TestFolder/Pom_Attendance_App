import "./button.css";

function Button({ children, color = "default" }) {
  return <button className={color}>{children}</button>;
}
export default Button;
