import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cheat from "./component/Cheats";
import ViceCity from "./component/ViceCity.jsx";
import Header from "./component/Header";
import LibertyCity from "./component/LibertyCity.jsx";
import GtaFive from "./component/Gtafive.jsx";

function App() {
  const hostname = window.location.hostname;

  // Default homepage depending on domain
  let defaultRedirect =
    "/gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console";

  if (hostname.includes("cheathub.app")) {
    defaultRedirect =
      "/gta-v-cheats-for-pc-playstation-android-microsoft-console";
  } else if (hostname.includes("cheatpad.app")) {
    defaultRedirect =
      "/gta-v-cheats-for-pc-playstation-android-microsoft-console";
  } else if (hostname.includes("gtasanandreascheatcodes.com")) {
    defaultRedirect =
      "/gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console";
  }

  return (
    <>
      <Helmet>
        <title>GTA Cheat Codes App</title>
        <meta
          name="description"
          content="Cheat codes for GTA San Andreas, Vice City, GTA V and more on PC, PlayStation, Xbox, and Mobile."
        />
      </Helmet>

      {/* Header stays on all pages */}
      <Header />

      <Routes>
        {/* Redirect root (/) based on domain */}
        <Route path="/" element={<Navigate to={defaultRedirect} replace />} />

        {/* San Andreas */}
        <Route
          path="/gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console"
          element={<Cheat />}
        />

        {/* Vice City */}
        <Route
          path="/gta-vice-city-cheats-for-pc-playstation-android-microsoft-console"
          element={<ViceCity />}
        />

        {/* Liberty City */}
        <Route
          path="/gta-liberty-city-cheats-for-pc-playstation-android-microsoft-console"
          element={<LibertyCity />}
        />

        {/* GTA V */}
        <Route
          path="/gta-v-cheats-for-pc-playstation-android-microsoft-console"
          element={<GtaFive />}
        />
      </Routes>
    </>
  );
}

export default App;
