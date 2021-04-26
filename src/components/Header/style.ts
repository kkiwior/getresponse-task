import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 978px){
    width: 978px;
  }
`;

export const HeaderContainer = styled.div`
  box-shadow: 0 0 2px 1px var(--headerBorderColor);
  background-color: white;
  color: #7c7c7c;
`;
