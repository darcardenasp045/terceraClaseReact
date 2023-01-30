import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
//el nombre tiene que estar en mayuscula
const WarningNotUse = () => {
  return <p> todavia no se ha usado</p>;
};

const IsInUse = ({ clicks }) => {
  return <h1> {clicks.join(", ")} </h1>;
};

const App = () => {
  const [counters, setCounters] = useState({
    left: 0,
    rigth: 0,
    mensaje: "No entiendo casi nada"
  });

  const [clicks, setClicks] = useState([]);

  const handleCliclckLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1
    });
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleCliclckRigth = () => {
    setCounters({
      ...counters,
      rigth: counters.rigth + 1
    });
    setClicks((prevClicks) => [...prevClicks, "R"]);
  };
  return (
    <div>
      {counters.left}
      <button onClick={handleCliclckLeft}>left</button>
      <button onClick={handleCliclckRigth}>rigth</button>
      {counters.rigth}
      <p>Este es el mensaje: {counters.mensaje}</p>
      <p>Estos son los clicks: {clicks.length}</p>
      {clicks.length === 0 ? <WarningNotUse /> : <IsInUse clicks={clicks} />}
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
