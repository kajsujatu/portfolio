import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Layout";
import OMnie from "./pages/OMnie"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/o-mnie/" element={<OMnie />} />
          <Route path="/" element={<Projects />} />
          <Route path="/projekt/:slug" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;