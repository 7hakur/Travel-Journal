import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className="bg-primary-color p-3 text-center">
      <h1 className="text-2xl text-white tracking-tighter">
        <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff" }} /> my
        travel journal.
      </h1>
    </header>
  );
}

export default Header;
