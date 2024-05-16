import "./index.css";
import { Link } from "react-router-dom";
function Header() {
  const user = localStorage.getItem("username");
  // console.log(user);
  return (
    <div>
      <div class="header-container">
        <Link to="/" className="header-link">
          <div class="header-logo">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0e33db95f30319054c2882af6a077b82c0e76fc395e0da11ae937aee35f7a21?apiKey=ffc2b1564c644340a68e4591e1bff550&"
              class="img"
            />
            <div class="header-name">KPInsight</div>
          </div>
        </Link>
        <div class="header-tab">
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <button class="header-login">
                <Link className="header-link" to="/activity-list">
                  Hoạt động
                </Link>
              </button>

              <button class="header-login">
                <Link className="header-link" to="/define-goal">
                  Mục tiêu KPI
                </Link>
              </button>
              <button class="header-login">
                <Link className="header-link" to="/kpi-status">
                  Trạng thái KPI
                </Link>
              </button>
              <button class="header-login">
                <Link className="header-link" to="/setting">
                  <img
                    src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
