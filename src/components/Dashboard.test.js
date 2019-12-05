/// external modules ///
/// components ///
import Dashboard from './Dashboard';

/// testers ///
import renders from 'testers/renders';

/***************************************
  TESTING
***************************************/
const what = {
  name : 'Dashboard',
  Component : Dashboard,
};

renders (what.name, what.Component);
