import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { getCardsThunk } from "redux/cards/operations";
import { Card } from "./Card/Card";
import { StyledCardList } from "./CardList.styled";
import { compareTime } from "helpers/timeSorter";

export const CardList = ({children}) => {
    const cards = useSelector(state => state.cards.cards)
    const [otherCards,setOtherCards] = useState([]);
    const [todayCards, setTodayCards] = useState([]);
    const [tomorrowCards, setTomorrowCards] = useState([]);
    const [editId, setEditId] = useState(null);
    const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getCardsThunk()) 
     }, [dispatch])
  
    useEffect(() => {
        if (cards.length === 0) return;
           

        const today = new Date();
today.setHours(0, 0, 0, 0);
const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const todayFilteredData = cards.filter(item => {
  const itemDate = new Date(item.date);
  itemDate.setHours(0, 0, 0, 0);

  return itemDate.getTime() === today.getTime();
        });
        setTodayCards(todayFilteredData.sort(compareTime))
const tomFilteredData = cards.filter(item => {
  const itemDate = new Date(item.date);
  itemDate.setHours(0, 0, 0, 0);

  return itemDate.getTime() === tomorrow.getTime();
});
        setTomorrowCards(tomFilteredData.sort(compareTime))
        
        const otherFilteredData = cards.filter(item => {
  const itemDate = new Date(item.date);
  itemDate.setHours(0, 0, 0, 0);

  return itemDate.getTime() !== today.getTime() && itemDate.getTime() !== tomorrow.getTime();
        });
        setOtherCards(otherFilteredData.sort((b, a) => new Date(b.date)- new Date(a.date)))
      }, [cards])
    
    const handleEditing = id => {
    setEditId(id)
}
    return (
        <>
            <p className='dayname-text'>Today</p>
        <StyledCardList>
            {children}
            {/* {cards.length > 0 && cards.map(card => <Card key={card._id} card={card} handleEditing={handleEditing} editId={editId} />)} */}
            
            {todayCards.length > 0 && todayCards.map(card => <Card key={card._id} card={card} handleEditing={handleEditing} editId={editId} />)}
          
            </StyledCardList>
             <p className='dayname-text'>Tommorrow</p>
             <StyledCardList>
            
            {tomorrowCards.length > 0 && tomorrowCards.map(card => <Card key={card._id} card={card} handleEditing={handleEditing} editId={editId} />)}
            </StyledCardList>
            <p className='dayname-text'>Other days</p>
             <StyledCardList>
            
            {otherCards.length > 0 && otherCards.map(card => <Card key={card._id} card={card} handleEditing={handleEditing} editId={editId} />)}
            </StyledCardList>
            </>
    )
}