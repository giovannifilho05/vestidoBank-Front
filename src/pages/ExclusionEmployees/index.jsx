import React,{ useState } from 'react';

import Input from '../../components/Form/components/Input'

import CPFMask from '../../utils/CPFMask'

import api from '../../services/api'

import './style.css'

export default function ExclusionEmployees() {
    const [cpf, setCPF] = useState('');

    function handleExclusionEmployees(e) {
        e.preventDefault()
        const url = `funcionario/${('' + cpf).replace(/[^0-9]/g, '')}/`
        api.delete(url).then(() => {
            alert('Excluído com sucesso.');
        }).catch((err) => {
            console.log(err);
            alert('Erro ao excluir.');
        });
    }
    
    function handleCPF(CPF) {
        setCPF(CPFMask(('' + CPF).replace(/[^0-9]/g, '')))
    }

    return (
        <main className="ExclusionEmployees">
            <form onSubmit={handleExclusionEmployees}>
                <Input 
                    name="CPF"
                    label="CPF"
                    value={cpf}
                    type="text"
                    onChange={(e) => { handleCPF(e.target.value) }}
                />
                <button>Excluir</button>
            </form>
        </main>
    )
}