import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import LandingPage from "@/pages/LandingPage.jsx"
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<LandingPage/>} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route path = "/news" element = {<NewsPage />} />
    </Routes>
  );
}

export default App;
