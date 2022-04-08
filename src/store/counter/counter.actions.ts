import { createAction } from "@reduxjs/toolkit";

// export function increment(value: number) {
//   return { type: "increment", payload: value };
// }

export const increment = createAction<number>("counter/increment");
export const decrement = createAction<number>("counter/decrement");
export const reset = createAction("counter/reset");
export const set = createAction<number>("counter/set");
