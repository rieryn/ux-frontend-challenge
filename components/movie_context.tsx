import React, { useState } from "react";
import useSWR from "swr";
import SearchResults from "./search_results";
import Movie from "./movie";
import {Container, Grid, GridList, GridListTile} from "@material-ui/core/";
import PermanentDrawerLeft from "./left";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchBar from "./searchbar";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Snackbar from '@material-ui/core/Snackbar';
import Alert, { AlertProps } from '@material-ui/lab/Alert';
import ListItemText from "@material-ui/core/ListItemText";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% )`,
            marginLeft: 240,
        },
        drawer: {
            width: 240,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 240,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);
interface movieInterface {
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string
}
// @ts-ignore
export const MovieContext = React.createContext();


// @ts-ignore
export function MovieProvider({ children }) {
    const [search, setSearch] = useState("frozen");
    const [nominations, setNominations] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
    };

    const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
    const { data, error, mutate } = useSWR('https://www.omdbapi.com/?apikey=60b1118c&s='+search, fetcher);
    const classes = useStyles();
    if (error) return <h1>Something went wrong!</h1>
    return (

        <MovieContext.Provider value={{searchctx: [search, setSearch], nomctx: [nominations, setNominations]}}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar>
                <SearchBar/>
                </Toolbar>

            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div className={classes.toolbar} />
                <Container>
                <Typography variant="h6" noWrap>
                    Nominations
                </Typography>
                </Container>
                <Divider />
                <List>
                    {nominations.map((movie: movieInterface) => (
                        <ListItem button key={movie.imdbID}>
                            <ListItemText primary={movie.Title} />
                        </ListItem>

                    ))}
                </List>
            </Drawer>

                <Snackbar open={(nominations.length >= 5)} onClose={handleClose}>
                    <Alert severity="success">
                        So many nominations! <a href="https://github.com/rieryn">hire me</a>
                    </Alert>
                </Snackbar>
            {(!data)? <p>Loading</p>:
            (data["Error"])?  data["Error"]:
                <GridList cols={3} style={{padding: 15}}>
                    {data.Search.map((movie: movieInterface) => (
                        <Movie key={movie.imdbID} movie={movie}/>

                    ))}
                </GridList>
            }

        </MovieContext.Provider>
    );
}

export default MovieProvider;