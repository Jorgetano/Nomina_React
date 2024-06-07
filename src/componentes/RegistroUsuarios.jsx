import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import CarruselInicio from './CarruselInicio';
import { auth } from '../credenciales'; // Importa `auth` desde tus credenciales

function RegistroUsuarios() {
  const redirecion = useNavigate();
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [comContrasena, setComContrasena] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contrasena !== comContrasena) {
      setError("Las contraseñas no coinciden");
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, correo, contrasena);
      redirecion("/Home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChangeNombres = (e) => {
    setNombres(e.target.value);
  };

  const handleChangeApellidos = (e) => {
    setApellidos(e.target.value);
  };

  const handleChangeCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const handleChangeContrasena = (e) => {
    setContrasena(e.target.value);
  };

  const handleChangeComContrasena = (e) => {
    setComContrasena(e.target.value);
  };

  return (
    <section className="login-block">
      <div className="container" id="Registrarse">
        <div className="col-xl-10 w-100 h-100">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-1 mx-md-4">
                  <div className="text-center">
                    <img className='' src="https://www.cesde.edu.co/wp-content/uploads/2023/02/logo-Cesde-2023.svg"
                      style={{ width: '300px' }} alt="logo" />
                    <h4 className="Bienvenido">REGISTRATE </h4>
                  </div>
                  <form className='TextCss' onSubmit={handleSubmit}>
                    <p className='mb-4 text-center'>Por Favor Ingrese Sus Datos</p>

                    <div className="form-outline mb-4 d-flex justify-content-between">
                      <div>
                        <label className="form-label" htmlFor="form2Example11">Nombres *</label>
                        <input type="text" id="form2Example11" className="form-control"
                          value={nombres} onChange={handleChangeNombres} placeholder="Nombres" required />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="form2Example11">Apellidos *</label>
                        <input type="text" id="form2Example12" className="form-control"
                          value={apellidos} onChange={handleChangeApellidos} placeholder="Apellidos" required />
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example13">Correo Electrónico *</label>
                      <input type="email" id="form2Example13" className="form-control"
                        value={correo} onChange={handleChangeCorreo} placeholder="Ingrese Su Correo" required />
                    </div>
                    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example22">Contraseña *</label>
                      <input type="password" id="form2Example22" className="form-control"
                        value={contrasena} onChange={handleChangeContrasena} placeholder="*************" required />
                    </div>
                    
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example23">Confirmar contraseña *</label>
                      <input type="password" id="form2Example23" className="form-control"
                        value={comContrasena} onChange={handleChangeComContrasena} placeholder="*************" required />
                    </div>
                    
                    <div className="text-center row BIngresar">
                      <button className="btn btn-primary" type="submit">Registrarse</button>
                      <button className="btn btn-primary" type="button">Iniciar Sesión</button>
                    </div>
                  </form>
                  {error && <p className="text-danger mt-3">{error}</p>}
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

export default RegistroUsuarios;
