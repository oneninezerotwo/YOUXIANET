import React from "react";

// 公共组件
import Lheader from "../components/Lheader/Lheader";
import Lmain from "../components/Lmain/Lmain";
// import Pslide from "../components/Pslide/Pslide";

export default class List extends React.Component {
  render() {
    return (
      <div>
        <Lheader />
        <Lmain />
      </div>
    );
  }
}
