import React, { useState } from "react";
import useSWR from "swr";
import SearchResults from "./search_results";
import Movie from "./movie";
import {Grid, GridList, GridListTile} from "@material-ui/core/";

interface MovieContextInterface {
    title: string,
    releaseYear: string,
    plot: string,
    loading: boolean
}
// @ts-ignore
export const MovieContext = React.createContext();


// @ts-ignore
export function MovieProvider({ children }) {
    const [search, setSearch] = useState("frozen");
    const [nominations, setNominations] = useState([]);

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, mutate } = useSWR('http://www.omdbapi.com/?apikey=xxxx&s='+search, fetcher);
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
    return (
        <MovieContext.Provider value={{searchctx: [search, setSearch] }}>
            {JSON.stringify(data)}
            {data.Error}

            {children}
            {data.Title}
            {data.Released}
            <GridList cellHeight={300} cols={3}>

            {data.Search.map((movie) => (

                <Movie key={movie.imdbID} movie={movie} />

            ))}
            </GridList>

        </MovieContext.Provider>
    );
}

export default MovieProvider;