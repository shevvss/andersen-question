import React from 'react';

const TextareaWithLabel = ({
  labelFor,
  label,
  id,
  cols,
  rows,
  placeholder,
  value,
  onChange,
  onBlur,
  maxLength,
}) => {
  return (
    <div>
      <label htmlFor={labelFor}>{label}:</label>
      <br />
      <textarea
        id={id}
        cols={cols}
        rows={rows}
        required
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        maxLength={maxLength}
      />
      <div>
        {maxLength - value.length}/{maxLength} characters left
      </div>
    </div>
  );
};

export default TextareaWithLabel;
