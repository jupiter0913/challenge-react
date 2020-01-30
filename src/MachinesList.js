import React, { Component } from 'react';

const objectStyle = {
  float: 'left',
  marginRight: 30,
  width: 100,
};

export default class MachinesList extends Component {
  render() {
    return (
      <div style={{ float: 'left', margin: 10 }}>
        <div>
          {
            this.props.machines.map((machine) => {
              return <div>
                <div style={objectStyle}>{machine.name}</div>
                <div style={objectStyle}>{machine.ip_address}</div>
                <div style={objectStyle}>{machine.health}</div>
                <button>Get latest Health</button>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
