import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Center, Icon, ModalProps } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { FaXTwitter } from "react-icons/fa6"

interface IModalComp {
    children: ReactNode
    isOpen: boolean,
    onClose: VoidFunction
}

export const ModalComp: React.FC<IModalComp> = ({ children, isOpen, onClose }) => {
    return (
        <Modal size={{ base: 'full', sm: 'full', md: 'xl'}} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"20px"}>
          <ModalCloseButton />
          <ModalHeader>
            <Center>
                <Icon w={'30px'} h={'30px'} as={FaXTwitter} />
            </Center>
          </ModalHeader>
          { children }
        </ModalContent>
        </Modal>
    )
}