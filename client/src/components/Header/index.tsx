import React from 'react';
import { HeaderContainer } from './style';
import { ReactComponent as LogoSun } from '../../img/icon-sun.svg';
import { ReactComponent as LogoMoon } from '../../img/icon-moon.svg';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setThemAction } from '../../store/reducers/mainReducer';


export const Header: React.FC = () => {

  const mainState = useTypedSelector(state => state.main);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <h1>TODO</h1>
      {
        mainState.theme === 'light'
          ?
          <LogoMoon
            role="button"
            tabIndex={0}
            onClick={() => dispatch(setThemAction('dark'))}
            onKeyDown={(e) => e.key === 'Enter' && dispatch(setThemAction('dark'))}
          />
          :
          <LogoSun
            role="button"
            tabIndex={0}
            onClick={() => dispatch(setThemAction('light'))}
            onKeyDown={(e) => e.key === 'Enter' && dispatch(setThemAction('light'))}
          />
      }
    </HeaderContainer>
  );
};
