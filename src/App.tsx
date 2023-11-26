import React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./Hooks/useContext";
import PrivateRoutes from "./Router/PrivateRoutes";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import {Provider} from "react-redux";
import store from "./redux/expense.reducer";
import theme from "./theme/theme";

function App() {

    return (
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Routes>
                            {/* Private Routes */}
                            <Route element={<PrivateRoutes/>}>
                                <Route path={"/list"} element={<HomePage/>}/>
                                <Route path={"/list/edit/:id"} element={<HomePage/>}/>
                                <Route path={"/list/create-expense"} element={<HomePage/>}/>
                            </Route>

                            {/* Public Routes */}
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="*" element={<Navigate to="/list" replace={true}/>}/>
                        </Routes>
                    </Router>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    );
}

export default App;
