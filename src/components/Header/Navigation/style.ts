import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin-left: 118px;

  &::before {
    content: "";
    padding-left: 16px;
    border-left: 1px solid var(--headerBorderColor);
  }
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 0.75;
  letter-spacing: .03em;
  font-weight: 600;
  padding: 35px 15px 34px;
  color: rgb(124, 124, 124);
  text-decoration: none;

  &.active {
    color: var(--orangeColor);
  }

  &.active::after, &:hover::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 25px;
    bottom: 22px;
    left: calc(50% - 12.5px);
    background-color: #ffc79a;
    transition: all 0.2s linear;
  }

  &.active:hover::after {
    width: 50px;
    background-color: var(--orangeColor);
    transform: translateX(-12.5px);
  }

  & a {
    text-decoration: none;
    color: unset;
  }
`;
