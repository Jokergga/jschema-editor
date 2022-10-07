import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { Checkbox, Col, Input, InputNumber, Row, Select, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { STRING_FORMATS } from '../../../constants';
import { EditorContext } from '../../editor';
import Schema from '../../../types/Schema';

interface SchemaStringProp {
  data: Schema;
}

const SchemaString = (props: SchemaStringProp): ReactElement => {
  const { data } = props;
  const [checked, setChecked] = useState<boolean>(
    props.data.enum !== undefined,
  );

  const format = STRING_FORMATS;

  const context = useContext(EditorContext);

  useEffect(() => {
    setChecked(props.data.enum !== undefined);
  }, [props.data.enum]);

  const changeOtherValue = (
    value: string | number,
    name: string,
    data: Schema,
  ) => {
    data[name] = value;
    context.changeCustomValue(data);
  };

  const changeEnumOtherValue = (value: string, data: Schema) => {
    const arr = value.split('\n');
    if (arr.length === 0 || (arr.length === 1 && !arr[0])) {
      delete data.enum;
      delete data.enumDesc;
      context.changeCustomValue(data);
    } else {
      data.enum = arr;
      context.changeCustomValue(data);
    }
  };

  const changeEnumDescOtherValue = (value: string, data: Schema) => {
    data.enumDesc = value;
    context.changeCustomValue(data);
  };

  const onChangeCheckBox = (checked: boolean, data: Schema) => {
    setChecked(checked);
    if (!checked) {
      delete data.enum;
      delete data.enumDesc;
      context.changeCustomValue(data);
    }
  };

  const getDefaultValue = (
    defaultVal: string | boolean | undefined,
  ): string | undefined => {
    if (typeof defaultVal === 'boolean') {
      return defaultVal ? 'true' : 'false';
    }
    return defaultVal;
  };

  return (
    <div>
      <div className="default-setting">基础设置</div>
      <Row className="other-row" align="middle">
        <Col span={4} className="other-label">
          默认值：
        </Col>
        <Col span={20}>
          <Input
            value={getDefaultValue(data.default)}
            placeholder="默认值"
            onChange={event =>
              changeOtherValue(event.target.value, 'default', data)
            }
          />
        </Col>
      </Row>
      <Row className="other-row" align="middle">
        <Col span={12}>
          <Row align="middle">
            <Col span={8} className="other-label">
              最小长度：
            </Col>
            <Col span={16}>
              <InputNumber
                style={{ width: '100%' }}
                value={data.minLength}
                placeholder="min.length"
                onChange={value => changeOtherValue(value, 'minLength', data)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row align="middle">
            <Col span={8} className="other-label">
              最大长度：
            </Col>
            <Col span={16}>
              <InputNumber
                style={{ width: '100%' }}
                value={data.maxLength}
                placeholder="max.length"
                onChange={value => changeOtherValue(value, 'maxLength', data)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="other-row" align="middle">
        <Col span={4} className="other-label">
          <span>
            Pattern&nbsp;
            <Tooltip title="pattern">
              <QuestionCircleOutlined />
            </Tooltip>
            &nbsp;：
          </span>
        </Col>
        <Col span={20}>
          <Input
            value={data.pattern}
            placeholder="Pattern"
            onChange={event =>
              changeOtherValue(event.target.value, 'pattern', data)
            }
          />
        </Col>
      </Row>
      <Row className="other-row" align="middle">
        <Col span={4} className="other-label">
          <span>
            {'枚举 '}
            <Checkbox
              checked={checked}
              onChange={event => onChangeCheckBox(event.target.checked, data)}
            />{' '}
            ：
          </span>
        </Col>
        <Col span={20}>
          <Input.TextArea
            value={data.enum && data.enum.length && data.enum.join('\n')}
            disabled={!checked}
            placeholder="每行只能写一个值"
            autoSize={{ minRows: 2, maxRows: 6 }}
            onChange={event => changeEnumOtherValue(event.target.value, data)}
          />
        </Col>
      </Row>
      {checked && (
        <Row className="other-row" align="middle">
          <Col span={4} className="other-label">
            备注：
          </Col>
          <Col span={20}>
            <Input.TextArea
              value={data.enumDesc}
              disabled={!checked}
              placeholder="备注描述信息"
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={event =>
                changeEnumDescOtherValue(event.target.value, data)
              }
            />
          </Col>
        </Row>
      )}
      <Row className="other-row" align="middle">
        <Col span={4} className="other-label">
          format：
        </Col>
        <Col span={20}>
          <Select
            showSearch
            allowClear
            value={data.format}
            style={{ width: 200 }}
            placeholder="Select a format"
            dropdownClassName="json-schema-react-editor-adv-modal-select"
            onChange={value => changeOtherValue(value, 'format', data)}
            filterOption={(input, option) => {
              return (
                option?.props.value
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              );
            }}
          >
            {format.map(item => {
              return (
                <Select.Option value={item.name} key={item.name}>
                  {item.name}
                </Select.Option>
              );
            })}
          </Select>
        </Col>
      </Row>
    </div>
  );
};

export default SchemaString;
