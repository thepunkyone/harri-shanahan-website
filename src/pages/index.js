import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'


import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Card from '../components/Card'
import Header from '../components/Header'

export default function Index() {
  const isLargeScreen = useMediaQuery('(min-width:600px)');

  return (
      <>
        <Header/>
        <div>
          <img style={{width: '100%'}} alt='Cycling girl dressed as a fairy tale knight' src='./images/tumblr.png?nf_resize=fit&w=300&h=400'/>
          <Typography variant="h2" component="h1" gutterBottom>
            <b>Animation. Video. Art.</b>
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
        <Button variant="contained" color="primary">I am a primary button</Button>
        <Button size='large' variant="contained" color="secondary">I am a secondary button</Button>
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
        <Button size='large' variant="outlined">Default</Button>
        <Button size='small' variant="outlined" color="primary">
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
          <Link href="#">
            Link
          </Link>
          <Link href="#" color="inherit">
            {'color="inherit"'}
          </Link>
          <Link href="#" variant="body2">
            {'variant="body2"'}
          </Link>
        </Typography>
        <Card/>
        <Paper variant='outlined' square elevation={0}>
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
        <Avatar alt="Harri Shanahan" src="https://harrishanahan.files.wordpress.com/2020/11/nice-profile-pic.jpg?w=139" />
        {isLargeScreen && (
            <>
              <ProTip />
              <Copyright />
            </>
        )}
      </Box>
    </Container>
        </>
  );
}
