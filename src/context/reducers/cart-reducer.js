const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemId = action.item.id;
      const existingIndex = state.items.findIndex((item) => item.id === itemId);

      const existingItem = state.items[existingIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        updatedItems = state.items.slice();
        updatedItems[existingIndex] = updatedItem;
      } else {
        const newItem = { ...action.item, quantity: 1 };
        updatedItems = [...state.items, newItem];
      }

      return { items: updatedItems };

    default:
      throw new Error("unknown action type!");
  }
};

export default cartReducer;
