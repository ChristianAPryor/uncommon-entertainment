import React from 'react';
import { AddItemFormProps } from './type';

export const AddItemForm: React.FC<AddItemFormProps> = ({
  handleAddItem,
  newItem,
  setNewItem,
}) => {
  return (
    <form onSubmit={handleAddItem}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};
