## Notification 通知提示

```tsx
import React from 'react';
import { Button, Notification } from 'blueming-ui';

export default () => {
  const reactNode = (
    <>
      <Button
        onClick={() => {
          Notification.pop({
            message: '这是一条通知',
            description:
              '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          });
        }}
      >
        默认按钮
      </Button>
    </>
  );

  return reactNode;
};
```
