/// external modules ///
import React from 'react'

/// internal modules ///
import { is } from 'tools/iffy';

/***************************************
  STATES
***************************************/
const states = [
  'balls',
  'fouls',
  'hits',
  'strikes',
];
const fallback = Object.fromEntries (states.map (
  (name) => ([name, 0])
));

/***************************************
  HOOK
***************************************/
const useBaseballGame = (init) => {
  const [balls, setBalls] = React.useState (
    is (init) && is (init.balls) ? init.balls : fallback.balls
  );
  const [fouls, setFouls] = React.useState (
    is (init) && is (init.fouls) ? init.fouls : fallback.fouls
  );
  const [hits, setHits] = React.useState (
    is (init) && is (init.hits) ? init.hits : fallback.hits
  );
  const [strikes, setStrikes] = React.useState (
    is (init) && is (init.strikes) ? init.strikes : fallback.strikes
  );

  const values = { balls, fouls, hits, strikes };
  const setters = { setBalls, setFouls, setHits, setStrikes };
  const offsetters = Object.fromEntries (Object.entries (setters).map (
    ([item, setItem]) => ([
      `off${item}`,
      (x) => (setItem ((value) => (value + x)))
    ])
  ));

  return [ values, setters, offsetters ];
};

/**************************************/
export default useBaseballGame;

export {
  useBaseballGame,
};
