import React from 'react';
import {useDrag} from "react-dnd";
import Container from "../Container";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../redux/hooks";

interface IDraggable {
    children: React.ReactNode,
    id:number
}

const Draggable: React.FC<IDraggable> = ({children, id}) => {
    const {blocksConstructor, type} = useAppSelector(state => state.blocks)

    const [{isDragging}, drag] = useDrag(() => ({
        type: "CalculatorBlock",
        item: {id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    return (
        <Container ref={type==="Constructor" ? drag : null}  isDragging={isDragging} inactive={!!blocksConstructor.find(item => item.id===id)}>
            {children}
        </Container>
    );
};

export default Draggable;