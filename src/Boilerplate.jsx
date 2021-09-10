import React, { Component } from "react";
import path from "path";
import confetti from "canvas-confetti";
import { ipcRenderer } from "electron";

// https://getflywheel.github.io/local-addon-api/modules/_local_renderer_.html
import * as LocalRenderer from "@getflywheel/local/renderer";

// https://github.com/getflywheel/local-components
import { Button, FlyModal, Title, Text } from "@getflywheel/local-components";

const mp3Path = path.join(__dirname, "..", "airhorn.mp3");

export default class Boilerplate extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.playHORN = this.playHORN.bind(this);
  }

  playHORN() {
    const colors = [
      "#51bb7b",
      "#267048",
      "#419564",
      "#add9b8",
      "#d4ead9",
      "#f4faf7",
    ];
    this.ref.current.pause();
    this.ref.current.currentTime = 0;
    confetti({
      colors,
      particleCount: 400,
      angle: 90,
      spread: 95,
      origin: { x: 0.5, y: 1.1 },
      startVelocity: 90,
      ticks: 500,
    });

    this.ref.current.play();
  }

  render() {
    return (
      <div>
        <audio ref={this.ref} src={mp3Path} />
        <div style={{ paddingRight: 10, marginRight: 10, borderRight: '1px solid #5d5e5e', marginTop: '-0', height: 20, cursor: 'pointer'  }} onMouseDown={this.playHORN}>
          🎉
        </div>
      </div>
    );
  }
}
