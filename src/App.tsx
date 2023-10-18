import "./App.css";
import ApplicationTitle from "./components/ApplicationTitle";
import CardNote from "./components/CardNote";
import CardNoteGrid from "./components/CardNoteGrid";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 700px;
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
      <CardNoteGrid>
        <CardNote title="Learn React" description="Description" />
        <CardNote title="Learn VueJs" description="Description 222" />
        <CardNote title="Learn React" description="Description" />
        <CardNote title="Learn VueJs" description="Description 222" />
      </CardNoteGrid>
    </AppWrapper>
  );
}

export default App;
