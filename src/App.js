import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MyPokemons from './pages/MyPokemons';
import PokemonDetails from './pages/PokemonDetails';
import PokemonLists from './pages/PokemonLists';
// import Header from "./components/header";
// import { Container } from "@mui/material";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <span className='apptitle'>Welcome to Pokemon App</span>
          <div className="content-nav">
          <Link to={"/"}>Pokemon Lists</Link>
          <Link to={"/mypokemons"}>My Pokemons</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<PokemonLists/>}/>
          <Route path="/pokemons/:id" element={<PokemonDetails/>}/>
          <Route path="/mypokemons" element={<MyPokemons/>}/>
        </Routes>
      </div>
    </>
  );
  }

export default App;
