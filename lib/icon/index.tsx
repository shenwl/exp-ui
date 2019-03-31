import React from "react";
import "../../icons/importAll";
import './style.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const {className, ...restProps} = props;
  return (
    <svg 
      className={`exp__icon${ className ? (' ' + className) : ''}`} 
      {...restProps}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
