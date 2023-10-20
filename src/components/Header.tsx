import HeaderActionButton from "./HeaderActionButton";
import HeaderTitle from "./HeaderTitle";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderTitle />
      <HeaderActionButton onClick={props.onClick} />
    </HeaderWrapper>
  );
};

export default Header;
