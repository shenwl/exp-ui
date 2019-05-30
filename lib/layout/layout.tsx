import React, { ReactElement, useState } from "react";
import { classNames, scopedClassMaker } from "../helpers/classes";
import Sider from './sider';
import "./style.scss";

const sc = scopedClassMaker('exp__layout');

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...restProps } = props;

  const childrenAsArray = children as Array<ReactElement>;

  const hasSider = childrenAsArray.length &&
    childrenAsArray.reduce((pre, cur) => (pre || (cur.type === Sider)), false);

  return (
    <div className={classNames(sc(), className, sc(hasSider ? 'sider-layout' : ''))} {...restProps}>
      {children}
    </div>
  );
};

export default Layout;
