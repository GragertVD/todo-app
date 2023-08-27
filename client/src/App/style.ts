import styled from 'styled-components';
import backgroundLight from '../img/bg-desktop-light.jpg';
import backgroundDark from '../img/bg-desktop-dark.jpg';

export const AppContainer = styled.div`
  background-color: ${props => props.theme.colorBackground};
  background-image: url(${props => props.theme.theme === 'light' ? backgroundLight : backgroundDark});
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 30%;
  height: 100vh;
`;

export const TodoContainer = styled.div`
  max-width: 540px;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 70px;
  margin: 0 auto;

  ${props => props.theme.beforeMobileL}{
    padding-top: 20px;
  }

`;

