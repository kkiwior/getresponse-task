import styled from "styled-components";
import {ReactComponent as Arrow} from '../../../resources/icons/arrow.svg';
import {useCallback, useState} from "react";

interface IWeekProps {
    currentWeek: number;
    maxWeek: number;
}

function WeekSlider({currentWeek, maxWeek}: IWeekProps) {
    const [week, setWeek] = useState(currentWeek);

    const changeWeek = useCallback((c: number): void => {
        setWeek(week + c);
    }, [week]);

    return (
        <SelectorContainer>
            {week > 1 ? <ArrowButton style={{gridArea: "larrow"}} className="reverse" onClick={() => changeWeek(-1)}><Arrow></Arrow></ArrowButton> : null}
            <Week>Week {week}</Week>
            {week < maxWeek ? <ArrowButton style={{gridArea: "rarrow"}} onClick={() => changeWeek(1)}><Arrow></Arrow></ArrowButton> : null}
        </SelectorContainer>
    );
}

const SelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 26px auto 26px;
  grid-template-areas: 'larrow week rarrow';
  width: 299px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 5px 0 0 1px;
`;

const ArrowButton = styled.button`
  border: 1px solid rgb(192, 192, 192);
  padding: 13px 7px 10px 8px;
  border-radius: 6px;
  cursor: pointer;
  background: transparent;
  transition: 0.2s all ease-in;

  &:hover {
    box-shadow: 0 0 2px 1px var(--headerBorderColor);
  }

  &.reverse {
    transform: rotateY(180deg);
  }
`;

const Week = styled.div`
  font-size: 48px;
  grid-area: week;
  color: var(--orangeColor);
`;

export {WeekSlider}