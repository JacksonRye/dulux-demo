import React from "react";
import "./scss/App.css";
import PaletteView from "./Views/PaletteView";
import Palette from "./Components/Palette";
import { GlobalProvider } from "./context/GlobalState";
import ProductList from "./Views/ProductList";

import { Route, BrowserRouter as Router } from "react-router-dom";

const routes = [
  { path: "/", name: "Color Picker", Component: PaletteView },
  { path: "/paints/:color", name: "Paints List", Component: ProductList },
];

function App() {
  return (
    <GlobalProvider>
      <Router>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Router>
    </GlobalProvider>
  );
}

export default App;
