import NavbarOption from "../../../components/navbar/navbar-option";
function SettingForm(props) {
  return (
    <div>
      <div>
        <NavbarOption />
      </div>
      <div>{props.component}</div>
    </div>
  );
}

export default SettingForm;
