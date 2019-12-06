/// external modules ///
import styled from 'styled-components';

/***************************************
  COMPONENT
***************************************/
const FlexRow = styled.div `
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: stretch;
`;

/**************************************/
export default FlexRow;

export {
  FlexRow,
};
