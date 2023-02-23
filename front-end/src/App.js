import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { GivaudanPage } from "./pages/GivaudanPage";
import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IntroPage />}></Route>
        <Route path="/start" element={<HomePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/givaudan" element={<GivaudanPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
