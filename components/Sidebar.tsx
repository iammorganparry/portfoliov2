import { Grid, Container, Spacer, Text, Avatar, styled } from "@nextui-org/react"
import { skills } from "data/skills"
import { Contact } from "./Contact"
import { Skill } from "./Skill"


const NoScrollbarContainer = styled(Container, {
    background: 'rgba(255, 255, 255, 0.105)',
    borderRadius: 16,
    backdropFilter: 'blur(10.6px)',
    // border: '1px solid rgba(255, 255, 255, 0.33)',
    w: '90%',
    p: '$10',
    overflow: 'scroll',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
})
export const Sidebar = () => {

    return (
        <Grid xl={4} lg={6} sm={9} xs={12} direction='column' alignItems='center'>
            <NoScrollbarContainer>
                <Grid.Container gap={1} alignItems="flex-start" css={{ p: '$11' }}>
                    <Grid>
                        <Avatar
                            src='images/profilepic.jpeg'
                            alt='Morgan Parry'

                            size='xl'
                            css={{
                                borderRadius: 150,
                                width: 150,
                                height: 150
                            }}
                        />
                    </Grid>
                    <Grid>
                        <Text size={40} h1 css={{
                            marginBottom: -20,
                        }}>Morgan Parry</Text>
                        <Spacer y={1} />
                        <Text size={20} weight='medium' h2 css={{
                            // marginBottom: -20,
                        }}>Full Stack Developer</Text>
                        <Contact />
                    </Grid>
                </Grid.Container>
                <Spacer y={1} />

                <Spacer />
                <div>
                    {skills.map((props, index) => (
                        <Skill key={props.name} {...props} index={index} />
                    ))}
                </div>
            </NoScrollbarContainer>
        </Grid >
    )
}