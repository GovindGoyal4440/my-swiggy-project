import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homes from "./Homes";
import Restaurant from "./Restaurant";
import { BrowserRouter, Route, Routes } from "react-router";
import ResturantMenu from "./ResturantMenu";
import SearchFood from "./SearchFood";
import SecondaryHome from "./SecondaryHome";
import {Provider} from "react-redux"
import {store} from "./Stored/stores"
import Checkout from "./Checkout";


function App(){

    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homes></Homes>}></Route>

            <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/noida/:id" element={<ResturantMenu></ResturantMenu>}></Route>
            <Route path="/city/noida/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)