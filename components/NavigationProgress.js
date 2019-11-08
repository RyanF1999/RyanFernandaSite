import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import makeStyles from '@material-ui/core/styles/makeStyles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyle = makeStyles({
    progress: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        backgroundColor: '#5093ab',
        zIndex: 15
    },
    bar: {
        backgroundColor: '#11c28a'
    }
});

function NavigationProgress(){
    const style = useStyle();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    
    // add event listener for route loading
    const onStart = (url) => {
        setLoading(true);
    };

    const onComplete = () => {
        setLoading(false);
    };

    useEffect(()=>{
        router.events.on('routeChangeStart', onStart);
        router.events.on('routeChangeComplete', onComplete);
        router.events.on('routeChangeError', onComplete);

        return ()=>{
            router.events.off('routeChangeStart', onStart);
            router.events.off('routeChangeComplete', onComplete);
            router.events.off('routeChangeError', onComplete);
        }
    }, []);

    if(loading)
        return(
            <LinearProgress variant="indeterminate" 
                classes={{
                    root: style.progress,
                    bar: style.bar
                }}
            />
        );
    else
        return null;
}

export default NavigationProgress;