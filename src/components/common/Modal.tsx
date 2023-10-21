import styled from "styled-components";
import FormButton from "./FormButton";

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 27px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  border-radius: 7px;
  background: #f5f5f5;

  display: flex;
  width: 427px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const Title = styled.h3`
  color: #f99417;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin: 0px;
  text-align: left;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 5px;
`;

const Modal = (props) => {
  if (!props.isOpen) return null;

  return (
    <>
      <Overlay onClick={props.onClose} />
      <ModalWrapper>
        {props.title && <Title>{props.title}</Title>}
        {props.children}
        <Footer>
          <FormButton onClick={props.onAccept}>Aceptar</FormButton>
          <FormButton cancel onClick={props.onClose}>
            Cancelar
          </FormButton>
        </Footer>
      </ModalWrapper>
    </>
  );
};

export default Modal;
