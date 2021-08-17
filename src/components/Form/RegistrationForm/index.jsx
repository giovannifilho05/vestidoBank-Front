import React, { useState } from 'react';

import api from '../../../services/api'

import CPFMask from '../../../utils/CPFMask'

import Input from '../components/Input'
import Select from '../components/Select'

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [role, setRole] = useState(0);

    const options = [{
        value: 0,
        label: 'Caixa'
    },{
        value: 1,
        label: 'Ajudante'
    },{
        value: 2,
        label: 'Segurança'
    },{
        value: 3,
        label: 'Segurador'
    }]

    function handleRegistrationEmployees(e) {
        e.preventDefault()

        api.post('funcionario/', {
            nome: name,
            cpf:('' + cpf).replace(/[^0-9]/g, ''),
            funcao: role
        }).then(() => {
            alert('Cadastro realizado com sucesso.');
        }).catch((err) => {
            console.log(err);
            alert('Erro no cadastro.');
        });
    }

    function handleCPF(CPF) {
        setCPF(CPFMask(('' + CPF).replace(/[^0-9]/g, '')))
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
                type="text"
                onChange={(e) => { handleCPF(e.target.value) }}
            />

            <Select
                name="tipo"
                label="Selecione o tipo"
                value={role}
                options = {options}
                onChange={(e) => { setRole(e.target.value) }}
            />

            <button>Cadastrar</button>
        </form>
    );
}