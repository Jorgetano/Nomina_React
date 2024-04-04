import React from 'react';
import CarruselInicio from './CarruselInicio';
function RegistroUsuarios() {
  return (
    <section className="login-block">
      <div className="container">
        <div className="col-xl-10 w-100 h-100">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center ">
                    <img className='' src="https://www.cesde.edu.co/wp-content/uploads/2023/02/logo-Cesde-2023.svg"
                      style={{ width: '300px' }} alt="logo" />
                    <h4 className="Bienvenido">REGISTRATE </h4>
                  </div>
                  <form id='TextCss'>
                    <p className='mb-4 text-center' >Por Favor Ingrese Sus Datos</p>

                    <div className="form-outline mb-4 d-flex justify-content-between">
                      <div>
                        <label className="form-label " htmlFor="form2Example11">Nombres *</label>
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Nombres" />
                      </div>
                      <div>

                        <label className="form-label" htmlFor="form2Example11">Apellidos *</label>
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Apellidos" />
                      </div>

                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example11">Correo Electronico *</label>
                      <input type="email" id="form2Example11" className="form-control"
                        placeholder="Ingrese Su Correo" />
                    </div>
                    <label className="form-label" htmlFor="form2Example22">Contraseña *</label>
                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example22" placeholder='*************' className="form-control" />
                    </div>
                    <label className="form-label" htmlFor="form2Example22">Confirmar contraseña *</label>
                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example22" placeholder='*************' className="form-control" />
                    </div>
                    <div className="text-center pt-1 row BIngresar ">
                      <button className="btn btn-primary" type="button">Registrarse</button>
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
