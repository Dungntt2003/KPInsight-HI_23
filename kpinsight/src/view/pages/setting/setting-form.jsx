import NavbarOption from "../../../components/navbar/navbar-option";
function SettingForm(props) {
  return (
    <div>
      <div>
        <NavbarOption />
      </div>
      <div style={{ marginLeft: "220px" }}>{props.component}</div>
    </div>
  );
}

export default SettingForm;
