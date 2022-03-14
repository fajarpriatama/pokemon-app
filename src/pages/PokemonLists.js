import { CardContent, makeStyles, Grid, Card } from "@material-ui/core";    
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { getPokemonByName, getPokemons } from "../services/axios";
// import { Card, IconButton, Typography } from "@mui/material";
// import AddIcon from '@mui/icons-material/Add';

function Pokemons() {
    const { addPokemonToCart } = usePokemon();
    const navigate = useNavigate();
    const [pokemonData, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        try {
            const payload = await getPokemons();
            const promises = Array.from(payload?.data?.results || []).map(
                async (item) => {
                    const payloadDetail = await getPokemonByName(item?.name || "");
                    return {
                        id: payloadDetail?.data?.name || "",
                        name: payloadDetail?.data?.name || "",
                        img: 
                            payloadDetail?.data?.sprites.other.dream_world.front_default ||
                             "",
                    };
                }
            );
            const results = await Promise.all(promises);
            setPokemons(results);
        } catch (error) {
            console.log(error, "error");
        }
    }

    const useStyles = makeStyles({
        pokedexContainer: {
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
        },
    });

    const classes = useStyles();

    // const getPokemonCard = () => {
    //     return (
    //         <Grid item xs={4}>
    //             <Card>
    //                 <CardContent>Tes</CardContent>
    //             </Card>
    //         </Grid>
    //     );
    // };

    return (
        <>
            {/* <Grid container spacing={2} className={classes.pokedexContainer}>
                {getPokemonCard()}
                {getPokemonCard()}
                {getPokemonCard()}
                {getPokemonCard()}
            </Grid> */}
            <h1>Pokemon List</h1>
            <Grid container spacing={2} className={classes.pokedexContainer}>
                {Array.from(pokemonData || []).map((item, index) => {
                    return (
                        <Card>
                            <CardContent
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
                                    onClick={() =>
                                        navigate(`/pokemons/${item.id}?name=${item.name}`)
                                    }
                                />
                                <p key={item.id} style={{ color: "black" }}>
                                    {item?.name}
                                </p>
                                <button
                                    onClick={(e) => {
                                    e.preventDefault();
                                    addPokemonToCart(item);
                                    }}
                                >
                                    add to cart
                                </button>
                            </CardContent>
                        </Card>
                    );
                })}
            </Grid>
        </>
    );
}

export default Pokemons;