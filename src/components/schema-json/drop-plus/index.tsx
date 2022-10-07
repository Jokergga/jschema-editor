import React, { ReactElement, useContext } from 'react';
import { Dropdown, Menu, Tooltip } from 'antd';
import { observer } from 'mobx-react';
import { SchemaMobxContext } from '../../..';
import IconFont from '../../icon-font';

interface DropPlusProp {
  prefix: string[];
  name: string;
}

const DropPlus = observer(
  (props: DropPlusProp): ReactElement => {
    const { prefix, name } = props;

    const context = useContext(SchemaMobxContext);

    const menu = (
      <Menu>
        <Menu.Item key="sibling_node">
          <span onClick={() => context.addField({ keys: prefix, name })}>
            兄弟节点
          </span>
        </Menu.Item>
        <Menu.Item key="child_node">
          <span
            onClick={() => {
              context.setOpenValue({
                key: prefix.concat(name, 'properties'),
                value: true,
              });
              context.addChildField({
                keys: prefix.concat(name, 'properties'),
              });
            }}
          >
            子节点
          </span>
        </Menu.Item>
      </Menu>
    );

    return (
      <Tooltip placement="top" title="添加节点">
        <Dropdown overlay={menu}>
          {/* <PlusOutlined style={{ color: '#2395f1' }} /> */}
          <IconFont type="icon-root-add" />
        </Dropdown>
      </Tooltip>
    );
  },
);

export default DropPlus;
