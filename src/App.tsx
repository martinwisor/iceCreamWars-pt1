import React from "react";
import logo from "./logo.svg";
import { Header } from "./components/Header";
import "./App.css";
import { AdDesign } from "./components/AdDesign";
import "./css/Ad.css";
import "./index.css";
import "./css/Votes.css";
import { Votes } from "./components/Votes";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <AdDesign />
        <Votes />
      </div>
    </>
  );
}

export default App;
