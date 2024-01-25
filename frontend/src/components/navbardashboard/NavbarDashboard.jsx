import { Link } from "react-router-dom";
import globeTerrestre from "../../assets/globeterretre.png";
import "./NavbarDashboard.css";
import villes from "../../assets/ville.png";
import pays from "../../assets/pays2.png";

function NavbarDashboard() {
  return (
    <nav className="navDashboard">
      <div className="logo-dashbord">
        <Link to="/">
          <img src={globeTerrestre} alt="Globe terrestre" />
        </Link>
      </div>
      <div className="menus-dashboard">
        <div className="iconVilles">
          <Link to="/dashboard">
            <img src={villes} alt="Icon de villes" />
          </Link>
        </div>
        <div className="iconPays">
          <Link to="/gestionPays">
            <img src={pays} alt="Icon de pays" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDashboard;
