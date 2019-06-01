import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'

import IconExample from './icon';
import DialogExample from './dialog';
import LayoutExample from './layout';

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
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
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
