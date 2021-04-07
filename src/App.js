import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>I AM IN CHECKOUT</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch> 
      </div>
    </Router>
    
  );
}

export default App;
