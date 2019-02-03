import React, { Component } from "react";
import DrumPad from "./DrumPad";

class DrumMachine extends Component {
  render() {
    let musicDataToDrumPad;
    let drumMachineIsActivate = this.props.activate
      ? this.props.musicData
      : false;

    drumMachineIsActivate
      ? (musicDataToDrumPad = this.props.musicData.map((array, i, element) => {
          return (
            <DrumPad
              key={i}
              keyTrigger={element[i].keyTrigger}
              sound={element[i].sound}
              keyCode={element[i].keyCode}
              triggerName={element[i].triggerName}
              updateDisplay={this.props.updateDisplay}
            />
          );
        }))
      : (musicDataToDrumPad = (
          <div className="drum_desactivate_box">
            <div className="drum_desactivate">Machine Drum inactive</div>
          </div>
        ));
    return (
      <div id="drum-machine">
        <div className="icon-fontawesome" onClick={this.props.OnOffMachine}>
          <i className="fas fa-power-off fa-3x" />
        </div>
        <div className="drum-pad-box">{musicDataToDrumPad}</div>
      </div>
    );
  }
}

export default DrumMachine;
