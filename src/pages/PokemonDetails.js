import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonByName } from "../services/axios";

function Pokemons() {
    const params = useParams();
    const navigate = useNavigate();
    const [pokemonData, setPokemon] = useState(null);

    useEffect(() => {
        if (params?.id) {
            fetchPokemon(params?.id);
        }
    }, [params]);

    const fetchPokemon = async (id) => {
        try {
            const payloadDetail = await getPokemonByName(id);
            const result = {
                id: payloadDetail?.data?.name || "",
                name: payloadDetail?.data?.name || "",
                img: payloadDetail?.data?.sprites.other.dream_world.front_default || ""
            };
            setPokemon(result)
        } catch (error) {
            console.log(error, "error");
        }
    };

    return (
        <>
            <div className="App">
                    <h1>Pokemon Detail</h1>
                </div>
                <div className="Main">
                    <div className="container">
                    <button onClick={() => navigate(-1)}>go back</button>
                    <h1>Pokemon: {pokemonData?.name}</h1>
                    <img 
                        src={pokemonData?.img} 
                        alt=""
                        style={{ height: 200 }}
                    />
                    </div>
            </div>
        </>
    );
}

export default Pokemons;