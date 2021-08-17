import React,{ useState } from 'react';

import Input from '../../components/Form/components/Input'

import api from '../../services/api'

import './style.css'

export default function ExclusionEmployees() {
    const [cpf, setCPF] = useState();

    function handleExclusionEmployees(e) {
        e.preventDefault()
        const url = `funcionario/${cpf}/`
        api.delete(url)
            .then(() => {
                alert('Excluído com sucesso.');
            }).catch((err) => {
                console.log(err);
                alert('Erro ao excluir.');
            });
    }
    
    return (
        <main className="ExclusionEmployees">
            <form onSubmit={handleExclusionEmployees}>
                <Input 
                    name="CPF"
                    label="CPF"
                    value={cpf}
                    type="number"
                    onChange={(e) => { setCPF(e.target.value) }}
                />
                <button>Excluir</button>
            </form>
        </main>
    )
}