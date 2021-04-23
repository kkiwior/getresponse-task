import styled from "styled-components";
import {ReactComponent as Arrow} from '../../../resources/icons/arrow.svg';
import {useCallback, useState} from "react";

interface IWeekProps {
    currentWeek: number;
    maxWeek: number;
}

function WeekSelector({currentWeek, maxWeek}: IWeekProps) {
    const [week, setWeek] = useState<number>(currentWeek);

    const changeWeek = useCallback((c: number): void => {
        if ((week === 1 && c === -1) || (week === maxWeek && c === 1)) return;
        setWeek(week + c);
    }, [week, maxWeek]);

    return (
        <SelectorContainer>
            <ArrowButton className="reverse" onClick={() => changeWeek(-1)}><Arrow></Arrow></ArrowButton>
            <Week>Week {week}</Week>
            <ArrowButton onClick={() => changeWeek(1)}><Arrow></Arrow></ArrowButton>
        </SelectorContainer>
    );
}

const SelectorContainer = styled.div`
  display: inline-flex;
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
  color: var(--orangeColor);
`;

export {WeekSelector}