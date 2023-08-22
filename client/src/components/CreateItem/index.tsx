import { Circle, CreateItemContainer, Input } from "./style";

export const CreateItem: React.FC = () => {

  return (
    <CreateItemContainer>
      <Circle />
      <Input placeholder="Create a new todo…" />
    </CreateItemContainer>
  );
}
