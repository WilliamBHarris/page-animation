import './App.css'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        </Switch>
    </Router>
  )
}

export default App;
