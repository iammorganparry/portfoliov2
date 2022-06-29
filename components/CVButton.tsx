import { Modal, styled, StyledButtonGroup } from "@nextui-org/react"
import { useState } from "react"
import { FaFilePdf } from "react-icons/fa"
import { MotionButton } from "./framer"
const Embed = styled('embed', {
    width: '100%',
    height: '100%',
})

export const ViewCVButton = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <StyledButtonGroup css={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MotionButton
                    whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.2 },
                    }}
                    whileHover={{
                        scale: 1.125,
                        transition: { duration: 0.35 },
                    }} size='xl' icon={<FaFilePdf size={30} />} css={{ color: '$white' }} auto onPress={() => setShowModal(true)}>View CV</MotionButton>
            </StyledButtonGroup>
            <Modal noPadding blur open={showModal} width='30%' css={{ height: '90vh' }} onClose={() => setShowModal(false)}>
                <Embed src="assets/cv.pdf" />
            </Modal>
        </>
    )
}