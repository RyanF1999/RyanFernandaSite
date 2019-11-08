import React from 'react';
import Link from 'next/link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import HomeIcon from '@material-ui/icons/Home';
import ProfileIcon from '@material-ui/icons/Person';

const useStyle = makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    button: {
        fontSize: '125%',
        backgroundColor: '#69C4E4',
        width: '100%',
        boxShadow: theme.shadows[0],
        '&:hover': {
            backgroundColor: '#69C4E4',
            boxShadow: theme.shadows[3],
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: theme.shadows[3],
                backgroundColor: theme.palette.grey[300],
            },
            '&$disabled': {
                backgroundColor: theme.palette.action.disabledBackground,
            }
        }
    }
}));

function Error(props){
    const style = useStyle();

    return (
        <Grid container spacing={4} justify="center" 
            alignItems="center" className={style.root}
            direction="column"
        >
            <Grid item>
                <img src="/back_img.png" alt="Back to portfolio or Profile"/>
            </Grid>

            <Grid item>
                <Typography variant="h5">
                    Go back! Nothing here
                </Typography>
            </Grid>

            <Grid container item justify="space-evenly" >
                <Grid item xs={5} md={3}>
                    <Link href="/">
                        <Button component="a" variant="contained" className={style.button}>
                            <HomeIcon/>
                            Portfolio
                        </Button>
                    </Link>
                </Grid>

                <Grid item xs={5} md={3}>
                    <Link href="/profile">
                        <Button component="a" variant="contained" className={style.button}>
                            <ProfileIcon/>
                            Profile
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Error;