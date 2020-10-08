import React,{Component} from 'react'
import classes from './Modal.module.css'
import Aux from '../Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component{
    render()
    {
        const c = [classes.Modal];
        if(this.props.show) c.push(classes.show)
        else c.push(classes.hide);
        return (
            <Aux>
                <Backdrop show = {this.props.show} clicked = {this.props.clicked}/>
                <div className = {c.join(' ')} >
                    <div onClick = {this.props.clicked} className = {classes.cross}>
                        <span>X</span>
                    </div>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
};

export default Modal;