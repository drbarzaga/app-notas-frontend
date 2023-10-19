import styled from "styled-components";

const CardNoteWrapper = styled.div`
  background: #4d4c7d;
  color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const CardNoteBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  > h2,
  p {
    margin: 5px;
  }

  > h2 {
    font-size: 16px;
  }

  > p {
    font-size: 15px;
  }
`;

const CardNoteFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;

  a {
    text-transform: uppercase;
    color: #f5f5f5;
    font-size: 14px;
  }
`;

const CardNote = (props) => {
  return (
    <CardNoteWrapper>
      <CardNoteBody>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </CardNoteBody>
      <CardNoteFooter>
        <a href="">Edit</a>
        <a href="">Remove</a>
      </CardNoteFooter>
    </CardNoteWrapper>
  );
};

export default CardNote;
