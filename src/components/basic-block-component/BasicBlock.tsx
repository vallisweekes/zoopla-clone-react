import React, { ReactNode } from 'react';
import './basic.styles.css';

interface IBasicBlockProp {
  children: ReactNode;
}
const BasicBlock: React.FC<IBasicBlockProp> = ({ children }) => {
  return <div className="basic-block">{children}</div>;
};

export default BasicBlock;
