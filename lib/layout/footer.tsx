import React from "react";
import { scopedClassMaker } from '../helpers/classes';
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

const Footer = () => {
  return (
    <div className={sc('footer')}>footer</div>
  );
};

export default Footer;
