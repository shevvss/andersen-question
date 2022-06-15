import React from 'react';

class TextareaWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.onChange = this.onChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.onBlur = this.onBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ count: event.target.value.length });
    this.props.onChange(event);
  }

  render() {
    const {
      labelFor,
      label,
      id,
      cols,
      rows,
      placeholder,
      value,
      onBlur,
      maxLength,
    } = this.props;

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
          onChange={this.handleChange}
          maxLength={maxLength}
        ></textarea>
        <p>
          Осталось {maxLength - this.state.count}/{maxLength} символов
        </p>
      </div>
    );
  }
}

export default TextareaWithLabel;
