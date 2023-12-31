
import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from "../App.module.css";
import axios from 'axios';
import { CadastroServicoInterface } from '../interfaces/CadastroServicoInterface';
import { Link } from 'react-router-dom';
import '../components/estilo.css';

const ListagemServico = () => {

    const [usuarios, setUsuarios] = useState<CadastroServicoInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.name === "pesquisa"){
            setPesquisa(e.target.value);
    }
}

    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {

                const response = await axios.post('http://127.0.0.1:8000/api/servico/nome',
                    { nome: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"

                        }

                    }).then(function (response) {
                        setUsuarios(response.data.data);
                    }).catch(function (error) {
                        console.log(error);

                    });



            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/servico/all');
                setUsuarios(response.data.data);

            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const excluir = (id: number) => {
        axios.delete('http://127.0.0.1:8000/api/servico/remover/' +id);
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/servico/all');
                setUsuarios(response.data.data);

            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);

            }

        

        }
        fetchData();
    }


    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-boy'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-10'>
                                        <input type="text" name="pesquisa" className='form-control' onChange={handleState} />
                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-deeppink'>Pesquisar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem de Serviços
                            </h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Descricao</th>
                                        <th>Duracao</th>
                                        <th>Preco</th>
                                        <th>Ações</th>
                                       <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.descricao}</td>
                                            <td>{usuario.duracao}</td>
                                            <td>{usuario.preco}</td>
                                            <td>
                                           
                                           
                                            
                                            <button className='btn btn-deeppink btn-sm'> <Link to={"/editarservico/" + usuario.id} >Editar </Link></button>
                                            <button className='btn btn-deeppink btn-sm'> <Link to={"/recuperarsenha"} >Recuperar Senha</Link></button>
                                            <button onClick={() =>excluir(usuario.id)} className='btn btn-deeppink btn-sm'>Excluir</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div >
            </main >
        </div >
    );
}

export default ListagemServico;