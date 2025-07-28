import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Manager from "./Manager";
import User from "./User";

function App() {
  return (
    <BrowserRouter basename="/webapp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
