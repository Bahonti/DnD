import React from 'react'
import Droppable from '../Droppable'
import Draggable from '../Draggable'
import './dnd.css'


export default class DndTest extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <Droppable id="dr1">
                    <Draggable id="item1" >Some Text</Draggable>
                    <Draggable id="item2" >Murza</Draggable>
                </Droppable>
                <Droppable id="dr2">
                    <Draggable id="item3">Bagdaulet</Draggable>
                </Droppable>
            </div>
        );
    }
}
