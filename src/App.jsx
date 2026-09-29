import './App.css'

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.course.name}</h1>
    </header>
  )
}

const Part = (props) => {
  return (
    <div className="part-item">
      <span className="part-name">{props.part.name}</span>
      <span className="part-units">{props.part.exercises} units</span>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const totalUnits =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises
  return <div className="total">Number of units: {totalUnits}</div>
}

const Footer = (props) => {
  return (
    <footer className="footer">
      <p>
        {props.name} - {props.code} - {props.section}
      </p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'BS Information Technology',
    parts: [
      {
        name: 'Technopreneurship',
        exercises: 3
      },
      {
        name: 'Project Management for IT',
        exercises: 3
      },
      {
        name: 'The Life and Works of Rizal',
        exercises: 3
      }
    ]
  }

  const studentName = 'Laura Margaret C. Escasinas'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div className="app-container">
      <div className="card">
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        <Footer name={studentName} code={courseCode} section={section} />
      </div>
    </div>
  )
}

export default App