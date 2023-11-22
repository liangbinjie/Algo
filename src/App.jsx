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
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            <Route element={<AuthRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
    </>
  );
}

export default App
