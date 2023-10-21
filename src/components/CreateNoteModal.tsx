import { useState } from "react";
import Modal from "./common/Modal";
import { createNote } from "../services";
import FormGroup from "./common/FormGroup";
import FormLabel from "./common/FormLabel";
import FormInput from "./common/FormInput";
import FormTextArea from "./common/FormTextArea";

const CreateNoteModal = (props) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
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
      await createNote(form);
      props.onCreate();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
      isOpen={props.isOpen}
      title="Create Note"
      onAccept={handleAccept}
      onClose={props.onClose}
    >
      <FormGroup>
        <FormLabel htmlFor="title">Title</FormLabel>
        <FormInput
          type="text"
          name="title"
          id="title"
          onChange={handleInputOnChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="description">Description</FormLabel>
        <FormTextArea
          name="description"
          id="description"
          rows={5}
          onChange={handleInputOnChange}
        ></FormTextArea>
      </FormGroup>
    </Modal>
  );
};

export default CreateNoteModal;
