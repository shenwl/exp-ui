import React from 'react';
import LayoutExample from './layout.example';
import CodeDemo from '../codeDemo'

const code = require('!!raw-loader!./layout.example.tsx');

export default () => {
  return (
    <CodeDemo code={code.default}>
      <LayoutExample />
    </CodeDemo>
  )
}
