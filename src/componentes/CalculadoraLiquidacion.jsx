import React, { useState } from 'react';
import { DateTime } from 'luxon';
import './Home_Calculadora.css';

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

        // Calculo de prestaciones sociales
        const cesantias = salarioProporcional * 0.0833; // 8.33% del salario proporcional
        const interesesCesantias = cesantias * 0.12; // 12% de las cesantías
        const primaServicios = salarioProporcional * 0.0833; // 8.33% del salario proporcional
        const vacaciones = salarioProporcional * 0.0417; // 4.17% del salario proporcional
        const totalPrestacionesSociales = cesantias + interesesCesantias + primaServicios + vacaciones;

        // Calculo de aportes a la seguridad social
        const pensiones = salarioProporcional * 0.04; // 4% del salario proporcional
        const salud = salarioProporcional * 0.04; // 4% del salario proporcional
        const totalSeguridadSocial = pensiones + salud;

        setLiquidacion({
            salarioProporcional: salarioProporcional.toFixed(2),
            auxilioTransporte: auxilioTransporte.toFixed(2),
            totalPrestacionesSociales: totalPrestacionesSociales.toFixed(2),
            totalSeguridadSocial: totalSeguridadSocial.toFixed(2),
            liquidacionTotal: liquidacionCalculada.toFixed(2),
            diasLaborados: diasLaborados
        });
    };


    return (
        <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className=''>Mi Calculadora</h3>
                <img src="src\assets\iconos-calculadora.png" alt="Icono Calculadora" width="50" height="50" className="me-3" />
            </div>
            <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                    <p>Acontinuacion se presentara la Calculadora Laboral. Una herramienta pedagógica de fácil uso, con la que todos los trabajadores y empleadores de Colombia podrán:</p>
                </div>
                <ul>
                    <li>Generar estimativos de liquidación de prestaciones sociales</li>
                    <li>Simular las provisiones mensuales que los empleadores deben tener en cuenta al contratar un trabajador.</li>
                </ul>
                <h4>Instrucciones Mi Calculadora</h4>
                <ol>
                    <li>Si quiere calcular su liquidación, ingrese la fecha de inicio y de fin de su contrato o relación laboral usando el calendario. Tenga en cuenta que el estimado de liquidaciones y costos se calculan por año calendario.</li>
                    <li>Ingrese el valor del salario.</li>
                </ol>
                <p>Importante:</p>
                <ul>
                    <li>Las liquidaciones se calculan y efectúan año a año. La Calculadora no permite ingresar periodos que superen el año calendario.</li>
                    <li>Recuerde indicar si recibe o no auxilio de transporte. Los trabajadores que devenguen más de dos salarios mínimos no tienen derecho a auxilio de transporte.</li>
                    <li>El salario devengado no puede ser inferior al Salario Mínimo.</li>
                </ul>
                <h4>Términos de uso</h4>
                <p>Restricciones:</p>
                <ul>
                    <li>Esta herramienta es válida para todos los trabajadores del sector privado vinculados con un contrato laboral directo.</li>
                </ul>
                <p>No aplica para:</p>
                <ul>
                    <li>Servidores públicos</li>
                    <li>Trabajadores vinculados por un contrato de prestación de servicios de carácter civil.</li>
                    <li>Trabajadores que reciben salario integral, es decir más de 10 salarios mínimos, más un factor prestacional equivalente a un 30% del salario recibido, caso en el cual solamente se liquida el descanso remunerado.</li>
                    <li>Trabajadores NO cobijados por la ley 50 de 1990, que tengan derecho al pago retroactivo de las cesantías.</li>
                </ul>
                <p>Esta calculadora sólo aplica para simular liquidaciones en los eventos en los que el contrato de trabajo termina con justa causa o por cualquiera de las causas legales que NO dan origen a indemnizaciones de ninguna índole.</p>
                <p>Recuerde: cuando exista conflicto respecto de los derechos del trabajador, deberá acudir a la justicia laboral ordinaria.</p>
                <a href="src\assets\Mi-Calculadora-2018.pdf" download="Mi-Calculadora-2018.pdf" className="btn btn-primary">Descargue Manual de Usuario para "Mi Calculadora"</a>
            </div>
            <div className='card1 card-header align-items-center'>
                <h1 className='pt-4'>Calculadora de Liquidación</h1>
                <div className="mb-3">
                    <label>Ingrese la fecha de inicio del periodo a liquidar:</label>
                    <input type="date" className="form-control" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Ingrese la fecha de final del periodo a liquidar:</label>
                    <input type="date" className="form-control" value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Ingrese su salario mensual:</label>
                    <input type="number" className="form-control" value={salarioMensual} onChange={(e) => setSalarioMensual(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>¿Tiene derecho a un auxilio de transporte?</label>
                    <input type="checkbox" className="form-check-input ms-2" checked={tieneAuxilioTransporte} onChange={(e) => setTieneAuxilioTransporte(e.target.checked)} />
                </div>
                <div className="mb-3">
                    <label>Seleccione la clase de riesgos laborales correspondiente al sector de actividad y al cargo del trabajador:</label>
                    <select className="form-select" onChange={(e) => setPorcentajeRiesgo(parseFloat(e.target.value))}>
                        <option value={0.005}>Riesgo I</option>
                        <option value={0.01}>Riesgo II</option>
                        <option value={0.02}>Riesgo III</option>
                        <option value={0.04}>Riesgo IV</option>
                    </select>
                </div>
                <button className="btn btn-primary mb-5 mt" onClick={calcularLiquidacion}>Calcular Liquidación</button>
                {liquidacion && (
                    <div className="Resumen mt-4">
                        <h4>Datos de Liquidación</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Periodo (DD-MM-AAAA)</td>
                                    <td>{fechaInicio && new Date(fechaInicio).toLocaleDateString('es-ES')} al {fechaFinal && new Date(fechaFinal).toLocaleDateString('es-ES')}</td>
                                </tr>
                                <tr>
                                    <td>Días Laborados</td>
                                    <td>{liquidacion.diasLaborados}</td>
                                </tr>
                                <tr>
                                    <td>Salario Proporcional</td>
                                    <td>${liquidacion.salarioProporcional}</td>
                                </tr>
                                <tr>
                                    <td>Transporte</td>
                                    <td>${liquidacion.auxilioTransporte}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>Prestaciones Sociales</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Cesantías</td>
                                    <td>${liquidacion.cesantias}</td>
                                </tr>
                                <tr>
                                    <td>Intereses sobre cesantías</td>
                                    <td>${liquidacion.interesesCesantias}</td>
                                </tr>
                                <tr>
                                    <td>Prima primer semestre</td>
                                    <td>${liquidacion.primaServicios}</td>
                                </tr>
                                <tr>
                                    <td>Prima segundo semestre</td>
                                    <td>${liquidacion.primaServicios}</td>
                                </tr>
                                <tr>
                                    <td>Vacaciones</td>
                                    <td>${liquidacion.vacaciones}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>Aportes a La Seguridad Social (Valor Mensual)</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Pensiones (AFP)	</td>
                                    <td>-${liquidacion.totalPrestacionesSociales}</td>
                                </tr>
                                <tr>
                                    <td>Pensiones (AFP)	</td>
                                    <td>-${liquidacion.totalPrestacionesSociales}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>Liquidación Total: ${liquidacion.liquidacionTotal}</h2>
                    </div>
                )}

            </div>
        </div>
    );
};
export default CalculadoraLiquidacion;
