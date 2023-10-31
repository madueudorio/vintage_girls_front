import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Cadastro from "../components/CadastroClientes";
import Listagem from "../components/Listagem";
import ListagemProfissional from "../components/ListagemProfissional";
import CadastroProfissional from "../components/CadastroProfissional";
import CadastroServico from "../components/CadastroServico";
// import ListagemServico from "../components/ListagemServico";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="cadastro"
                    element={<Cadastro />} />

                <Route path="listagem"
                    element={<Listagem />} />
                <Route path="cadastroprofissional"
                    element={<CadastroProfissional />} />
                <Route path="listagemprofissional"
                    element={<ListagemProfissional />} />
               
                {/* <Route path="listagemservico"
                    element={<ListagemServico />} /> */}


            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;