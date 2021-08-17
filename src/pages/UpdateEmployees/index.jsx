import React,{ useState } from 'react';

import Input from '../../components/Form/components/Input'
import Select from '../../components/Form/components/Select'

import api from '../../services/api'

import './style.css'

export default function UpdateEmployees() {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState();
    const [role, setRole] = useState(0);
    const [isSearchScreen, setIsSearchScreen] = useState(false)

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

    function handleSearchEmployee(e) {
        e.preventDefault()

        const url = `/funcionarios/${cpf}`
        api.get(url)
            .then((response) => {
                const [nome, CPF, funcao] = response.data
                setName(nome)
                setCPF(CPF)
                setRole(funcao)

                setIsSearchScreen(false)
            }).catch((err) => {
                console.log(err);
                alert('Erro ao buscar.');
            });
    }
    
    function handleUpdateEmployee(e) {
        e.preventDefault()

        const url = `funcionarios/${cpf}`
        api.put(url, {
            nome: name,
        }).then(() => {
            alert('Funcionário atualizado.');
        }).catch((err) => {
            console.log(err);
            alert('Funcionário  não pode ser atualizado.');
        });
    }

    return (
        <>
        
        {   isSearchScreen &&
            <main className="UpdateEmployees">
                <form onSubmit={handleSearchEmployee}>

                </form>
                <Input 
                    name="CPF"
                    label="CPF"
                    value={cpf}
                    type="number"
                    onChange={(e) => { setCPF(e.target.value) }}
                />
                <button >Buscar</button>
            </main>
        }

        {   !isSearchScreen &&
            <main className="UpdateEmployees">
    
                <form onSubmit={handleUpdateEmployee}>
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
                        value={role}
                        options = {options}
                        onChange={(e) => { setRole(e.target.value) }}
                    />

                    <button>Atualizar</button>
                </form>
            </main>
        }

        </>
    )
}