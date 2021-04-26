import styled from 'styled-components';

interface IWidthProps {
    width: number;
}

export const ProgressContainer = styled.div<IWidthProps>`
  display: inline-block;
  width: ${props => props.width}px;
  
  @media (max-width: 978px){
    margin: 0 auto 10px auto;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  margin-bottom: 8px;

  @media (max-width: 978px){
    text-align: center;
  }
`;

export const ProgressbarSvg = styled.svg`
  margin: 4px 0 0 2px;
`;

export const WeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0 0 2px;
`;

export const Week = styled.div`
  width: 10px;
  text-align: center;
`;
