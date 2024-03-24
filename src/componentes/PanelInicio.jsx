
import React from 'react';

function PanelInicio() {
  return (
    <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">  
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src="public/img/icono.png"
                        style={{width: '185px'}} alt="logo"/>
                      <h4 className="">BIENVENIDO </h4>
                    </div>
                    <form>
                      <p className='mb-5 text-center'>Por Favor Ingrese Sus Datos</p>
                      <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example11">Usuario</label>
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Ingrese Su Correo" />
                      </div>
                      <label className="form-label" htmlFor="form2Example22">Contraseña</label>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example22" placeholder='*************' className="form-control" />
                      </div>
                      <div className="text-center pt-1 row">
                            <button className="btn btn-primary  fa-lg gradient-custom-2 mb-3 " type="button">Ingresar</button>
                      </div>
                      <div className='d-flex' >
                      <input className="form-check-input ms-3 " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label " htmlFor="flexCheckDefault">Recordar usuario </label>
                      <a className='d-flex ps-5' href="#!">Olvidastes La Contraseña</a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pt-4 ">
                        <p className="mb-0 me-2">¿Aun No tienes una cuenta?</p>
                        <button type="button" className="btn btn-outline-danger">¡Registrate Aqui!</button>
                      </div>
                    </form>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default PanelInicio;
