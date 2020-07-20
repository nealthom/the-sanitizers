import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Home from "components/pages/Home";
import About from "components/pages/About";
import Contact from "components/pages/Contact";
import PrimaryTheme from "themes/primary";

const GlobalStyle = createGlobalStyle`
body{
  min-height: 100vh;
  font-family: "Bitter";
}

a{
  text-decoration: none;
  color: #333;
}

ul{
  list-style: none;
  text-align: center;
  padding: 0;
}

`;

export default function App() {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
