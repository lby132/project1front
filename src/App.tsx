import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./page/MainPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    {/*<Route path="/detail/:id" element={<BoardDetail/>}/>*/}
                    {/*<Route path="/write" element={<BoardWrite/>}/>*/}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
