import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './Styles.module.css';
import TextareaWithLabel from './TextareaWithLabel';
import Header from '../Header/Header';
import ShowQuestionnaire from '../Show/ShowQuestionnaire';

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.userState = {
// firstName: '',
// surname: '',
// phone: '',
// website: '',
// birthday: '',
// personality: '',
// stack: '',
// description: '',
// submitted: false,
//     };

//   this.baseState = Object.assign({}, this.userState);
//   this.onChange = this.onChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
//   this.onBlur = this.onBlur.bind(this);
//   this.onPhoneChange = this.onPhoneChange.bind(this);
// }

// handleSubmit(event) {
//   event.preventDefault();
//   this.setState({ submitted: true });
// }

// resetForm = () => {
//   this.setState(this.baseState);
// };

// onChange(event) {
//   this.setState({ [event.target.id]: event.target.value });
// }

// onPhoneChange(event) {
//   const mask = event.target.value
//     .replace(/\D/g, '')
//     .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
//   const value = mask
//     .slice(1, 5)
//     .filter((item) => item !== '')
//     .join('-');
//   this.setState({ [event.target.id]: value });
// }

// onBlur(event) {
//   this.setState({ [event.target.id]: event.target.value.trim() });
// }

//   render() {
// if (!this.userState.submitted) {
//   return (
//     <div className={styles.container}>
//       <Header />
//       <form onSubmit={this.handleSubmit}>
//         <InputWithLabel
//           label='Name'
//           labelFor='name'
//           type='text'
//           id='firstName'
//           placeholder='Enter name'
//           value={this.userState.firstName}
//           onChange={this.onChange}
//           onBlur={this.onBlur}
//           pattern='^[A-ZА-Я].*'
//           title='Name should start with a capital letter'
//         />

//         <InputWithLabel
//           label='Surname'
//           labelFor='surname'
//           type='text'
//           id='surname'
//           placeholder='Enter surname'
//           value={this.userState.surname}
//           onChange={this.onChange}
//           onBlur={this.onBlur}
//           pattern='^[A-ZА-Я].*'
//           title='Surname should start with a capital letter'
//         />

//         <InputWithLabel
//           label='Date of Birth'
//           labelFor='birthday'
//           type='date'
//           id='birthday'
//           value={this.userState.birthday}
//           onChange={this.onChange}
//         />

//         <InputWithLabel
//           label='Phone number'
//           labelFor='phone'
//           type='tel'
//           id='phone'
//           placeholder='Enter phone number:'
//           value={this.userState.phone}
//           onChange={this.onPhoneChange}
//           onBlur={this.onBlur}
//           pattern='\d{1}-\d{4}-\d{2}-\d{2}'
//           title='Number in the format: 7-7777-77-77'
//         />

//         <InputWithLabel
//           label='Website:'
//           labelFor='website'
//           type='url'
//           id='website'
//           value={this.userState.website}
//           onChange={this.onChange}
//           onBlur={this.onBlur}
//           pattern='https?://.+'
//           title='Include http://'
//         />

//         <TextareaWithLabel
//           label='About me'
//           forLabel='personality'
//           id='personality'
//           cols='20'
//           rows='7'
//           placeholder='Enter text...'
//           value={this.userState.personality}
//           onChange={this.onChange}
//           onBlur={this.onBlur}
//           maxLength='600'
//         />

//         <TextareaWithLabel
//           label='Technology stack'
//           forLabel='stack'
//           id='stack'
//           cols='20'
//           rows='7'
//           placeholder='Enter text...'
//           value={this.userState.stack}
//           onChange={this.onChange}
//           onBlur={this.onBlur}
//           maxLength='600'
//         />

//         <TextareaWithLabel
//           label='Description of the last project'
//           forLabel='description'
//           id='description'
//           cols='20'
//           rows='7'
//           placeholder='Enter text...'
//           value={this.userState.description}
//           onChange={this.onChange}
//           onBlur={this.onBlur}
//           maxLength='600'
//         />

//         <div>
//           <button onClick={this.resetForm} type='button'>
//             Cancel
//           </button>
//           <button type='submit'>Save</button>
//         </div>
//       </form>
//     </div>
//   );
// } else {
//   return (
//     <div className={styles.container}>
//       <ShowQuestionnaire user={this.userState} />
//     </div>
//   );
//     }
//   }
// }

const Form = () => {
  const [userState, setState] = useState({
    firstName: '',
    surname: '',
    phone: '',
    website: '',
    birthday: '',
    personality: '',
    stack: '',
    description: '',
    submitted: false,
  });

  const baseState = Object.assign({}, userState);

  const handleSubmit = (event) => {
    event.preventDefault();
    setState((userState) => ({
      ...userState,
      submitted: true,
    }));
  };

  const resetForm = () => {
    setState(baseState);
  };
  // debugger;
  const onChange = (event) => {
    setState((userState) => ({
      ...userState,
      [event.target.id]: event.target.value,
    }));
  };

  const onPhoneChange = (event) => {
    const mask = event.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
    const value = mask
      .slice(1, 5)
      .filter((item) => item !== '')
      .join('-');
    setState((userState) => ({
      ...userState,
      [event.target.id]: value,
    }));
  };

  const onBlur = (event) => {
    setState((userState) => ({
      ...userState,
      [event.target.id]: event.target.value.trim(),
    }));
  };

  if (!userState.submitted) {
    return (
      <div className={styles.container}>
        <Header />
        <form onSubmit={handleSubmit}>
          <InputWithLabel
            label='Name'
            labelFor='name'
            type='text'
            id='firstName'
            placeholder='Enter name'
            value={userState.firstName}
            onChange={onChange}
            onBlur={onBlur}
            pattern='^[A-ZА-Я].*'
            title='Name should start with a capital letter'
          />

          <InputWithLabel
            label='Surname'
            labelFor='surname'
            type='text'
            id='surname'
            placeholder='Enter surname'
            value={userState.surname}
            onChange={onChange}
            onBlur={onBlur}
            pattern='^[A-ZА-Я].*'
            title='Surname should start with a capital letter'
          />

          <InputWithLabel
            label='Date of Birth'
            labelFor='birthday'
            type='date'
            id='birthday'
            value={userState.birthday}
            onChange={onChange}
          />

          <InputWithLabel
            label='Phone number'
            labelFor='phone'
            type='tel'
            id='phone'
            placeholder='Enter phone number:'
            value={userState.phone}
            onChange={onPhoneChange}
            onBlur={onBlur}
            pattern='\d{1}-\d{4}-\d{2}-\d{2}'
            title='Number in the format: 7-7777-77-77'
          />

          <InputWithLabel
            label='Website:'
            labelFor='website'
            type='url'
            id='website'
            value={userState.website}
            onChange={onChange}
            onBlur={onBlur}
            pattern='https?://.+'
            title='Include http://'
          />

          <TextareaWithLabel
            label='About me'
            forLabel='personality'
            id='personality'
            cols='20'
            rows='7'
            placeholder='Enter text...'
            value={userState.personality}
            onChange={onChange}
            onBlur={onBlur}
            maxLength='600'
          />

          <TextareaWithLabel
            label='Technology stack'
            forLabel='stack'
            id='stack'
            cols='20'
            rows='7'
            placeholder='Enter text...'
            value={userState.stack}
            onChange={onChange}
            onBlur={onBlur}
            maxLength='600'
          />

          <TextareaWithLabel
            label='Description of the last project'
            forLabel='description'
            id='description'
            cols='20'
            rows='7'
            placeholder='Enter text...'
            value={userState.description}
            onChange={onChange}
            onBlur={onBlur}
            maxLength='600'
          />

          <div>
            <button onClick={resetForm} type='button'>
              Cancel
            </button>
            <button type='submit'>Save</button>
          </div>
        </form>
      </div>
    );
  } else {
    debugger;
    return (
      <div className={styles.container}>
        <ShowQuestionnaire user={userState} />
      </div>
    );
  }
};

export default Form;
