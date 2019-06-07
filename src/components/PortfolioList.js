import React, {useState} from 'react';
import {Col} from 'reactstrap';
import {Spring, config} from 'react-spring/renderprops';

function PortfolioList(props){
    const [ishover, setHover] = useState(false);
    
    return(
        <Spring
            config={config.stiff}
            from={{
                transform: 'scale3d(1, 1, 1)'
            }}
            to={{
                transform: (ishover) 
                ? 'scale3d(1.065, 1.065, 1.065)'
                : 'scale3d(1, 1, 1)'
            }}
        >
            {(styles) => 
                <Col xs="auto" sm="6" md="6" lg="4" xg="4" 
                className={props.className + " py-4 px-2 text-center"}>
                    <img 
                        className="img-fluid" 
                        src="https://via.placeholder.com/350x150.jpg" 
                        style={{
                            height: '175px',
                            transform: styles.transform
                        }}
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                    />
                </Col>
            }
        </Spring>
    );
}

export default PortfolioList;