import React from "react";
import styled from "styled-components";
import avatar from '../../resources/images/avatar.jpg';
import {ReactComponent as Arrow} from '../../resources/icons/arrow.svg';

function Profile() {
    return (
        <ProfileContainer>
            <ProfileImage></ProfileImage>
            <ProfileName>Olivia Wilde</ProfileName>
            <Arrow></Arrow>
        </ProfileContainer>
    );
}

const ProfileContainer = styled.div`
  width: 50%;
  height: 79px;
  align-items: center;
  display: inline-flex;
  justify-content: flex-end;

  & svg {
    margin-left: 10px;
    transform: scale(0.5, 0.5) rotate(90deg);
    cursor: pointer;
  }
`;

const ProfileImage = styled.div`
  background: url(${avatar}) no-repeat top center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.32);
  margin-bottom: 4px;
`;

const ProfileName = styled.div`
  font-family: "Helvetica Neue LTStd Bd", sans-serif;
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;
`;

export {Profile}