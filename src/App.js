import React from "react";
import DrumMachine from "./components/Drum-machine-box";
import { musicData } from "./components/data-export";
import Display from "./components/Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      musicData,
      activate: true,
      volume: 0.3
    };
  }

  updateDisplay = update => {
    this.setState(() => ({ display: update }));
  };
  handleActiveMachine = () => {
    this.setState(prevState => ({
      activate: !prevState.activate,
      display:
        prevState.display.length === 0 ? "Pad available".toUpperCase() : ""
    }));
  };
  setValVolume = e => {
    const volume = e.target.value;
    this.setState(() => ({
      volume
    }));
  };
  render() {
    {
      const dataSetSound = [].slice.call(
        document.getElementsByClassName("clip")
      );
      dataSetSound.forEach(element => {
        element.volume = this.state.volume;
      });
    }
    return (
      <div className="app">
        <DrumMachine
          updateDisplay={this.updateDisplay}
          musicData={this.state.musicData}
          activate={this.state.activate}
          OnOffMachine={this.handleActiveMachine}
        />

        <Display
          display={this.state.display}
          setVol={this.setValVolume}
          volume={this.state.volume}
        />
      </div>
    );
  }
}

export default App;
