import { Routes, Route, useLocation } from "react-router";
import { AppProvider, useAppContext } from "./context/AppContext";
import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";
import Surprise from "./pages/Surprise";
import BackgroundMusic from "./components/common/BackgroundMusic";

/** Inner layout that can access AppContext */
function AppLayout() {
  const { isMusicPlaying } = useAppContext();
  const location = useLocation();

  const isSurprisePage = location.pathname === "/surprise";

  return (
    <>
      <BackgroundMusic active={isMusicPlaying && !isSurprisePage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default App;
