/// external modules ///
import React from 'react';

// import styled from 'styled-components';

/// components ///
import FlexRow from 'components/FlexRow';

/***************************************
  COMPONENT
***************************************/
const ControlsItem = ({ name, offset }) => {
  return (
    <button
    className='ControlsItem'
    onClick={offset}
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
        offset={(x) => {offsetters[name] (x)}}
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
