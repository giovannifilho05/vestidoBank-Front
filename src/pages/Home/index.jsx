import React from 'react';

import PrimaryButton from '../../components/PrimaryButton';

import './style.css'

export default function Home() {
   return (
    <main>
        <PrimaryButton to="/manageEmployees">Gerenciar Funcionários</PrimaryButton>
        <PrimaryButton to="/viewReports">Visualizar Relátorios</PrimaryButton>
    </main>
   );
}