import styled from 'styled-components';
import guiltFreeIcon from 'resources/images/guilt-free.png';
import bgTablePattern from 'resources/images/bg-table-pattern.png';
import { IGridPosition } from 'interfaces/IGridPosition';

interface CellProps {
    position: IGridPosition;
    active?: boolean;
    image?: string;
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
  grid-column-start: ${props => props.position.column};
  grid-column-end: ${props => props.position.endColumn ? props.position.endColumn : props.position.column};
  grid-row-start: ${props => props.position.row};
  grid-row-end: ${props => props.position.endRow ? props.position.endRow : props.position.row};
  border: 2px solid var(--orangeColor);
  pointer-events: none;
  z-index: 3;
`;

export const Cell = styled.div.attrs<CellProps>(props => ({ className: `column-${props.position.column}` }))<CellProps>`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.08);
  width: 100%;
  position: relative;
  background-color: var(--primaryColor);

  grid-column-start: ${props => props.position.column};
  ${props => props.position.endColumn ? `grid-column-end: ${props.position.endColumn};` : null}
  grid-row-start: ${props => props.position.row};
  ${props => props.position.endRow ? `grid-row-end: ${props.position.endRow};` : null}
  color: ${props => props.active ? '#000' : 'var(--primaryTextColor)'};
  
  &.day {
    font-size: 24px;
    justify-content: center;
    align-items: center;
    font-weight: 500;
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
    color: var(--primaryTextColor);
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
    align-items: center;
    justify-content: center;
    font-weight: 200;
    color: #c2c2c2;

    &::before {
      content: "";
      width: 32px;
      height: 32px;
      background: url(${guiltFreeIcon});
      position: relative;
    }
  }

  &.column-1, &.workout, &.type, &.print {
    background: none;
    justify-content: center;
    align-items: center;
  }
  
  &.workout {
    font-size: 11px;
  }
  
  @media (max-width: 978px){
    &.day, &.time, &.border, &.workout, &.type, &.print, &.meal, &.guilt-free {
      border-right: none;
      border-left: none;
    }
    
    &.guilt-free {
      background: white;
      padding: 20px 0;
      
      &::before {
        margin-right: 12px;
      }
    }
    
    &.workout {
      background-color: var(--primaryColor);
    }
    
    &.day, &.workout, &.print, &.type {
      min-height: 50px;
    }
  }
  
  @media (min-width: 978px) {
    &.guilt-free {
      writing-mode: vertical-lr;
      transform: rotate(180deg);

      &::before {
        transform: rotate(180deg);
        position: relative;
        bottom: 25px;
        margin-top: 35px
      }
    }
    
    &.workout, &.print, &.time:nth-child(5), &.meal:nth-child(5n) {
      border-bottom: none;
    }

    &.day, &.type, &.time:first-of-type, &.print {
      border-top: none;
    }

    &.column-1, &.workout, &.type, &.print, &.column-2, &.column-8.guilt-free {
      border-left: none;
    }

    &.column-1.workout, &.column-8.day {
      border-right: none;
    }
    
    &.column-1.workout {
      border-width: 2px;
      margin-top: -1px;
    }
  }
`;

export const PlanContainer = styled.div<IPlanContainerProps>`
  width: 100%;
  display: grid;
  background: url(${bgTablePattern}) #eeeeee repeat;
  background-blend-mode: multiply;
  font-family: "Arial", serif;
  margin-top: 28px;

  @media (max-width: 978px){
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(7, 0.8fr repeat(5, 1fr) 0.8fr);
    max-height: 4000px;
  }
  
  @media (min-width: 978px){
    grid-template-columns: 0.85fr repeat(7, 1.26fr);
    grid-template-rows: 0.5fr repeat(5, 0.9fr) repeat(2, 0.35fr);
    height: 580px;

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
  }
`;
