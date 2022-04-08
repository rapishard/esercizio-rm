import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment, reset, set } from "./counter.actions";

export const counterReducer = createReducer(0, (builder) =>
  builder
    .addCase(increment, (state, action) => state + action.payload)
    .addCase(decrement, (state, action) => state - action.payload)
    .addCase(reset, () => 0)
    .addCase(set, (_, action) => action.payload)
);

// export const counterReducer = createReducer(0, {
//   [increment.type]: (state: number, action: PayloadAction<number>) =>
//     state + action.payload,
//   [decrement.type]: (state: number, action: PayloadAction<number>) =>
//     state - action.payload,
//   [reset.type]: () => 0,
//   [set.type]: (_, action: PayloadAction<number>) => action.payload,
// });

// export function counterReducer(state = 0, action: any) {
//   switch (action.type) {
//     case increment.type: {
//       return state + action.payload;
//     }
//     case decrement.type: {
//       return state - action.payload;
//     }
//     case reset.type: {
//       return 0;
//     }
//     case set.type: {
//       return action.payload;
//     }
//   }
//   return 10;
// }
