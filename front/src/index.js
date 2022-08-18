import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Hasta aquí tienes la estructura básica de tu archivo index.js

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
// Apollo client provee estas y otras herramientas, como te comenté antes
// Más abajo conocerás para que sirve cada una

const myClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // La uri será el único lugar al cual harás consultas, ahí estará almacenada toda nuestra data
  cache: new InMemoryCache(),
  // InMemoryCache guarda la información ya consultada para evitar el pedir la misma dos o más veces
});

ReactDOM.render(
  // ApolloProvider permite a toda la App hacer consultas desde cualquier lugar
  // Algo parecido a lo que se haría con Context.Provider
  <ApolloProvider client={myClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);