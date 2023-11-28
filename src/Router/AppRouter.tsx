import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import ListagemCliente from "../components/ListagemCliente";
import ListagemProfissional from "../components/ListagemProfissional";
import CadastroProfissional from "../components/CadastroProfissional";
import CadastroServico from "../components/CadastroServico";
import ListagemServico from "../components/ListagemServico";
import EditarCliente from "../components/EditarCliente";
import EditarServico from "../components/EditarServico";
import EditarProfissional from "../components/EditarProfissional";
import CadastroClientes from "../components/CadastroClientes";
import AgendaClienteListagem from "../components/AgendaClienteListagem";
import AgendaEditar from "../components/AgendaEditar";
import Cadastro from "../components/AgendaCliente";
import AgendaCliente from "../components/AgendaCliente";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="cadastrocliente" element={<CadastroClientes />} />
                <Route path="cadastroprofissional" element={<CadastroProfissional />} />
                <Route path="cadastroservico" element={<CadastroServico />} />



                <Route path="listagemprofissional" element={<ListagemProfissional />} />
                <Route path="listagemCliente" element={<ListagemCliente />} />
                <Route path="listagemservico" element={<ListagemServico />} />



                <Route path="editarcliente/:id" element={<EditarCliente />} />
                <Route path="editarprofissional/:id" element={<EditarProfissional />} />
                <Route path="editarservico/:id" element={<EditarServico />} />



                <Route path="agenda/cliente" element={<AgendaCliente />} />
                <Route path="agenda/cliente/listagem" element={<AgendaClienteListagem />} />
                <Route path="agenda/editar/:id" element={<AgendaEditar />} />













            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;