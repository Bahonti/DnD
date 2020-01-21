import React from 'react'
import PropTypes from 'prop-types'
import './drop.css'

export default class Droppable extends React.Component{
    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        if(e.target.id === 'dr2'){
            if(e.target.children.length < 1){
                e.target.appendChild(document.getElementById(data));
            }else{
                const oldChild = e.target.children[0];
                e.target.removeChild(e.target.children[0]);
                e.target.appendChild(document.getElementById(data));
                document.getElementById('dr1').appendChild(oldChild);
            }
        }else{
            if(e.target.children.length < 1) {
                e.target.appendChild(document.getElementById(data));
            }
        }

    }

    allowDrop = (e) => {
        e.preventDefault();
    }
    render(){
        return(
            <div className="drop-main" id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} >
                {this.props.children}
            </div>
        )
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node
}