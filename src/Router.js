import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Bocatvang from "./pages/gioithieu/Bocatvang";
import Gioithieuvecongty from "./pages/gioithieu/Gioithieuvecongty";
import Home from "./pages/Home";
import Register from "./components/Login/Register";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/bocatvang' element={<Bocatvang /> } />
            <Route path='/login' element={<Login /> } />
            <Route path='/register' element={<Register /> } />
            <Route path='/about' element={<Gioithieuvecongty />} />
            <Route exact path="/" element={<Home />} />
            </Routes>
            </BrowserRouter>            
    );
};

export default Router;
