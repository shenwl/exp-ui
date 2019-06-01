import React from 'react';
import DialogExample from './dialog.example';
import CodeDemo from '../codeDemo'

const code = require('!!raw-loader!./dialog.example.tsx');

export default () => {
  return (
    <CodeDemo code={code.default}>
      <DialogExample />
    </CodeDemo>
  )
}
