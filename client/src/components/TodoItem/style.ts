import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  width: 100%;
  /* height: 64px; */
  padding: 20px 24px;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};

  display: flex;
  align-items: center;
  gap: 24px;
  
  cursor: pointer;

  button{
    opacity: 0;
  }
	&:hover {
    button{
      opacity: 1;
    }
	}

`;

export const CircleNotCompleted = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colorLine};
  background-color: transparent;
`;

export const TextNotCompleted = styled.p`
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};
  border: none;
  font-size: 1.125rem;
  width: 100%;
`;

export const CircleCompleted = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colorLine};
  background: linear-gradient(#55DDFF, #C058F3);
  &::before{
    content: '✔';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const TextCompleted = styled.p`
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextCompletedItem};
  text-decoration: line-through;
  border: none;
  font-size: 1.125rem;
  width: 100%;
  &::before{
    content: ' ';
    display: block;
    width: 20px;
    height: 3px;
  }
`;


export const Button = styled.button`
  cursor: pointer;
  transition: opacity ease 0.5s;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;

  position: relative;

  transition: all 0.3s;
  &:hover {
    transform: rotate(180deg);
  }

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    background-color: ${props => props.theme.colorCross};
    display: block;
    width: 24px;
    height: 1px;
    
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

`;
