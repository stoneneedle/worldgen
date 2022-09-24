import React from "react";
import "./App.css";
import HexMap from './components/hexmap';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HexMap />
      </div>
    );
  }
}
