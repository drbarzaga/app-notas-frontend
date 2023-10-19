import styled from "styled-components";

const CardNoteGridWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardNoteGrid = (props) => {
  return (
    <CardNoteGridWrapper className="grid">{props.children}</CardNoteGridWrapper>
  );
};

export default CardNoteGrid;
