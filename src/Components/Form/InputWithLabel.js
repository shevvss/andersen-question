import React from 'react';

class InputWithLabel extends React.Component {
  render() {
    const {
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
    } = this.props;

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
  }
}

export default InputWithLabel;
