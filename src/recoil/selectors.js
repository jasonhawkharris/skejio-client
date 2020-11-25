import { userState } from './atoms';

export const loggedInState = selector({
    key: 'loggedInState',
    get: ({ get }) => get(userState);
})