import React, {useState} from "react";
import useSWR from "swr";
import {MovieContext} from "./movie_context";

const mockMovie = {
    title: "Dead",
    releaseYear: "2020",
    id: "1"
};
class SearchBar extends React.Component<{}, { value: string }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            value: "dd"
        };
    }


    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
    }

    handleSearch(event: React.MouseEvent<HTMLInputElement, MouseEvent>, context: any) {
        event.preventDefault();
        context.setMessage(this.state.value);
    }

    render() {
        return (
            <MovieContext.Consumer>
                {(context) => (
                <form className="searchBar">
                    <input
                        onChange={(event)=>this.handleChange(event)}
                    />
                    <p>{this.state.value}</p>
                    <input onClick={(event) =>this.handleSearch(event, context)} type="submit" value="SEARCH"/>
                </form>
                )}
            </MovieContext.Consumer>
        );
    }
}

export default SearchBar;