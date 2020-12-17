import React from 'react';
import { Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export const mainListItems = (
 <><Link to="/" style={{  color: 'inherit', textDecoration: 'inherit' }}>
 <ListItem button>
   <ListItemIcon>
     <HomeIcon />
   </ListItemIcon>
   <ListItemText primary={"Etusivu"} />
   </ListItem>
 </Link>
     <Link to="/projects" style={{  color: 'inherit', textDecoration: 'inherit' }}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={"Projektit"} />
      </ListItem>
    </Link>
    <Link to="/hours" style={{  color: 'inherit', textDecoration: 'inherit' }}>
    <ListItem button>
      <ListItemIcon>
        <AccessTimeIcon />
      </ListItemIcon>
      <ListItemText primary="Tuntikirjaus" />
      </ListItem>   
      </Link>    
  </>
);

