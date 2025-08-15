import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Nav from './component/Nav';
import Skills from './component/Skills';
import Work from './component/Work';
import Contact from './component/Contact';
import './App.css';


function App() {
  return (
      <header class="App-header">
        <img alt="logo" class="App-logo" src="logo.svg" />
        <p>
          Edit<code> src/App.js </code>and save to reload.
        </p>
        <a
          class="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      
    </div>
    </Router>
    
  );
}

export default App;
