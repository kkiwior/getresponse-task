import styled from 'styled-components';

export const ProteinsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2px 0 0 auto;
  width: 208px;

  @media (max-width: 978px) {
    margin: 0 auto;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  margin: 9px 0 0 3px;

  @media (max-width: 978px) {
    margin: 15px 0 10px;
    text-align: center;
  }
`;

export const Proteins = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & div {
    cursor: pointer;

    & img {
      height: 29px;
      width: 31px;
    }
  }
`;
