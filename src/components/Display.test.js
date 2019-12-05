/// external modules ///
import React from 'react';
import { render } from '@testing-library/react';

/// internal modules ///
import Display from './Display';

/***************************************
  TEST
***************************************/
const what = {
  name : 'Display',
  Component : Display,
};

test (`${what.name} renders without crashing`, () => {
  const component = render (<what.Component/>);
  
  component.unmount ();
});
