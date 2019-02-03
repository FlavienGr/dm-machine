import React, { Component } from "react";

class DrumPad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyBoard);
  }
  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyBoard);
  }
  handleAudio = () => {
    const nameForUpdate = this.props.triggerName.replace(/-/g, " ");

    this.playSound();
    this.props.updateDisplay(nameForUpdate);
  };

  playSound = () => {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currenTime = 0;
    sound.volume = 0.5;
    sound.play();
  };
  handleKeyBoard = e => {
    const key = e.keyCode;
    const nameForUpdate = this.props.triggerName.replace(/-/g, " ");
    const clips = [].slice.call(document.getElementsByClassName("clip"));

    if (key === this.props.keyCode) {
      clips.forEach(element => {
        const soundValid = element.id === this.props.keyTrigger;
        if (soundValid) {
          this.props.updateDisplay(nameForUpdate);
          this.playSound();
        }
      });
    }
  };
  render() {
    return (
      <div
        id={this.props.triggerName}
        onClick={this.handleAudio}
        className="drum-pad"
      >
        <audio
          className="clip"
          src={this.props.sound}
          id={this.props.keyTrigger}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
