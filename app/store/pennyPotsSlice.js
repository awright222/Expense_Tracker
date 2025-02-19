import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pots: [
    { id: 1, name: "Groceries", total: 250, transactions: ["Bought milk - $5", "Dinner - $20"] },
    { id: 2, name: "Entertainment", total: 100, transactions: ["Movie Ticket - $15"] },
  ],
};

const pennyPotsSlice = createSlice({
  name: "pennyPots",
  initialState,
  reducers: {
    addPennyPot: (state, action) => {
      state.pots.push(action.payload);
    },
  },
});

export const { addPennyPot } = pennyPotsSlice.actions;
export default pennyPotsSlice.reducer;
