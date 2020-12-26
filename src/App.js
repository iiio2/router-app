import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from './components/notFound';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Products from "./components/Products";
import ProductDetails from './components/ProductsDetails';



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="content container mt-3">
        <Switch>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/products" render={(props)=> <Products sortBy="newProduct" {...props} /> } />
          <Route path="/posts/:year/:month" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/sorry" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/sorry" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
