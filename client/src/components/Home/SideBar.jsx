import React,{useState} from 'react'
import clsx from 'clsx';
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: "40vh",
  },
  fullList: {
    width: '50vh',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

 const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to={"/main/usuarios"}>
          <ListItem button key={"2text"}>
            <ListItemIcon><Button><MailIcon /></Button></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to={"/main/fotos"}>
          <ListItem button key={"text"}>
            <ListItemIcon><Button><InboxIcon /></Button></ListItemIcon>
            <ListItemText primary={"Fotos"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <>
          
          <Button style={{height:"100%",width:"100%"}} onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
    </>
  );
}