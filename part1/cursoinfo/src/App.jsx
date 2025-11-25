// Componente Header
const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

// Componente Part
const Part = ({ part }) => {
  return (
    // Componente limpio, solo muestra texto y número
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Componente Content (Usa map() - Ejercicio 2.1)
const Content = ({ parts }) => {
  return (
    <div>
      {/* Mapea dinámicamente el array de partes */}
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

// Componente Total (Corregido para mostrar el total)
const Total = ({ parts }) => {
  // Cálculo usando reduce() para sumar el total de ejercicios
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p style={{ fontWeight: 'bold' }}>
      Number of exercises {total}
    </p>
  )
}

// Componente Course (Ejercicio 2.2)
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default App