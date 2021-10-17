import logo from './logo.svg';
import './App.css';
import Curriculum from './view';
import Three from './view/three';
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/three">
          <Three/>
        </Route>
        <Route path="/">
          <Curriculum/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
