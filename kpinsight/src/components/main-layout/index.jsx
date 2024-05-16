import Header from "../header";
import Footer from "../footer";

function MainLayout(props) {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="body" style={{ marginTop: "110px" }}>
        {props.component}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;