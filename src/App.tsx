import { useEffect, useState } from "react";
import "./App.css";
import ApplicationTitle from "./components/ApplicationTitle";
import CardNote from "./components/CardNote";
import CardNoteGrid from "./components/CardNoteGrid";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import { deleteNote, getApiNotes } from "./services";
import { Note } from "./interfaces";
import CreateNoteModal from "./components/CreateNoteModal";
import EditNoteModal from "./components/EditNoteModal";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [createNoteModalOpen, setCreateNoteModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

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

  async function handleOnEdit() {
    setNoteToEdit(null);
    await getNotes();
  }

  function handleOnEditNote(note) {
    setNoteToEdit(note);
  }

  async function handleOnRemoveNote(id: string) {
    try {
      await deleteNote(id);
      await getNotes();
    } catch (error) {
      console.error(error);
    }
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
            onEdit={() => handleOnEditNote(note)}
            onRemove={() => handleOnRemoveNote(note._id)}
          />
        ))}
      </CardNoteGrid>

      <CreateNoteModal
        isOpen={createNoteModalOpen}
        onClose={() => setCreateNoteModalOpen(false)}
        onCreate={handleOnCreate}
      />
      {noteToEdit !== null && (
        <EditNoteModal
          note={noteToEdit}
          isOpen
          onClose={() => setNoteToEdit(null)}
          onEdit={handleOnEdit}
        />
      )}
    </div>
  );
}

export default App;
