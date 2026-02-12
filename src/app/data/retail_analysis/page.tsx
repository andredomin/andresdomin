import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='retail-title'>Retail Analysis</h1>
    <h3 className='retail-subtitle'>Objetivo del <span>análisis</span></h3>
    <p className='retail-p'>Evaluar el rendimiento de las ventas retail mediante el análisis de datos históricos, identificando patrones de consumo, <span>diferencias entre categorías</span> y segmentos de clientes, y generando <span>KPIs clave</span> que permitan mejorar la <span>estrategia comercial y la toma de decisiones basada en datos.</span></p>
    <h3 className='retail-subtitle'>Dataset y <span>Repositorio</span></h3>
    <p className='retail-p'>Puede acceder al dataset original aquí: <a className='linknodecor' href='https://www.kaggle.com/datasets/mehmettahiraslan/customer-shopping-dataset'> dataset retail - csv </a></p>
    <p className='retail-p'>Puede acceder al repositorio aquí: <a className='linknodecor' href='https://github.com/andredomin/retail_analysis'>github</a></p>
    <span id='repo-tech'>CONTIENE SQL, POWER BI Y CSV LIMPIO</span> 
    <h3 className='retail-subtitle'>KPIs <span>principales</span></h3>
    <table>
  <thead>
    <tr>
      <th>KPI</th>
      <th>Insight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ventas totales</td>
      <td><span>$251.505.794</span></td>
    </tr>
    <tr>
      <td>Ventas por categoría</td>
      <td><span>La categoría Clothing representa el sector con más ventas por gran diferencia</span></td>
    </tr>
    <tr>
      <td>Método de pago</td>
      <td><span>El efectivo lidera el método de pago con un 44,69%, seguido por tarjetas de crédito con 35,12% y finalmente débito con 20,19%</span></td>
    </tr>
    <tr>
      <td>Ventas por género</td>
      <td><span>Los clientes femeninos aportan el 50,06%, los masculinos el 49,94%</span></td>
    </tr>
    <tr>
      <td>Ventas por establecimiento</td>
      <td><span>Mall of Istambul lidera en ventas, seguido muy cercanamente por Kanyon</span></td>
    </tr>
  </tbody>
</table>
    <h3 className='retail-subtitle'>Tecnologías y <span>metodología</span></h3>
    <p className='retail-p'> El proyecto siguió un enfoque estructurado combinando <span>preparación de datos, análisis y visualización.</span> Primero, se importaron los datos desde archivos <span>CSV a SQL Server</span>, aplicando limpieza, normalización y eliminación de valores inconsistentes para asegurar la calidad y consistencia de la información. A continuación, se desarrollaron consultas SQL para transformar los datos y <span>crear vistas funcionales</span> que resumieran la información clave, <span>incluyendo ventas por categoría, distribución por género etc.</span> Estas vistas permitieron estructurar los datos de manera eficiente para su posterior análisis. Finalmente, se conectó <span>Power BI a las vistas de SQL Server</span> para construir un dashboard interactivo con gráficos de KPIs, facilitando la identificación rápida de <span>patrones de venta y tendencias de comportamiento.</span></p>
    <h3 className='retail-subtitle'>Dashboard <span>Screenshots</span></h3>
    <img className='screenshots' src="/img/pbix/ventas_totales.jpg" alt='ventas-totales' />
    <br />
    <img className='screenshots' src="/img/pbix/metodo_pago.jpg" alt='metodo-de-pago' />
    <br />
    <img className='screenshots' src="/img/pbix/ventas_edad.jpg" alt='ventas-edad' />
    </>
  )
}

export default page