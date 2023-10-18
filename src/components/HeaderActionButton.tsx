import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 7px;
  background: #363062;
  color: #f5f5f5;
  text-transform: uppercase;
`;

const HeaderActionButton = () => {
  return <StyledButton>New Note</StyledButton>;
};

export default HeaderActionButton;
