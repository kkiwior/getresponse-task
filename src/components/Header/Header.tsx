import React from "react";
import styled from "styled-components";
import {Navigation} from "./Navigation";
import {Profile} from "./Profile";

function Header() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Navigation></Navigation>
                <Profile></Profile>
            </HeaderWrapper>
        </HeaderContainer>

    );
}

const HeaderWrapper = styled.header`
  display: flex;
  width: 978px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  box-shadow: 0 0 2px 1px var(--headerBorderColor);
  background-color: white;
  color: #7c7c7c;
`;

export {Header}