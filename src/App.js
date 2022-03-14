import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MyPokemons from './pages/MyPokemons';
import PokemonDetails from './pages/PokemonDetails';
import PokemonLists from './pages/PokemonLists';
import { AppBar } from "@material-ui/core";
import Peoples from "./pages/Peoples";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Login from "./pages/Login";

function App() {
  return (
      <>
        <AppBar position='static' style={{ padding: 10 }}>
          <div className='nav-container'>
            <h1 style={{}}>Pokemon App</h1>
            <div>
            <Link className="nav-menu" style={{ textDecoration: "none", color: "white" }} to={"/login"}>Login</Link>
            <Link className="nav-menu" style={{ textDecoration: "none", color: "white" }} to={"/"}>Pokemon Lists</Link>
            <Link className='nav-menu' style={{ textDecoration: "none", color: "white" }} to={"/mypokemons"}>My Pokemons</Link>
            <Link className="nav-menu" style={{ textDecoration: "none", color: "white" }} to={"/todos"}>Todos</Link>
            <Link className="nav-menu" style={{ textDecoration: "none", color: "white" }} to={"/users"}>Users</Link>
            <Link className="nav-menu" style={{ textDecoration: "none", color: "white" }} to={"/peoples"}>Peoples</Link>
            </div>
          </div>
        </AppBar>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<PokemonLists/>}/>
            <Route path="/pokemons/:id" element={<PokemonDetails/>}/>
            <Route path="/mypokemons" element={<MyPokemons/>}/>
            <Route path="/todos" element={<Todos/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/peoples" element={<Peoples/>}/>
          </Routes>
      </>
  );
  }

export default App;
