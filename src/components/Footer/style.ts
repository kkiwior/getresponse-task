import styled from 'styled-components';

export const FooterContainer = styled.section`
  width: 100%;
  margin: 50px auto 32px auto;
  display: flex;
  color: var(--primaryTextColor);
  flex-direction: column;
  
  @media (min-width: 978px){
    justify-content: space-between;
    flex-direction: row;
    width: 978px;
  }
`;

export const ContentContainer = styled.div`
  word-wrap: break-word;
  
  @media (min-width: 978px){
    margin-bottom: 15px;
    width: 33.33%;
    
      &:not(&:nth-child(1)) {
        border-left: 1px solid rgba(194, 194, 194, 0.44);
      }
    
      &:nth-child(1) {
        padding-right: 40px;
      }
    
      &:nth-child(2) {
        padding: 0 40px 0 40px;
      }
    
      &:nth-child(3) {
        padding-left: 40px;
      }
  }

  @media (max-width: 978px){
    padding: 16px;

    &:not(&:nth-child(3)) {
      border-bottom: 1px solid rgba(194, 194, 194, 0.44);
    }
  }
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bolder;
`;

export const Message = styled.div`
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  color: var(--primaryTextColor);
  border: 1px solid rgb(192, 192, 192);
  padding: 5px 10px;
  border-radius: 6px;
  background: transparent;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0 0 2px 1px var(--headerBorderColor);
  }
`;

export const ButtonText = styled.span`
  margin-right: 4px;
`;

export const ButtonIcon = styled.img`
    margin-right: 4px;
`;
