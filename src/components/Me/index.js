import React from 'react';
import styles from './index.css';
import Lt from '../../assets/lt.png';
import Rb from '../../assets/circle.png';
import Myname from '../../assets/myname.png';
import Myage from '../../assets/age.png';
import Mysex from '../../assets/sex.png';
import Myword from '../../assets/word.png';

class Me extends React.Component {
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
        <img className={this.state.classname ? styles.homePagerbAni : styles.homePagerb} src={Rb} alt="" />
        <img className={this.state.classname ? styles.homePagemynameAni : styles.homePagemayname} src={Myname} alt="" />
        <img className={this.state.classname ? styles.homePagemyageAni : styles.homePagemayage} src={Myage} alt="" />
        <img className={this.state.classname ? styles.homePagemysexAni : styles.homePagemaysex} src={Mysex} alt="" />
        <img className={this.state.classname ? styles.homePagemywordAni : styles.homePagemayword} src={Myword} alt="" />
      </div>
    );
  }
}

export default Me;
