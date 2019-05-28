import React from "react";
import { scopedClassMaker } from '../helpers/classes';
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

const Side = () => {
  return (
    <div className={sc('side')}>side</div>
  );
};

export default Side;
