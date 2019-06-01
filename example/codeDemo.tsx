import React, { ReactElement } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

interface Props {
  children: ReactElement,
  code: string,
}

const CodeDemo: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      { props.children }
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
    </div>
  )
}

export default CodeDemo;
