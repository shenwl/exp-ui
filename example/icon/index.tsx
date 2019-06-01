import React from 'react';
import IconExample from './icon.example';

const iconExample = require('!!raw-loader!./icon.example.tsx');

export default () => {
  return (
    <React.Fragment>
      <IconExample />
      <pre>{ iconExample.default }</pre>
    </React.Fragment>
  )
}
