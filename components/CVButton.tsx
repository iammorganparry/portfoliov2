import { Modal, styled, StyledButtonGroup } from "@nextui-org/react"
import { useState } from "react"
import { FaFilePdf } from "react-icons/fa"
import { MotionButton } from "./framer"
const Embed = styled('embed', {
    width: '100%',
    height: '100vh',
})

const CVBtn = styled(MotionButton, {
    opacity: 0
})

export const ViewCVButton = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <StyledButtonGroup css={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CVBtn
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            ease: 'easeInOut',
                            delay: 0.5
                        }

                    }}
                    whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.2 },
                    }}
                    whileHover={{
                        scale: 1.125,
                        transition: { duration: 0.35 },
                    }} size='xl'
                    icon={<FaFilePdf size={30} />}
                    css={{ color: '$white' }}
                    auto
                    onPress={() => setShowModal(true)}>View CV</CVBtn>
            </StyledButtonGroup>
            <Modal
                blur
                scroll
                noPadding
                autoMargin
                width="50%"
                open={showModal} css={{
                    height: '90vh',
                }} onClose={() => setShowModal(false)}
            >
                <Embed src="assets/cv.pdf" />
            </Modal>
        </>
    )
}