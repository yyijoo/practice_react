import React, { Component } from "react";
import { connect } from "react-redux";

class Article extends Component {
  renderList() {
    return this.props.articlelists.map(article => (
      <div>{article.jobtitle}</div>
    ));
  }

  render() {
    console.log("props in Article", this.props);

    return (
      <div className="article">
        <h1>Static list</h1>
        <div>
          <div>logo</div>
          <div>jobtitle</div>
          <div>cpname</div>
          <div>status</div>
        </div>
        &nbsp;
        <h1>Rendered from reducers</h1>
        <div>{this.renderList()}</div>
        &nbsp;
        <h1>Rendered when clicking button</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state in Article Container", state);
  return {
    articlelists: state.articlelists
  };
};

export default connect(mapStateToProps)(Article);
