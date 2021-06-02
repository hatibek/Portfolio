import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

const links = ['About', 'Projects', 'Experience', 'Education'];

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='name'>
          <Link to='/'>HATIBE KABULANTOK</Link>
        </div>
        <header className='navbar'>
          <nav>
            <span className='links'>
              {links.map((link) => {
                return <Link to={link.toLowerCase()}>{link}</Link>;
              })}
            </span>
          </nav>
        </header>
        <body className='content'>
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/education' component={Education} />
        </body>
      </div>
    </Router>
  );
}

export default App;
