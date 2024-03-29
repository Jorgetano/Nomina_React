import React from 'react';

const RegistroUsuarios = () => {
  return (
    <div className="registro-usuarios">
      <input type="text" class="form-control" placeholder='Nombre'/>
      <input type="text" class="form-control" placeholder='Apellido'/>
      <input type="email" class="form-control" aria-describedby="emailHelp" placeholder='Correo'/>
      <input type="password" class="form-control" placeholder='Contraseña'/>
      <button class="btn btn-primary" type="button">Registrarse</button>
    </div>
  );
};

export default RegistroUsuarios;