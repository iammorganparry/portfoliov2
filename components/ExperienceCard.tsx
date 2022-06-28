import { Card, Grid, Link, Text } from "@nextui-org/react"
import { HoverCard } from "./framer"
type ExperienceCardProps = {
    company: string
    date: string
    jobTitle: string
    description: string
    logo: string
    companyUrl: string
    index: number
}


export const ExperienceCard = ({ company, description, logo, companyUrl, index }: ExperienceCardProps) => {

    return (
        <HoverCard
            whileHover={{
                scale: 1.025,
                transition: { duration: 0.35 },
            }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            css={{
                // p: "$6",
                opacity: 0,
                background: '$dark100',
                borderRadius: 16,
                backdropFilter: 'blur(10.6px)',
                border: '1px solid rgba(255, 255, 255, 0.33)',
            }}
            isPressable
        >
            <Card.Image
                src='images/selligenceBanner.jpeg'
                objectFit="cover"
                width="100%"
                height={200}
                alt="Selligence Banner"
            />
            <Card.Header>
                <img
                    alt={`${company} logo`}
                    src={logo}
                    width="34px"
                    height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            {company}
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>{companyUrl}</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    {description}
                </Text>
            </Card.Body>
            <Card.Footer>
                <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </Card.Footer>
        </HoverCard>
    )
}