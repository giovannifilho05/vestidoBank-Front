import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import Select from '../../components/Form/components/Select'
import List from '../../components/List'

import './style.css'

export default function ViewReports() {
    const [items, setItems] = useState(['Nenhum relátorio por enquanto :('])

    const types = [{
        label: 'PIX',
        value: 0
    },{
        label: 'TED',
        value: 1
    },{
        label: 'DOC',
        value: 2
    }]
    
    useEffect(() => {
        const url = 'transacao/'
        api.get(url).then((response) => {
            const data = response.data
            setItems(handleReportsList(data))
        }).catch((err) => {
            console.log(err);
            alert('Os relátorios não pode ser buscado.');
        })
    }, []);

    function handleReportsList(reports) {
        console.log(reports)
        return reports.map(({from_cliente, to_cliente, data, type, value}) => {
            return `De: ${from_cliente}; Para: ${to_cliente}; Data: ${data}; Tipo: ${types[type].label}; Valor: R$${value}`
        })
    }

    return(
        <main className="ViewReports">
            <List
                items={items}
            />
        </main>
    );
}