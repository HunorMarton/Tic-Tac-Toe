import React, {PropTypes}  from 'react';

class Noone extends React.Component {
  set() {
    this.props.set(this.props.id);
  }

  render() {
    return <rect className="noone" onClick={this.set.bind(this)} x={0} y={0} width={100} height={100}/>;
  }
}

Noone.propTypes = {
  id: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired
};

export default Noone;
