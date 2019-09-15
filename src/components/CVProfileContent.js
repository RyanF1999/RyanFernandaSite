import React from 'react';
import {Grid} from '@material-ui/core';
import CVProfileContainer from './CVProfileContainer';
import CVProfileList from './CVProfileList';

function CVProfileContent(props){
    return(
        <Grid item container md={12} direction="row" spacing={4}>
            {
                props.data.map(({title, contents}) => <CVProfileContainer 
                        key={title}
                        title={title}
                    >
                        {
                            contents.map(({title, desc, icon}) => <CVProfileList 
                                key={title} 
                                title={title} 
                                desc={desc} 
                                icon={icon || ""}
                            />
                            )
                        }
                    </CVProfileContainer>
                )
            }
        </Grid>
    )
}

export default CVProfileContent;