import WelcomeImage from "../../../assets/images/welcome.jpg";

function Welcome() {
  return (
    <div>
      <div>
        <img
          src={WelcomeImage}
          style={{ position: "fixed", top: "0", left: "0", width: "100%" }}
          alt=""
          className="welcome-img"
        />
      </div>
    </div>
  );
}

export default Welcome;
