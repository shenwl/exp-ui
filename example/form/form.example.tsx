import React, { useState } from 'react';
import { Form } from '../../lib/index';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: 'name1',
    pwd: '123456',
  });

  const [fields] = useState([
    {name: 'name', label: '姓名', required: true, input: {type: 'text'}},
    {name: 'pwd', label: '密码', required: true, input: {type: 'password'}},
  ]);

  return (
    <div>
      <Form
        values={formData}
        fields={fields}
        onChange={(newFormData) => {
          console.log('newFormData', newFormData);
          setFormData(newFormData);
        }}
      />
    </div>
  )
};

export default FormExample;

