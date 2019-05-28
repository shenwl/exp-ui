import React from "react";
import { scopedClassMaker } from '../helpers/classes';
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

const Layout = () => {
  return (
    <div className={sc()}>

    </div>
  );
};

export default Layout;
