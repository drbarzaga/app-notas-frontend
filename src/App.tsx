import "./App.css";
import ApplicationTitle from "./components/ApplicationTitle";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 500px;
`;

function App() {
  return (
    <AppWrapper>
      <div>
        <ApplicationTitle />
      </div>
      <div>
        <SearchInput />
      </div>
      <Header />
    </AppWrapper>
  );
}

export default App;
