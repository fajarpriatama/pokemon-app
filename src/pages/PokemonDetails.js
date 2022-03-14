import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonByName } from "../services/axios";
import { CardContent, makeStyles, Grid, Card } from "@material-ui/core"; 

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

    const useStyles = makeStyles({
        pokedexContainer: {
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
        },
    });

    const classes = useStyles();

    return (
        <>
            <h1>Pokemon Detail</h1>
            <Grid container spacing={2} className={classes.pokedexContainer}>
                <Card>
                    <CardContent>
                        <h1>Pokemon: {pokemonData?.name}</h1>
                        <img 
                            src={pokemonData?.img} 
                            alt="span"
                            style={{ height: 200 }}
                        />
                    </CardContent>
                </Card>
            </Grid>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    );
}

export default Pokemons;