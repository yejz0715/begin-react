import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Profile from "./pages/Profile";
import Input from "./pages/Input";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
