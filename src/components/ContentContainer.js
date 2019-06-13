import React from 'react';
import {Container, Box} from '@material-ui/core';

function ContentContainer(props){
    const ContainerRoot = React.forwardRef((props, ref)=>{
        return <Container {...props} innerRef={ref}/>
    });

    return(
        <Box
            minHeight='100vh'
            component={ContainerRoot} 
            maxWidth="xl"
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