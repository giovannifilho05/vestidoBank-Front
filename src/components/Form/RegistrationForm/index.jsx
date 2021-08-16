import React, { useState } from 'react';

import api from '../../../services/api'

import Input from '../components/Input'
import Select from '../components/Select'

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState();
    const [type, setType] = useState('');

    const options = [{
        value: 0,
        label: 'Caixa'
    },{
        value: 1,
        label: 'Atendente'
    }]

    function handleRegistrationEmployees(e) {
        e.preventDefault()

        api.post('funcionario', {
            nome,
            cpf,
            funcao: type
        }).then(() => {
            alert('Cadastro realizado com sucesso.');
            history.push('/');
        }).catch((err) => {
            console.log(err);
            alert('Erro no cadastro.');
        });
    }

    return (
        <form onSubmit={handleRegistrationEmployees}>
            <Input 
                name="nome"
                label="Nome"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
            <Input 
                name="CPF"
                label="CPF"
                value={cpf}
                type="number"
                onChange={(e) => { setCPF(e.target.value) }}
            />

            <Select
                name="Tipo"
                label="Selecione o tipo"
                value={type}
                options = {options}
                onChange={(e) => { setType(e.target.value) }}
            />

            <button>Cadastrar</button>
        </form>
    );
}