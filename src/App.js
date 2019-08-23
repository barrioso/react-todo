import React from 'react';
import Typography from '@material-ui/core/Typography';
import { typography } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const App = () => {

  return (
    <React.Fragment>
      <Typography variant="h2" align="center" gutterBottom>
        To-Do List
    </Typography>
      <Grid container justify="center">
        <Grid item>
          <TextField type="text" placeholder="Add todo..." margin="normal"> </TextField>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item md={8}>
          <ListItem button>
            <Checkbox />
            <ListItemText primary="Check the prework" />
            <ListItemSecondaryAction />
            <DeleteIcon />
          </ListItem>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
