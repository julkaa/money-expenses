import React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import theme from "./muiTheme/muiTheme";
import LoginPage from "./components/LoginPage/LoginPage";
import {AuthProvider} from "./Hooks/useContext";
import HomePage from "./components/HomePage/HomePage";

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}><AuthProvider>
                <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/list' element={<HomePage/>}/>
                    <Route path='*' element={'not found'}/>
                </Routes></AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
