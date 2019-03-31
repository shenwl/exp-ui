import React from "react";
import "../../icons/importAll";
import './style.scss';

import classNames from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const {className, ...restProps} = props;
  
  return (
    <svg 
      className={classNames('exp__icon', className)} 
      {...restProps}
    >
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
