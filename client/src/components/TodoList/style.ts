import styled from 'styled-components';

export const TodoListContainer = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};

  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    border-bottom: 1px solid ${props => props.theme.colorLine};
  }

  &::-webkit-scrollbar-thumb {
    background-color: purple;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colorLine};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar-corner {
    background-color: ${props => props.theme.colorLine};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 20px;
    
  }
  & {
    -ms-overflow-style: auto;
    scrollbar-color: purple ${props => props.theme.colorLine};
    scrollbar-width: thin;
  }
`;


export const TodoFooterContainer = styled.div`
  width: 100%;
  padding: 20px 24px;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  button{
    cursor: pointer;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    color: ${props => props.theme.colorTextItem};
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

`;


