const BACKSPACE_CODE = 'Backspace';
const ENTER_CODE = 'Enter';
export const isLetter = (char: string):boolean => /^[a-zA-Z]$/.test(char);
export const isBackSpace = (key: string):boolean => key === BACKSPACE_CODE;
export const isEnter = (key: string):boolean => key === ENTER_CODE;
export const splitWord = (word: string):string[] => word.split('');
export const isCorrectWord = (letterState: string[]):boolean =>
	letterState.every((letter) => letter === 'correct');
