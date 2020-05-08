import React, { Component } from 'react';
import * as Fa from 'react-icons/fa';

/**
 * Icon Icon组件
 * @param {type} string icon类型
 * @param {size} string icon大小 px|lg|xs
 * @param {rotation} number 选转角度
 * @param {style} object 图标样式
 */
interface Props {
  type: String;
  size?: String;
  rotation?: Number;
  style?: Object;
}

export default (props: Props) => {
  const { type, size, rotation, style } = props;
  // @ts-ignore
  const IconComponent = Fa[type];
  return <IconComponent size={size} rotation={rotation} style={style} />;
};
