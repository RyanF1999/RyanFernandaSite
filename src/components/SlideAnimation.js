import React, {useState} from 'react';
import {Transition} from 'react-spring/renderprops';

function SlideAnimation(props) {
    const max = props.max;
    const [cur, SetCur] = useState(props.cur);
    slideLeft(){
        if(this.state.cur > 0){
            SetCur(cur - 1);
        }
    }

    slideRight(){
        if(this.state.cur < this.state.max){
            SetCur(cur + 1);
        }
    }

    render() {
      return (
        <Transition
        keys={props.keys}
        from={{transform: 'translate3d(-100%,0,0)'}}
        enter={{transform: 'translate3d(0,0,0)'}}
        leave={{transform: 'translate3d(100%,0,0)'}}>
            {
                (style) => {
                    
                }
            }
        </Transition>
      );
    }
}

export default SlideAnimation;