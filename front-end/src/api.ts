// api.js

const API_URL = 'http://localhost:5000/items';

export const getItems = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      alert("Error fetching items");
      throw new Error('Failed to fetch items');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    alert("Error fetching items");
    throw error;
  }
};

export const addItem = async (item: any) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
    if (!response.ok) {
      alert("Failed to add item");
      throw new Error('Failed to add item');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding item:', error);
    alert("Error adding item");
    throw error;
  }
};
