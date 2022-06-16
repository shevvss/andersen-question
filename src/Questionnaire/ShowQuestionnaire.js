import React from 'react';
import stylesShow from './StylesShow.module.css';

class ShowQuestionnaire extends React.Component {
  render() {
    const {
      firstName,
      surname,
      birthday,
      phone,
      website,
      personality,
      stack,
      description,
    } = this.props.user;
    return (
      <div className={stylesShow.container}>
        <h1 className={stylesShow.header}>
          {' '}
          {firstName} {surname}
        </h1>
        <p>Date of Birth: {birthday}</p>
        <p>Phone number: {phone}</p>
        <p>Website: {website}</p>
        <p>About me: {personality}</p>
        <p>Technology stack: {stack}</p>
        <p>Description of the last project: {description}</p>
      </div>
    );
  }
}

export default ShowQuestionnaire;
