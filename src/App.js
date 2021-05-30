import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './view/auth/Home';
import Login from './view/auth/Login';
import SignUp from './view/auth/SignUp';

function App() {
  return (
    <div>
      <h1>Open My Mind</h1>
      <Router>
        <Switch>
          <Route exact path = "/" render={() => <Home/> }/>
          <Route exact path = "/auth/login" render={() => <Login/>}/>
          <Route exact path = "/auth/signup" render={() => <SignUp/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
