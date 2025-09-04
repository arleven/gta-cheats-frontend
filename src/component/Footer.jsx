import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  // Pick title based on current URL
  const footer = () => {
    if (location.pathname.includes("vice-city")) {
      return "GTA VICE CITY  CHEAT CODES";
    }
    if (location.pathname.includes("san-andreas")) {
      return "GTA SANANDREAS CHEAT CODES";
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
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 justify-center text-center text-2xl">
        {footer()}
      </div>
    </footer>
  );
}

