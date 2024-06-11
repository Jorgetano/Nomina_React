import React from 'react';
import './Home_Calculadora.css';
import { useNavigate } from 'react-router-dom';
import CalculadoraLiquidacion from './CalculadoraLiquidacion';
import CalculadoraFinnal from './CalculadoraFinnal';

function Home2() {
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
                <CalculadoraFinnal/>
            </div>
        </div>
    );
}

export default Home2;
