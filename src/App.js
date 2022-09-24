import React from "react";
import "./App.css";
import Sketch from "react-p5";

class App extends React.Component {
  canvasY = window.screen.height - 500;
  canvasX = window.screen.width - 880;
  hexagonSize = 20;
  numHexesY = 43;
  numHexesX = 80;
  gridWidth = this.numHexesX * this.hexagonSize;
  gridHeight = this.numHexesY * this.hexagonSize;
  startY = 30;
  startX = 30;

  setup = (p5, parentRef) => {
    p5.createCanvas(this.canvasX, this.canvasY).parent(parentRef);
  };

  drawHexagonPointyTop = (p5, cX, cY, r) => {
    p5.beginShape();

    for (let i = 0; i < 6; i++) {
      let deg = 60 * i - 30;
      let ar = (p5.PI / 180) * deg;
      p5.vertex(cX + r * p5.cos(ar), cY + r * p5.sin(ar));
    }
    
    p5.endShape(p5.CLOSE);
  };

  makeGridPointyTop = (p5) => {
    let count = 0;
    for (let y = this.startY; y < this.gridHeight; y += this.hexagonSize / 1.35) {
      for (let x = this.startX; x < this.gridWidth; x += this.hexagonSize / 1.125) {
        let offsetX = -2 * (count % 2 === 0);
        this.drawHexagonPointyTop(
          p5,
          x + offsetX + this.hexagonSize * (count % 2 === 0) * 0.5,
          y,
          this.hexagonSize / 2
        );
      }
      count++;
    }
  };

  draw = (p5) => {
    p5.background(0);
    p5.stroke(255);
    p5.noFill();

    this.makeGridPointyTop(p5);

    p5.noLoop();
  };

  render() {
    console.log(this.canvasX, ' x ', this.canvasY);
    return (
      <div className="App">
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    );
  }
}

export default App;
