import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css';
import axios from 'axios';
import '../components/estilo.css';
import Swal from 'sweetalert2';

const CadastroServico = () => {
   
    const [id, setId] = useState<string>("")
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
   
    const cadastrarServico = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            descricao: descricao,
            duracao: duracao,
            preco: preco
            
        }
        console.log(dados)
        axios.post('http://127.0.0.1:8000/api/servico/store',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(response){
                console.log(response.data);
                window.location.href = "/listagemServico"
            }).catch(function(error){
                console.log(error);
            })
            Swal.fire({
                title: "Cadastrado com Sucesso",
                text: "Novo Serviço Cadastrado",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
                

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => { 
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "descricao") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "duracao") {
            setDuracao(e.target.value);
        }
        if (e.target.name === "preco") {
            setPreco(e.target.value);
        }
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>

                <div className='container'></div>
                <div className='card'> </div>
                <div className='card-body'> </div>
                <h5 className='card-title'>Cadastrar Serviço</h5>
                <form onSubmit={cadastrarServico} className='row g-3'>
                    <div className='col-6'>
                        <label htmlFor='nome' className='form-label'>Nome</label>
                        <input type='text'
                            name='nome'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>
                    <div className='col-6'>
                        <label htmlFor='descricao' className='form-label'>Descrição</label>
                        <input type='text'
                            name='descricao'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>
                    <div className='col-6'>
                        <label htmlFor='duracao' className='form-label'>Duração</label>
                        <input type='text'
                            name='duracao'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>

                    <div className='col-6'>
                        <label htmlFor='preco' className='form-label'>Preço</label>
                        <input type='text'
                            name='preco'
                            className='form-control'
                            required
                            onChange={handleState}

                        ></input>
                    </div>

                    <div className='col-15'>
                        <button className='btn' type='submit'> Cadastrar
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default CadastroServico;