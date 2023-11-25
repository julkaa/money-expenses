import React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import theme from "./muiTheme/muiTheme";
import {AuthProvider} from "./Hooks/useContext";
import PrivateRoutes from "./Router/PrivateRoutes";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";

function App() {

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        {/* Private Routes */}
                        <Route element={<PrivateRoutes/>}>
                            <Route path={"/list"} element={<HomePage/>}/>
                            <Route path={"/list/edit/:id"} element={<HomePage/>}/>
                        </Route>

                        {/* Public Routes */}
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="*" element={'not found'}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
