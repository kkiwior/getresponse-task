import styled from 'styled-components';
import guiltFreeIcon from '../../../resources/images/guilt-free.png';
import bgTablePattern from '../../../resources/images/bg-table-pattern.png';

interface CellProps {
    column: number;
    row: number;
    endRow?: number;
    active?: boolean;
}

interface IPlanContainerProps {
    column: number;
}

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid #828282;
  margin-left: 6px;
`;

export const Selection = styled.div<CellProps>`
  grid-column-start: ${props => props.column};
  grid-row-start: ${props => props.row};
  grid-row-end: ${props => props.endRow ? props.endRow : props.row};
  border: 2px solid var(--orangeColor);
  pointer-events: none;
`;

export const Cell = styled.div.attrs<CellProps>(props => ({ className: `column-${props.column}` }))<CellProps>`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: white;
  width: 100%;

  grid-column-start: ${props => props.column};
  grid-row-start: ${props => props.row};
  grid-row-end: ${props => props.endRow ? props.endRow : props.row};
  color: ${props => props.active ? '#000000' : '#828282'};


  &.day {
    font-size: 24px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    text-transform: uppercase;
    color: ${props => props.active ? 'var(--orangeColor)' : '#adbb0c'};
  }

  &.meal {
    font-size: 13px;
    font-family: Arial, sans-serif;
    cursor: pointer;
    max-height: 90px;

    &:hover {
      border-top: 1px solid var(--orangeColor);
    }
  }

  &.time {
    font-size: 13px;
  }

  &.time .time-bold {
    font-weight: 600;
  }

  &.type {
    font-size: 11px;
    color: #828282;
  }

  &.print {
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }

  &.guilt-free {
    font-size: 35px;
    writing-mode: sideways-lr;
    align-items: center;
    justify-content: center;
    font-weight: 200;
    color: #c2c2c2;

    &::before {
      content: "";
      margin-top: 25px;
      width: 32px;
      height: 32px;
      background: url(${guiltFreeIcon});
    }
  }

  &.column-1, &.workout, &.type, &.print {
    background: none;
    border-left: none;
    justify-content: center;
    align-items: center;
  }

  &.day, &.type, &.time:first-of-type {
    border-top: none;
  }

  &.workout {
    border-bottom: none;
    font-size: 11px;
  }
`;

export const PlanContainer = styled.div<IPlanContainerProps>`
  width: 100%;
  height: 580px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0.85fr repeat(7, 1.26fr);
  grid-template-rows: 0.5fr repeat(5, 0.9fr) repeat(2, 0.35fr);
  background: url(${bgTablePattern}) #eeeeee repeat;
  background-blend-mode: multiply;
  font-family: "Arial", serif;
  margin-top: 28px;

  & ${props => `.column-${props.column - 1}`} {
    border-right: none;
  }

  & ${props => `.column-${props.column + 1}`} {
    border-left: none;
  }

  & ${props => `.column-${props.column}`} {
    border-right: none;
    border-left: none;
  }
`;
