import React from 'react';

class Cross extends React.Component {
  constructor() {
    super();

    this.state = {
      draw: 0 // 0 - 60 - 120
    };

    this.lastTime = null;
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  animate(time) {
    let delta = 0;
    if (this.lastTime != null) {
      const delta = (time - this.lastTime) * 0.5;
      this.setState({draw: this.state.draw+delta});
    }
    this.lastTime = time;
    if(this.state.draw+delta <= 120) {
      requestAnimationFrame(this.animate);
    }else{
      this.setState({draw: 120});
    }
  }

  render() {
    return (
      <g>
        <line className="player"
          x1={20} y1={20}
          x2={Math.min(20+this.state.draw, 80)}
          y2={Math.min(20+this.state.draw, 80)} />
        <line className="player"
          x1={80} y1={20}
          x2={80-Math.max((this.state.draw-60), 0)}
          y2={20+Math.max((this.state.draw-60), 0)} />
      </g>
    );
  }
}

export default Cross;
