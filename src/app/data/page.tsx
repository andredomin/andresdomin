"use client";

const page = () => {
    interface Proyecto {
      id: number;
      titulo: string;
      descripcion: string;
      stack: string;
      tecnologias: string;
      categoria: string;
      enlace: string;
      elipses: Array<string>;
    }
    
      const proyectos: Proyecto[] = [

        {
         id: 2,
        titulo: "BI Analyst Jobs List",
        descripcion: "Análisis de ofertas de empleo para perfiles Data / BI Analyst, salarios, distribución, outliers y élite salarial, localización, sector y empresa.",
        stack: "Data",
        tecnologias: "SQL Server, Power BI",
        categoria: "Data",
        enlace: "/data/bi-analyst-jobslist_analysis",
        elipses: ["ellipse3"]
        },
        {
          id: 1,
          titulo: "Retail Analysis",
          descripcion: "Análisis de ventas retail con KPIs, segmentación por categoría y dashboard interactivo",
          stack: "Data",
          tecnologias: "SQL Server, Power BI",
          categoria: "Data",
          enlace: "/data/retail_analysis",
          elipses: ["ellipse3"]
    
        }
    
      ];
    
      
   
    
   
    
  return (
    <div>
        <h1>
            Data <span>Portfolio</span>
            <ul className="datalist">
                    {proyectos.map((proyecto, id) => (
                        
                        <li key={id}>
                            <a href={proyecto.enlace}><h3 className="data-title">{proyecto.titulo}</h3></a>
                            <p className="data-description"><span>{proyecto.descripcion}</span></p>
                        </li>
                        
                    ))}

                    
                
            </ul>
        </h1>
    </div>
  )
}

export default page