import React from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './Styles.module.css';
import TextareaWithLabel from './TextareaWithLabel';
import Header from './Header';
import ShowQuestionnaire from './ShowQuestionnaire';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      phone: '',
      website: '',
      birthday: '',
      personality: '',
      stack: '',
      description: '',
      submitted: false,
    };
    this.baseState = this.state;
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    console.log(this.submitted);
    console.log(this.state.firstName);
  }

  resetForm = () => {
    this.setState(this.baseState);
  };

  submitForm = () => {
    this.submitted = true;
  };

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onPhoneChange(event) {
    const x = event.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
    const value = x
      .slice(1, 5)
      .filter((item) => item !== '')
      .join('-');
    this.setState({ [event.target.id]: value });
  }

  onBlur(event) {
    this.setState({ [event.target.id]: event.target.value.trim() });
  }

  render() {
    if (this.state.submitted === false) {
      return (
        <div className={styles.container}>
          <Header />
          <form onSubmit={this.handleSubmit}>
            <InputWithLabel
              label='Name'
              labelFor='name'
              type='text'
              id='firstName'
              placeholder='Enter name'
              value={this.state.firstName}
              onChange={this.onChange}
              onBlur={this.onBlur}
              pattern='^[A-ZА-Я].*'
              title='Имя должно начинаться с большой буквы'
            />

            <InputWithLabel
              label='Surname'
              labelFor='surname'
              type='text'
              id='surname'
              placeholder='Enter surname'
              value={this.state.surname}
              onChange={this.onChange}
              onBlur={this.onBlur}
              pattern='^[A-ZА-Я].*'
              title='Фамилия должнв начинаться с большой буквы'
            />

            <InputWithLabel
              label='Date of Birth'
              labelFor='birthday'
              type='date'
              id='birthday'
              value={this.state.birthday}
              onChange={this.onChange}
            />

            <InputWithLabel
              label='Phone number'
              labelFor='phone'
              type='tel'
              id='phone'
              placeholder='Enter phone number:'
              value={this.state.phone}
              onChange={this.onPhoneChange}
              onBlur={this.onBlur}
              pattern='\d{1}-\d{4}-\d{2}-\d{2}'
              title='Телефон в формате: 7-7777-77-77'
            />

            <InputWithLabel
              label='Website:'
              labelFor='website:'
              type='url'
              id='website'
              value={this.state.website}
              onChange={this.onChange}
              onBlur={this.onBlur}
              pattern='https?://.+'
              title='Include http://'
            />

            <TextareaWithLabel
              forLabel='personality'
              label='About me:'
              id='personality'
              cols='20'
              rows='7'
              placeholder='Enter text...'
              value={this.state.personality}
              onChange={this.onChange}
              onBlur={this.onBlur}
              maxLength='600'
            />

            <TextareaWithLabel
              forLabel='stack'
              label='Technology stack'
              id='stack'
              cols='20'
              rows='7'
              placeholder='Enter text...'
              value={this.state.stack}
              onChange={this.onChange}
              onBlur={this.onBlur}
              maxLength='600'
            />

            <TextareaWithLabel
              forLabel='description'
              label='Description of the last project'
              id='description'
              cols='20'
              rows='7'
              placeholder='Enter text...'
              value={this.state.description}
              onChange={this.onChange}
              onBlur={this.onBlur}
              maxLength='600'
            />

            <div>
              <button onClick={this.resetForm} type='button'>
                Cancel
              </button>
              <button type='submit'>Save</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <ShowQuestionnaire user={this.state} />
        </div>
      );
    }
  }
}

export default Form;
