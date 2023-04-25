import React from "react";
import Navbar from "./components/navbarComponents/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/homeComponents/Home";
import ContractForm from "./components/contractComponents/ContractForm";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path ='/contract' element={<ContractForm />}></Route>
                <Route path ='/teams' element={<Teams />}></Route>
                <Route path ='/contract' element={<ContractForm />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;