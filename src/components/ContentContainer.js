import React from 'react';
import {Container, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles({
	root: {
		minHeight: '60vh'
	}
});

function ContentContainer(props){
    const style = useStyle();
    const ContainerRoot = React.forwardRef((props, ref)=>{
        return <Container {...props} innerRef={ref}/>
    });

    return(
        <Box
            component={ContainerRoot} 
            maxWidth="xl"
            className={style.root}
            py={5}
            mt={18}
        >
            {
                props.children
            }
        </Box>
    )
}

export default ContentContainer;