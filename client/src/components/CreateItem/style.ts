import styled from 'styled-components';

export const CreateItemContainer = styled.div`
  width: 100%;
  /* height: 64px; */
  padding: 20px 24px;
  border-radius: 5px;
  background-color: ${props => props.theme.colorBackgroundItem};
  color: ${props => props.theme.colorTextItem};

  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colorLine};
  background-color: transparent;
`;

export const Input = styled.input`
  border: none;
  font-size: 1.125rem;
`;
