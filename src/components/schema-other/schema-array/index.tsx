import React, { ReactElement, useContext } from 'react';
import { Col, InputNumber, Row, Switch, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { EditorContext } from '../../editor';
import Schema from '../../../types/Schema';

interface SchemaArrayProp {
  data: Schema;
}

const changeOtherValue = (
  value: boolean | number,
  name: string,
  data: Schema,
  change: (newValue: Schema) => void,
) => {
  data[name] = value;
  change(data);
};

const SchemaArray = (props: SchemaArrayProp): ReactElement => {
  const { data } = props;
  const context = useContext(EditorContext);

  function handleUniqueItemsValueChange(value) {
    changeOtherValue(value, 'uniqueItems', data, context.changeCustomValue);
  }

  function handleMaxItemsValueChange(value) {
    changeOtherValue(value, 'maxItems', data, context.changeCustomValue);
  }

  function handleMinItemsValueChange(value) {
    changeOtherValue(value, 'minItems', data, context.changeCustomValue);
  }

  return (
    <div>
      <div className="default-setting">基础设置</div>
      <Row className="other-row" align="middle">
        <Col span={6} className="other-label">
          <span>
            uniqueItems&nbsp;
            <Tooltip title="开启后，每个元素都不相同">
              <QuestionCircleOutlined />
            </Tooltip>
            &nbsp;：
          </span>
        </Col>
        <Col span={18}>
          <Switch
            checked={data.uniqueItems}
            onChange={handleUniqueItemsValueChange}
          />
        </Col>
      </Row>
      <Row className="other-row" align="middle">
        <Col span={6} className="other-label">
          最小元素个数 ：
        </Col>
        <Col span={18}>
          <InputNumber
            value={data.minItems}
            style={{ width: '200px' }}
            placeholder="minItems"
            onChange={handleMinItemsValueChange}
          />
        </Col>
      </Row>
      <Row className="other-row" align="middle">
        <Col span={6} className="other-label">
          最大元素个数 ：
        </Col>
        <Col span={18}>
          <InputNumber
            value={data.maxItems}
            style={{ width: '200px' }}
            placeholder="maxItems"
            onChange={handleMaxItemsValueChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SchemaArray;
