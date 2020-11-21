import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Copyright from '../components/Copyright'
import Card from '../components/Card'
import Header from '../components/Header'

export default function Index() {
  const isLargeScreen = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Header />
      <div>
        <img
          style={{ width: '100%' }}
          alt="Cycling girl dressed as a fairy tale knight"
          src="./images/tumblr.png"
        />
        <Typography variant="h2" component="h1" color="secondary" gutterBottom>
          ANIMATION. VIDEO. ART.
        </Typography>
        <Typography variant="h2" component="h1" color="secondary" gutterBottom>
          Animation. Video. Art.
        </Typography>
        <Typography variant="h4" component="h1" color="primary" gutterBottom>
          <b>Dystopic Fiction</b>
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          Nowhere to go, nowhere to hide
        </Typography>
        <Typography variant="body1" component="p" paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Typography variant="body2" component="p" paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </div>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby v4-beta example
          </Typography>
          <Link to="/about" color="secondary">
            Go to the about page
          </Link>
          <Button size="large" variant="contained" color="primary">
            Get in touch
          </Button>
          <Button size="large" variant="contained" color="secondary">
            I am a secondary button
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Disable elevation
          </Button>
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons" color="primary">
            Link
          </Button>
          <Button size="large" variant="outlined">
            Default
          </Button>
          <Button size="small" variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" color="primary" href="#outlined-buttons">
            Link
          </Button>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" color="primary" href="#outlined-buttons">
            Link
          </Button>
          <Typography>
            <Link href="#">Link</Link>
            <Link href="#" color="inherit">
              color="inherit"
            </Link>
            <Link href="#" variant="body2">
              variant="body2"
            </Link>
          </Typography>
          <Card />
          <Paper variant="outlined" square elevation={0}>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              Link
            </Button>
          </Paper>
          <Paper>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              Link
            </Button>
          </Paper>
          {isLargeScreen && (
            <>
              <ProTip />
              <Copyright />
            </>
          )}
        </Box>
      </Container>
    </>
  )
}
