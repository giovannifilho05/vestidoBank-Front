import { Select } from '@material-ui/core';
import React from 'react';

import './style.css'

export default function ViewReports() {
    

    return(
        <main className="ViewReports">
            <form>
                <Select
                    name="Tipo"
                    label="Selecione o tipo"
                    value={role}
                    options = {options}
                    onChange={(e) => { setRole(e.target.value) }}
                />  
            </form>
        </main>
    );
}