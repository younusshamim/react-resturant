import React, { Component } from "react";
import Loading from "./Loading";

class Home extends Component {
  render() {
    document.title = "Bohubrihi Restaurant";
    return (
      <div>
        <h1 className="mt-5">Home Page</h1>
        {/* <Loading /> */}
      </div>
    );
  }
}

export default Home;
