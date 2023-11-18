import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Header from './Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
    </>
  );
}

export default App
