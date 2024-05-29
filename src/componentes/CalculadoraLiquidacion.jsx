import React, { useState } from 'react';

const CalculadoraLiquidacion = () => {
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [salarioMensual, setSalarioMensual] = useState('');
    const [tieneAuxilioTransporte, setTieneAuxilioTransporte] = useState(false);
    const [porcentajeRiesgo, setPorcentajeRiesgo] = useState(0);
    const [liquidacion, setLiquidacion] = useState(null);

    const calcularLiquidacion = () => {
        const fechaInicioObj = DateTime.fromISO(fechaInicio);
        const fechaFinalObj = DateTime.fromISO(fechaFinal);
        const diasLaborados = fechaFinalObj.diff(fechaInicioObj, 'days').days + 1;
        const salarioProporcional = (parseFloat(salarioMensual) / fechaInicioObj.daysInMonth) * diasLaborados;
        const auxilioTransporte = tieneAuxilioTransporte ? 100000 : 0; // Lógica de auxilio de transporte
        const liquidacionCalculada = salarioProporcional + auxilioTransporte + (salarioProporcional * porcentajeRiesgo);
        setLiquidacion(Math.round(liquidacionCalculada)); // Redondear a entero
    };

    return (
        <div className="container">
            <div className="background-image"></div> {/* Este div contiene la imagen de fondo */}
            <div className="content">
                <h1>Calculadora de Liquidación</h1>
                <div>
                    <label>Ingrese la fecha de inicio del periodo a liquidar (YYYY-MM-DD):</label>
                    <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                </div>
                <div>
                    <label>Ingrese la fecha de final del periodo a liquidar (YYYY-MM-DD):</label>
                    <input type="date" value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)} />
                </div>
                <div>
                    <label>Ingrese su salario mensual:</label>
                    <input type="number" value={salarioMensual} onChange={(e) => setSalarioMensual(e.target.value)} />
                </div>
                <div>
                    <label>¿Tiene derecho a un auxilio de transporte?</label>
                    <input type="checkbox" checked={tieneAuxilioTransporte} onChange={(e) => setTieneAuxilioTransporte(e.target.checked)} />
                </div>
                <div>
                    <label>Seleccione la clase de riesgos laborales correspondiente al sector de actividad y al cargo del trabajador:</label>
                    <select onChange={(e) => setPorcentajeRiesgo(parseFloat(e.target.value))}>
                        <option value={0.005}>Riesgo I</option>
                        <option value={0.01}>Riesgo II</option>
                        <option value={0.02}>Riesgo III</option>
                        <option value={0.04}>Riesgo IV</option>
                    </select>
                </div>
                <button onClick={calcularLiquidacion}>Calcular Liquidación</button>
                {liquidacion !== null && <h2>La liquidación laboral es: {liquidacion}</h2>}
            </div>
        </div>
    );
};

export default CalculadoraLiquidacion;
