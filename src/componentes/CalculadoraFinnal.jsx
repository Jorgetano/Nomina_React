import React, { useState } from 'react';
import './CalculadoraFinnal.css';

const CalculadoraFinnal = () => {
  const [datos, setDatos] = useState({
    fechaInicio: '',
    fechaFin: '',
    salario: '',
    transporte: '',
  });
  const [resultados, setResultados] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const calcularDiasTrabajados = (fechaInicio, fechaFin) => {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const diferenciaTiempo = fin - inicio;
    const diferenciaDias = diferenciaTiempo / (1000 * 3600 * 24) + 1; // +1 para incluir el último día
    return Math.round(diferenciaDias);
  };

  const calcularLiquidacion = () => {
    const { salario, transporte, fechaInicio, fechaFin } = datos;
    const diasTrabajados = calcularDiasTrabajados(fechaInicio, fechaFin);

    const salarioNum = parseFloat(salario);
    const transporteNum = parseFloat(transporte);

    const cesantias = Math.round((diasTrabajados * salarioNum) / 360);
    const interesesCesantias = Math.round(cesantias * 0.12);
    const primaServicios = Math.round(((salarioNum + transporteNum) * diasTrabajados) / 360);
    const vacaciones = Math.round((salarioNum * diasTrabajados) / 720);
    const indemnizacion = Math.round(salarioNum); // Cálculo de indemnización básica

    const totalLiquidacion = cesantias + interesesCesantias + primaServicios + vacaciones + indemnizacion;

    setResultados({
      diasTrabajados,
      cesantias,
      interesesCesantias,
      primaServicios,
      vacaciones,
      indemnizacion,
      totalLiquidacion,
    });
  };

  return (
    <div className="calculadora-container">
      <h1 className="calculadora-titulo">Calcular Liquidación</h1>
      <div className="calculadora-formulario">
        <label className="calculadora-label">
          Fecha de Inicio:
          <input type="date" name="fechaInicio" value={datos.fechaInicio} onChange={handleChange} className="calculadora-input" />
        </label>
        <label className="calculadora-label">
          Fecha de Fin:
          <input type="date" name="fechaFin" value={datos.fechaFin} onChange={handleChange} className="calculadora-input" />
        </label>
        <label className="calculadora-label">
          Salario:
          <input type="number" name="salario" value={datos.salario} onChange={handleChange} className="calculadora-input" />
        </label>
        <label className="calculadora-label">
          Transporte:
          <input type="number" name="transporte" value={datos.transporte} onChange={handleChange} className="calculadora-input" />
        </label>
        <button className="calculadora-boton" onClick={calcularLiquidacion}>Calcular Liquidación</button>
      </div>
      {resultados && (
        <div className="resultados">
          <div className="resultados-datos-liquidacion">
            <h2 className="resultados-titulo">Datos de Liquidación</h2>
            <div className="resultados-fila">
              <div className="resultados-columna">Período (DD-MM-AAAA)</div>
              <div className="resultados-columna">{datos.fechaInicio} al {datos.fechaFin}</div>
            </div>
            <div className="resultados-fila">
              <div className="resultados-columna">Días Laborados</div>
              <div className="resultados-columna">{resultados.diasTrabajados}</div>
            </div>
            <div className="resultados-fila">
              <div className="resultados-columna">Salario Proporcional</div>
              <div className="resultados-columna">${parseInt(datos.salario).toLocaleString()}</div>
            </div>
            <div className="resultados-fila">
              <div className="resultados-columna">Transporte</div>
              <div className="resultados-columna">${parseInt(datos.transporte).toLocaleString()}</div>
            </div>
          </div>
          <div className="resultados-prestaciones-sociales">
            <h2 className="resultados-titulo">Prestaciones Sociales</h2>
            <div className="resultados-fila">
              <div className="resultados-columna">Cesantías</div>
              <div className="resultados-columna">${resultados.cesantias.toLocaleString()}</div>
            </div>
            <div className="resultados-fila">
              <div className="resultados-columna">Intereses sobre cesantías</div>
              <div className="resultados-columna">${resultados.interesesCesantias.toLocaleString()}</div>
            </div>
            <div className="resultados-fila">
              <div className="resultados-columna">Prima de Servicios</div>
              <div className="resultados-columna">${resultados.primaServicios.toLocaleString()}</div>
            </div>
            <div className="resultados-fila">
              <div className="resultados-columna">Vacaciones</div>
              <div className="resultados-columna">${resultados.vacaciones.toLocaleString()}</div>
            </div>
            <div className="resultados-fila">
              <div className="resultados-columna">Indemnización por terminación</div>
              <div className="resultados-columna">${resultados.indemnizacion.toLocaleString()}</div>
            </div>
            <div className="resultados-fila total-liquidacion">
              <div className="resultados-columna"><strong>Total Liquidación</strong></div>
              <div className="resultados-columna"><strong>${resultados.totalLiquidacion.toLocaleString()}</strong></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculadoraFinnal;
