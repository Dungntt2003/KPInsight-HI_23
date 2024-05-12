import "./index.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div class="header-container">
        <div class="header-logo">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0e33db95f30319054c2882af6a077b82c0e76fc395e0da11ae937aee35f7a21?apiKey=ffc2b1564c644340a68e4591e1bff550&"
            class="img"
          />
          <div class="header-name">KPInsight</div>
        </div>
        <div class="header-tab">
          <button class="header-register">
            <Link className="header-link" to="/register">
              Đăng ký
            </Link>
          </button>

          <button class="header-login">
            <Link className="header-link" to="/login">
              Đăng nhập
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
