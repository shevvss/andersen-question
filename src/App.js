import React from 'react';
import './App.css';
import Form from './Components/Form/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowQuestionnaire from './Components/Show/ShowQuestionnaire';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/show' element={<ShowQuestionnaire />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
