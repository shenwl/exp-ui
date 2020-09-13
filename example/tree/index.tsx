import React from 'react';
import TreeExample from './tree.example';
import CodeDemo from '../codeDemo';

const code = require('!!raw-loader!./tree.example.tsx');

export default () => {
  return (
    <CodeDemo code={code.default}>
      <TreeExample />
    </CodeDemo>
  )
}
