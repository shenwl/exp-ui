import React from 'react';
import FormExample from './form.example';
import CodeDemo from '../codeDemo'

const code = require('!!raw-loader!./form.example.tsx');

export default () => {
  return (
    <CodeDemo code={code.default}>
      <FormExample />
    </CodeDemo>
  )
}
