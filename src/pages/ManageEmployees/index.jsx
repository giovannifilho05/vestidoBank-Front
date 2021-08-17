import React from 'react';

import PrimaryButton from '../../components/PrimaryButton'

import './style.css'

export default function ManageEmployees() {
    return (
        <main>
            <PrimaryButton to="/manageEmployees/registrarionEmployees">CREATE Funcionário</PrimaryButton>
            <PrimaryButton to="/manageEmployees/viewEmployees">READ Funcionário</PrimaryButton>
            <PrimaryButton to="/manageEmployees/updateEmployees">UPDATE Funcionário</PrimaryButton>
            <PrimaryButton to="/manageEmployees/exclusionEmployees">DELETE Funcionário</PrimaryButton>
        </main>
    );
}