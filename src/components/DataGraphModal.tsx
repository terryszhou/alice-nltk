import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Code,
  Stack,
} from '@chakra-ui/react'
import * as React from "react"

interface DataGraphModalProps {
  fig: string,
  code: string[],
  isOpen: boolean,
  onClose: () => void,
  title: string,
};

export const DataGraphModal = ({ code, fig, isOpen, onClose, title }: DataGraphModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody alignItems={"center"} display={"flex"} flexDirection={"column"}>
          <Image src={fig} width={"100%"} />
          <Stack marginY={5} spacing={2} width={"80%"}>
            {code.map((e, i) => <Code children={e} key={i} /> )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme={"blue"} mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
