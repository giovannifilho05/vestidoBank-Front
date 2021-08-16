import React,{ useState } from 'react';

import Input from '../../components/Form/components/Input'


import './style.css'

export default function UpdateEmployees() {
    const [cpf, setCPF] = useState();
    
    return (
        <main className="UpdateEmployees">
            <Input 
                name="CPF"
                label="CPF"
                value={cpf}
                type="number"
                onChange={(e) => { setCPF(e.target.value) }}
            />
            <button>Buscar</button>
        </main>
    )
}