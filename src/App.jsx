import { useEffect, useState } from "react";
export default function App() {
const [moveText, setMoveText] = useState(false);

  // Este efecto se ejecutará al cargar el componente y moverá el texto después de 1 segundo
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMoveText(true);
    }, 10);

    // Limpia el temporizador al desmontar el componente para evitar fugas de memoria
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <section className='text-2xl'>
      <h1 className="flex justify-center"> Enlace </h1>
      <h1 className="flex justify-center">Elena</h1>
      <h1 className="flex justify-center">&</h1>
      <h1 className="flex justify-center"> Juan Antonio</h1>
      </section>
    </div>
  );
}