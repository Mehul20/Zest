import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card1 from './Card1';

const useStyles =makeStyles((theme) => ({

    root: {
        minheight: '100vh',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
export default function () {
    const classes = useStyles();
    return <div className={classes.root}>
        <Card1 />
    </div>
}