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
  code: string[],
  fig: string,
  isOpen: boolean,
  onClose: () => void,
  title: string,
};

export const DataGraphModal = ({
  code,
  fig,
  isOpen,
  onClose,
  title
}: DataGraphModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}>
          <Image borderRadius={5} src={fig} width={"100%"} />
          <Stack marginY={5} spacing={2} width={"80%"}>
            {code.map((e, i) => <Code children={e} key={i} /> )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme={"pink"} marginRight={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
