import React, { Component } from "react";

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor");
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {

    // this.setState({ count: this.state.count + 5 })
    console.log("2. getDerivedStateFromProps");
    // console.log("Props :", props, " State :", state);
    return null;
  }

  componentDidMount() {
    console.log("4. componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // nextState = this.state.count + 5
    // console.log(nextProps, nextState);
    console.log("5. shouldComponentUpdate");
    return true; // Ensures component updates
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("6. getSnapshotBeforeUpdate");
    // Initially if the count is 0 and we update it to 1 , then the prevState will show the previous count i.e. 0
    // console.log(prevProps, prevState); 
    // const snapshot = window.scrollY
    // return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("7. componentDidUpdate");
    // console.log(prevProps, prevState, snapshot);
    // if (snapshot !== null) {
    //   window.scrollTo(0, snapshot);
    // }

  }

  componentWillUnmount() {
    console.log("8. componentWillUnmount");
  }

  handleUpdate = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("3. render");
    return (
      <div style={{ marginLeft: "700px" }}>
        <p style={{ marginLeft: "29px" }}>Count: {this.state.count}</p>
        <button onClick={this.handleUpdate}>Update State</button>
      </div>
    );
  }
}

export default LifecycleLogger;
