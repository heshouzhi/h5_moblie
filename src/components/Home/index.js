import React from 'react';
import styles from './index.css';
import Lt from '../../assets/lt.png';
import Rt from '../../assets/rt.png';
import Lb from '../../assets/lb.png';
import EnglishName from '../../assets/name.png';

class Home extends React.Component {
  state = {
    classname: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ classname: true });
    }, 1200);
  }
  render() {
    return (
      <div className={styles.homePage}>
        <img className={this.state.classname ? styles.homePageltAni : styles.homePagelt} src={Lt} alt="" />
        <img className={this.state.classname ? styles.homePagertAni : styles.homePagert} src={Rt} alt="" />
        <img className={this.state.classname ? styles.homePagelbAni : styles.homePagelb} src={Lb} alt="" />
        <div className={this.state.classname ? styles.homePagetitAni : styles.homePagetit}>
          这是我的主场
        </div>
        <img className={this.state.classname ? styles.homePagenameAni : styles.homePagename} src={EnglishName} alt="" />
      </div>
    );
  }
}

export default Home;
