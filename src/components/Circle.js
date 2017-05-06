import React from 'react';

class Circle extends React.Component {
  constructor() {
    super();

    this.state = {
      angle: 0 // 0 - 360
    };

    this.lastTime = null;
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  animate(time) {
    let delta = 0;
    if (this.lastTime != null) {
      delta = (time - this.lastTime) * 1;
      this.setState({angle: this.state.angle+delta});
    }
    this.lastTime = time;
    if(this.state.angle+delta <= 360) {
      requestAnimationFrame(this.animate);
    }else{
      this.setState({angle: 360});
    }
  }

  x(angle, radius) {
    return Math.cos((angle)/180*Math.PI)*radius;
  }

  y(angle, radius) {
    return Math.sin((angle)/180*Math.PI)*radius;
  }

  largeArcFlag(angle) {
    return angle < 180 ? 0 : 1;
  }

  render() {
    const radius = 30;
    return (
      <g transform="translate(50,50)">
        <path className="player"
          d={`M ${this.x(0,radius)} ${this.y(0,radius)} A ${radius} ${radius} 0 ${this.largeArcFlag(this.state.angle)} 1 ${this.x(this.state.angle, radius)} ${this.y(this.state.angle, radius)}`} />
      </g>
    );
  }
}

export default Circle;
