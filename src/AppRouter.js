import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from "./pages/List";
import Profile from "./pages/Profile";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
