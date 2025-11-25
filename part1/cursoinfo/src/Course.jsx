// Componente Header
const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}

// Componente Part
const Part = ({ part }) => {
    return (
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

// Componente Total (Usa reduce() - Ejercicio 2.5)
const Total = ({ parts }) => {
    // Cálculo usando reduce() para sumar el total de ejercicios
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <p style={{ fontWeight: 'bold' }}>
            total of {total} exercises
        </p>
    )
}

// Componente Course (Es el que se exporta y usa en App.jsx)
const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course