import React, { useState } from "react";

interface MovieContextInterface {
    title: string,
    releaseYear: string,
    plot: string,
    loading: boolean
}
// @ts-ignore
export const MovieContext = React.createContext();


class MovieProvider extends React.Component {
    state = {message: ""};
    render() {
        return (
            <MovieContext.Provider value={
                {state: this.state,
                    setMessage: (value: string) => this.setState({
                        message: value })}}>
                {this.props.children}
            </MovieContext.Provider>);
    }
}

export default MovieProvider;