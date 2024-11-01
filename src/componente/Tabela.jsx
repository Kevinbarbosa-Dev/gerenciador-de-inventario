import React from 'react';
import '../assets/styles/Tabela/style.scss';

export default function Tabela() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Data de entrada</th>
                    <th>Data de saída</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Produto 1</td>
                    <td>10</td>
                    <td>R$ 100,00</td>
                    <td>01/01/2021</td>
                    <td>01/01/2021</td>
                </tr>
                {/* Mais linhas podem ser adicionadas aqui */}
            </tbody>
        </table>
    );
}
