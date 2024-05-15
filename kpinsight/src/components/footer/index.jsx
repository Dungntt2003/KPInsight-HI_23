import "./index.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div
      className={
        path === "/forgot-password" ||
        path === "/reset-password" ||
        path === "/login"
          ? "footer-container footer-fixed"
          : "footer-container"
      }
    >
      <button className="footer-btn">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/917ea6497735c9678b07e2f4adbb5ac50d54267b7dae508f401a30f71230c0b1?apiKey=ffc2b1564c644340a68e4591e1bff550&"
          class="img"
        />
        <div className="footer-text">HI_23</div>
      </button>
    </div>
  );
}

export default Footer;
