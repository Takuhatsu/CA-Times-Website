import logo from "./logo.svg";
import "./App.css";
import "./fonts/fonts.css"; // Import the CSS file
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LoginForm from "./components/Login-Register/LoginForm";
import Keywords from "./components/Keywords";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Keywords />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
