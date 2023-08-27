import styled, { keyframes } from 'styled-components';

export const TodoItemContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 64px;
  padding: 20px 24px;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};

  display: flex;
  align-items: center;
  gap: 24px;
  
  cursor: pointer;

  @media (any-hover: hover) {
    button{
      opacity: 0;
    }
    &:hover {
      button{
        opacity: 1;
      }
    }
  }
  
  form{
    width: 100%;
  }
`;

export const TextItem = styled.p<{ completed: boolean }>`
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.completed ? props.theme.colorTextCompletedItem : props.theme.colorTextItem};
  ${props => props.completed ? `text-decoration: line-through;` : ``}
  border: none;
  font-size: 1.125rem;
  width: 100%;
`;

export const CircleItem = styled.div<{ completed: boolean }>`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colorLine};
  ${props => !props.completed
    ? ``
    : `
    background: linear-gradient(#55DDFF, #C058F3);

    &::before{
      content: '✔';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  `};
`;

export const EditInputTextItem = styled.input`
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};
  border: none;
  font-size: 1.125rem;
  width: 100%;
  
  &:focus{
    outline: 0;
    outline-offset: 0;
    border: 1px solid ${props => props.theme.colorLine};
  }
`;

const animEditIcon = keyframes`
    0%{
      transform: rotate(15deg);
    }
    50%{
      transform: rotate(-15deg);
    }
    100%{
      transform: rotate(15deg);
    }
`
export const ButtonEdit = styled.button<{ stateEdit: boolean }>`
  ${props => props.stateEdit ? `opacity: 1 !important;` : ``}
  cursor: pointer;
  transition: opacity ease 0.5s;
  flex-shrink: 0;
  width: 1.3rem;
  height: 1.3rem;
  background: transparent;
  border: none;

  position: relative;

  transition: all 0.3s;

  svg{
    width: 100%;
    height: 100%;
    path{
      stroke: ${props => props.stateEdit ? `red` : props.theme.colorCross};
      stroke-width: 1px;
    }
  }

  
  @media (any-hover: hover) {
    &:hover {
      transform: rotate(-20deg);
    }
  }
  animation: ${props => props.stateEdit? animEditIcon: 0} 1s linear infinite
`


export const ButtonDeleted = styled.button`
  cursor: pointer;
  transition: opacity ease 0.5s;
  flex-shrink: 0;
  width: 1.3rem;
  height: 1.3rem;
  background: transparent;
  border: none;

  position: relative;

  transition: all 0.3s;
  
  @media (any-hover: hover) {
    &:hover {
      transform: rotate(90deg);
    }
  }

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    background-color: ${props => props.theme.colorCross};
    display: block;
    width: 100%;
    height: 1px;
    
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

`;
