import React from 'react';
import { shallow } from 'enzyme';
import { GridListTileBar } from '@material-ui/core';
import Movie from "../movie";

// @ts-ignore
const Item = text => <p>Item {text}</p>;
// @ts-ignore
const Composition = ({ showB }) => (
  <p>
    <Item text="A" />
    {showB && <Item text="B" />}
  </p>);
// @ts-ignore
export const mockContext = React.createContext();
var testmovie = {
  Title: "string",
  Year: "string",
  imdbID: "string",
  Poster: "string"
}

const Movietest = (movie : any)=>(
    <Movie key={movie.imdbID} movie={movie}/>)

describe('<Movie />', () => {
  it('should show movie', () => {
    const wrapper = shallow(
      <mockContext.Provider value={{searchctx: [], nomctx: []}}>
    <Movie key={testmovie.imdbID} movie={testmovie}/>
    </mockContext.Provider>
    );
    expect(wrapper.find(Movie)).toHaveLength(1);
  });
});
