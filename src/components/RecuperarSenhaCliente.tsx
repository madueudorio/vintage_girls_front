import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "../App.module.css"
import Header from "./Header";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../components/estilo.css';

const RecupeararSenhaCliente = () => {

    const [id, setId] = useState<string>("")
    const [Email, setEmil] = useState<string>("");
    const [Password, setPassword] = useState<string>("");


    const parametro = useParams();


    const atualizar = (e: FormEvent) => {
        e.preventDefault();


        const dados = {
            id: id,
            email: Email,
            senha: Password

        }

        axios.put("http://127.0.0.1:8000/api/recuperarsenhacliente/update",
            dados,
            {
                headers: {
                    "Accept": "aplication/json",
                    "Content-Type": "aplication/json"
                }
            }).then(function (response) {
                window.location.href = "/EditarCliente";
            }).catch(function (error) {
                console.log('ocorreu um erro ao atualizar');
            });

    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/recuperarsenhacliente/find" + parametro.id)
                console.log(response.data)
               setEmil(response.data.data.email);
                setPassword(response.data.data.senha);

                console.log(response)

            } catch (error) {
                console.log("erro ao buscar dados da api");

            }
        }
        fetchData();
    }, []);


    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setEmil(e.target.value);
        }
        if (e.target.name === "celular") {
            setEmil(e.target.value);
        }

    }


    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Recuperar Senha</h5>
                            
                                <div className='col-6'>
                                    <label htmlFor="nome" className='from-label'>Email</label>

                                </div>
                                <div className='col-6'>
                                    <label htmlFor='celular' className='form-label'>Nova Senha</label>
                                    <input type='text'
                                        name='celular'
                                        className='form-control'
                                        required
                                        onChange={handleState}
                                        value={Email}

                                    ></input>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor='email' className='form-label'>Repita sua Senha</label>
                                    <input type='text'
                                        name='email'
                                        className='form-control'
                                        required
                                        onChange={handleState}
                                        value={Password}

                                    ></input>
                                </div>

                        </div>
                        <div className='col-15'>
                            <button className='btn' type='submit'> Editar
                            </button>
                        </div>
                        <div className='col-15'>
                            <button className='btn' type='submit'> Recupearar Senha
                            </button>
                        </div>
                </div>
                </div>
                </main >
                </div > 
               
           
          


         
 
    );
}

export default RecupeararSenhaCliente;