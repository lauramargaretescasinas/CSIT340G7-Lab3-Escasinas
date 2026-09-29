const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
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
  const part1 = 'Technopreneurship'
  const exercises1 = 3
  const part2 = 'Project Management for IT'
  const exercises2 = 3
  const part3 = 'The Life and Works of Rizal'
  const exercises3 = 3

  const studentName = 'Laura Margaret C. Escasinas'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  )
}

export default App