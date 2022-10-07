# Json Schema 可视化编辑器（Antd）

[Antd Design](https://ant.design/) 风格的 Json Schema 可视化编辑器。

## 示例

```shell
npm i jokergga-editor-components
```

```typescript jsx
import JsonSchema from 'jokergga-editor-components/es/JsonSchema';
import { useState } from 'react';

export default () => {
  const [jsonData, setJsonData] = useState({});

  return (
    <JsonSchema
      mock={true}
      data={jsonData}
      onChange={data => {
        setJsonData(data);
      }}
    />
  );
};
```

![示例](./images/example.png)

### TODO

- [ ] IconFont 优化
- [ ] 移除 mobx
- [ ] 文档补全、及其界面优化
- [ ] 全面支持 ts
