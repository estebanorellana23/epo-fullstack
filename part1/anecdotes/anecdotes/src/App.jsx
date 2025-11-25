// Importamos useState para manejar el estado
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // Inicializamos el estado de la anécdota seleccionada
  const [selected, setSelected] = useState(0)

  // ESTADO NUEVO (EJERCICIO 1.13): Inicializamos un array de votos (puntos) con ceros.
  // Debe tener la misma longitud que el array de anécdotas.
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  // --- Lógica del EJERCICIO 1.14: Encontrar la anécdota más votada ---

  // 1. Encontrar el número máximo de votos
  const maxPoints = Math.max(...points)

  // 2. Encontrar el índice de la anécdota más votada.
  // Si no hay votos (maxPoints es 0), el índice puede ser 0 por defecto.
  const mostVotedIndex = points.indexOf(maxPoints)

  // --- Función para seleccionar una anécdota aleatoria ---
  const handleNextAnecdote = () => {
    // Genera un número aleatorio entre 0 (incluido) y el número de anécdotas (excluido)
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  // --- Función para votar por la anécdota actual (EJERCICIO 1.13) ---
  const handleVote = () => {
    // 1. Crear una COPIA del array de votos (¡CRÍTICO en React!) 
    const copy = [...points]

    // 2. Incrementar el valor en la posición del índice seleccionado
    copy[selected] += 1

    // 3. Actualizar el estado con la copia modificada
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>

      {/* Muestra la anécdota seleccionada */}
      <p>{anecdotes[selected]}</p>

      {/* Muestra el recuento de votos para la anécdota actual */}
      <p>has {points[selected]} votes</p>

      {/* Botón para votar */}
      <button onClick={handleVote}>
        vote
      </button>

      {/* Botón para cambiar a la siguiente anécdota */}
      <button onClick={handleNextAnecdote}>
        next anecdote
      </button>

      {/* --- SECCIÓN DEL EJERCICIO 1.14 --- */}
      <h1>Anecdote with most votes</h1>
      {
        // Renderizado condicional: si maxPoints es 0, no hay votos para mostrar
        maxPoints === 0
          ? <p>No votes yet</p>
          : (
            <>
              {/* Muestra la anécdota que corresponde al índice con más votos */}
              <p>{anecdotes[mostVotedIndex]}</p>
              <p>has {maxPoints} votes</p>
            </>
          )
      }
    </div>
  )
}

export default App