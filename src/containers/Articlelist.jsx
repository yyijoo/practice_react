import React, { Component } from "react";
import Article from "./Articleentry";

class Articlelists extends Component {
  render() {
    return (
      <div className="articlelists">
        <button>나와라 글 리스트</button>
        <Article />
      </div>
    );
  }
}

export default Articlelists;
