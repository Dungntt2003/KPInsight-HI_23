import NavbarOption from "../../../components/navbar/navbar-option";
import "./setting-form.css";
function SettingForm(props) {
  return (
    <div>
      <div className="setting-form-mobile">
        <NavbarOption />
      </div>
      <div>
        <div className="bar-mobile">
          <div className="bar-account">Tài khoản</div>
          <div className="bar-setting">Cài đặt chung</div>
          <div className="bar-help">Trợ giúp</div>
        </div>
        <div>{props.component}</div>
      </div>
    </div>
  );
}

export default SettingForm;
