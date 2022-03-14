import React from "react";
import { useNavigate } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { CardContent, makeStyles, Grid, Card } from "@material-ui/core";
import useAuth from "../hooks/useAuth";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { Card, IconButton, Typography } from "@mui/material";

function Pokemons() {
    const navigate = useNavigate();
    const { pokemonCarts, deletePokemonFromCart } = usePokemon();
    useAuth("protected");

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
            <h1>My Pokemon</h1>
            <Grid container spacing={2} className={classes.pokedexContainer}>
                <Card>
                    <CardContent>
                            {Array.from(pokemonCarts || []).map((item, index) => {
                                return (
                                    <Card
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
                                            e.preventDefault();
                                            deletePokemonFromCart(index)
                                        }}>
                                            delete from cart
                                        </button>
                                    </Card>
                                );
                            })}
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}

export default Pokemons;