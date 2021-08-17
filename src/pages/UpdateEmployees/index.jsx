import React,{ useState } from 'react';

import Input from '../../components/Form/components/Input'
import Select from '../../components/Form/components/Select'

import api from '../../services/api'

import CPFMask from '../../utils/CPFMask'

import './style.css'

export default function UpdateEmployees() {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [newCPF, setNewCPF] = useState('');
    const [role, setRole] = useState(0);
    const [isSearchScreen, setIsSearchScreen] = useState(true)

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

        const url = `funcionario/${('' + cpf).replace(/[^0-9]/g, '')}/`
        api.get(url).then((response) => {
            const {nome, cpf, funcao} = response.data
            setName(nome)
            setNewCPF(cpf)
            setRole(funcao)

            setIsSearchScreen(false)
        }).catch((err) => {
            console.log(err);
            alert('Erro ao buscar.');
        });
    }
    
    function handleUpdateEmployee(e) {
        e.preventDefault()

        const url = `funcionario/${('' + cpf).replace(/[^0-9]/g, '')}/`
        api.put(url, {
            nome: name,
            cpf: ('' + newCPF).replace(/[^0-9]/g, ''),
            funcao:role
        }).then(() => {
            alert('Funcionário atualizado.');
        }).catch((err) => {
            console.log(err);
            alert('Funcionário  não pode ser atualizado.');
        });
    }

    function handleCPF(CPF) {
        setCPF(CPFMask(('' + CPF).replace(/[^0-9]/g, '')))
    }

    function handleNewCPF(CPF) {
        setNewCPF(CPFMask(('' + CPF).replace(/[^0-9]/g, '')))
    }

    return (
        <>
        
        {   isSearchScreen &&
            <main className="UpdateEmployees">
                <form onSubmit={handleSearchEmployee}>
                    <Input 
                        name="CPF"
                        label="CPF"
                        value={cpf}
                        type="text"
                        onChange={(e) => { handleCPF(e.target.value) }}
                    />
                    <button >Buscar</button>
                </form>
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
                        value={newCPF}
                        type="text"
                        onChange={(e) => { handleNewCPF(e.target.value) }}
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