import React from 'react';
import './Login.css';
import {  useNavigate } from 'react-router-dom';


function Home() {
    const redirecion = useNavigate();

    const Inicio = () => {
        redirecion("/Login");
    };
    const Registro = () => {
        redirecion("/Registro");
    };
    return (
        <div>
            <div className="container-fluid bg-dark">
                
                <div className="container2">
                    <header className="bg-dark text-light d-flex justify-content-md-between flex-wrap justify-content-center align-items-center py-1">
                        <a href="#" className="d-flex align-items-center col-md-auto my-2">
                            <img src="src/assets/logo.png" alt="Logo" width="80" height="80" className="d-inline-block me-3 " />
                        </a>
                        <h2 className='Bienvenida'>Nos Fuimos De Viaje</h2>
                            <div className="col-md-auto text-end my-2" id="cllas">
                                <button onClick={Inicio}  className="btn btn-outline btn-outline-light me-2">
                                 Iniciar Sesión
                                </button>
                                <button onClick={Registro}  className="btn btn-outline btn-outline-light me-2">
                                 Registrarse
                                </button>
                                
                            </div>
                    </header>
                </div>
            </div>
           
        </div>
    );
}

export default Home;