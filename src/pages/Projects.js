import React from 'react';
import { useSelector } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Project from '../components/Project';
import Title from '../components/Title'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Arto Halonen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex-inline',
    
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },

  paper: {
    padding: theme.spacing(5),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

}));

export default function Projects() {
  const projects = useSelector(state => state.projects)
  const tasks = useSelector(state => state.tasks)
  const classes = useStyles();


  if (projects !== undefined) {
    const doneProjects = projects.filter(projs => projs.attributes.done === true);
    const notDoneProjects = projects.filter(projs => projs.attributes.done === false);


    return (
      <div className={classes.root}>
        <CssBaseline />
        <main>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" >
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <Project title="Nykyiset Projektit" new={true} tasks={tasks} rows={notDoneProjects} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <Project title="Menneet Projektit" tasks={tasks} rows={doneProjects} />
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  } else {

    return (
      <div className={classes.root}>
        <CssBaseline />
        <main>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" >
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>

                <Paper className={classes.paper}>
                  <Title>Nykyiset Projektit</Title>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                  <Title>Menneet Projektit</Title>
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  }
}

