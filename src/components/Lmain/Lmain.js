import React from "react";

import "./Lmain.css";

class Pmain extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="mLogin__content">
        <div className="mLogin__content__tabs">
          <span className="cur">账号登录</span>
          <span className="">短信快捷登录</span>
        </div>
        <div className="mLogin__content__from">
          <div>
            <div className="mLogin__inputbox">
              <input type="text" placeholder="手机号/邮箱" />
            </div>
            <div className="mLogin__inputbox">
              <input
                maxLength="20"
                minLength="6"
                placeholder="请输入密码"
                type="password"
              />
            </div>
          </div>
          <div style={{ display: "none" }}>
            <div className="mLogin__inputbox">
              <input type="tel" maxLength="11" placeholder="+86 请输入手机号" />
            </div>
            <div className="mLogin__inputbox">
              <input
                type="tel"
                maxLength="6"
                placeholder="请输入短信验证码"
                className="inputbox__small"
              />
              <div className="inputbox__send">
                <div className="mCountDown">
                  <button>发送验证码</button>
                  <div className="vux-toast">
                    <div
                      className="weui-mask_transparent"
                      style={{ display: "none" }}
                    />
                    <div
                      className="weui-toast weui-toast_text vux-toast-middle"
                      style={{ width: "auto", display: "none" }}
                    >
                      <i
                        className="weui-icon-success-no-circle weui-icon_toast"
                        style={{ display: "none" }}
                      />
                      <p
                        className="weui-toast__content"
                        style={{ padding: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mLogin__content__from__forget">
            <span>忘记密码？</span>
          </div>
          <div className="mLogin__button mLogin__content__from__login mLoginYellow">
            <button>登录</button>
          </div>
          <div className="mLogin__button mLogin__content__from__register">
            <button>手机快速注册</button>
          </div>
          <div className="mLogin__content__from__third">
            <div className="third__title">
              <span>第三方登录/注册</span>
              <div className="third__title__line" />
            </div>
            <div className="third__item">
              <div className="third__item__wechat" />
              <div className="third__item__qq" />
            </div>
          </div>
          <div className="mLogin__bottom">
            <p>
              登录即代表您已经同意我们的
              <span>《注册服务协议》</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pmain;
