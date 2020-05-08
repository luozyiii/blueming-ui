## Message

## 基本使用

```tsx
import React from 'react';
import { Button, message } from 'blueming-ui';

export default () => {
  const reactNode = (
    <>
      <Button
        onClick={() => {
          message.pop({
            content: '趣谈前端学习打卡',
          });
        }}
      >
        默认通知信息
      </Button>
      <br />

      <Button
        type="success"
        onClick={() => {
          message.pop({
            type: 'success',
            content: '你的请求被审批通过啦！',
            duration: 0,
          });
        }}
      >
        成功通知(success)
      </Button>
      <br />

      <Button
        type="info"
        onClick={() => {
          message.pop({
            type: 'info',
            content: '趣谈前端学习打卡',
          });
        }}
      >
        信息通知(info)
      </Button>
      <br />

      <Button
        type="warning"
        onClick={() => {
          message.pop({
            type: 'warning',
            content: '趣谈前端学习打卡',
          });
        }}
      >
        警告通知(warning)
      </Button>
      <br />

      <Button
        type="danger"
        onClick={() => {
          message.pop({
            type: 'error',
            content: '趣谈前端学习打卡',
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

## 使用介绍

```js
import { message } from 'blueming-ui';

// 使用
message.pop({
  type: 'warning',
  content: '趣谈前端学习打卡',
  duration: 0,
});

// 全局配置
message.config({
  duration: 6,
});
```

## API 文档

#### xMessage 的全局属性

| 参数         | 说明                            | 类型           | 默认值              |
| ------------ | ------------------------------- | -------------- | ------------------- |
| duration     | 默认自动关闭延时，单位秒        | number         | 4.5s                |
| getContainer | HTMLNode 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |
| closeIcon    | 自定义关闭图标                  | HTMLNode       |                     |

#### notice 属性

| 参数         | 说明                                            | 类型      | 默认值    |
| ------------ | ----------------------------------------------- | --------- | --------- |
| type         | 通知窗类型('info                                | success   | error     | warning'等) | string | '' |
| btn          | 自定义关闭按钮                                  | ReactNode |           |
| className    | 自定义内容的 class                              | string    |           |
| duration     | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number    | 4.5       |
| closeIcon    | 自定义关闭图标                                  | ReactNode |           |
| getContainer | 配置渲染节点的输出位置                          | HTMLNode  |           |
| icon         | 自定义图标                                      | ReactNode |           |
| key          | 当前通知唯一标志                                | string    |           |
| content      | 通知提醒标题，必选                              | string    | ReactNode |  |
| onClose      | 点击默认关闭按钮时触发的回调函数                | func      |           |
| onClick      | 点击通知时触发的回调函数                        | func      |           |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素      | func      |           |
