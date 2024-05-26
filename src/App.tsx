import React from 'react';
import CalendarComp from './lib/component/CalendarCom';

import Sidebar from './lib/component/Sidebar';

const App: React.FC = () => {
  return (
    <div>
      {/* <h1 className='text-primary'>Hello, World!</h1> */}
      <CalendarComp />
      {/* <Sidebar /> */}
    </div>
  );
};

export default App;
