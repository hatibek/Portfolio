import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const links = ['About', 'Projects', 'Experience', 'Education'];

function App() {
  return (
    <div className='App'>
      <Router>
        <header className='navbar'>
          <span className='links'>
            {links.map((link) => {
              return <Link to={link.toLowerCase()}>{link}</Link>;
            })}
          </span>
          <span className='name'>HATIBE KABULANTOK</span>
        </header>
      </Router>
      <body className='content'>Content</body>
    </div>
  );
}

export default App;
