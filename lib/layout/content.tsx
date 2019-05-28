import React from "react";
import { scopedClassMaker } from '../helpers/classes';
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

const Content = () => {
  return (
    <div className={sc('content')}>content</div>
  );
};

export default Content;
