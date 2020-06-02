/// components ///
import Display from './Display';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'Display',
  Component : Display,
};

renders (what.name, what.Component);
