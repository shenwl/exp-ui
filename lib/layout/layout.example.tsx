import React from "react";
import { Layout, Header, Footer, Content, Sider } from './index';

export default  () => {
  return (
    <div>
      <Layout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};