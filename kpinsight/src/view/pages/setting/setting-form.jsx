import NavbarOption from "../../../components/navbar/navbar-option";
import "./setting-form.css";
function SettingForm(props) {
  return (
    <div>
      <div className="setting-form-mobile">
        <NavbarOption />
      </div>
      <div>{props.component}</div>
    </div>
  );
}

export default SettingForm;
