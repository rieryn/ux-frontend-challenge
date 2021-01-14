import React, {useState} from "react";
import useSWR from "swr";
import {MovieContext} from "./movie_context";


class SearchResults extends React.Component<{}, { value: string }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            value: ""
        };
    }

    render() {
        return (
            <MovieContext.Consumer>
                {(context:any) => (
                    <p>test {context.state.message}</p>

    )}
        </MovieContext.Consumer>
    );
    }
}

export default SearchResults;