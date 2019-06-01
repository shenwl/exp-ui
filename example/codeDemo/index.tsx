import React, { ReactElement, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Button } from '../../lib';
import './style.scss';

interface Props {
  children: ReactElement,
  code: string,
}

const CodeDemo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
  return (
    <div>
      <div>
        { props.children }
      </div>
      <div className="show-code-wrapper">
        <Button desc="info" size="mini" onClick={() => setCodeVisible(!codeVisible)}>{codeVisible ? '收起代码' : '查看代码'}</Button>
        { codeVisible ? code : null }
      </div>
    </div>
  )
}

export default CodeDemo;
