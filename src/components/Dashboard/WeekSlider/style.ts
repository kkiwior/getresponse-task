import styled from 'styled-components';

interface IGridColumnProps {
    column: number;
}

export const SelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 26px auto 26px;
  grid-template-areas: 'larrow week rarrow';
  width: 299px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 5px 0 0 1px;
`;

export const ArrowButton = styled.button<IGridColumnProps>`
  border: 1px solid rgb(192, 192, 192);
  padding: 13px 7px 10px 8px;
  border-radius: 6px;
  cursor: pointer;
  background: transparent;
  transition: 0.2s all ease-in;
  grid-column-start: ${props => props.column};

  &:hover {
    box-shadow: 0 0 2px 1px var(--headerBorderColor);
  }

  &.reverse {
    transform: rotateY(180deg);
  }
`;

export const Week = styled.div<IGridColumnProps>`
  font-size: 48px;
  grid-area: week;
  color: var(--orangeColor);
  grid-column-start: ${props => props.column};
`;
