import React from 'react';

import PrimaryButton from '../../components/PrimaryButton'

import './style.css'

export default function ManageEmployees() {
    return (
        <main>
            <PrimaryButton to="/manageEmployees/registrarionEmployees">Cadastrar Funcionário</PrimaryButton>
            <PrimaryButton to="/manageEmployees/exclusionEmployees">Excluir Funcionário</PrimaryButton>
            <PrimaryButton to="/manageEmployees/viewEmployees">Visualizar Funcionário</PrimaryButton>
            <PrimaryButton to="/manageEmployees/updateEmployees">Atualizar Funcionário</PrimaryButton>
        </main>
    );
}