import React from 'react';
import './App.css';
import Form from './Components/Form/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowQuestionnaire from './Components/Show/ShowQuestionnaire';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/show' element={<ShowQuestionnaire />} />
        <Route path='*' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
