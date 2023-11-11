import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { getCardsThunk } from "redux/cards/operations";
import { Card } from "./Card/Card";
import { StyledCardList } from "./CardList.styled";
export const CardList = ({children}) => {
    const cards  = useSelector(state => state.cards.cards)
    const [editId, setEditId] = useState(null);
    const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getCardsThunk()) 
    },[dispatch])
    const handleEditing = id => {
    setEditId(id)
}
    return (
        <StyledCardList>
            {children}
            {cards.length > 0 && cards.map(card => <Card key={card._id} card={card} handleEditing={handleEditing} editId={editId} />)}
        </StyledCardList>
    )
}