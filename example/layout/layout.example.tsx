import React from "react";
import { Layout, Header, Footer, Content, Sider } from '../../lib/layout/index';
import './layout.example.scss';

export default  () => {
  return (
    <div>
      <h3>第一个例子</h3>
      <Layout className="layout">
        <Header className="header">header</Header>
        <Content className="content">content</Content>
        <Footer className="footer">footer</Footer>
      </Layout>
      
      <h3>第二个例子</h3>
      <Layout className="layout">
        <Header className="header">header2</Header>
        <Layout>
          <Sider className="sider">sider2</Sider>
          <Content className="content">content2</Content>
        </Layout>
        <Footer className="footer">footer2</Footer>
      </Layout>

      <h3>第三个例子</h3>
      <Layout className="layout">
        <Header className="header">header3</Header>
        <Layout>
          <Content className="content">content3</Content>
          <Sider className="sider">sider3</Sider>
        </Layout>
        <Footer className="footer">footer3</Footer>
      </Layout>

      <h3>第四个例子</h3>
      <Layout className="layout">
        <Sider className="sider">sider4</Sider>
        <Layout>
          <Header className="header">header4</Header>
          <Content className="content">content4</Content>
          <Footer className="footer">footer4</Footer>
        </Layout>
      </Layout>
    </div>
  );
};