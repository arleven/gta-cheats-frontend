import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cheat from "./component/Cheats";
import ViceCity from "./component/ViceCity.jsx"; // create this
import Header from "./component/Header";     // import header
import LibertyCity from "./component/LibertyCity.jsx";
import GtaFive from "./component/Gtafive.jsx";

function App() {
  return (
    <>
      <Helmet>
        <title>GTA Cheat Codes App</title>
        <meta
          name="description"
          content="Cheat codes for GTA San Andreas, Vice City, and more on PC, PlayStation, Xbox, and Mobile."
        />
      </Helmet>

      {/* Header stays on all pages */}
      <Header />

      <Routes>
        {/* Redirect root to San Andreas page */}
        <Route
          path="/"
          element={<Navigate to="/gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console" replace />}
        />

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
        <Route
          path="/gta-liberty-city-cheats-for-pc-playstation-android-microsoft-console"
          element={<LibertyCity />}
        />
        <Route
          path="/gta-v-cheats-for-pc-playstation-android-microsoft-console"
          element={<GtaFive />}
        />
      </Routes>
    </>
  );
}

export default App;
