const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.sum}</p>
}

const Footer = (props) => {
  return (
    <p>
      {props.name} - {props.code} - {props.section}
    </p>
  )
}

const App = () => {
  const course = 'BS Information Technology'

  // Refactored to Objects
  const part1 = {
    name: 'Technopreneurship',
    exercises: 3
  }
  const part2 = {
    name: 'Project Management for IT',
    exercises: 3
  }
  const part3 = {
    name: 'The Life and Works of Rizal',
    exercises: 3
  }

  const studentName = 'Laura Margaret C. Escasinas'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  )
}

export default App