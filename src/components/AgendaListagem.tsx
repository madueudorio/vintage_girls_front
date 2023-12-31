import axios from 'axios';
import React, {Component, useState, ChangeEvent, FormEvent,useEffect} from 'react';
import styles from "../App.module.css";
import { AgendaClienteInterfaces } from '../interfaces/AgendaClienteInterface';
import { Link, useNavigate } from 'react-router-dom';


const AgendaListagem = () => {

    const[usuarios,setUsuarios] = useState<AgendaClienteInterfaces[]>([]);
    const[pesquisa, setPesquisa]= useState<string>('');
    const[error,setError]=useState("");
    const navigate = useNavigate();

    const handleState = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name ==="pesquisa"){
            setPesquisa(e.target.value);
        }
    }

    function excluir (id: number) {
        const confirm = window.confirm('Você tem certeza que deseja excluir?');
        if (confirm)
            axios.delete('http://127.0.0.1:8000/api/agenda/excluir/' + id)
                .then(function (response) {
                    window.location.href = "/agenda/listagem"
                }).catch(function (error) {
                    console.log('Ocorreu um erro ao excluir');
                })
    }

    const buscar = (e:FormEvent)=>{
        e.preventDefault();

        async function fetchData(){
            try{
            
            const response = await axios.post('http://127.0.0.1:8000/api/agenda/find/{id}/',{id : pesquisa},{
                headers:{
                    "Accept":"application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(response){
                setUsuarios(response.data.data);
            }).catch(function(error){
                console.log(error);
            });

            }catch(error){
                console.log(error);
            }
        }
        fetchData();

    }



    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/agenda/all');
                setUsuarios(response.data.data);

            }catch(error){
                setError("Ocorreu um erro");
                console.log(error);

            }
        }

        fetchData();
            
        
    }, []);


    return(
        <div>
            <main className={styles.main}>
                <div className='container'>

                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-10'>
                                        <input type="text" name="pesquisa" className='form-control' onChange={handleState}/>
                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-sucess'>Pesquisar</button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                            Listagem de Agendamentos
                            </h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Profissional</th>
                                        <th>Cliente</th>
                                        <th>Horario e Data</th>
                                        <th>Serviço</th>
                                        <th>Valor</th>
                                        <th>Tipo de Pagamento</th>
                                        
                                    
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                   { usuarios.map(usuario=>(
                                    <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.profissional_id}</td>
                                    <td>{usuario.cliente_id}</td>
                                    <td>{usuario.horario_data}</td>
                                    <td>{usuario.servico_id}</td>
                                    <td>{usuario.valor}</td>
                                    <td>{usuario.tipo_pagamento}</td>
                                    
                                    <td>
                                    <button className='btn btn-deeppink btn-sm'> <Link to={"agenda/editar"} >Editar</Link></button>
                                    <button className='btn btn-deeppink btn-sm'> <Link to={"/recuperarsenha"} >Recuperar Senha</Link></button>
                                            <button onClick={() =>excluir(usuario.id)} className='btn btn-deeppink btn-sm'>Excluir</button>
                                    </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}

export default AgendaListagem;