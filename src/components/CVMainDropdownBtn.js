import React, {useState, useEffect} from 'react';
import {animated, useSpring} from 'react-spring';
import {useSelector, useDispatch} from 'react-redux';
import { ShowCvList, HideCvList } from '../actions/actions';
import {makeStyles} from '@material-ui/styles';

const btndown = "M19.693,0.456l2.857,0l-11.27,17.328l-11.27,-17.328l2.857,0l8.413,12.934l8.413,-12.934Z";
const btnup = "M2.867,17.544l-2.857,0l11.27,-17.328l11.27,17.328l-2.857,0l-8.413,-12.934l-8.413,12.934Z";

const useStyle = makeStyles({
    root:{
        height: 50,
        width: 50,
        backgroundColor: 'transparent',
        border: '2px solid black',
        padding: '0px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        willChange: 'border-color'
    },
    svg:{
        width: 25,
        height: 20,
        willChange: 'transform'
    }
});

function CvMainDropdownBtn(props){
    const style = useStyle();
    const dispatch = useDispatch();
    const _showChild = useSelector(state => state.cvlist.get(props.index));
    const [showChild, SetShow] = useState(true);
    const [isHover, SetHover] = useState(false);

    useEffect(()=>{
        if(_showChild !== undefined) SetShow(_showChild);
    }, [_showChild]);
    
    const btnAnim = useSpring({
        to:{
            shape: showChild ? btnup : btndown,
            color: showChild ? '#bc240d' : '#07b207',
            transform: isHover ? 'scale(1.5)' : 'scale(1)'
        }
    });

    const StyledButtonInline = {borderColor: btnAnim.color};
    return (
        <animated.div
            className={style.root}
            style={StyledButtonInline}
            onClick={
                () => showChild 
                ? dispatch(HideCvList(props.index)) 
                : dispatch(ShowCvList(props.index))
            }
            onMouseEnter={() => SetHover(true)}
            onMouseLeave={() => SetHover(false)}
        >
            <animated.svg transform={btnAnim.transform} className={style.svg}>
                <animated.path
                    d={btnAnim.shape} 
                    fill={btnAnim.color} 
                />
            </animated.svg>
        </animated.div>
    );
}

export default CvMainDropdownBtn;