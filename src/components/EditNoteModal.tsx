import { useState } from "react";
import Modal from "./common/Modal";
import { editNote } from "../services";
import FormGroup from "./common/FormGroup";
import FormLabel from "./common/FormLabel";
import FormInput from "./common/FormInput";
import FormTextArea from "./common/FormTextArea";

const EditNoteModal = (props) => {
  const [form, setForm] = useState({
    title: props.note.title,
    description: props.note.description,
  });

  function handleInputOnChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleAccept() {
    try {
      const id = props.note._id;
      await editNote(id, form);
      props.onEdit();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
      isOpen={props.isOpen}
      title="Edit Note"
      onAccept={handleAccept}
      onClose={props.onClose}
    >
      <FormGroup>
        <FormLabel htmlFor="title">Title</FormLabel>
        <FormInput
          type="text"
          name="title"
          id="title"
          value={form.title}
          onChange={handleInputOnChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="description">Description</FormLabel>
        <FormTextArea
          name="description"
          id="description"
          rows={5}
          value={form.description}
          onChange={handleInputOnChange}
        />
      </FormGroup>
    </Modal>
  );
};

export default EditNoteModal;
