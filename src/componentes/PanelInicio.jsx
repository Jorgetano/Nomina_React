import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import CarruselInicio from './CarruselInicio';
import appFirebase, { auth } from '../credenciales'; // Importa `appFirebase` como un export default y `auth` como un export nombrado


function PanelInicio() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [registrarse, setRegistrarse] = useState(false);

  const navigate = useNavigate(); // Utiliza useNavigate para redirigir al usuario

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      // Inicia sesión con el correo electrónico y la contraseña proporcionados
      await signInWithEmailAndPassword(auth, usuario, contraseña);
      console.log("Inicio de sesión exitoso");
      navigate("/Home2"); // Redirige al usuario a la página de inicio
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const handleRegistro = () => {
    setRegistrarse(true);
    navigate("/Registro");
  };
  const regresarMenu2 = () => {
    navigate("/");
  };
  return (
    <section className="login-block">
      <div className="container" id="Login">
        <div className="col-xl-10 w-100 h-100">
          <div className="card rounded-3 text-black">
            <div className="container2 row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                  <button1 className=" flotante  btn btn-secondary " onClick={regresarMenu2} type="button">Regresar al Menú</button1>
                    <img src="https://www.cesde.edu.co/wp-content/uploads/2023/02/logo-Cesde-2023.svg"
                      style={{ width: '250px' }} alt="logo" />
                    <h4 className="Bienvenido">BIENVENIDO</h4>
                    <p className="text-center">Por Favor Ingrese Sus Datos</p>
                  </div>
                  <form className="TextCss" onSubmit={iniciarSesion}>
                    <div className="form-outline mb-4">
                      <label className="form-label">Usuario</label>
                      <input onChange={(e) => setUsuario(e.target.value)} type="email" id="Usuario" className="form-control"
                        placeholder="Ingrese Su Correo" required />
                    </div>
                    <label className="form-label">Contraseña</label>
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setContraseña(e.target.value)} type="password" id="Contraseña" placeholder="*************" className="form-control" required />
                    </div>
                    <div className="text-center pt-1 row BIngresar">
                      <button className="btn btn-primary" type="submit">Ingresar</button>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">Recordar usuario</label>
                      </div>
                      <a className="text-decoration-none text-black" href="#!">¿Olvidaste La Contraseña?</a>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pt-4">
                      <p className="mb-0 me-2">¿Aun No tienes una cuenta?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={handleRegistro}>¡Registrate Aqui!</button>
                    </div>
                  </form>
                </div>
              </div>
              <CarruselInicio />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelInicio;
