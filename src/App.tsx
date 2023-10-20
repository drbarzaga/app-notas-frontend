import { useEffect, useState } from "react";
import "./App.css";
import ApplicationTitle from "./components/ApplicationTitle";
import CardNote from "./components/CardNote";
import CardNoteGrid from "./components/CardNoteGrid";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { getApiNotes } from "./services";
import { Note } from "./interfaces";
import CreateNoteModal from "./components/CreateNoteModal";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [createNoteModalOpen, setCreateNoteModalOpen] = useState(false);

  async function getNotes() {
    const notes = await getApiNotes();
    setNotes(notes);
  }

  useEffect(() => {
    getNotes();
  }, []);

  async function handleOnCreate() {
    setCreateNoteModalOpen(false);
    await getNotes();
  }

  return (
    <div>
      <div>
        <ApplicationTitle />
      </div>
      <div>
        <SearchInput />
      </div>
      <Header onClick={() => setCreateNoteModalOpen(true)} />
      <CardNoteGrid>
        {notes.map((note) => (
          <CardNote
            key={note._id}
            title={note.title}
            description={note.description}
          />
        ))}
      </CardNoteGrid>

      <CreateNoteModal
        isOpen={createNoteModalOpen}
        onClose={() => setCreateNoteModalOpen(false)}
        onCreate={handleOnCreate}
      />
    </div>
  );
}

export default App;
