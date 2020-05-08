### blueming-ui

> 基于 dumi 的 react 组件开发
> Github:  
> https://github.com/luozyiii/blueming-ui

dumi:  
https://d.umijs.org/guide

#### dumi 脚手架初始化

```
mkdir blueming-ui && cd blueming-ui

yarn create @umijs/dumi-lib
```

#### 开始写组件 src 目录

#### 组件开发

通用型组件: 比如 Button, Icon 等.

布局型组件: 比如 Grid, Layout 布局等.

导航型组件: 比如面包屑 Breadcrumb, 下拉菜单 Dropdown, 菜单 Menu 等.

数据录入型组件: 比如 form 表单, Switch 开关, Upload 文件上传等.

数据展示型组件: 比如 Avator 头像, Table 表格, List 列表等.

反馈型组件: 比如 Progress 进度条, Drawer 抽屉, Modal 对话框等.

其他业务类型

#### ts 问题汇总

1.Icon

```
# 错误写法
const IconComponent = Fa[type]

# yarn build 报错
# 报错 Type 'String' cannot be used as an index type.ts(2538)    string不能作为对象的index值

# 解决方法
# Typescript错误忽略
# 单行忽略
// @ts-ignore

# 忽略全文
// @ts-nocheck

# 取消忽略全文
// @ts-check
```

2. Element implicitly has an 'any' type because expression of type 'any' can't be used to

```
# tsconfig 增加配置
"suppressImplicitAnyIndexErrors": true
```
