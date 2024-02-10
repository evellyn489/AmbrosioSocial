import { BrowserRouter, Routes, Route  } from "react-router-dom";

import { CadastroInicial } from "../pages/CadastroInicial";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { Explorar } from "../pages/Explorar";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CadastroInicial />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/explorar" element={<Explorar />}/>
            </Routes>
        </BrowserRouter>
    );
}