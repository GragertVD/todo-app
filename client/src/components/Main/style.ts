import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
`;

export const ButtonOpenSettings = styled.button`
  cursor: pointer;
  padding: 4px;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorTextCompletedItem};
  border: 1px solid ${props => props.theme.colorLine};

  &:hover{
    color: ${props => props.theme.colorTextFilter};
  }
`;
