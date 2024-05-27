import "./index.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const path = location.pathname;
  return <div></div>;
}

export default Footer;
