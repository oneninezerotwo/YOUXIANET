import React from "react";

// 公共组件
import Pheader from "../components/Pheader/Pheader";
import Plist from "../components/Plist/Plist";
import Pslide from "../components/Pslide/Pslide";

export default class List extends React.Component {
  render() {
    return (
      <div>
        <Pheader />
        <Pslide />
        <Plist />
      </div>
    );
  }
}
