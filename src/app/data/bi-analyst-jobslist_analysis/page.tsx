import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='retail-title'>BI Analyst Jobs List</h1>
    <h3 className='retail-subtitle'>Objetivo del <span>análisis</span></h3>
    <p className='retail-p'>Analizar el mercado laboral estadounidense para identificar la mejor estrategia de progresión salarial y calidad laboral. Para ello, examinaremos distintos parámetros, incluyendo el balance entre rating y salario, sectores, incertidumbre salarial y localización, con el objetivo de maximizar las oportunidades de acceder a salarios altos y estables.</p>
    <h3 className='retail-subtitle'>Dataset y <span>Repositorio</span></h3>
    <p className='retail-p'>Puede acceder al dataset original aquí: <a className='linknodecor' href='https://www.kaggle.com/datasets/andrewmvd/business-analyst-jobs'>dataset retail - csv</a></p>
    <p className='retail-p'>Puede acceder al repositorio aquí: <a className='linknodecor' href='https://github.com/andredomin/bi-analyst-jobslist'> github</a></p>
    <span id='repo-tech'>CONTIENE DATASET ORIGINAL, PROCESO DE EXPLORACION Y LIMPIEZA EN PYTHON, QUERIES SQL, POWER BI Y CSV LIMPIO</span> 
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
      <td>Top 5 Compañías por salario promedio:</td>
      <td><span>1. MELISSAKING <br />
      2. Avesta Computer Services
      </span><span><br />3. JP Morgan <br />
      4. Staffigo Technical Services
      </span><br /><span>5. The Main Street America Group
      </span></td>
    </tr>
    <tr>
      <td>Top 5 Sectores por salario promedio:</td>
      <td><span>1. Telecommunication Services <br />
      2. Insurance Carriers
      </span><span><br />3. IT <br />
      4. Federal Agencies
      </span><br /><span>5. Health Care Services and Hospitals
      </span></td>
    </tr>
    <tr>
      <td>Probabilidad de entrar en el sector & estar en el TOP 25 salarial:</td>
      <td><span> - IT: 31.79% - 1079 Vacantes<br />
       - Business Services: 25.03% - 799 Vacantes
      </span><span><br /> - Finance: 25.09% - 291 Vacantes <br />
       - Health Care: 24.26% - 136 Vacantes
      </span></td>
    </tr>
    <tr>
      <td>Rating por Empresas:</td>
      <td><span>1. Staffigo Technical Services <br />
      2. ARC Group
      </span><span><br />3. Avesta Computer Services <br />
      </span></td>
    </tr>
    <tr>
      <td>Sectores con mayor incertidumbre salarial:</td>
      <td><span>1. Manufacturing <br />
      2. Accounting & Legal
      </span><span><br />3. Business Services <br />
      4. IT
      </span><br /><span>5. Health Care
      </span></td>
    </tr>
  </tbody>
</table>
    <h3 className='retail-subtitle'>Tecnologías, <span>metodología</span> y conclusiones</h3>
    <p className='retail-p'>El objetivo principal de este proyecto fue identificar la mejor decisión para la progresión salarial y la calidad laboral, explorando el mercado laboral desde distintos ángulos como salarios, rating, sectores, localización y probabilidad de acceder al Top25 del sector.

Se utilizó Python con Pandas para la exploración y limpieza de datos. El dataset original era muy sucio, con columnas mezcladas y valores inconsistentes. Se aplicó REGEX para filtrar y normalizar campos críticos como salarios y títulos de empleo. Se eliminaron outliers imposibles, como salarios mayores de 100k para posiciones de nivel inicial, y se reorganizaron y seleccionaron únicamente las columnas relevantes para maximizar la progresión salarial y la calidad laboral. Esta limpieza profesional aseguró que las métricas y visualizaciones posteriores fueran precisas y fiables.

Con SQL Server se crearon vistas optimizadas, como vw_jobs_base y Top50 Companies, para centralizar los datos limpios y calculados, facilitando la agregación por sector, compañía y localización y conservando solo la información útil para el análisis.

En Power BI, se construyeron dashboards interactivos para explorar métricas clave como salarios promedio, incertidumbre salarial, probabilidad de estar en el Top25, vacantes por sector y localización y balance rating/salario. Se aplicaron medidas DAX avanzadas para calcular percentiles, rangos relativos, medias, medianas, IQR y probabilidades de progresión salarial. Los gráficos permiten detectar tendencias, comparar sectores y empresas y resaltar oportunidades de progresión salarial y calidad laboral.

El análisis reveló que el sector IT es el más recomendable para progresión salarial y calidad laboral, ya que combina mayor número de vacantes, alto rating, salario promedio elevado y alta probabilidad de acceder al Top25 del sector. En cuanto a localización, Jacksonville, FL, sobresale tanto en número de vacantes generales como en oportunidades dentro del Top25, convirtiéndola en una ubicación estratégica para el crecimiento profesional. Dentro del sector IT, empresas como Avesta Computer Services y Staffigo Technical Services representan oportunidades ideales para progresar en salario y calidad laboral.

En conclusión, el reporte confirma que entrar en el sector IT, especialmente en empresas líderes y en ubicaciones con alta concentración de vacantes como Jacksonville, FL, es la estrategia más efectiva para maximizar tanto la progresión salarial como la calidad laboral.</p>
    <h3 className='retail-subtitle'>Dashboard <span>Screenshots</span></h3>
    <img className='screenshots' src="/img/bi-jobslist/ratingsalary.png" alt='ventas-totales' />
    <br />
    <img className='screenshots' src="/img/bi-jobslist/sectors-rating-salary.png" alt='metodo-de-pago' />
    <br />
    <img className='screenshots' src="/img/bi-jobslist/jobssector.png" alt='ventas-edad' />
    <br />
    <img className='screenshots' src="/img/bi-jobslist/salary-uncertainty.png" alt='ventas-edad' />
    <br />
    <img className='screenshots' src="/img/bi-jobslist/maximizing.png" alt='ventas-edad' />
    </>
  )
}

export default page