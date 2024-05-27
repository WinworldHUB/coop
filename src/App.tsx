import React from 'react';
import CalendarComp from './lib/component/CalendarCom';
import Sidebar from './lib/component/Sidebar';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <div>
      {/* <h1 className='text-primary'>Hello, World!</h1> */}
      <CalendarComp />
      {/* <Sidebar /> */}
      {/* <SignIn /> */}
      {/* <Register /> */}
    </div>
  );
};

export default App;
