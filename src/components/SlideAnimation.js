import React, {Component} from 'react';
import {Transition} from 'react-spring/renderprops';

class SlideAnimation extends Component {
    constructor(props){
        super(props);
        this.state = {
            max: this.props.max,
            cur: this.props.cur
        }
    }

    slideLeft(){
        if(this.state.cur > 0){
            this.setState({
                cur: this.state.cur - 1
            })
        }
    }

    slideRight(){
        if(this.state.cur < this.state.max){
            this.setState({
                cur: this.state.cur + 1
            })
        }
    }

    render() {
      return (
        <Transition
        keys={this.props.keys}
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