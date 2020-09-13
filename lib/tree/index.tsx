import React from 'react';
import './style.scss';

import { scopedClassMaker, classNames } from '../helpers/classes';

const bem = scopedClassMaker('exp__tree');

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg className={classNames(bem(), className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
