import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
			count: 0
		};
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }
  decrease(e) {
		this.setState({
      count: this.state.count - 1
    });
	}
	increase(e) {
		this.setState({
      count: this.state.count + 1
    });
	}
  render() {
    return(
      <div className="container">
        <span>{this.props.value}</span>
        <button onClick={this.decrease}><i class="sf-icon-chevron-up"></i></button>
        <button onClick={this.increase}><i class="sf-icon-chevron-down"></i></button>
        <div id="counter" count={this.state.count}/>
      </div>
    )
  }
}
