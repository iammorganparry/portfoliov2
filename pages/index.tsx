import { styled, Text, Image, User, Grid, Container, Button, Link, Spacer, Card, Progress, Row } from '@nextui-org/react'
import Layout from '../components/Layout'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { ExperienceCard } from 'components/ExperienceCard'
import { skills } from 'data/skills'
import { Skill } from 'components/Skill'
import { Sidebar } from 'components/Sidebar'

const IndexPage = () => {
  return (
    <Layout title="Morgan Parry | Portfolio">

      <Grid sm={8} direction='column' alignItems='flex-start' css={{
        height: '95vh', overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        <Row>
          <Grid xs={12}>
            <Text h5 size={50}>Experience</Text>
          </Grid>
        </Row>
        <Row>
          <Grid.Container gap={3}>
            <Grid lg={4}>
              <ExperienceCard index={0} date='Jun 2021 - Present' companyUrl='selligence.com' jobTitle='Full Stack Developer' company='Selligence' logo='https://logo.clearbit.com/selligence.com' description={`
        Talent Ticker Website

        - Implemented centralised auth to ensure a seamless experience across applications using Auth0
        - Responsible for the creation and implementation of many major features including Talent Sourcing and Email Messaging
        - Improved and configured many third party integrations to the platform, including bullhorn, outlook, Gmail and others
        - Tech stack: React | Typescript | Python | AWS Lambda | NextJS | Vercel | Third Party API's
        `} />
            </Grid>
            <Grid lg={4}>
              <ExperienceCard index={1} date='Jun 2021 - Present' companyUrl='selligence.com' jobTitle='Full Stack Developer' company='Selligence' logo='https://logo.clearbit.com/selligence.com' description={`
        Talent Ticker Website

        - Implemented centralised auth to ensure a seamless experience across applications using Auth0
        - Responsible for the creation and implementation of many major features including Talent Sourcing and Email Messaging
        - Improved and configured many third party integrations to the platform, including bullhorn, outlook, Gmail and others
        - Tech stack: React | Typescript | Python | AWS Lambda | NextJS | Vercel | Third Party API's
        `} />
            </Grid>
            <Grid lg={4}>
              <ExperienceCard index={2} date='Jun 2021 - Present' companyUrl='selligence.com' jobTitle='Full Stack Developer' company='Selligence' logo='https://logo.clearbit.com/selligence.com' description={`
        Talent Ticker Website

        - Implemented centralised auth to ensure a seamless experience across applications using Auth0
        - Responsible for the creation and implementation of many major features including Talent Sourcing and Email Messaging
        - Improved and configured many third party integrations to the platform, including bullhorn, outlook, Gmail and others
        - Tech stack: React | Typescript | Python | AWS Lambda | NextJS | Vercel | Third Party API's
        `} />
            </Grid>
          </Grid.Container>
        </Row>


      </Grid>
    </Layout >
  )
}

export default IndexPage
