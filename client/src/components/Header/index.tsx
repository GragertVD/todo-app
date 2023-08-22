import { HeaderContainer } from "./style";
import { ReactComponent as LogoSun } from '../../img/icon-sun.svg';
import { ReactComponent as LogoMoon } from '../../img/icon-moon.svg';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setThemAction } from "../../store/reducers/mainReducer";


export const Header: React.FC = () => {

  const mainState = useTypedSelector(state => state.main);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <h1>TODO</h1>
      {
        mainState.theme === 'light'
          ?
          <LogoMoon onClick={() => dispatch(setThemAction('dark'))} />
          :
          <LogoSun onClick={() => dispatch(setThemAction('light'))} />
      }
    </HeaderContainer>
  );
}
