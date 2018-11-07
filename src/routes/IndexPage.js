import React from 'react';
import { TabBar } from 'antd-mobile';
import home from '../assets/home.svg';
import home1 from '../assets/home1.svg';
import intor from '../assets/introduction.svg';
import intor1 from '../assets/introduction1.svg';
import work from '../assets/work.svg';
import work1 from '../assets/work1.svg';
import photo from '../assets/photo.svg';
import photo1 from '../assets/photo1.svg';
import HomePage from '../components/Home';
import MePage from '../components/Me';
import WorkPage from '../components/Work';
import PhotoPage from '../components/Photo';
import page from '../components/Page';

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      homePage: page(HomePage),
      mePage: '',
      workPage: '',
      photoPage: '',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Home"
            key="Home"
            icon={<img
              src={home}
              style={{
                width: '22px',
                height: '22px',
              }}
              alt=""
            />
            }
            selectedIcon={<img
              src={home1}
              style={{
                width: '22px',
                height: '22px',
              }}
              alt=""
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
                homePage: page(HomePage),
                mePage: '',
                workPage: '',
              });
            }}
            data-seed="logId"
          >
            {this.state.homePage}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img
                src={intor}
                style={{
                  width: '22px',
                  height: '22px',
                }}
                alt=""
              />
            }
            selectedIcon={
              <img
                src={intor1}
                style={{
                  width: '22px',
                  height: '22px',
                }}
                alt=""
              />
            }
            title="Me"
            key="Me"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
                mePage: page(MePage),
                homePage: '',
                workPage: '',
              });
            }}
            data-seed="logId1"
          >
            {this.state.mePage}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img
                src={work}
                style={{
                  width: '22px',
                  height: '22px',
                }}
                alt=""
              />
            }
            selectedIcon={
              <img
                src={work1}
                style={{
                  width: '22px',
                  height: '22px',
                }}
                alt=""
              />
            }
            title="Work"
            key="Work"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
                workPage: page(WorkPage),
                homePage: '',
                mePage: '',
                photoPage: '',
              });
            }}
          >
            {this.state.workPage}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img
                src={photo}
                style={{
                  width: '22px',
                  height: '22px',
                }}
                alt=""
              />
            }
            selectedIcon={
              <img
                src={photo1}
                style={{
                  width: '22px',
                  height: '22px',
                }}
                alt=""
              />
            }
            title="Photo"
            key="Photo"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
                photoPage: page(PhotoPage),
                homePage: '',
                workPage: '',
                mePage: '',
              });
            }}
          >
            {this.state.photoPage}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample;
