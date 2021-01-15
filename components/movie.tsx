import React from "react";
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

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


export default function Movie ({ movie }) {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <GridListTile key={movie.imdbID}>

            <img src={poster} alt={movie.Title} />
            <GridListTileBar
                title={movie.Title}
                subtitle={<span>{movie.Year}</span>}
                actionIcon={
                    <IconButton aria-label= "info"
                                color="secondary">
                        <FavoriteBorderIcon />
                    </IconButton>
                }
            />
        </GridListTile>
    );
};