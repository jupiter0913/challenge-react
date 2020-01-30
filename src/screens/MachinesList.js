import React, { Component } from 'react';
import Button from '../components/Button';
import PropTypes from "prop-types";

const objectStyle = {
  float: 'left',
  marginRight: 30,
  width: 100,
  height: 30
};

export default class MachinesList extends Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = id => {
    console.log(id);
  };
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
                <div style={objectStyle}>
                  <Button name='Get latest Health' clickHandler={() => this.handleClick(machine.id)} />
                </div>

              </div>
            })
          }
        </div>
      </div>
    )
  }
}
