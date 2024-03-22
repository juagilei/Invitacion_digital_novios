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
      <div className="relative bg-amber-200  ">
        <img src="../public/invitacion boda.png" alt="tarjeta" />

        <section
          className={`absolute top-20 left-0 ${
            moveText ? "translate-x-11" : "-translate-x-full"
          } transition-transform duration-800`}
        >
          <img src="../public/texto principal.png" alt="texto" width={300} />
        </section>
      </div>
     
      <div className="relative bg-amber-200  ">
          <img src="../public/invitacion boda.png" alt="tarjeta" />
          <section className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-black">
            <h2>Alqueria kukala</h2>
            <a
              href="https://www.google.es/maps/place/Alquer%C3%ADa+Kukala+-+Restaurante,+Bodas+y+Eventos/@39.5695651,-0.3031232,17z/data=!3m1!4b1!4m6!3m5!1s0xd6040aab9333ea7:0xadc3afefccb9b63c!8m2!3d39.569561!4d-0.3005483!16s%2Fg%2F12cnt2f3w?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className= "text-blue-200 hover:text-blue-500 font-bold rounded-lg"
            >
              Ver en Google Maps
            </a>
          </section>
      </div>

    </>
  );
}
