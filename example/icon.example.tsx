import React from 'react';
import { Icon } from '../lib/index';
import './icon.example.scss';

const IconExample: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Icon name="wechat" className="icon-example" />
      <Icon name="close" className="icon-example" />
    </React.Fragment>
  )
};

export default IconExample;
