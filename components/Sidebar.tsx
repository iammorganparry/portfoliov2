import { Avatar, Container, Grid, Spacer, styled, Text } from "@nextui-org/react"
import { skills } from "data/skills"
import { Contact } from "./Contact"
import { ViewCVButton } from "./CVButton"
import { Skill } from "./Skill"
import { ThemeToggle } from "./ThemeToggle"


const NoScrollbarContainer = styled(Container, {
    background: 'rgba(255, 255, 255, 0.105)',
    borderRadius: 16,
    backdropFilter: 'blur(10.6px)',
    border: '1px solid rgba(255, 255, 255, 0.33)',
    boxShadow: 'rgba(74, 99, 202, 0.569) 0px 48px 100px 0px',
    w: '90%',
    p: '$10',
    overflow: 'scroll',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '98vh',
    alignContent: 'center',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
})


const ThemeToggleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
})
export const Sidebar = () => {

    return (
        <Grid xl={3.5} lg={6} sm={9} xs={12} direction='column' alignItems='center'>
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
                <ViewCVButton />
                <Spacer />
                <div>
                    {skills.map((props, index) => (
                        <Skill key={props.name} {...props} index={index} />
                    ))}
                </div>
                <Spacer />
                <ThemeToggleContainer>
                    <ThemeToggle />
                </ThemeToggleContainer>
            </NoScrollbarContainer>
        </Grid >
    )
}