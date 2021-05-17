import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar,Collapse, Button } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Link from '@material-ui/core/Link'

const useStyles = makeStyles ((theme)=>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',


    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    icons: {
        color: '#000000',
        fontSize:'2rem',
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#fff',
        fontSize: '2rem',
        fontFamily: 'Lobster',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    colorText: {
        color: '#7CFC00',
    },
    title: {
        color: '#fff',
        fontFamily: 'Lobster',
        fontSize: '4.5rem',

        
    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#7CFC00',
        fontSize: '4rem',
    }

 
 
}));

export default function Header () {
  const classes=useStyles();
  const[checked, setChecked] = useState(false);
  useEffect(() => {
      
      setChecked(true)
  }, [])
    return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
          Z<span className={classes.colorText}>EST</span>
          </h1>
          <IconButton>
             <SortIcon className={classes.icons}/>
          </IconButton>
          </Toolbar>
      </AppBar>
      <Collapse in={checked} 
        {...(checked ? {timeout:1000} :{})}
          collapsedHeight={50}
      >
      <div className={classes.container}>
          <h1 className={classes.title}>
              WELCOME TO <br /> Z<span className={classes.colorText}>EST
              <br /> WHERE PASSION EXPLODES 🚀
              </span>
          </h1>
      
      <IconButton>
          <ExpandMoreIcon className={classes.goDown} />
      </IconButton>

<Link href="https://www.mehulrastogi.com/blog/dogemining/">
      <Button variant="contained" color="primary" disableElevation>
          Doge Mining
</Button>
</Link>
      </div>

      </Collapse>
      </div>
    );   
}