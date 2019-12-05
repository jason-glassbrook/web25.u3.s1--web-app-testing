/// external modules ///
import React from 'react';
import { render } from '@testing-library/react';

/// components ///
import Dashboard from './Dashboard';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'Dashboard',
  Component : Dashboard,
};

test (`${what.name} renders without crashing`, () => {
  const component = render (<what.Component/>);
  
  component.unmount ();
});
