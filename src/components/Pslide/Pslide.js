import React from "react";
// import { Carousel } from "antd-mobile"; //安装的是antd-mobile，引入就是从antd-mobile引入
// import "antd-mobile/dist/antd-mobile.css";

import "./Pslide.css";

// export default class Pslide extends React.Component {
//   render() {
//     return (
//       <Carousel autoplay loop="loop">
//         <div className="banners">
//           <a
//             href="https://m.youxiake.com/gonglue/view?id=3802"
//             style={{
//               backgroundImage:
//                 'url("https://qimg4.youxiake.com/upload/201905/29/63661559120789.jpg?")',
//               backgroundSize: "cover",
//               backgroundPosition: "center center"
//             }}
//           />
//         </div>
//         <div className="banners">
//           <a
//             href="https://m.youxiake.com/gonglue/view?id=3802"
//             style={{
//               backgroundImage:
//                 'url("https://qimg4.youxiake.com/upload/201906/26/67741561540367.jpg?")',
//               backgroundSize: "cover",
//               backgroundPosition: "center center"
//             }}
//           />
//         </div>
//         <div className="banners">
//           <a
//             href="https://m.youxiake.com/gonglue/view?id=3802"
//             style={{
//               backgroundImage:
//                 'url("https://qimg4.youxiake.com/upload/201906/26/39641561516626.jpg?")',
//               backgroundSize: "cover",
//               backgroundPosition: "center center"
//             }}
//           />
//         </div>
//         <div className="banners">
//           <a
//             href="https://m.youxiake.com/gonglue/view?id=3802"
//             style={{
//               backgroundImage:
//                 'url("https://qimg4.youxiake.com/upload/201906/27/43631561635556.jpg?")',
//               backgroundSize: "cover",
//               backgroundPosition: "center center"
//             }}
//           />
//         </div>
//       </Carousel>
//     );
//   }
// }

import { Carousel, WingBlank } from "antd-mobile";

class Pslide extends React.Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "https://qimg4.youxiake.com/upload/201905/29/63661559120789.jpg?",
          "https://qimg4.youxiake.com/upload/201906/26/67741561540367.jpg?",
          "https://qimg4.youxiake.com/upload/201906/26/39641561516626.jpg?",
          "https://qimg4.youxiake.com/upload/201906/27/43631561635556.jpg?"
        ]
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log("slide to", index)}
        >
          {this.state.data.map(val => (
            <a
              className="banners"
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%"
              }}
            >
              <img
                src={val}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
export default Pslide;
