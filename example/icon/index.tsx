import React from 'react';
import IconExample from './icon.example';
import CodeDemo from '../codeDemo'

const code = require('!!raw-loader!./icon.example.tsx');

export default () => {
  return (
    <CodeDemo code={code.default}>
      <IconExample />
    </CodeDemo>
  )
}
