import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import IconExample from './icon.example';
import DialogExample from './dialog.example';
import LayoutExample from './layout.example';

import { Layout, Header, Footer, Content, Sider } from '../lib/layout/index';

import './index.scss';

ReactDOM.render((
  <Router>
    <Layout className="page-wrapper">
      <Header>
        <div className="logo">
          <h1>Exp UI</h1>
        </div>
      </Header>

      <Layout>
        <Sider>
          <h2>组件</h2>
          <ul>
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

        <Content>
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </Content>
      </Layout>
      <Footer>
        <strong>coding by shenwl.</strong>
      </Footer>
    </Layout>
  </Router>
), document.getElementById('root'));
