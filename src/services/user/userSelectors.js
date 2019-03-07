export const getUserInfo = state => state.services.user.info;
export const getUserInfoId = state => state.services.user.info.id;

export const getUserAccounts = state => state.services.user.info.accounts;
// eslint-disable-next-line
export const getUserAccountId = state => getUserAccounts(state) && state.services.user.info.accounts[0].id;
