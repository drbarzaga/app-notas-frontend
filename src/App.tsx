import { useEffect, useState } from "react";
import "./App.css";
import ApplicationTitle from "./components/ApplicationTitle";
import CardNote from "./components/CardNote";
import CardNoteGrid from "./components/CardNoteGrid";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { getApiNotes } from "./services";
import { Note } from "./interfaces";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function getNotes() {
      const notes = await getApiNotes();
      setNotes(notes);
    }

    getNotes();
  }, []);

  return (
    <div>
      <div>
        <ApplicationTitle />
      </div>
      <div>
        <SearchInput />
      </div>
      <Header />
      <CardNoteGrid>
        {notes.map((note) => (
          <CardNote
            key={note._id}
            title={note.title}
            description={note.description}
          />
        ))}
      </CardNoteGrid>
    </div>
  );
}

export default App;
