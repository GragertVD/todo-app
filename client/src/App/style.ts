import styled from 'styled-components';
import backgroundLight from '../img/bg-desktop-light.jpg';
import backgroundDark from '../img/bg-desktop-dark.jpg';

export const AppContainer = styled.div`
  background-color: ${props => props.theme.colorBackground};
  background-image: url(${props => props.theme.theme === 'light' ? backgroundLight : backgroundDark});
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 30%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoContainer = styled.div`
  max-width: 540px;
  max-height: 100%;
  width: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
`;

