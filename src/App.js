import React from 'react'
import './App.css'
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid, Card, CardMedia, 
  CardContent, CardActions, BottomNavigation, BottomNavigationAction, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FolderIcon from '@material-ui/icons/Folder'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: 'rgba(3,3,3,.5)'
    
  },
  mainFeturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(6)
  },
  cardMedia: {
    paddingTop: '56.50%'
  }, cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1,2,3,4,5,6,7,8,9]

export default function App() {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')
  const handleChange = (event, newValue) => setValue(newValue) 
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => setOpen(true) 
  const handleClose = () => setOpen(false) 
  return <>
    <AppBar position='fixed'>
      <Container fixed >
        <Toolbar>
          <IconButton age='start' color='inherit' aria-label='menu' className={classes.menuButton} >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title} >Naruto Minecrafter Code</Typography>
          <Box mr={3} >
            <Button color='inherit' variant='outlined' onClick={handleClickOpen} >Log in</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="login-form-title" >
              <DialogTitle id="login-form-title" >Log in</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Login in to see videos
                </DialogContentText>
                <TextField autoFocus margin='dense' id="email" label="Email Adress" type='emain' fullWidth />
                <TextField autoFocus margin='dense' id="pass" label="Password" type='password' fullWidth />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary"> Cancel</Button>
                <Button onClick={handleClose} color="primary"> Log in</Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Button color='secondary' variant='contained' >Sing Up</Button>
        </Toolbar>
      </Container>
    </AppBar>
    <main>
      <Paper className={classes.mainFeturesPost} style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
        <Container fixed >
          <div className={classes.overlay} />
          <Grid container >
            <Grid item md={6}>
              <div className={classes.mainFeturesPostContent} >
                <Typography component="h1" variant="h3" color="initial" gutterBottom >Naruto Minecrafter</Typography>
                <Typography variant="h5" color="initial" paragraph >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, totam rerum architecto voluptate 
                  libero numquam eaque in omnis sint unde sed pariatur, provident soluta voluptatibus.
                </Typography>
                <Button variant='contained' color="secondary">
                  Learn More
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <div className={classes.mainContent} >
        <Container maxWidth='md' >
          <Typography variant="h2" color="textPrimary" align='center' >Naruto Minecrafter Blog</Typography>
          <Typography variant="h5" color="textSecondary" align='center' >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eaque animi eos nulla harum consequatur est iure enim, 
            asperiores explicabo vitae dicta, exercitationem earum officiis, quia id error ullam labore minima molestiae possimus aut! 
            Quas quisquam asperiores nam veritatis? Minima!
          </Typography>
      <div className={classes.mainButton} >
        <Grid container spacing={2} justify='center' >
          <Grid item > <Button color="primary" variant='contained' >Start Now</Button> </Grid>
          <Grid item > <Button color="primary" variant='outlined' >Learn More</Button> </Grid>
        </Grid>
      </div>
      <Container maxWidth="md" className={classes.cardGrid} >
        <Grid container spacing={4}>
          {cards.map((card) =>
            <Grid item key={card} xs={12} sm={6} md={4} >
              <Card>
                <CardMedia title="Image Title" image='https://source.unsplash.com/random' className={classes.cardMedia} />
                <CardContent className={classes.cardContent} >
                  <Typography variant="h5" gutterBottom>Blog Post</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo doloremque illo corporis sapiente iusto?
                  </Typography>
                  <CardActions>
                    <Button color="primary" size='small' >View</Button>
                    <Button color="primary" size='small' >Edit</Button>
                    <LayerIcon/>
                    <PlayCircleFilledIcon/>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Container>
        </Container>
      </div>
    </main>
    <footer>
      <Typography variant="h6" align="center" gutterBottom >Footer</Typography>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
        <BottomNavigationAction label="Recents" value='recents' icon={<RestoreIcon/>} />
        <BottomNavigationAction label="Favorites" value='favorites' icon={<FavoriteIcon/>} />
        <BottomNavigationAction label="Neaerby" value='neaerby' icon={<LocationOnIcon/>} />
        <BottomNavigationAction label="Folder" value='folder' icon={<FolderIcon/>} />
      </BottomNavigation>
      <Typography align='center' variant="subtitle1" color="textSecondary" component='p' >
        Naruto Minecrafrer 2020 - my first site in Material UI + React
      </Typography>
    </footer>
  </>
}