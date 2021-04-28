import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  font-size: 9px;
  font-weight: 400;
  color: #bdbdbd;

  @media (min-width: 978px) {
    grid-template-columns: 30% 40% 30%;
  }

  @media (max-width: 978px) {
    grid-template-rows: auto auto auto;
    justify-content: center;
    align-items: center;
  }
`;
