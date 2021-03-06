import Typist from "react-text-typist";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container text-center">
      <div className="row mt-5">
        <h1 className="title mt-5">Digital Soup</h1>
      </div>
      <div className="row">
        <Link to="/contact">
          <button className="btn btn-primary m-5">Contact Me</button>
        </Link>
      </div>
      <div className="row typist mb-5">
        <Typist
          sentences={[
            "Cross-Platform Web Applications",
            "Native Mobile Apps",
            "Business Tools",
            "Digital Marketing",
            "Social Media Management",
            "Website Management",
            "IOT",
          ]}
          loop={true}
        />
      </div>
    </div>
  );
}

export default Header;
