import React from 'react';
import LayoutExample from './layout.example';

const layoutExample = require('!!raw-loader!./layout.example.tsx');

export default () => {
  return (
    <React.Fragment>
      <LayoutExample />
      <pre>{ layoutExample.default }</pre>
    </React.Fragment>
  )
}
