import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 350px) {
    flex-direction: column;
  }

  @media (min-width: 978px) {
    width: 978px;
    margin-left: calc(50vw - 495px);
    max-width: 978px;
  }
`;

export const HeaderContainer = styled.header`
  box-shadow: 0 0 2px 1px var(--headerBorderColor);
  background-color: var(--primaryColor);
  color: #7c7c7c;

  @media (max-width: 978px) {
    position: sticky;
    top: 0;
    z-index: 100;
  }
`;
