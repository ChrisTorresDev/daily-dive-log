import React from 'react';
import './App.css';
import Checklist from './Components/Checklist';
import WorkingDiver from './Components/WorkingDiver';
import Standby from './Components/Standby';
import PostDive from './Components/PostDive';
import Review from './Components/Review';

function App() {
  return (
    <div className="App">
      <form>
        <Checklist />
        <WorkingDiver />
        <Standby />
        <PostDive />
        <Review />
      </form>
    </div>
  );
}

export default App;

