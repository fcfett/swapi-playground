import React from 'react';

const getPropsValues = (props) => {
  const name = props.name ? `#svg-icon-${props.name}` : null;
  const height = props.height || 512;
  const width = props.width || 512;
  const className = props.className;
  return { name, height, width, className };
};

const Icon = (props) => {
  const { className, name, height, width } = getPropsValues(props);
  return (
    name && (
      <svg className={className} height={height} width={width}>
        <use xlinkHref={name}></use>
      </svg>
    )
  );
};

export default Icon;
