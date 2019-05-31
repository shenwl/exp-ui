import React from "react";
import { Layout, Header, Footer, Content, Sider } from '../lib/layout/index';

const baseStyle = {
  padding: 6,
  margin: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#ccc',
}
const headerStyle = {
  ...baseStyle,
  height: 60,
}

const footerStyle = { ...headerStyle };

const siderStyle = {
  ...baseStyle,
  width: '30%',
}

const contentStyle = {
  ...baseStyle,
}

const layoutStyle = {
  marginTop: 10,
  height: 300,
  width: 600,
}

export default  () => {
  return (
    <div>
      <h3>第一个例子</h3>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>header</Header>
        <Content style={contentStyle}>content</Content>
        <Footer style={footerStyle}>footer</Footer>
      </Layout>
      
      <h3>第二个例子</h3>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>header2</Header>
        <Layout>
          <Sider style={siderStyle}>sider2</Sider>
          <Content style={contentStyle}>content2</Content>
        </Layout>
        <Footer style={footerStyle}>footer2</Footer>
      </Layout>

      <h3>第三个例子</h3>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>header3</Header>
        <Layout>
          <Content style={contentStyle}>content3</Content>
          <Sider style={siderStyle}>sider3</Sider>
        </Layout>
        <Footer style={footerStyle}>footer3</Footer>
      </Layout>

      <h3>第四个例子</h3>
      <Layout style={layoutStyle}>
        <Sider style={siderStyle}>sider4</Sider>
        <Layout>
          <Header style={headerStyle}>header4</Header>
          <Content style={contentStyle}>content4</Content>
          <Footer style={footerStyle}>footer4</Footer>
        </Layout>
      </Layout>
    </div>
  );
};