import React from "react";
import "../../icons/importAll";
import "./style.scss";

import { classNames } from "../helpers/classes";

interface FormValues {
  [K: string]: any 
}

interface FormProps {
  values: FormValues;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  onChange: (value: FormValues) => void
  className?: string,
}

const Form: React.FunctionComponent<FormProps> = ({
  className,
  ...restProps
}) => {
  const formData = restProps.values;
  const { onChange } = restProps;

  const onValueChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange({
      ...formData,
      name: e.target.value,
    });
  }

  return (
    <div className={classNames("exp__form", className)}>
      {restProps.fields.map(field => {
        return (
          <div key={field.name}>
            {field.label}
            <input 
              type={field.input.type} 
              value={formData[field.name]}
              onChange={onValueChange.bind(null, field.name)}
            />
          </div>
        )
      })}
    </div>
  );
};

Form.defaultProps = {
  onChange: () => { },
}

export default Form;
