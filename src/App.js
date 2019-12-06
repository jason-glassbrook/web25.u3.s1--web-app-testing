/// external modules ///
import React from 'react';

/// components ///
import Controls from 'components/Controls';
import Display from 'components/Display';

/// hooks ///
import baseball from 'hooks/baseball';

/// styles ///
import 'styles/App.css';

/***************************************
  COMPONENT
***************************************/
const App = () => {
  const [ game , setGame ] = baseball.useGame ();

  return (
    <div className='App'>
      <Display game={game}/>
      <Controls setGame={setGame}/>
    </div>
  );
}

/**************************************/
export default App;

export {
  App,
};
