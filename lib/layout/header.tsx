import React from "react";
import { scopedClassMaker } from '../helpers/classes';
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

const Header = () => {
  return (
    <div className={sc('header')}>header</div>
  );
};

export default Header;
