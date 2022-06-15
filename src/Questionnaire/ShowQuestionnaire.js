import React from 'react';

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
      <>
        <h1>
          {firstName} {surname}
        </h1>
        <p>Date of Birth: {birthday}</p>
        <p>Phone number: {phone}</p>
        <p>Website: {website}</p>
        <p>About me: {personality}</p>
        <p>Technology stack: {stack}</p>
        <p>Description of the last project: {description}</p>
      </>
    );
  }
}

export default ShowQuestionnaire;
