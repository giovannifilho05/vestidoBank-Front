import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import Select from '../../components/Form/components/Select'
import List from '../../components/List'

import './style.css'

export default function ViewReports() {
    const [items, setItems] = useState(['Nenhum relátorio por enquanto :('])
    
    useEffect(() => {
        const url = '/transacao/'
        api.get(url).then((response) => {
            handleReportsList(response.data)
        }).catch((err) => {
            console.log(err);
            alert('Os relátorios não pode ser buscado.');
        })
    }, []);

    function handleReportsList(reports) {
        const reportsStrings = reports.map(() => {

        })

        setItems(reportsStrings)
    }

    return(
        <main className="ViewReports">
            <List
                items={items}
            />
        </main>
    );
}