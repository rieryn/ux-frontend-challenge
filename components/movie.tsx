import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    GridListTile, IconButton, GridListTileBar, CardActionArea
} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {MovieContext} from "./movie_context";
import {height} from "@material-ui/system";
const useStyles = makeStyles(() => ({
    actionArea: {
        borderRadius: 16,
        transition: '0.3s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },
    card: {
        minWidth: 256,
        borderRadius: 16,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: `0 6px 12px 0 rgba(204, 236, 187, 1)
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
        },
    },
}));
const DEFAULT_PLACEHOLDER_IMAGE =
    "https://via.placeholder.com/800x600?text=image+not+found";
interface movieInterface {
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string
}
// @ts-ignore
export default function Movie ({ movie }) {
    const classes = useStyles();
    // @ts-ignore
    const { nomctx } = useContext(MovieContext);
    const [nominations, setNominations] = nomctx;
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (

        <GridListTile key={movie.imdbID} style = {{ padding: 15, flexWrap: "nowrap"}} >
            <CardActionArea className={classes.actionArea}>
                <Card style = {{height: '25vw'}}>

            <img src={poster} alt={movie.Title} />
            <GridListTileBar
                style={{ color: '#FFFFFF',}}
                title={movie.Title}
                subtitle={<span>{movie.Year}</span>}
                // @ts-ignore
                actionIcon = { nominations.some((item)  => item.imdbID === movie.imdbID)?
                    <IconButton aria-label= "info"
                                color="secondary">
                        <FavoriteIcon />
                    </IconButton> :
                    <IconButton aria-label= "info"
                                color="secondary"
                                onClick={() => {if (nominations.length<5) setNominations((nominations: [movieInterface]) => [...nominations, movie])  }}>
                        <FavoriteBorderIcon />
                    </IconButton>
                }/>
            </Card>
        </CardActionArea>

        </GridListTile>

    );
};