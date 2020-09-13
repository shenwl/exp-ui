import React from 'react';
import './style.scss';

import { scopedClassMaker, classNames } from '../helpers/classes';

const bem = scopedClassMaker('exp__tree');

interface TreeProps {
  className?: string;
}

const Tree: React.FC<TreeProps> = ({
  className,
  ...restProps
}) => {
  return (
    <div className={classNames(bem(), className)} {...restProps}>
      Tree
    </div>
  );
};

export default Tree;
