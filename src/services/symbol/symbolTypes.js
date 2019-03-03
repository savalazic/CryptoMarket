// @flow
export type Symbol = {
  id: string,
  displayName: string,
  price: {
    ask: number,
    bid: number,
  },
};

export type Symbols = Symbol[];
