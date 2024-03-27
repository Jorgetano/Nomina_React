import React from 'react';

const RegistroUsuarios = () => {
  return (
    <div className="registro-usuarios">
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Apellido" />
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />
      <button>Registrarse</button>
    </div>
  );
};

export default RegistroUsuarios;