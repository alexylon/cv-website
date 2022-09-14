import React from "react"
import {render} from 'react-dom';
import {ThemeProvider} from '@mui/styles';
import Home from "./home"
import {createTheme} from "@mui/material";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    )
}

const container = document.getElementById('root');

render(<App/>, container);
