## Button

基本用法-行内按钮:

```tsx
import React from 'react';
import { Button } from 'blueming-ui';

export default () => {
  const reactNode = (
    <>
      <Button>默认按钮</Button> <i></i>
      <Button type="primary">主要按钮</Button> <i></i>
      <Button type="success">成功按钮</Button> <i></i>
      <Button type="info">信息按钮</Button> <i></i>
      <Button type="warning">警告按钮</Button> <i></i>
      <Button type="danger">危险按钮</Button> <i></i>
      <Button type="primary" shape="circle">
        circle按钮
      </Button>
    </>
  );

  return reactNode;
};
```

块按钮

```tsx
import React from 'react';
import { Button } from 'blueming-ui';

export default () => {
  const reactNode = (
    <div style={{ width: '360px' }}>
      <Button block>默认按钮</Button>
      <br />
      <Button type="primary" block>
        主要按钮
      </Button>
      <br />
      <Button type="success" block>
        成功按钮
      </Button>
      <br />
      <Button type="info" block>
        信息按钮
      </Button>
      <br />
      <Button type="warning" block>
        警告按钮
      </Button>
      <br />
      <Button type="danger" block>
        危险按钮
      </Button>
      <br />
      <Button type="primary" shape="circle" block>
        circle按钮
      </Button>
      <br />
    </div>
  );

  return reactNode;
};
```

用法

```
import { Button } from 'blueming-ui'

// 导入
<Button />
```

## API 文档

| 参数      | 说明                                          | 类型         | 默认值  |
| --------- | --------------------------------------------- | ------------ | ------- |
| className | 自定义类名                                    | string       |         |
| type      | 按钮类型(primary success info warning danger) | string       | default |
| shape     | 按钮形状 circle                               | radius(默认) | string  | radius |
| onClick   | 对外暴露的点击事件                            | func         |         |
