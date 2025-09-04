import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Pick title based on current URL
  const getTitle = () => {
    if (location.pathname.includes("vice-city")) {
      return "GTA Vice City Cheat Codes";
    }
    if (location.pathname.includes("san-andreas")) {
      return "GTA San Andreas Cheat Codes";
    }
    if (location.pathname.includes("liberty-city")) {
      return "GTA Liberty City Cheat Codes";
    }
     if (location.pathname.includes("gta-v")) {
      return "GTA V Cheat Codes";
    }
    return "GTA Cheat Codes";
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-center">
        <ul className="flex items-center">
          <li className="text-lg md:text-2xl text-white px-3 py-2 text-center">
            {getTitle()}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
