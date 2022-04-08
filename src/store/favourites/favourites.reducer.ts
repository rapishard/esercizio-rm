import { createReducer } from "@reduxjs/toolkit";
import { add, remove, clear } from "./favourites.actions";

export const favouritesReducer = createReducer([] as number[], (builder) =>
  builder
    .addCase(add, (state, action) =>
      state.includes(action.payload) ? state : [...state, action.payload]
    )
    .addCase(remove, (state, action) =>
      state.filter((item) => item !== action.payload)
    )
    .addCase(clear, () => [] as number[])
);
