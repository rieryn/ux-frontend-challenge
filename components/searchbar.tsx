import React, {useContext, useState} from "react";
import useSWR from "swr";
import {MovieContext} from "./movie_context";

const mockMovie = {
    title: "Dead",
    releaseYear: "2020",
    id: "1"
};
function SearchBar () {
    const { searchctx } = useContext(MovieContext);
    const [search, setSearch] = searchctx;
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={e => setInput(e.target.value)}
                placeholder='Type to search...'
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default SearchBar;