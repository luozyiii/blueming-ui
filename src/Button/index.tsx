import React from 'react';
import classnames from 'classnames';
import './index.less';

/**
 * @param {onClick} func 对外暴露的点击事件
 * @param {className} string 自定义类名
 * @param {type} string 按钮类型 primary | success | info | warning | danger
 * @param {shape} string 按钮形状 circle | radius(默认)
 */
interface Props {
  children: React.ReactNode;
  onClick?: any;
  className?: String;
  type?: String;
  shape?: String;
  block?: Boolean;
}
export default (props: Props) => {
  const { children, onClick, className, type, shape, block } = props;
  return (
    <div
      className={classnames(
        'bButton',
        'ripple',
        type,
        shape,
        block ? 'block' : '',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
