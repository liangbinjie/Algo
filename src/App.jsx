import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from "react-router-dom";
import {AuthRoute, NotAuthRoute} from './context/AuthRoute';

function App() {

  return (
    <>
      <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            <Route element={<AuthRoute />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<NotAuthRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
    </>
  );
}

export default App
