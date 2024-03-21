import { useEffect, useState } from "react";

export default function App() {
  const [moveText, setMoveText] = useState(false);

  useEffect(() => {
    // Establece el estado para iniciar la animación después de un retraso
    const timeout = setTimeout(() => {
      setMoveText(true);
    }, 1000); // Cambiado a 1000 para que la animación comience después de 1 segundo

    // Limpia el temporizador al desmontar el componente para evitar fugas de memoria
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="relative bg-amber-200  h-screen">
      <img src="../public/invitacion boda.png" alt="tarjeta" />

      <section
        className={`absolute top-20 left-0 ${moveText ? "translate-x-11" : "-translate-x-full"} transition-transform duration-1000`}
      >
        <img src="../public/texto principal.png" alt="texto" width={300} />
      </section>
    </div>
      <div className="relative bg-amber-200  h-screen">
        <img src="../public/invitacion boda.png" alt="tarjeta" />
      </div>
    
      <div className="relative bg-amber-200  h-screen">
        <img src="../public/invitacion boda.png" alt="tarjeta" />
    </div>
    </>
  );
}
