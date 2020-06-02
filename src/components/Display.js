/// external modules ///
import React from 'react';
// import styled from 'styled-components';

/// components ///
import FlexRow from 'components/FlexRow';
import FlexCol from 'components/FlexCol';

/***************************************
  COMPONENT
***************************************/
const DisplayItem = ({ name, value, ...props }) => {
  return (
    <FlexCol className='DisplayItem'>
      <header>{name}</header>
      <main>{value}</main>
    </FlexCol>
  );
};

const Display = ({ values, ...props }) => {
  return (
    <FlexRow className='Display'>{
      Object.entries (values).map (([name, value]) => (
        <DisplayItem
        key={name}
        name={name}
        value={value}
        />
      ))
    }</FlexRow>
  );
};

/**************************************/
export default Display;

export {
  Display,
  DisplayItem,
};
