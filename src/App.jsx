import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";
import AuthRoute from './context/AuthRoute';

function App() {

  return (
    <>
      <Navbar />
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            <Route element={<AuthRoute />}>
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
    </>
  );
}

export default App
