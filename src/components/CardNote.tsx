import styled from "styled-components";

const CardNoteWrapper = styled.div`
  background: #4d4c7d;
  color: #f5f5f5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
`;

const ActionButton = styled.a<{ isRemove?: boolean }>`
  text-transform: uppercase;
  color: ${(props: any) => (props.isRemove ? "#F99417" : "#f5f5f5")};
  font-size: 14px;

  &:hover {
    text-decoration: underline;
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
        <ActionButton
          href=""
          onClick={(e) => {
            e.preventDefault();
            props.onEdit();
          }}
        >
          Edit
        </ActionButton>
        <ActionButton
          href=""
          isRemove
          onClick={(e) => {
            e.preventDefault();
            props.onRemove();
          }}
        >
          Remove
        </ActionButton>
      </CardNoteFooter>
    </CardNoteWrapper>
  );
};

export default CardNote;
