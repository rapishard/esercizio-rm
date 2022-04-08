import { createAction } from "@reduxjs/toolkit";

// export function increment(value: number) {
//   return { type: "increment", payload: value };
// }

export const add = createAction<number>("favourites/add");
export const remove = createAction<number>("favourites/remove");
export const clear = createAction("favourites/clear");
