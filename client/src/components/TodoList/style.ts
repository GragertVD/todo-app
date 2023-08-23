import styled from 'styled-components';

export const TodoListContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};

  display: flex;
  flex-direction: column;
  align-items: center;

  /* box-shadow: grey 0px 3px 15px; */

  div{
    border-bottom: 1px solid ${props => props.theme.colorLine};
  }
`;

