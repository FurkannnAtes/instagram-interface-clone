import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Messenger from "./pages/messenger/Messenger";


import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Login from "./pages/login/Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<div className="App">
          <Home />
        </div>} />

        <Route path="/Profile/furkanates" element={<Profile />} />
        <Route path="/Messenger" element={< Messenger />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
