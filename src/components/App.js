import React, { Component } from "react";
import ArticleLists from "../containers/Articlelist";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <ArticleLists />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state in mapStateToProps", state);
  return {
    articlelists: state.articlelists
  };
};

export default connect(mapStateToProps)(App);
