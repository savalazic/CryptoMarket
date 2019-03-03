// @flow
export type Symbol = {
  id: string,
  displayName: string,
  price: {
    ask: number,
    bid: number,
  },
  isFollowing: boolean,
};

export type Symbols = Symbol[];
