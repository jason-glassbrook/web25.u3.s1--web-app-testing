/// external modules ///
/// components ///
import Controls from './Controls';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'Controls',
  Component : Controls,
};

renders (what.name, what.Component);
