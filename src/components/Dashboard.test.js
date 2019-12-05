/// external modules ///
import React from 'react';
import { render } from '@testing-library/react';

/// internal modules ///
import Dashboard from './Dashboard';

/***************************************
  TEST
***************************************/
const what = {
  name : 'Dashboard',
  Component : Dashboard,
};

test (`${what.name} renders without crashing`, () => {
  const component = render (<what.Component/>);
  
  component.unmount ();
});
