import React from 'react';
import { Tag } from './AppTag.module.css';

const AppTag = ({ Txt }) => {
  return <div className={Tag}>{Txt}</div>;
};

export default AppTag;
