import React from 'react';
import { CreateItem } from '../CreateItem';
import { ButtonOpenSettings, MainContainer } from './style';
import { TodoList } from '../TodoList/index';
import { TodoFooter } from '../TodoFooter';

export const Main: React.FC = () => {

  return (
    <MainContainer>
      <CreateItem />
      <TodoList />
      <TodoFooter />
      <ButtonOpenSettings
        onClick={() => {
          const params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=60,left=100,top=100';
          open('/settings', 'test', params);
        }}
      >Открыть настройки</ButtonOpenSettings>
    </MainContainer>
  );
};
