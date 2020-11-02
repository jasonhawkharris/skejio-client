import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: null,
});

export const todoListState = atom({
    key: 'todoListState',
    default: [],
});

export const addTodoBtnState = atom({
    key: 'addTodoBtnState',
    default: false,
})