import React, { ReactElement } from 'react';
import { Input, AutoComplete } from 'antd';
import { MOCK_SOURCE } from '../../constants';
import Schema from '../../types/Schema';
import IconFont from '../icon-font';

type MockSelectProp = {
  schema: Schema;
  showEdit: () => void;
  onChange: (value: string) => void;
};

const MockSelect = (props: MockSelectProp): ReactElement => {
  const { schema } = props;
  const children = MOCK_SOURCE.map(item => ({
    label: item.mock,
    value: item.mock,
  }));

  return (
    <div style={{ width: '100%' }}>
      <AutoComplete
        style={{ width: '100%' }}
        className="certain-category-search"
        dropdownMatchSelectWidth={false}
        options={children}
        filterOption
        value={
          schema.mock
            ? typeof schema.mock !== 'string'
              ? schema.mock?.mock
              : schema.mock
            : ''
        }
        onChange={props.onChange}
        disabled={schema.type === 'object' || schema.type === 'array'}
      >
        <Input
          style={{ width: '100%' }}
          placeholder="mock"
          className={
            schema.type === 'object' || schema.type === 'array'
              ? 'input_icon_editor_disabled'
              : 'input_icon_editor'
          }
          addonAfter={
            // <EditOutlined
            <IconFont
              type="icon-edit"
              width={16}
              className={
                schema.type === 'object' || schema.type === 'array'
                  ? 'input_icon_editor_disabled'
                  : 'input_icon_editor'
              }
              onClick={e => {
                e.stopPropagation();
                props.showEdit();
              }}
            />
          }
        />
      </AutoComplete>
    </div>
  );
};

export default MockSelect;
