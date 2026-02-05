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
      id: 5,
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
      titulo: "Wanderfinder",
      descripcion: "Agencia de viajes low-cost",
      stack: "Full-stack",
      tecnologias: "React/Redux + TS + Node + SQL",
      categoria: "Full-Stack",
      enlace: "https://wanderfinder.netlify.app",
      elipses: ["ellipse3"]
    },
    {
      id: 3,
      titulo: "SmartSpendr",
      descripcion: "Meta de ahorros",
      stack: "Frontend",
      tecnologias: "React + Tailwind",
      categoria: "Frontend",
      enlace: "https://control-ahorro.netlify.app/",
      elipses: ["ellipse3"]
    },
    {
      id: 4,
      titulo: "TodoPro",
      descripcion: "Lista de tareas CRUD",
      stack: "Full-Stack",
      tecnologias: "React + Spring",
      categoria: "Full-Stack",
      enlace: "https://todopro-frontend.netlify.app/",
      elipses: ["ellipse3"]
    },
    {
      id: 5,
      titulo: "LaBlue Tattoo",
      descripcion: "Tattoo Landing Page",
      stack: "Frontend",
      tecnologias: "React",
      categoria: "Frontend",
      enlace: "https://labluetattoo.netlify.app/",
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
          <div className={proyecto.titulo.toLowerCase()}>
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
