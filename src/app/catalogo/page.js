'use client'

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import CardPelicula from "../componentes/CardPelicula";
import SearchBar from "../componentes/searchBar";

function App() {
  const [totalRentas, setTotalRentas] = useState(0);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const compras = localStorage.getItem("carrito") || "0";
    setTotalRentas(parseInt(compras));
    
    const fetchPeliculas = async () => {
      const { data, error } = await supabase
        .from('peliculas') 
        .select('*');

      if (error) {
        console.error("Error al obtener datos:", error.message);
      } else {
        setPeliculas(data);
      }
    };

    fetchPeliculas();
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", totalRentas.toString());
  }, [totalRentas]);

  const atg = () => setTotalRentas(prev => prev + 1);

  const peliculasFiltradas = peliculas.filter(peli => 
    peli.titulo?.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', zIndex: 10 }}>
         <SearchBar onSearch={setTerminoBusqueda} />
         <div style={{ background: '#621551', color: 'white', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold' }}>
            Rentas: {totalRentas}
         </div>
      </div>

      <div className="container">
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((peli) => (
            <CardPelicula
              key={peli.created_at} 
              id={peli.created_at}
              nombre={peli.titulo}   
              categoria={peli.genero} 
              imagen={peli.img}      
              rating={5}
              atg={atg}
            />
          ))
        ) : (
           <p style={{ color: 'gray', fontStyle: 'italic' }}>No hay resultados en la base de datos...</p>
        )}
      </div>
    </div>
  );
}

export default App;