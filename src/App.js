/// external modules ///
import React from 'react';

/// components ///
import Dashboard from 'components/Dashboard';
import Display from 'components/Display';

/// styles ///
import 'styles/App.css';

/***************************************
  COMPONENT
***************************************/
const App = () => {
  return (
    <div className='App'>
      <Display/>
      <Dashboard/>
    </div>
  );
}

/**************************************/
export default App;

export {
  App,
  init,
};
