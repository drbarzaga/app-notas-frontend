import styled from "styled-components";

const CardNoteGridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
`;

const CardNoteGrid = (props) => {
  return <CardNoteGridWrapper>{props.children}</CardNoteGridWrapper>;
};

export default CardNoteGrid;
