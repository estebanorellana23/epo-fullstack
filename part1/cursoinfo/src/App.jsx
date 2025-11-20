
// Muestra el nombre del curso.
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}


// Recibe una parte y el número de ejercicios de forma individual.
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}


// Muestra todas las partes del curso (utiliza tres componentes Part).
// Content solo se encarga de organizar los Part, delegando la presentación.
const Content = (props) => {
  return (
    <div>

      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}


// Muestra el número total de ejercicios.
const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

// Componente principal de la aplicación (App)
// Contiene todos los datos y pasa los datos a los componentes hijos mediante props.
const App = () => {
  // 1. Datos del curso
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  // 2. Cálculo del total
  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      {/* Componente Header */}
      <Header course={course} />

      {/* Componente Content */}
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      {/* Componente Total */}
      <Total total={totalExercises} />
    </div>
  )
}

export default App