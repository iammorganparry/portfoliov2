import { Grid, Button } from "@nextui-org/react"
import React from "react"
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"

const contactMethods = [
    {
        icon: <FaEnvelope />,
        key: 'email',
        color: 'secondary',
        background: undefined as string | undefined

    },
    {
        icon: <FaLinkedin />,
        key: 'linkedin',
        color: 'secondary',
        background: '#0072b1' as string

    },
    {
        icon: <FaTwitter />,
        key: 'twitter',
        color: 'secondary',
        background: '#1DA1F2' as string
    },
    {
        icon: <FaInstagram />,
        key: 'instagram',
        color: 'secondary',
        background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);' as string
    },
    {
        icon: <FaGithub />,
        key: 'github',
        color: 'secondary',
        background: '#171515' as string

    }
] as const

export const Contact = () => {
    const handlers = (key: typeof contactMethods[number]['key']) => (e: React.MouseEvent) => {
        switch (key) {
            case 'email':
                // do email
                break;
            case 'linkedin':
                window?.open('https://www.linkedin.com/in/iammorganparry/', '_blank')
                // do linkedin
                break;

            case 'twitter':
                window?.open('https://twitter.com/iammogzz', '_blank')
                // do twitter
                break;

            case 'instagram':
                window?.open('https://www.instagram.com/iammogzz/', '_blank')
                // do instagram
                break;

            case 'github':
                window?.open('https://github.com/iammorganparry', '_blank')
                break;
            default:
                break;
        }
    }
    return (
        <Grid.Container gap={1} justify='center' alignItems='center'>
            {contactMethods.map(({ icon, key, color, background }) => (
                <Grid key={key}>
                    <Button auto color={color} css={{ background }} icon={icon} onClick={handlers(key)} />
                </Grid>
            ))}
        </Grid.Container>
    )
}