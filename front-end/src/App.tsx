import React, { useEffect, useState } from 'react';
import { getItems, addItem } from './api';
import { Item } from './type/api_data_type';
import { AddItemForm } from './component/form';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  // Fetch items from the API
  const fetchItems = async () => {
    try {
      const response = await getItems();
      const data: Item[] = response;
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) {
      alert("Input Value");
      return;
    }

    try {
      const response = await addItem({ name: newItem });
      const addedItem: Item = response;
      setItems([...items, addedItem]);
      setNewItem('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <AddItemForm handleAddItem={handleAddItem} newItem={newItem} setNewItem={setNewItem} />
    </div>
  );
};

export default App;