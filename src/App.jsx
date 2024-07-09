import React, { useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [activado, setActivado] = useState(false);

  const activarControlMental = () => {
    setActivado(true);
    setMensaje("¡El control mental está activado! \n\nAhora, mira la pantalla y piensa en un número del 1 al 10...");

    setTimeout(() => {
      setMensaje((prev) => prev + "\n\n¡Ahora di en voz alta el número en el que estás pensando!");
    }, 5000);

    setTimeout(() => {
      setMensaje((prev) => prev + "\n\n¡Sorpresa! No hay control mental real, solo una broma.");
    }, 10000);

    setTimeout(() => {
      setMensaje((prev) => prev + "\n\nO puede que no, ¿quien sabe?");
    }, 15000);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Cachivache de Control Mental</h1>
        <button className="btn" onClick={activarControlMental} disabled={activado}>
          Activar Control Mental
        </button>
        <div className="message">
          {mensaje.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
