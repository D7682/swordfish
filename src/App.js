import React from 'react';
import './App.css';
import TodaysPlan from './components/TodaysPlan';
import AuthorizationForm from './components/AuthorizationForm';

function App() {
  return (
    <div className="App">
      <TodaysPlan />
      <AuthorizationForm />
    </div>
  );
}

export default App;
