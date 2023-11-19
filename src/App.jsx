import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar';
import Header from './Header';
import {supabase} from './client'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("Users").select("*");
    setUsers(data);
    console.log(data);
  }

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>

    </>
  );
}

export default App
