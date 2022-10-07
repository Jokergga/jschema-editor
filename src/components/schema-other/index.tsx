import React, { ReactElement, useContext } from 'react';
import SchemaString from './schema-string';
import SchemaNumber from './schema-number';
import SchemaBoolean from './schema-boolean';
import SchemaArray from './schema-array';
import { EditorContext } from '../editor';
import QuietEditor from '../quiet-editor';
import Schema from '../../types/Schema';
interface SchemaOtherProp {
  data: string;
}

const mapping = (data: Schema) => {
  switch (data.type) {
    case 'string':
      return <SchemaString data={data} />;
    case 'number':
      return <SchemaNumber data={data} />;
    case 'boolean':
      return <SchemaBoolean data={data} />;
    case 'integer':
      return <SchemaNumber data={data} />;
    case 'array':
      return <SchemaArray data={data} />;
    default:
      return <></>;
  }
};

const handleInputEditor = (
  value: string | undefined,
  change: (newValue: Schema) => void,
) => {
  if (!value) return;
  change(JSON.parse(value));
};

const SchemaOther = (props: SchemaOtherProp): ReactElement => {
  const { data } = props;
  const optionForm = mapping(JSON.parse(data));

  const context = useContext(EditorContext);

  return (
    <div>
      <div>{optionForm}</div>
      <div className="default-setting">编辑源码</div>
      <QuietEditor
        height={300}
        language="json"
        value={data}
        onChange={value => handleInputEditor(value, context.changeCustomValue)}
      />
    </div>
  );
};

export default SchemaOther;
