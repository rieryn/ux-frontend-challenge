import React, {useContext, useState} from "react";
import useSWR from "swr";
import {MovieContext} from "./movie_context";


export default function SearchResults(props) {
    const search  = useContext(MovieContext);
    return (
        <div>
            result child {props.Title} tt             {props.Released}

        </div>
    );

}

