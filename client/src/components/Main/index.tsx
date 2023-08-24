import { CreateItem } from "../CreateItem";
import { MainContainer } from "./style";
import { TodoList } from '../TodoList/index';
import { TodoFooter } from "../TodoFooter";

export const Main: React.FC = () => {

  return (
    <MainContainer>
      <CreateItem />
      <TodoList />
      <TodoFooter />
    </MainContainer>
  );
}
