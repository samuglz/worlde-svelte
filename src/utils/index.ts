const BACKSPACE_CODE = 'Backspace';
const ENTER_CODE = 'Enter';
export const isLetter = (char: string) => /^[a-zA-Z]$/.test(char);
export const isBackSpace = (key: string) => key === BACKSPACE_CODE;
export const isEnter = (key: string) => key === ENTER_CODE;
export const splitWord = (word: string) => word.split('');
export const isCorrectWord = (letterState: string[]) =>
	letterState.every((letter) => letter === 'correct');
