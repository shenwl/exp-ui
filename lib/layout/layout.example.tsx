import React from "react";
import { Layout, Header, Footer, Content, Sider } from './index';

const baseStyle = {
  padding: 10,
  margin: 10,
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
  height: 500,
  padding: 10,
  border: '1px solid #ccc',
}

export default  () => {
  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>header</Header>
        <Content style={contentStyle}>content</Content>
        <Footer style={footerStyle}>footer</Footer>
      </Layout>
      
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>header2</Header>
        <Layout>
          <Sider style={siderStyle}>sider2</Sider>
          <Content style={contentStyle}>content2</Content>
        </Layout>
        <Footer style={footerStyle}>footer2</Footer>
      </Layout>
         
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>header3</Header>
        <Layout>
          <Content style={contentStyle}>content3</Content>
          <Sider style={siderStyle}>sider3</Sider>
        </Layout>
        <Footer style={footerStyle}>footer3</Footer>
      </Layout>

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