// Definición del componente Header
const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

// Componente Part (Parte)
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

// Definición del componente Content
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

// Definición del componente Total
const Total = (props) => {
  // NOTA: Esta función DEBE tener su return dentro del cuerpo.
  return (
    <p>Number of exercises {props.total}</p>
  )
}

// Componente principal de la aplicación (App)
const App = () => { // <--- Inicio de la función App
  // 1. Objeto central de datos (Requisito 1.5)
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // 2. Cálculo del total
  const totalExercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;

  return ( // <--- Inicio del return DENTRO de la función App
    <div>
      {/* Componente Header: Pasamos el objeto 'course' completo */}
      <Header course={course} />

      {/* Componente Content: Pasamos solo el array de 'parts' */}
      <Content parts={course.parts} />

      {/* Componente Total */}
      <Total total={totalExercises} />
    </div>
  )
} // <--- Final de la función App

export default App