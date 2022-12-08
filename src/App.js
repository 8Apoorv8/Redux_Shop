import React from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Men from "./Components/Products";

import Contact from "./Components/Contact";
import MenandWomen from "./Components/MenandWomen";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Men} />
        <Route path="/menandwomen" exact component={MenandWomen} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/product/:productId" exact component={ProductDetails} />
      </Switch>
    </div>
  );
};

export default App;
