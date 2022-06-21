import React from 'react';

const InputWithLabel = ({
  labelFor,
  label,
  type,
  id,
  placeholder,
  value,
  onBlur,
  onChange,
  pattern,
  title,
}) => {
  return (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <input
        type={type}
        id={id}
        required
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        pattern={pattern}
        title={title}
      />
    </div>
  );
};

export default InputWithLabel;
