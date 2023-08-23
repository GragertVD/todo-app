import styled from 'styled-components';

export const CreateItemContainer = styled.form`
  width: 100%;
  /* height: 64px; */
  padding: 20px 24px;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};

  display: flex;
  align-items: center;
  gap: 24px;

  margin-bottom: 24px;
`;

export const Circle = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colorLine};
  background-color: transparent;
`;

export const Input = styled.input`
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};
  border: none;
  font-size: 1.125rem;
  width: 100%;

  &:focus{
    outline: 0;
    outline-offset: 0;
  }

`;
