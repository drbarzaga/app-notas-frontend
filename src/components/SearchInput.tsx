import styled from "styled-components";

const StyledInput = styled.input`
  padding: 14px;
  width: 450px;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const SearchInput = () => {
  return <StyledInput type="text" placeholder="Search" />;
};

export default SearchInput;
