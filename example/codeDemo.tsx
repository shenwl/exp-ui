import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement,
  code: string,
}

const CodeDemo: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      { props.children }
      <pre>
        { props.code }
      </pre>
    </div>
  )
}

export default CodeDemo;
