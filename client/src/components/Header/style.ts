import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;

  h1{
    color: ${props => props.theme.colorTextHeader};
  }

  svg{
    cursor: pointer;
  }
`;

