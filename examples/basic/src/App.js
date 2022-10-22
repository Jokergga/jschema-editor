import React, { useState } from 'react';
import JsonSchema from 'jschema-editor';
import { Col, Input, Row } from 'antd';

export default () => {
  let [value, setValue] = useState('');
  let [data, setData] = useState('');

  const onTextChange = (e) => {
    console.log('value', e.target.value);
    setValue(JSON.parse(e.target.value));
    // value = JSON.parse(e.target.value);
  };

  return (
    <div>
      <Row style={{padding: 10}} gutter={10}>
        <Col span={14} >
          <JsonSchema
            style={{ width: '50%' }}
            mock
            onChange={setData}
            data={value}
            value={value}
          />
        </Col>
        <Col span={10}>
          <Input.TextArea
            value={JSON.stringify(data, null, 2)}
            onChange={onTextChange}
            rows={20}
            disabled
          />
        </Col>
      </Row>
    </div>
  );
};
