/// external modules ///
import React from 'react';
import { render } from '@testing-library/react';

/// components ///
import App from './App';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'App',
  Component : App,
};

test (`${what.name} renders without crashing`, () => {
  const component = render (<what.Component/>);
  
  component.unmount ();
});
