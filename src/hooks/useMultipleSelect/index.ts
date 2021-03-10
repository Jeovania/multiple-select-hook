import { useState } from "react";

export const useMultipleSelect = <T>(initState: T[]) => {
  const [items, setItems] = useState(new Set(initState));

  const addItem = (item: T) => setItems((state) => new Set(state.add(item)));

  const addAllItems = (group: T[]) => {
    const groupItems = new Set<T>(group);
    setItems(groupItems);
  };

  const removeItem = (item: T) => {
    items.delete(item);
    setItems(new Set(items));
  };

  const removeAllItems = () => setItems(new Set());

  const toggleItem = (item: T) => {
    if (items.has(item)) {
      removeItem(item);
    } else {
      addItem(item);
    }
  };

  const toggleAllItems = (group: T[]) => {
    if (getSize() > 0) {
      removeAllItems();
    } else {
      addAllItems(group);
    }
  };

  const hasItem = (item: T): boolean => items.has(item);

  const getSize = (): number => items.size;

  const getItems = () => Array.from(items);

  return {
    addItem,
    addAllItems,
    removeItem,
    removeAllItems,
    toggleItem,
    toggleAllItems,
    hasItem,
    getSize,
    getItems,
  };
};
