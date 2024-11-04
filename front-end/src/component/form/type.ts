export interface AddItemFormProps {
  handleAddItem: (e: React.FormEvent<HTMLFormElement>) => void;
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
}