import React from "react";

import "./Pheader.css";

class Pheader extends React.Component {
  state = {
    tab: [
      {
        title: "推荐"
      },
      {
        title: "浙江"
      },
      {
        title: "四川"
      },
      {
        title: "江苏"
      },
      {
        title: "云南"
      },
      {
        title: "广东"
      },
      {
        title: "湖北"
      },
      {
        title: "福建"
      },
      {
        title: "西藏"
      },
      {
        title: "贵州"
      }
    ],
    news: [],
    num: 0
  };

  render() {
    console.log(this);
    return (
      <div className="topbox">
        <div className="sortMenu clearfix">
          <ul className="sortMenu-ul">
            {this.state.tab.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    this.state.num === index
                      ? "cell active tuijian"
                      : "cell tuijian"
                  }
                  onClick={this.lighthight.bind(this, index)} //点击高亮
                >
                  <a href="javascript:;" data-id="">
                    {item.title}
                  </a>
                </li>
              );
            })}
            {/* <li className="cell nav">
              <a href="javascript:;" data-id="11">
                浙江
              </a>
            </li>{" "} */}
          </ul>
        </div>{" "}
        <div className="all show">
          <img src="https://m.youxiake.com/images/gonglue/jia.png" alt="" />
        </div>{" "}
      </div>
    );
  }

  // componentWillMount() {
  //   this.loadMore();
  // }

  // async loadMore() {
  //   let newx = await axios.get(
  //     "https://www.easy-mock.com/mock/5cf651657d25197d5b67909a/example/list_copy_1561617911563_copy_1561618165377"
  //   );
  //   console.log(newx);

  //   this.setState({
  //     news: newx.data.data
  //   });
  //   console.log(this.state.news);
  // }

  lighthight(index) {
    this.setState({
      num: index
    });
  }
}

export default Pheader;
