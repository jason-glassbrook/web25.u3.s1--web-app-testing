/// external modules ///
import React from 'react';

// import styled from 'styled-components';

/// components ///
import FlexRow from 'components/FlexRow';

/***************************************
  COMPONENT
***************************************/
const ControlsItem = ({ name, offsetter, ...props }) => {
  return (
    <button
    className='ControlsItem'
    onClick={offsetter}
    >
      increment {name}
    </button>
  );
};

const Controls = ({ values, offsetters, ...props }) => {
  return (
    <FlexRow className='Controls'>{
      Object.keys (values).map ((name) => (
        <ControlsItem
        key={name}
        name={name}
        offsetter={(event) => {offsetters[name] (1)}}
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
