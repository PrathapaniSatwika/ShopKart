import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/order-confirmation" component={OrderConfirmation} />
      </Switch>
    </Router>
  );
};

export default App;
