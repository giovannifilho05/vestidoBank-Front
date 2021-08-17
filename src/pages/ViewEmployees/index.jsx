import React,{ useState } from 'react';

import Input from '../../components/Form/components/Input'
import List from '../../components/List'
import api from '../../services/api'

import CPFMask from '../../utils/CPFMask'

import './style.css'

export default function ViewEmployees() {
    const [cpf, setCPF] = useState('');
    const [items, setItems] = useState(['Ainda não foi carregado nenhum funcionário'])
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
    
    function handleSearch(e) {
        e.preventDefault()

        const url = `funcionario/${('' + cpf).replace(/[^0-9]/g, '')}/`
        api.get(url).then((response) => {
            const data = response.data
            setItems(handleEmployeesList([data]))

            setIsSearchScreen(false)
        }).catch((err) => {
            console.log(err);
            alert('Funcionário não pode ser buscado.');
        });
    }

    function handleSearchAll(e) {
        e.preventDefault()

        const url = `funcionario/`
        api.get(url).then((response) => {
            const data = response.data
            setItems(handleEmployeesList(data))

            setIsSearchScreen(false)
        }).catch((err) => {
            console.log(err);
            alert('Funcionário não pode ser buscado.');
        });
    }

    function handleEmployeesList(employees) {
        const employeesStrings = employees.map(({nome, cpf, funcao}) => {
            return `Nome: ${nome}; CPF: ${cpf}; Função: ${options[funcao].label}`
        })

        setItems(employeesStrings)
    }

    function handleCPF(CPF) {
        setCPF(CPFMask(('' + CPF).replace(/[^0-9]/g, '')))
    }

    return (
        <> 
        {   isSearchScreen &&
            <main className="ViewEmployees">
                <form onSubmit={handleSearch}>
                    <Input
                        name="CPF"
                        label="CPF"
                        value={cpf}
                        type="text"
                        onChange={(e) => { handleCPF(e.target.value) }}
                    />
                    <button>Visualizar</button>
                </form>
                <form onSubmit={handleSearchAll}>
                    <button>Visualizar Tudo</button>
                </form>
            </main>
        }

        {   !isSearchScreen &&
            <main>
                <List
                    items={items}
                />
            </main>
        }
        </>
    )
}