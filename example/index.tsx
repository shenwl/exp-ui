import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import IconExample from './icon.example';
import DialogExample from './dialog.example';
import LayoutExample from './layout.example';

import { Layout, Header, Footer, Content, Sider } from '../lib/layout/index';

const logo = require('./logo.png');

import './index.scss';

ReactDOM.render((
  <Router>
    <Layout className="page-wrapper">
      <Header className="header-wrapper">
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
      </Header>

      <Layout className="main-wrappper">
        <Sider className="sider-wrapper">
          <ul className="sider-list">
            <li>
              <h2>组件</h2>
            </li>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </Sider>

        <Content className="content-wrapper">
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer>
      </Footer>
    </Layout>
  </Router>
), document.getElementById('root'));
