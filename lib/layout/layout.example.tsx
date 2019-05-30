import React from "react";
import { Layout, Header, Footer, Content, Sider } from './index';

export default  () => {
  return (
    <div>
      <Layout style={{
        height: 500,
      }}>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
      
      <Layout style={{
        height: 500,
      }}>
        <Header>header2</Header>
        <Layout style={{
          height: 500,
        }}>
          <Sider>sider2</Sider>
          <Content>content2</Content>
        </Layout>
        <Footer>footer2</Footer>
      </Layout>
         
      <Layout style={{
        height: 500,
      }}>
        <Header>header3</Header>
        <Layout style={{
          height: 500,
        }}>
          <Content>content3</Content>
          <Sider>sider3</Sider>
        </Layout>
        <Footer>footer3</Footer>
      </Layout>

      <Layout style={{
        height: 500,
      }}>
        <Sider>sider4</Sider>
        <Layout style={{
          height: 500,
        }}>
          <Header>header4</Header>
          <Content>content4</Content>
          <Footer>footer4</Footer>
        </Layout>
      </Layout>
    </div>
  );
};