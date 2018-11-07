import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './index.css';
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';

class Photo extends React.Component {
  state = {
    classname: false,
    data: ['1', '2', '3'],
    imgHeight: 176,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ classname: true });
    }, 1200);
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [Img1, Img2, Img3],
      });
    }, 100);
  }
  render() {
    return (
      <div className={styles.homePage}>
        <div className={this.state.classname ? styles.homePageCarAni : styles.homePageCar}>
          <WingBlank>
            <Carousel
              autoplay
              infinite
              dots={false}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                  />
                </a>
            ))}
            </Carousel>
          </WingBlank>
        </div>
        <div className={this.state.classname ? styles.homePagetopOneAni : styles.homePagetopOne}>
          生
        </div>
        <div className={this.state.classname ? styles.homePagetopTwoAni : styles.homePagetopTwo}>
          存技能
        </div>
        <div
          className={this.state.classname ? styles.homePagetopThreeAni : styles.homePagetopThree}
        >
          一切都是为了更好<br />的活着
        </div>
        <div
          className={this.state.classname ? styles.homePagebottomAni : styles.homePagetopbottom}
        >
          2018-11-3<br />时间分秒之间<br />17621140956
        </div>
      </div>
    );
  }
}

export default Photo;
