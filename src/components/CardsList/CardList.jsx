import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { getCardsThunk } from 'redux/cards/operations';
import { Card } from './Card/Card';
import {
  StyledCardList,
  StyledMainDiv,
  StyledOtherSvg,
  StyledTommorowSvg,
  StyledDoneSvg
} from './CardList.styled';
import { compareTime } from 'helpers/timeSorter';
import { CSSTransition } from 'react-transition-group';
import '../App.css';
export const CardList = ({ children }) => {
  const cards = useSelector(state => state.cards.cards);
  const doneCards = useSelector(state => state.cards.doneCards);
  const [otherCards, setOtherCards] = useState([]);
  const [todayCards, setTodayCards] = useState([]);
  const [tomorrowCards, setTomorrowCards] = useState([]);
  const [showTomorrowCards, setShowTomorrowCards] = useState(true);
  const [showOtherCards, setShowOtherCards] = useState(false);
  const [showDoneCards, setDoneCards] = useState(true);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  const nodeRef3 = useRef(null);
  useEffect(() => {
    dispatch(getCardsThunk());
  }, [dispatch]);

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
    setTodayCards(todayFilteredData.sort(compareTime));
    const tomFilteredData = cards.filter(item => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);

      return itemDate.getTime() === tomorrow.getTime();
    });
    setTomorrowCards(tomFilteredData.sort(compareTime));

    const otherFilteredData = cards.filter(item => {
      const itemDate = new Date(item.date);
      itemDate.setHours(0, 0, 0, 0);

      return (
        itemDate.getTime() !== today.getTime() &&
        itemDate.getTime() !== tomorrow.getTime()
      );
    });
    setOtherCards(
      otherFilteredData.sort((b, a) => new Date(b.date) - new Date(a.date))
    );
  }, [cards]);

  const handleEditing = id => {
    setEditId(id);
  };
  return (
    <StyledMainDiv>
      <p className="dayname-text">Today</p>

      <StyledCardList>
        {children}
        {/* {cards.length > 0 && cards.map(card => <Card key={card._id} card={card} handleEditing={handleEditing} editId={editId} />)} */}

        {todayCards.length > 0 &&
          todayCards.map(card => (
            <Card
              key={card._id}
              card={card}
              handleEditing={handleEditing}
              editId={editId}
            />
          ))}
      </StyledCardList>

      <p
        className="dayname-text dayname-text-hide"
        onClick={() => setShowTomorrowCards(!showTomorrowCards)}
      >
        Tommorrow <StyledTommorowSvg $tomorrowcards={showTomorrowCards} />
      </p>
      <CSSTransition
        in={showTomorrowCards}
        nodeRef={nodeRef}
        timeout={300}
        classNames="cards"
        unmountOnExit
      >
        <StyledCardList ref={nodeRef}>
          {tomorrowCards.length > 0 &&
            tomorrowCards.map(card => (
              <Card
                key={card._id}
                card={card}
                handleEditing={handleEditing}
                editId={editId}
              />
            ))}
        </StyledCardList>
      </CSSTransition>
      <p
        className="dayname-text dayname-text-hide"
        onClick={() => setShowOtherCards(!showOtherCards)}
      >
        Other days <StyledOtherSvg $othercards={showOtherCards} />
      </p>
      <CSSTransition
        in={showOtherCards}
        nodeRef={nodeRef2}
        timeout={300}
        classNames="cards"
        unmountOnExit
      >
        <StyledCardList ref={nodeRef2}>
          {otherCards.length > 0 &&
            otherCards.map(card => (
              <Card
                key={card._id}
                card={card}
                handleEditing={handleEditing}
                editId={editId}
              />
            ))}
        </StyledCardList>
      </CSSTransition>
      <p
        className="dayname-text dayname-text-hide"
        onClick={() => setDoneCards(!showDoneCards)}
      >
        DONE
        <StyledDoneSvg $doneCards={showDoneCards} />
      </p>
      <CSSTransition
        in={showDoneCards}
        nodeRef={nodeRef3}
        timeout={300}
        classNames="cards"
        unmountOnExit
      >
        <StyledCardList ref={nodeRef3}>
          {doneCards.length > 0 &&
            doneCards.map(card => (
              <Card
                key={card._id}
                card={card}
                handleEditing={handleEditing}
                editId={editId}
              />
            ))}
        </StyledCardList>
      </CSSTransition>
    </StyledMainDiv>
  );
};
