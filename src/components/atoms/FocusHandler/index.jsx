import React from 'react';
import './style.scss';

export default ({ text, targetRef }) => {
  const delegateClick = () => {
    targetRef && targetRef.current && targetRef.current.click();
  };

  return <button className="focusable" title={text} onClickCapture={() => delegateClick()} />;
};
