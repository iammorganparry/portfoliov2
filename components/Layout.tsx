import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Grid, styled } from '@nextui-org/react'
import { Sidebar } from './Sidebar'

type Props = {
  children?: ReactNode
  title?: string
}

const BlurBackground = styled('div', {
  /* All the background image supports */
  transform: 'translate(0px, 0px, 0px)',

  backgroundImage: ` 
  radial-gradient(
    farthest-side at bottom left,
    rgba(39, 114, 195, 0.5), 
    transparent
  ),
  radial-gradient(
    farthest-side at bottom right,
    rgb(253, 92, 99, 0.3), 
    transparent 1000px
  );`,

  // backgroundImage: 'linear-gradient(to top right, rgba(43, 40, 50, 0.8) 0%, rgba(83, 86, 99, 0.8) 45%, rgba(69, 77, 91, 0.6) 60%)',
  position: 'fixed',
  width: '100%',
  height: '101vh',
  margin: 0,
  padding: 0,
  top: 0,
  /* blur filters */

  filter: 'blur(20px)',

})


const Foreground = styled('div', {
  zIndex: 2,
})
const Layout = ({ children, title = 'Morgan Parry | Portfolio' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <BlurBackground />
    <Grid.Container gap={3} justify='center' alignItems='center' css={{ height: '100vh' }}>
      <Sidebar />
      {/* <Grid xs={9}>
        {children}
      </Grid> */}
    </Grid.Container>
  </>
)

export default Layout
