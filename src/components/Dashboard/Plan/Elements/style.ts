import styled from 'styled-components';
import { ReactComponent as tick } from '../../../../resources/icons/tick.svg';
import workoutEnabledIcon from '../../../../resources/images/workout-enabled.png';
import workoutIcon from '../../../../resources/images/workout.png';
import guiltFreeIcon from '../../../../resources/images/guilt-free.png';
import { Cell } from '../style';
import { IGridPosition } from '../IGridPosition';

interface IElementProps {
    position?: IGridPosition;
    isActive?: boolean;
    isCurrent?: boolean;
    image?: string;
}

export const MealName = styled.span`
  margin: 10px 6px 0 12px;
  display: inline-block;
  width: 100%;
  height: 78px;
`;

export const MealTick = styled.img`
  height: 16px;
  width: 17px;
  display: inline-block;
  margin-top: 8px;
  margin-right: 6px;
`;

export const MealImage = styled.img<IElementProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  ${props => props.isActive ? null : 'filter: grayscale(1) opacity(0.66);'}
`;

export const PrintText = styled.span`
  font-size: 18px;
  margin-left: 12px;
`;

export const Tick = styled(tick)`
  display: block;
  grid-column-start: 3;
`;

export const WorkoutContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 36px 1fr;
  align-items: center;
  z-index: 3;
  user-select: none;
`;

export const WorkoutIcon = styled.div<IElementProps>`
  grid-column-start: 2;
  margin-left: 4px;
  width: 28px;
  height: 14px;
  background: url(${props => props.isActive ? workoutEnabledIcon : workoutIcon});
`;

export const GuiltFreeText = styled.span`
  font-size: 35px;
  font-weight: 200;
  color: #c2c2c2;

  &::before {
    content: "";
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url(${guiltFreeIcon});
    position: relative;
  }

  @media (max-width: 978px) {
    background: var(--primaryColor);
    padding: 20px 0;

    &::before {
      margin-right: 12px;
    }
  }

  @media (min-width: 978px) {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    transform-origin: center;

    &::before {
      transform: rotate(180deg);
      position: relative;
      bottom: 25px;
      margin-top: 35px;
    }
  }
`;

export const ElementCell = styled(Cell)<IElementProps>`
  color: ${props => props.isCurrent ? '#000' : 'var(--primaryTextColor)'};

  &.meal {
    font-size: 13px;
    font-family: Arial, sans-serif;
    max-height: 90px;
  }

  &.workout, &.meal, &.print {
    &:hover {
      border-top: ${props => props.isActive ? '1px solid var(--orangeColor)' : null};
      cursor: ${props => props.isActive ? 'pointer' : 'default'};
    }
  }

  &.type {
    font-size: 11px;
    color: var(--primaryTextColor);
  }

  &.day {
    font-size: 24px;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.isCurrent ? 'var(--orangeColor)' : '#adbb0c'};
  }
`;
