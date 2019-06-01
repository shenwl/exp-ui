import React from 'react';
import DialogExample from './dialog.example';

const dialogExample = require('!!raw-loader!./dialog.example.tsx');

export default () => {
  return (
    <React.Fragment>
      <DialogExample />
      <pre>{ dialogExample.default }</pre>
    </React.Fragment>
  )
}
