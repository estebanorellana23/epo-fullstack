// Importamos useState para manejar el estado
import { useState } from 'react'

// Nuevo componente para renderizar una línea de estadística. (Ejercicio 1.10)
const StatisticLine = (props) => {
  return (
    // Usamos etiquetas <tr> y <td> para formatear la tabla.
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

// La función Button es correcta para el Ejercicio 1.10
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// Componente Statistics (Ejercicio 1.10: Usa StatisticLine)
const Statistics = (props) => {

  if (props.total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />

          {/* Estadísticas derivadas */}
          <StatisticLine text="all" value={props.total} />
          {/* El promedio se pasa con toFixed(1) */}
          <StatisticLine text="average" value={props.average.toFixed(1)} />
          {/* El porcentaje incluye el símbolo '%' */}
          <StatisticLine text="positive" value={props.positivePercentage.toFixed(1) + " %"} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {


  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // --- 1. Funciones Controladoras ---
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  // --- 2. CÁLCULO DE ESTADÍSTICAS DERIVADAS ---
  const total = good + neutral + bad
  const score = good * 1 + bad * -1
  const average = total === 0 ? 0 : score / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100


  return (
    <div>
      <h1>give feedback</h1>

      {/* Uso del componente Button (Ejercicio 1.10) */}
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      {/* Uso del componente Statistics */}
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePercentage={positivePercentage}
      />
    </div>
  )
}

export default App