## Icon

#### Icon 组件介绍及使用方法

icon 图标库采用的比较有名的 Font Awesome， 基于其进行的二次封装，具体使用如下：

```jsx
import React from 'react';
import { Icon } from 'blueming-ui';

export default () => {
  const reactNode = (
    <>
      <Icon type="FaBeer" size="24px" style={{ marginLeft: '15px' }} />
      <Icon
        type="FaAccessibleIcon"
        size="24px"
        style={{ marginLeft: '15px' }}
      />
      <Icon type="FaAlipay" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaAngellist" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaAtlassian" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaBitbucket" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaDropbox" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaFreebsd" size="24px" style={{ marginLeft: '15px' }} />
      <Icon type="FaGithub" size="24px" style={{ marginLeft: '15px' }} />
      <Icon
        type="FaHackerNewsSquare"
        size="24px"
        style={{ marginLeft: '15px' }}
      />
      <Icon
        type="FaHotjar"
        size="24px"
        style={{ marginLeft: '15px', color: 'red' }}
      />
    </>
  );

  return reactNode;
};
```

#### 基本代码如下

```js
import { Icon } from 'blueming-ui'

// 使用
<Icon type="FaBeer" />
<Icon type="FaAccessibleIcon" size="24px" />
<Icon type="FaAlipay" size="24px" style={{color: 'red'}} />
```

#### 更多图标可以在如下地址获得

http://react-icons.github.io/icons?name=fa

## API 文档

| 参数     | 说明                  | 类型   | 默认值 |
| -------- | --------------------- | ------ | ------ |
| type     | icon 类型             | string |        |
| size     | icon 大小(px，lg，xs) | string |        |
| rotation | 旋转角度              | number |        |
| style    | 图标样式              | object |        |
