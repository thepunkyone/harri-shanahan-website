import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'gatsby'

import useSiteMetadata from '../../../hooks/use-site-metadata'

import styles from './header.module.scss'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default function Header() {
  const classes = useStyles()
  const { siteUrl } = useSiteMetadata()

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static" className={styles.header}>
        <Toolbar>
          <Link className={styles.link} to="/">
            <Avatar
              className={styles.avatar}
              alt="Harri Shanahan"
              src={`${siteUrl}/images/home/nice-profile-pic.jpg?nf_resize=fit&w=40`}
            />
            <Typography variant="h6" className={styles.title}>
              Harri Shanahan
            </Typography>
          </Link>
          {/*<Button color="inherit">About</Button>*/}
          {/*<Button color="inherit">Gif</Button>*/}
          {/*<IconButton*/}
          {/*  edge="end"*/}
          {/*  className={classes.menuButton}*/}
          {/*  color="inherit"*/}
          {/*  aria-label="menu"*/}
          {/*>*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
        </Toolbar>
      </AppBar>
    </div>
  )
}
