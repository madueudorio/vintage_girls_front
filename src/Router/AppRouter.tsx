import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Cadastro from "../components/CadastroClientes";
import ListagemCliente from "../components/ListagemCliente";
import ListagemProfissional from "../components/ListagemProfissional";
import CadastroProfissional from "../components/CadastroProfissional";
import CadastroServico from "../components/CadastroServico";
import ListagemServico from "../components/ListagemServico";
import EditarCliente from "../components/EditarCliente";
import EditarServico from "../components/EditarServico";
import EditarProfissional from "../components/EditarProfissional";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="cadastrocliente"
                    element={<Cadastro />} />

                <Route path="listagemCliente"
                    element={<ListagemCliente />} />




                <Route path="cadastroprofissional"
                    element={<CadastroProfissional />} />

                <Route path="listagemprofissional"
                    element={<ListagemProfissional />} />




                <Route path="cadastroservico"
                    element={<CadastroServico />} />

                <Route path="listagemservico"
                    element={<ListagemServico />} />




                <Route path="editarcliente/:id"
                    element={<EditarCliente />} />




                <Route path="editarprofissional/:id"
                    element={<EditarProfissional />} />



                <Route path="editarservico/:id"
                    element={<EditarServico />} />






            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;