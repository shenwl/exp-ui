import React from "react";
import { scopedClassMaker } from '../helpers/classes';
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

const Layout = (props) => {
  return (
    <div className={sc()}>
      {props.children}
    </div>
  );
};

export default Layout;
