import React from 'react';
import stylesShow from './StylesShow.module.css';
import { Link } from 'react-router-dom';

const ShowQuestionnaire = () => {
  const {
    firstName,
    surname,
    birthday,
    phone,
    website,
    personality,
    stack,
    description,
  } = window.history.state.usr || {};
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
      <Link className={stylesShow.backLink} to='/'>
        Back
      </Link>
    </div>
  );
};

export default ShowQuestionnaire;
