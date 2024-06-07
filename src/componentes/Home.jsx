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
            <div className="container-fluid bg-dark ">
                <div className="container3">
                    <header className="bg-dark text-light d-flex justify-content-md-between flex-wrap justify-content-center align-items-center py-1">
                        <a href="#" className="d-flex align-items-center col-md-auto my-2">
                            <img src="src/assets/logo.png" alt="Logo" width="80" height="80" className="d-inline-block me-3 " />
                        </a>
                        <h2 className=' '>Nos Fuimos De Viaje</h2>
                        <div className="col-md-auto text-end my-2" id="cllas">
                            <button onClick={Inicio} className="btn btn-outline btn-outline-light me-2">
                                Iniciar Sesión
                            </button>
                            <button onClick={Registro} className="btn btn-outline btn-warning">
                                Registrarse
                            </button>
                        </div>
                    </header>
                </div>
            </div>
            <div className="m-4">
                <CalculadoraLiquidacion />
            </div>
        </div>
    );
}

export default Home;
