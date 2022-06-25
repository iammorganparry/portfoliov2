import { Card, Progress, Text } from "@nextui-org/react"
import { IconType } from "react-icons"
import { HoverCard } from "./framer"

type SkillProps = {
    name: string
    level: number
    Icon: IconType
    tooltip: string
    index: number
}

export const Skill = ({ name, level, Icon, tooltip, index }: SkillProps) => {
    return (
        <HoverCard animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            css={{ m: '$6 0', opacity: 0 }}>
            <Card.Body>
                <Text css={{ display: 'inline-flex', alignItems: 'center', m: '0 $5' }}>
                    <Icon style={{ display: 'inline-flex' }} size={30} />
                    {name}
                </Text>
                <Progress shadow value={level} color='gradient' />
            </Card.Body>
        </HoverCard>
    )
}