// @flow
export type Account = {
  id: string,
  name: string,
  description?: string,
  status: string,
  userId: string,
  reportingCurrency: string,
};

export type User = {
  id: string,
  email: string,
  accounts: Account[],
  active: boolean,
  status: string,
  userInfo: {
    firstName: string,
    lastName: string,
  },
};
