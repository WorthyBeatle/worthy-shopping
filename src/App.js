import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import './App.css';

const JacketsPage = () => (
  <div>
    <h1>JACKET'S PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/jackets" component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
