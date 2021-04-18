import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ModifyProposalGrid from "templates/coordinategrid/components/ModifyProposalGrid";

const ModifyProposalModal = ({
  isOpen,
  onClose,
  mostRecentSolutionCoordinates,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modify Proposal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModifyProposalGrid
            mostRecentSolutionCoordinates={mostRecentSolutionCoordinates}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModifyProposalModal;
