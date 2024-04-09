import { useState, useEffect } from 'react';
import CarruselInicio from './CarruselInicio';
import RegistroUsuarios from './RegistroUsuarios';
import { documentId } from 'firebase/firestore';



function PanelInicio() {

  //Funcion Para que Ingrese el Usuario Registrado o Muestre Alerta de Error///////////////
  const [getIniciarSesion, setIniciarSesion] = useState(false)
  const [getUsuario, setUsuario] = useState("")
  const [getContraseña, setContraseña] = useState("")

  function IniciarSesion(e) { //Funcion Para que Ingrese el Usuario Registrado o Muestre Alerta de Error
    e.preventDefault();
    if (getUsuario === "" || getContraseña === "") {
      alert("Por Favor Ingrese Valores en las Celdas")
    } else {
      if (getUsuario === "admin" || getContraseña === "123") {
        setIniciarSesion(true);
        document.getElementById("Login").style.display = "none";
      } else {
        setIniciarSesion(false)
        alert("Error de usuario y contraseña");
      }

    }
  }

  //////////////////////Funcion Para que Se Envie Del Login a Registro////////////////////////////////

  const [getBRegistrarse, setBRegistrarse] = useState("");

  // useEffect(() => {
  //   const storedBRegistrarse = localStorage.getItem("bRegistrarse");
  //   if (storedBRegistrarse === "1") {
  //     setBRegistrarse("1");
  //     document.getElementById("Login").style.display = "none";
  //   }
  // }, []);

  function BRegistrarse() {
    setBRegistrarse("1");
    document.getElementById("Login").style.display = "none";
    // localStorage.setItem("bRegistrarse", "1");
    console.log(getBRegistrarse)


  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////



  return (
    <section className="login-block" >
      <div className="container" id="Login">
        <div className="col-xl-10 w-100 h-100">
          <div className="card rounded-3 text-black">
            <div className="container2 row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center ">
                    <img className='' src="https://www.cesde.edu.co/wp-content/uploads/2023/02/logo-Cesde-2023.svg"
                      style={{ width: '250px' }} alt="logo" />
                    <h4 className="Bienvenido">BIENVENIDO </h4>
                    <p className='text-center' >Por Favor Ingrese Sus Datos</p>
                  </div>
                  <form className='TextCss'>
                    <div className="form-outline mb-4">
                      <label className="form-label">Usuario</label>
                      <input onChange={(e) => { setUsuario(e.target.value) }} type="email" id="Usuario" className="form-control"
                        placeholder="Ingrese Su Correo" />
                    </div>
                    <label className="form-label">Contraseña</label>
                    <div className="form-outline mb-4">
                      <input onChange={(e) => { setContraseña(e.target.value) }} type="password" id="Contraseña" placeholder='*************' className="form-control" />
                    </div>
                    <div className="text-center pt-1 row BIngresar ">
                      <button onClick={IniciarSesion} className="btn btn-primary" type="button">Ingresar</button>
                    </div>
                    <div className='d-flex justify-content-between'  >
                      <div>
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label " htmlFor="flexCheckDefault">Recordar usuario </label>
                      </div>
                      <a className='text-decoration-none text-black' href="#!">Olvidastes La Contraseña</a>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pt-4 ">
                      <p className="mb-0 me-2">¿Aun No tienes una cuenta?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={BRegistrarse} >¡Registrate Aqui!</button>
                    </div>

                  </form>
                </div>
              </div>
              <CarruselInicio />
            </div>
          </div>
        </div>
      </div>

      {getBRegistrarse==="1" && <RegistroUsuarios />}

    </section>
  );

}

export default PanelInicio;
