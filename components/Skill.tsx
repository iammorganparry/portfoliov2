import { Card, Popover, Progress, styled, Text } from "@nextui-org/react"
import { IconType } from "react-icons"
import { HoverCard } from "./framer"

type SkillProps = {
    name: string
    level: number
    Icon: IconType
    tooltip: string
    index: number
}

const StitchesDiv = styled('div', {
    display: 'flex', flexDirection: 'row nowrap', alignItems: 'center',
    '& svg': {
        marginRight: '$5',
    }
})

export const Skill = ({ name, level, Icon, tooltip, index }: SkillProps) => {
    return (
        <Popover>
            <Popover.Trigger>
                <HoverCard
                    isPressable
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    css={{ m: '$6 0', opacity: 0 }}>
                    <Card.Body>
                        {/* <Text b css={{ display: 'inline-flex', alignItems: 'center', m: '$5 0' }}>
                    {name}
                </Text> */}
                        <StitchesDiv>
                            <Icon style={{ display: 'flex' }} size={30} />
                            <Progress shadow value={level} color='gradient' css={{ display: 'flex' }} />
                        </StitchesDiv>
                    </Card.Body>
                </HoverCard >
            </Popover.Trigger>
            <Popover.Content>
                <Card.Body>
                    <Text size={20}>{name}</Text>
                </Card.Body>
            </Popover.Content>
        </Popover>
    )
}