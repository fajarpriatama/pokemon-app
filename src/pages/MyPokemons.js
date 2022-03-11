import { useNavigate } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { Card, IconButton, Typography } from "@mui/material";

function Pokemons() {
    const navigate = useNavigate();
    const { pokemonCarts, deletePokemonFromCart } = usePokemon();

    return (
        <>
            <div className="App-menu">
                <h1>My Pokemon</h1>
            </div>
                            {Array.from(pokemonCarts || []).map((item, index) => {
                                return (
                                    <span
                                        
                                        style={{
                                            margin: 14,
                                            marginBottom: 30,
                                            background: "#fafafa",
                                            padding: 10,
                                            borderRadius: 10,
                                            cursor: "pointer",
                                        }}
                                    >
                                        <img
                                            src={item?.img}
                                            alt="span"
                                            style={{ height: 200 }}
                                            onClick={() => navigate(`/pokemons/${item.id}?name=${item.name}`)}
                                        />
                                        <p key={item.id} style={{ color: "black" }}>
                                            {item?.name}
                                        </p>
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            deletePokemonFromCart(index)
                                        }}>
                                            delete from cart
                                        </button>
                                    </span>
                                );
                            })}
        </>
    );
}

export default Pokemons;