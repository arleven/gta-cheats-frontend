import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cheat from "./component/Cheats";

function App() {
  return (
    <>
      <Helmet>
        <title>GTA Cheat Codes App</title>
        <meta
          name="description"
          content="Cheat codes for GTA San Andreas on PC, PlayStation, Xbox, and Mobile."
        />
      </Helmet>

      <Routes>
        {/* Redirect any request to your cheat page */}
        <Route
          path="/"
          element={<Navigate to="/gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console" replace />}
        />
        <Route
          path="/gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console"
          element={<Cheat/>}
        />
      </Routes>
    </>
  );
}

export default App;
