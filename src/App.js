import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HAT'S PAGE</h1>
  </div>
)
const JacketsPage = () => (
  <div>
    <h1>JACKET'S PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/jackets" component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
