## Notification 通知提示

基本用法

```tsx
import React from 'react';
import { Button, notification } from 'blueming-ui';

export default () => {
  const reactNode = (
    <>
      <Button
        onClick={() => {
          notification.pop({
            message: '这是一条通知',
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        默认按钮
      </Button>
      <br />

      <Button
        type="success"
        onClick={() => {
          notification.pop({
            type: 'success',
            message: '这是一条通知',
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        成功通知(success)
      </Button>
      <br />

      <Button
        type="info"
        onClick={() => {
          notification.pop({
            type: 'info',
            message: '这是一条通知',
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        信息通知(info)
      </Button>
      <br />

      <Button
        type="warning"
        onClick={() => {
          notification.pop({
            type: 'warning',
            message: '这是一条通知',
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        警告通知(warning)
      </Button>
      <br />

      <Button
        type="danger"
        onClick={() => {
          notification.pop({
            type: 'error',
            message: '这是一条通知',
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        错误信息通知(error)
      </Button>
    </>
  );

  return reactNode;
};
```

自定义位置和 icon

```tsx
import React from 'react';
import { Button, notification, Icon } from 'blueming-ui';

export default () => {
  const reactNode = (
    <>
      <Button
        onClick={() => {
          notification.config({
            placement: 'topLeft',
          });
          notification.pop({
            message: '这是一条通知',
            duration: 0,
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        topLeft
      </Button>
      <i style={{ marginLeft: '16px' }} />
      <Button
        type="primary"
        onClick={() => {
          notification.config({
            placement: 'topRight',
          });
          notification.pop({
            type: 'success',
            message: '这是一条通知',
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        topRight
      </Button>
      <i style={{ marginLeft: '16px' }} />
      <Button
        type="pure"
        onClick={() => {
          notification.config({
            placement: 'bottomLeft',
          });
          notification.pop({
            type: 'info',
            message: '这是一条通知',
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        bottomLeft
      </Button>
      <i style={{ marginLeft: '16px' }} />
      <Button
        type="primary"
        onClick={() => {
          notification.config({
            placement: 'bottomRight',
          });
          notification.pop({
            type: 'warning',
            message: '这是一条通知',
            duration: 0,
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        bottomRight
      </Button>
      <i style={{ marginLeft: '16px' }} />
      <Button
        type="warning"
        onClick={() => {
          notification.pop({
            type: 'error',
            icon: <Icon type="FaRegSadCry" />,
            message: '这是一条通知',
            duration: 0,
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        修改通知框icon
      </Button>
      <i style={{ marginLeft: '16px' }} />
      <Button
        type="warning"
        onClick={() => {
          notification.destroy();
        }}
      >
        销毁notification
      </Button>
    </>
  );

  return reactNode;
};
```

使用介绍

```js
import { notification } from 'blueming-ui';

// 使用
notification.pop({
  type: 'warning',
  message: '这是一条通知',
  duration: 0,
  description:
    '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
});

// 全局配置
notification.config({
  placement: 'bottomRight',
});
```

## API 文档

#### notification 的全局属性

| 参数         | 说明                                              | 类型           | 默认值              |
| ------------ | ------------------------------------------------- | -------------- | ------------------- |
| bottom       | 消息从底部弹出时，距离底部的位置，单位像素        | number         | '24px'              |
| duration     | 默认自动关闭延时，单位秒                          | number         | 4.5s                |
| getContainer | HTMLNode 配置渲染节点的输出位置                   | () => HTMLNode | () => document.body |
| placement    | 弹出位置(topLeft/topRight/bottomLeft/bottomRight) | string         | 'topRight'          |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素        | number         | '24px'              |
| closeIcon    | 自定义关闭图标                                    | HTMLNode       |                     |

#### notice 属性

| 参数         | 说明                                            | 类型      | 默认值    |
| ------------ | ----------------------------------------------- | --------- | --------- |
| type         | 通知窗类型('info                                | success   | error     | warning'等) | string | '' |
| btn          | 自定义关闭按钮                                  | ReactNode |           |
| bottom       | 消息从底部弹出时，距离底部的位置，单位像素      | number    |           |
| className    | 自定义内容的 class                              | string    |           |
| description  | 通知提醒内容，必选                              | string    | ReactNode |  |
| duration     | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number    | 4.5       |
| closeIcon    | 自定义关闭图标                                  | ReactNode |           |
| getContainer | 配置渲染节点的输出位置                          | HTMLNode  |           |
| icon         | 自定义图标                                      | ReactNode |           |
| key          | 当前通知唯一标志                                | string    |           |
| message      | 通知提醒标题，必选                              | string    | ReactNode |  |
| onClose      | 点击默认关闭按钮时触发的回调函数                | func      |           |
| onClick      | 点击通知时触发的回调函数                        | func      |           |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素      | func      |           |
