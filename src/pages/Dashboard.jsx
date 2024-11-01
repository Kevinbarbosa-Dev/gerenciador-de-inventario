import React from 'react';
import '../assets/styles/dashboard.scss';
import Tabela from '../componente/Tabela';

export default function Dashboard() {
    return (
        <main className='dashboard-container'>
            <div className="dashboard-header">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard-tabela">
                <Tabela />
            </div>
        </main>
    );
}
