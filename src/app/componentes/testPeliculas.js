 "use client";
import Image from "next/image"; 
 import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
 
export default function TestPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [status, setStatus] = useState("Consultando catálogo...");
 
  useEffect(() => {
    async function fetchPeliculas() {
      // Intentamos obtener el título y el género de la tabla 'peliculas'
      const { data, error } = await supabase
        .from('peliculas')
        .select('titulo, genero, img');
 
      if (error) {
        setStatus("Error al consultar el catálogo ");
        console.error("Detalle del error:", error.message);
      } else {
        setPeliculas(data);
        setStatus(data.length > 0
          ? `¡Conexión exitosa! Se encontraron ${data.length} películas. `
          : "Conectado, pero la tabla está vacía. ");
      }
    }
    fetchPeliculas();
  }, []);
 
  return (
    <div className="p-6 m-4 border-2 border-indigo-500 rounded-2xl bg-slate-900 text-white shadow-xl">
      <h2 className="text-xl font-bold mb-4">Backend: Base de Datos de Películas</h2>
      <p className="mb-4 text-indigo-300">{status}</p>
     
      <ul className="space-y-2">
        {peliculas.map((p, index) => (
          <li key={index} className="bg-slate-800 p-2 rounded border border-slate-700">
            <span className="font-semibold text-yellow-400">{p.titulo}</span> - {p.genero} - {p.img}
            <Image src={p.img} alt={p.titulo} width={500} height={300} />
          </li>
        ))}
      </ul>
    </div>
  );
}