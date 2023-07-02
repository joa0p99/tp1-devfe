import React from "react";
import Layout from "./Layout";
import Lista from "./paginas/Lista";
import Imagem from "./paginas/Imagem";
import Automovel from "./paginas/Automovel";
import Api from "./paginas/Api";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function Main() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/lista" element={<Lista />} />
                    <Route path="/imagens" element={<Imagem />} />
                    <Route path="/automovel" element={<Automovel />} />
                    <Route path="/api" element={<Api />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </div>
      
    );
}

export default Main;