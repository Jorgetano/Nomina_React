import { useState, useEffect } from 'react';
import CarruselInicio from './CarruselInicio';
import PanelInicio from './PanelInicio';


function RegistroUsuarios() {

    //////////////////////Funcion Para que Se Envie Del Registro al Login ////////////////////////////////  
  function BIniciarSesion() {
      
    window.location.reload();
  }
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////
  
  return (
    <section  className="login-block" >
      <div className="container" id="Registrarse" >
        <div className="col-xl-10 w-100 h-100" >
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-1 mx-md-4">
                  <div className="text-center ">
                    <img className='' src="https://www.cesde.edu.co/wp-content/uploads/2023/02/logo-Cesde-2023.svg"
                      style={{ width: '300px' }} alt="logo" />
                    <h4 className="Bienvenido">REGISTRATE </h4>
                  </div>
                  <form className='TextCss'>
                    <p className='mb-4 text-center' >Por Favor Ingrese Sus Datos</p>

                    <div className="form-outline mb-4 d-flex justify-content-between">
                      <div>
                        <label className="form-label " htmlFor="form2Example11">Nombres *</label>
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Nombres" />
                      </div>
                      <div>

                        <label className="form-label" htmlFor="form2Example11">Apellidos *</label>
                        <input type="email" id="form2Example12" className="form-control"
                          placeholder="Apellidos" />
                      </div>

                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example11">Correo Electronico *</label>
                      <input type="email" id="form2Example13" className="form-control"
                        placeholder="Ingrese Su Correo" />
                    </div>
                    <label className="form-label" htmlFor="form2Example22">Contraseña *</label>
                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example22" placeholder='*************' className="form-control" />
                    </div>
                    <label className="form-label" htmlFor="form2Example22">Confirmar contraseña *</label>
                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example23" placeholder='*************' className="form-control" />
                    </div>
                    <div className="text-center row BIngresar ">
                      <button className="btn btn-primary" type="button">Registrarse </button>
                      <button  className="btn btn-primary" onClick={BIniciarSesion} type="button">Iniciar Sesion </button>
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

export default RegistroUsuarios;
