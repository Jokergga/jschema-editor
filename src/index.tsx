import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { message } from 'antd';
import Schema from './types/Schema';
import SchemaDescription from './types/SchemaDescription';
import Editor from './components/editor';
import './style/index.less';

/**
 * @title JsonSchemaEditor
 */
export interface JsonSchemaEditorProps {
  /**
   * @zh 是否开启 mock
   */
  mock?: boolean;
  /**
   * @zh 是否展示 json 编辑器
   */
  jsonEditor?: boolean;
  /**
   * @zh Schema 变更的回调
   */
  onChange?: (schema: Schema) => void;
  /**
   * @zh 初始化 Schema
   */
  data?: Schema | string;

  value?: Schema;
}

export const SchemaMobxContext = createContext<SchemaDescription>(
  new SchemaDescription(),
);

const JsonSchemaObserverEditor = observer((props: JsonSchemaEditorProps) => {
  let defaultSchema;
  if (props.data) {
    if (typeof props.data === 'string') {
      try {
        defaultSchema = JSON.parse(props.data);
      } catch (e) {
        message.error('传入的字符串非 json 格式!');
      }
    } else {
      defaultSchema = props.data;
    }
  }

  const [contextVal] = useState<SchemaDescription>(
    new SchemaDescription(defaultSchema),
  );

  reaction(
    () => contextVal.schema,
    schema => {
      if (props.onChange) {
        props.onChange(JSON.parse(JSON.stringify(schema)));
      }
    },
  );

  reaction(
    () => contextVal.open,
    open => {
      // eslint-disable-next-line no-console
      console.log(JSON.parse(JSON.stringify(open)));
    },
  );

  useEffect(() => {
    console.log('props.value', props.value);
    if (!props.value) return;
    contextVal.changeSchema(props.value);
  }, [props.value]);

  return (
    <div>
      <SchemaMobxContext.Provider value={contextVal}>
        <Editor jsonEditor={props.jsonEditor} mock={props.mock} />
      </SchemaMobxContext.Provider>
    </div>
  );
});

const JsonSchemaEditor = (props: JsonSchemaEditorProps): ReactElement => {
  return (
    <div>
      <JsonSchemaObserverEditor {...props} />
    </div>
  );
};

export default JsonSchemaEditor;
