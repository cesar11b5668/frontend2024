const persona = (
   nombre: "Cesar Desgarennes Sanchez",
   edad: 22,
   ocupacion: "estudiante",
   pasatiempos: [
    "escuchar musica",
    "ver anime",
    "jugar videojuegos",
   ]

  )

function App() {
  return (
    <div><h1>informacion personal</h1>
    <hr></hr>
    <ul>
      <li>nombre: {persona.nombre}</li>    
      <li>edad: {persona.edad}</li>
      <li>numero: {persona.numero}</li>    
    </ul>
    </div>
  )
}

export default App

// 2 hobits a la lista
// signo zodiacal
// fecha de nacimiento
// lugar de nacimiento

