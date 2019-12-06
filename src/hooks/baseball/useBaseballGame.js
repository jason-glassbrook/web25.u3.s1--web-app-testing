/// external modules ///
import React from 'react'

/// internal modules ///
import { is } from 'tools/iffy';

/***************************************
  STATES
***************************************/
const fallback = {
  'balls'   : 0,
  'fouls'   : 0,
  'hits'    : 0,
  'strikes' : 0,
};

/***************************************
  HOOK
***************************************/
const useBaseballGame = (init) => {
  const [balls, setBalls ] = React.useState (
    is (init) && is (init.balls) ? init.balls : fallback.balls
  );
  const [fouls, setFouls ] = React.useState (
    is (init) && is (init.fouls) ? init.fouls : fallback.fouls
  );
  const [hits, setHits ] = React.useState (
    is (init) && is (init.hits) ? init.hits : fallback.hits
  );
  const [strikes, setStrikes] = React.useState (
    is (init) && is (init.strikes) ? init.strikes : fallback.strikes
  );

  const game = { balls, fouls, hits, strikes };
  const setGame = ({ balls, fouls, hits, strikes }) => {
    if (is (balls))   { setBalls   (balls); }
    if (is (fouls))   { setFouls   (fouls); }
    if (is (hits))    { setHits    (hits); }
    if (is (strikes)) { setStrikes (strikes); }
  };

  return [game, setGame];
};

/**************************************/
export default useBaseballGame;

export {
  useBaseballGame,
};
