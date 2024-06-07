import React from 'react';
import './Home_Calculadora.css';
import { useNavigate } from 'react-router-dom';
import CalculadoraLiquidacion from './CalculadoraLiquidacion';

function Home() {
    const redireccion = useNavigate();

    const Inicio = () => {
        redireccion("/Login");
    };
    const Registro = () => {
        redireccion("/Registro");
    };

    return (
        <div>
            <div className="container">
                <p>Home 2 pagina del encargado de nomina</p>
            </div>
        </div>
    );
}

export default Home;
