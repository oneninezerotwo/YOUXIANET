import React from "react";

import "./Plist.css";

import axios from "axios";
import { resolve } from "dns";

class Pheader extends React.Component {
  state = {
    news: [],
    address: []
  };

  render() {
    console.log(this);
    return (
      <div className="x_con_box clearfix">
        <div className="x_box">
          <div id="scrollload" className="x_con_lists clearfix">
            {this.state.news.map((item, index) => {
              return (
                <div className="x_con_list clearfix" key={index}>
                  <div className="list_img">
                    <a
                      //   href="https://m.youxiake.com/gonglue/view?id=3795"
                      target="_blank"
                    >
                      <img src={item.thumb} alt="" />
                    </a>
                  </div>
                  <div className="list_text">
                    <a
                      //   href="https://m.youxiake.com/gonglue/view?id=3795"
                      className="title"
                    >
                      {item.title}
                    </a>{" "}
                    <div className="tag">
                      <ul>
                        <li>西安</li>
                        <li>大雁塔</li>
                        <li>小雁塔</li>
                        <li>陕西</li>
                      </ul>
                    </div>{" "}
                    <div className="event">
                      <ul>
                        <li className="liuyan right">{item.comment}</li>{" "}
                        <li className="liulan right">{item.view}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="x_con_list clearfix">
              <div className="list_img">
                <a
                  href="https://m.youxiake.com/gonglue/view?id=3795"
                  target="_blank"
                >
                  <img
                    src="https://qimg4.youxiake.com/upload/201906/21/42081561112737.jpg?imageView2/1/w/676/h/416/q/90"
                    alt=""
                  />
                </a>
              </div>
              <div className="list_text">
                <a
                  href="https://m.youxiake.com/gonglue/view?id=3795"
                  className="title"
                >
                  武汉人下班周末去哪儿好？夏季休闲娱乐..
                </a>{" "}
                <div className="tag">
                  <ul>
                    <li>西安</li>
                    <li>大雁塔</li>
                    <li>小雁塔</li>
                    <li>陕西</li>
                  </ul>
                </div>{" "}
                <div className="event">
                  <ul>
                    <li className="liuyan right">54</li>{" "}
                    <li className="liulan right">8.03万</li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div className="x_con_list clearfix">
              <div className="list_img">
                <a
                  href="https://m.youxiake.com/gonglue/view?id=3754"
                  target="_blank"
                >
                  <img
                    src="https://qimg4.youxiake.com/upload/201905/29/13801559121078.jpg?imageView2/1/w/676/h/416/q/90"
                    alt=""
                  />
                </a>
              </div>{" "}
              <div className="list_text">
                <a
                  href="https://m.youxiake.com/gonglue/view?id=3754"
                  className="title"
                >
                  六月适合去哪儿玩？国内国外这20个地方..
                </a>{" "}
                <div className="tag">
                  <ul>
                    <li>中国</li>
                  </ul>
                </div>{" "}
                <div className="event">
                  <ul>
                    <li className="liuyan right">50</li>{" "}
                    <li className="liulan right">85.43万</li>
                  </ul>
                </div>
              </div>
            </div>{" "} */}
            <div className="nohave" style={{ display: "none" }}>
              没有更多了
            </div>
          </div>{" "}
          <div
            className="loading"
            style={{ margin: "auto", textAlign: "center", display: "none" }}
          >
            <img src="/images/gonglue/loading.gif" alt="加载中" />
          </div>
        </div>
      </div>
    );
  }

  //   componentWillMount() {
  //     this.loadMore();
  //   }

  //   async loadMore() {
  //     let newx = await axios.get(
  //       "https://www.easy-mock.com/mock/5cf651657d25197d5b67909a/example/list_copy_1561617911563_copy_1561618165377"
  //     );
  //     console.log(newx);

  //     this.setState({
  //       news: newx.data.data
  //     });
  //     console.log(this.state.news);
  //   }

  componentDidMount() {
    axios.post("/newsajax", { count_page: "4" }).then(response => {
      console.log(response);
      this.setState({
        news: response.data.data,
        address: response.data.data.place_name
      });
      console.log(this.state.news);
    });
  }
}

export default Pheader;
