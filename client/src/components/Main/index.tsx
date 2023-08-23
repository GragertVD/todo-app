import { CreateItem } from "../CreateItem";
import { MainContainer } from "./style";
import { TodoList } from '../TodoList/index';

export const Main: React.FC = () => {

  return (
    <MainContainer>
      <CreateItem />
      <TodoList />
    </MainContainer>
  );
}
