import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import './Home_Calculadora.css';

const CalculadoraLiquidacion = () => {
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [salarioMensual, setSalarioMensual] = useState('');
    const [tieneAuxilioTransporte, setTieneAuxilioTransporte] = useState(false);
    const [porcentajeRiesgo, setPorcentajeRiesgo] = useState(0);
    const [liquidacion, setLiquidacion] = useState(null);
    const SALARIO_MINIMO = 1300000;

    useEffect(() => {
        const futureDate = DateTime.now().toISODate();
        const today = DateTime.now().startOf('year').toISODate(); // 1 de enero del año actual
        setFechaInicio(today);
        setFechaFinal(futureDate);
        setSalarioMensual(SALARIO_MINIMO.toString());
        
    }, []);

    const calcularLiquidacion = () => {
        if (!fechaInicio || !fechaFinal || !salarioMensual) {
            alert("Por favor complete todos los campos.");
            return;
        }

        const fechaInicioObj = DateTime.fromISO(fechaInicio);
        const fechaFinalObj = DateTime.fromISO(fechaFinal);
        const diasLaborados = fechaFinalObj.diff(fechaInicioObj, 'days').days -1;
        const salarioMensualNumber = parseFloat(salarioMensual);
        const auxilioTransporte = tieneAuxilioTransporte ? 162000 : 0; // Lógica de auxilio de transporte

        // Calculo de prestaciones sociales
        const salarioTotal = salarioMensualNumber + auxilioTransporte;
        const cesantias = (salarioTotal * diasLaborados) / 360; // 8.33% del salario mensual
        const interesesCesantias = (cesantias * 0.12 * diasLaborados) / 360; // 12% de las cesantías
        const primaServicios = (salarioMensualNumber * diasLaborados) / 360; // 8.33% del salario mensual
        const vacaciones = salarioMensualNumber * diasLaborados / 720; // 4.17% del salario mensual
        const totalPrestacionesSociales = cesantias + interesesCesantias + primaServicios + vacaciones;

        // Calculo de aportes a la seguridad social
        const pensiones = salarioMensualNumber * 0.04; // 4% del salario mensual
        const salud = salarioMensualNumber * 0.04; // 4% del salario mensual
        const totalSeguridadSocial = pensiones + salud;

        const liquidacionCalculada = cesantias + interesesCesantias + primaServicios + vacaciones

        setLiquidacion({
            salarioMensual: salarioMensualNumber.toFixed(2),
            auxilioTransporte: auxilioTransporte.toFixed(2),
            cesantias: cesantias.toFixed(2),
            interesesCesantias: interesesCesantias.toFixed(2),
            primaServicios: primaServicios.toFixed(2),
            vacaciones: vacaciones.toFixed(2),
            totalPrestacionesSociales: totalPrestacionesSociales.toFixed(2),
            totalSeguridadSocial: totalSeguridadSocial.toFixed(2),
            liquidacionTotal: liquidacionCalculada.toFixed(2),
            diasLaborados: diasLaborados
        });
    };

    const formatNumber = (num) => {
        return new Intl.NumberFormat('es-ES').format(num);
    };

    return (
        <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className=''>Mi Calculadora</h3>
                <img src="src/assets/iconos-calculadora.png" alt="Icono Calculadora" width="50" height="50" className="me-3" />
            </div>
            <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                    <p>A continuación se presentará la Calculadora Laboral. Una herramienta pedagógica de fácil uso, con la que todos los trabajadores y empleadores de Colombia podrán:</p>
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
                <a href="src/assets/Mi-Calculadora-2018.pdf" download="Mi-Calculadora-2018.pdf" className="btn btn-primary">Descargue Manual de Usuario para "Mi Calculadora"</a>
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
                    <select className="form-select" value={porcentajeRiesgo} onChange={(e) => setPorcentajeRiesgo(parseFloat(e.target.value))}>
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
                                    <td>
                                        {fechaInicio && DateTime.fromISO(fechaInicio).toFormat('dd-MM-yyyy')} al {fechaFinal && DateTime.fromISO(fechaFinal).toFormat('dd-MM-yyyy')}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Días Laborados</td>
                                    <td>{liquidacion.diasLaborados}</td>
                                </tr>
                                <tr>
                                    <td>Salario Proporcional</td>
                                    <td>${formatNumber(liquidacion.salarioMensual)}</td>
                                </tr>
                                <tr>
                                    <td>Transporte</td>
                                    <td>${formatNumber(liquidacion.auxilioTransporte)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>Prestaciones Sociales</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Cesantías</td>
                                    <td>${formatNumber(liquidacion.cesantias)}</td>
                                </tr>
                                <tr>
                                    <td>Intereses sobre cesantías</td>
                                    <td>${formatNumber(liquidacion.interesesCesantias)}</td>
                                </tr>
                                <tr>
                                    <td>Prima de Servicios</td>
                                    <td>${formatNumber(liquidacion.primaServicios)}</td>
                                </tr>
                                <tr>
                                    <td>Vacaciones</td>
                                    <td>${formatNumber(liquidacion.vacaciones)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>Aportes a La Seguridad Social (Valor Mensual)</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Pensiones (AFP)</td>
                                    <td>-${formatNumber(liquidacion.totalSeguridadSocial * 0.5)}</td>
                                </tr>
                                <tr>
                                    <td>Salud</td>
                                    <td>-${formatNumber(liquidacion.totalSeguridadSocial * 0.5)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>Liquidación Total: ${formatNumber(liquidacion.liquidacionTotal)}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalculadoraLiquidacion;
