import styled from "styled-components";

const CardNoteWrapper = styled.div`
  background: #4d4c7d;
  color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;

  > h2,
  p {
    margin: 5px;
  }

  > h2 {
    font-size: 14px;
  }

  > p {
    font-size: 13px;
  }
`;

const CardNote = (props) => {
  return (
    <CardNoteWrapper>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </CardNoteWrapper>
  );
};

export default CardNote;
