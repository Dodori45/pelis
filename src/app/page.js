import TestPeliculas from "./componentes/testPeliculas";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-slate-800 to-black text-white px-4">
      <h1 className="text-6xl font-extrabold text-center">MovieRent</h1>
      <p className="mt-4 text-xl text-center">
        Las mejores películas a un clic de distancia.
      </p>
      
      <button className="mt-8 bg-blue-600 px-6 py-3 rounded-full font-semibold transition-colors hover:bg-blue-500">
        Explorar ahora
      </button>

      <TestPeliculas />
    </main> 
  );
}