import React,{ useState } from 'react';

import Input from '../../components/Form/components/Input'
import List from '../../components/List'

import api from '../../services/api'

import './style.css'

export default function ViewEmployees() {
    const [cpf, setCPF] = useState();
    const [items, setItems] = useState([])
    
    function handleSearch(e) {
        e.preventDefault()

        const url = `funcionario/${cpf}`
        api.get(url).then((response) => {
            const data = response.data
            setItems(handleEmployeesList(data))
        }).catch((err) => {
            console.log(err);
            alert('Funcionário  não pode ser atualizado.');
        });
    }

    function handleEmployeesList(data) {
        console.log('handleEmployeesList')
        console.log(data)
    }

    return (
        <main className="ViewEmployees">
            <form onSubmit="handleSearch">
                <Input
                    name="CPF"
                    label="CPF"
                    value={cpf}
                    type="number"
                    onChange={(e) => { setCPF(e.target.value) }}
                />
                <button>Visualizar</button>
            </form>

            <List
                items={items}
            />
        </main>
    )
}