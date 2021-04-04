import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import DialogProps from "./DialogProps";

export const Dialog = ({
  children,
  isOpen,
  onClose,
  footer,
  title
}: DialogProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            {children}
          </ModalBody>

          <ModalFooter>
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}