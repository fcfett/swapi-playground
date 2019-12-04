import React from 'react';
import './style.scss';

export default (props) => {
  const { id, leftLabel, rightLabel, title, checked, onChange } = props;
  return (
    <section className="row input-toggle">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span className={`brushed ${!checked ? 'yoda' : ''}`}>{leftLabel}</span>
      <label className="toggle" title={title} htmlFor={id} />
      <span className={`brushed ${checked ? 'sith' : ''}`}>{rightLabel}</span>
    </section>
  );
};
