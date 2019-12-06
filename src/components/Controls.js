/// external modules ///
import React from 'react';

// import styled from 'styled-components';

/// components ///
import FlexRow from 'components/FlexRow';

/***************************************
  COMPONENT
***************************************/
const ControlsItem = ({ name, value }) => {
  return (
    <button className='ControlsItem'>
      increment {name}
    </button>
  );
};

const Controls = ({ game, setGame, ...props }) => {
  return (
    <FlexRow className='Controls'>{
      Object.keys (game).map ((name) => (
        <ControlsItem
        key={name}
        name={name}
        setItem={(value) => {setGame ({ [name] : value })}}
        />
      ))
    }</FlexRow>
  );
};

/**************************************/
export default Controls;

export {
  Controls,
};
