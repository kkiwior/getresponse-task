import styled from 'styled-components';
import avatar from '../../../resources/images/avatar.jpg';

export const ProfileContainer = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: flex-end;

  & svg {
    margin-left: 10px;
    transform: scale(0.5, 0.5) rotate(90deg);
    cursor: pointer;
  }

  @media (min-width: 978px) {
    height: 79px;
  }

  @media (max-width: 978px) {
    margin-right: 4px;
    justify-self: flex-end;
  }
`;

export const ProfileImage = styled.div`
  background: url(${avatar}) no-repeat top center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.32);
  margin-bottom: 4px;
`;

export const ProfileName = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;
  cursor: pointer;
`;
