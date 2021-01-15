import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    GridListTile, IconButton, GridListTileBar
} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {MovieContext} from "./movie_context";
import {height} from "@material-ui/system";

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
    // @ts-ignore
    const { nomctx } = useContext(MovieContext);
    const [nominations, setNominations] = nomctx;
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (

        <GridListTile key={movie.imdbID} style = {{height: '25vw', padding: 15}}>
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
                                onClick={() => {setNominations((nominations: [movieInterface]) => [...nominations, movie])  }}>
                        <FavoriteBorderIcon />
                    </IconButton>
                }/>
            </Card>

        </GridListTile>
    );
};