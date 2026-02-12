"use client";

import React, { useState } from "react";

const Portfolio = () => {

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
      id: 1,
      titulo: "Retail Analysis",
      descripcion: "Análisis de ventas retail con KPIs, segmentación por categoría y dashboard interactivo",
      stack: "Data",
      tecnologias: "SQL Server, Power BI",
      categoria: "Data",
      enlace: "/data/retail_analysis",
      elipses: ["ellipse3"]

    },
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
      id: 3,
      titulo: "LaBlue Tattoo",
      descripcion: "Tattoo Landing Page",
      stack: "Web",
      tecnologias: "React",
      categoria: "Web",
      enlace: "https://labluetattoo.netlify.app/",
      elipses: ["ellipse3"]
    },
      {
      id: 3,
      titulo: "ML/AI",
      descripcion: "Próximamente",
      stack: "AI",
      tecnologias: "AI",
      categoria: "AI",
      enlace: "",
      elipses: ["ellipse3"]
    }

  ];

  
  const categorias = ["Todos", ...new Set(proyectos.map((p) => p.categoria))];

  const [filtro, setFiltro] = useState("Todos");

  
  const proyectosFiltrados =
    filtro === "Todos"
      ? proyectos
      : proyectos.filter((p) => p.categoria === filtro);

  return (
    <div className="portfolio">
      <h1>
        <span>Portfolio</span>
      </h1>

      
      <div className="buttons selection">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            style={{
              background: filtro === cat ? "#000000" : "#875547",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "6px 12px",
              marginRight: "5px",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      
      {proyectosFiltrados.map((proyecto, index) => (
        <a
          key={index}
          href={proyecto.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className={index % 2 === 0 ? "ellipse-portfolio" : "ellipse-portfolio2"}
          style={{ position: "relative", display: "block", textDecoration: "none", color: "inherit" }}
        >
        <div
          key={proyecto.id}
          className={`ellipse-portfolio ${proyecto.categoria.toLowerCase()}`}
        >
          <div id="projects" className={proyecto.titulo.toLowerCase()}>
            <h1 className="proyecto-titulo">{proyecto.titulo}</h1>
            <h3 className="description">{proyecto.descripcion}</h3>

            
            {proyecto.elipses.map((ellipseClass) => (
              <div key={ellipseClass} className={ellipseClass}></div>
            ))}
          </div>
        </div>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
