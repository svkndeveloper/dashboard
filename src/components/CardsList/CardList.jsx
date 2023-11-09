import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getCardsThunk } from "redux/cards/operations";
import { Card } from "./Card/Card";
export const CardList = () => {
    const cards  = useSelector(state => state.cards.cards)
   
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getCardsThunk()) 
    },[dispatch])

    return (
        <ul>
            {cards.length > 0 && cards.map(card => <Card key={ card._id} card={card} />)}
        </ul>
    )
}