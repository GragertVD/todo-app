import styled from 'styled-components';

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


