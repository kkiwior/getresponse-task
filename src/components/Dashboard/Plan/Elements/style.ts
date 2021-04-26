import styled from 'styled-components';
import { ReactComponent as tick } from 'resources/icons/tick.svg';
import workoutEnabledIcon from 'resources/images/workout-enabled.png';
import workoutIcon from 'resources/images/workout.png';

interface IEnabledProps {
    enabled: boolean;
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

export const MealImage = styled.img<IEnabledProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  ${props => props.enabled ? null : 'filter: grayscale(1) opacity(0.66);'}
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
  cursor: pointer;
  user-select: none;

  &:hover {
    border-top: 1px solid var(--orangeColor);
  }
`;

export const WorkoutIcon = styled.div<IEnabledProps>`
  grid-column-start: 2;
  margin-left: 4px;
  width: 28px;
  height: 14px;
  background: url(${props => props.enabled ? workoutEnabledIcon : workoutIcon});
`;
