import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ModifyProposalGrid from "templates/components/ModifyProposalGrid";

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

        <ModalFooter>
          <Button colorScheme="teal" mr={4}>
            Submit
          </Button>
          <Button onClick={onClose} colorScheme="red" mr={4}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModifyProposalModal;
