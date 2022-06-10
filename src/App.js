import React from 'react';
import './App.css';
import Header from './Questionnaire/Header';
import Form from './Questionnaire/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

export default App;