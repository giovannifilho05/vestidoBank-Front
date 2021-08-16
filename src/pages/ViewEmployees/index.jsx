import React,{ useState } from 'react';

import Input from '../../components/Form/components/Input'
import List from '../../components/List'


import './style.css'

export default function ViewEmployees() {
    const [cpf, setCPF] = useState();
    const items = ['Item1', 'Item2', 'Item3']
    
    return (
        <main className="ViewEmployees">
            {/* <Input 
                name="CPF"
                label="CPF"
                value={cpf}
                type="number"
                onChange={(e) => { setCPF(e.target.value) }}
            />
            <button>Excluir</button> */}

            <List
                items={items}
            />
        </main>
    )
}