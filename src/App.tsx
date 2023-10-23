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
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [searchTerm, setSerarchTerm] = useState("");
  const [createNoteModalOpen, setCreateNoteModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  async function getNotes() {
    const notes = await getApiNotes();
    setNotes(notes);
  }

  function getFilteredNotes() {
    const filteredNotes = notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    return filteredNotes;
  }

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredNotes = getFilteredNotes();
      setFilteredNotes(filteredNotes);
    }
  }, [searchTerm]);

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
        <SearchInput onSearch={(value) => setSerarchTerm(value)} />
      </div>
      <Header onClick={() => setCreateNoteModalOpen(true)} />
      <CardNoteGrid>
        {(filteredNotes.length > 0 && searchTerm !== ""
          ? [...filteredNotes]
          : [...notes]
        ).map((note) => (
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
