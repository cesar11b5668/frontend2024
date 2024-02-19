import { useState } from "react"

function App() {
 const [cuenta,setCuenta] = useState(0)

  const handleButtonincrementar = () => {
    setCuenta(cuenta + 1)
  }

  //const handleButtonDecrementar = () => {
  //  setCuenta(cuenta - 10)
  //}

  const handleButtonReiniciar = () => {
    setCuenta(0);
  }


  return (
    <div>
        <h1>Contador</h1>
        <hr />
        <h2>{cuenta}</h2>
        <button onClick={handleButtonincrementar}>incrementar</button>
        <button onClick={() => setCuenta(cuenta -1)}>decrementar</button>
        <button onClick={handleButtonReiniciar}>Reiniciar</button>

    </div>
  )
}

export default App
