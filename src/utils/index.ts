const BACKSPACE_CODE = 8;
const ENTER_CODE = 13;
export const isLetter = (char: string) => /^[a-zA-Z]$/.test(char);
export const isBackSpace = (key: number) => key === BACKSPACE_CODE;
export const isEnter = (key: number) => key === ENTER_CODE;
export const splitWord = (word: string) => word.split('');
