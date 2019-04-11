import React, { Component } from 'react';

interface InternalState {
  trigger: boolean;
}

export default class SearchBar extends Component<any, InternalState> {

  readonly state = {
    trigger: false,
  }

  handleClick() {
    if (!this.state.trigger) {
      this.setState({ trigger: true });
    }
  }

  handleBlur() {
    this.setState({ trigger: false });
  }

  render() {
    const { trigger } = this.state;

    return (
      <div className="search-bar" onClick={() => this.handleClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40">
          <path
            className="right" fill="none"
            stroke="#1890ff" strokeWidth="4"
            strokeMiterlimit="10"
            style={{transform: 'scale(0.45)'}}
            d="M177.75 85.99h133.5c23.334 0 42.25-18.916 42.25-42.25C352.944 20.528 333.967 2 310.748 2H177.75"/>
          <path
            className="left" fill="none"
            stroke="#1890ff" strokeWidth="4"
            strokeMiterlimit="10"
            style={{transform: 'scale(0.45)'}}
            d="M177.75 85.99H44.25C20.916 85.99 2 67.074 2 43.74 2.556 20.528 21.533 2 44.752 2H177.75"/>
        </svg>

        <p></p>
        <input type="text" className={trigger ? 'active' : 'remove'} onBlur={() => this.handleBlur()} />

        <span>Search</span>
      </div>
    );
  }
}
