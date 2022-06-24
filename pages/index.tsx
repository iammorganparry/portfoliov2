import { styled, Text, Image, User, Grid, Container, Button, Link, Spacer, Card } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiTypescript, SiPython, SiReact, SiHtml5, SiCss3, SiGo } from 'react-icons/si'

const IndexPage = () => (
  <Layout title="Morgan Parry | Portfolio">
    <Grid.Container gap={3} justify='center' css={{ height: '100vh' }}>
      <Grid sm={3} direction='column' alignItems='center' css={{ background: '$accents0', height: '100vh' }}>
        <Image
          src='images/profilepic.jpeg'
          alt='Morgan Parry'
          width='100%'
          height={250}
          objectFit="none"
          css={{
            borderRadius: '$lg'
          }}
        />
        <Text size={45} h1 css={{
          marginBottom: -20,
          textGradient: "45deg, $red600 -20%, $yellow600 50%",
        }}>Morgan Parry</Text>
        <Spacer y={1} />
        <Link href='mailto:morgan@iammorganparry.com'>morgan@iammorganparry.com</Link>
        <Spacer />
        <Grid.Container gap={1} justify='center' alignItems='center'>
          <Grid>
            <Button auto css={{ background: '#0072b1' }} icon={<FaLinkedin />} />
          </Grid>
          <Grid>
            <Button auto css={{ background: '#1DA1F2' }} icon={<FaTwitter />} />
          </Grid>
          <Grid>
            <Button auto css={{ background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);' }} icon={<FaInstagram />} />
          </Grid>
        </Grid.Container>
        <Spacer />
        <Spacer />
        <Grid.Container alignItems='center' justify='center' gap={1}>
          <Container display='flex' css={{ margin: '$1' }}>
            <SiTypescript size={30} />
            <Text>Typescript</Text>
          </Container>
          <Container display='flex' css={{ margin: '$1' }}>
            <SiPython size={30} />
            <Text>Python</Text>
          </Container>
          <Container display='flex' css={{ margin: '$1' }}>
            <SiReact size={30} />
            <Text>Reacgt</Text>
          </Container>
          <Container display='flex' css={{ margin: '$1' }}>
            <SiHtml5 size={30} />
            <Text>HTML5</Text>
          </Container>
          <Container display='flex' css={{ margin: '$1' }}>
            <SiCss3 size={30} />
            <Text>CSS3</Text>
          </Container>
          <Container display='flex' css={{ margin: '$1' }}>
            <SiGo size={30} />
            <Text>GO</Text>
          </Container>
        </Grid.Container>
      </Grid>
      <Grid sm={9}>
        <Card css={{ padding: '$10' }}>
          <Text h3 size={50}>Experience</Text>
          <Text h5>Selligence</Text>
          <Text b>Full time</Text>
          <Text>Jun 2021 - Present</Text>
          <Text>Cardiff, Wales, United Kingdom</Text>
          <Text>
            Talent Ticker Chrome Extension

            - Lead a team of developers to develop Talent Tickers brand new Chrome Extension
            - Responsible for architecting the project from inception to production
            - Tech stack: React | Typescript | Python | AWS Lambda | NextJS | Vercel | Chrome API's
          </Text>
          <Text>
            Talent Ticker Website

            - Implemented centralised auth to ensure a seamless experience across applications using Auth0
            - Responsible for the creation and implementation of many major features including Talent Sourcing and Email Messaging
            - Improved and configured many third party integrations to the platform, including bullhorn, outlook, Gmail and others
            - Tech stack: React | Typescript | Python | AWS Lambda | NextJS | Vercel | Third Party API's
          </Text>
        </Card>
      </Grid>
    </Grid.Container>
  </Layout >
)

export default IndexPage
