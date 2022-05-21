import { writable } from 'svelte/store';

const wordGuess = writable<string>('');

const isLoading = writable<boolean>(false);

const dictionary = writable<string[]>([]);

const currentTry = writable<number>(0);

const playerWords = writable<string[][]>([[], [], [], [], [], []]);

const wordsCheck = writable<string[][]>([
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal']
]);

export { wordGuess, currentTry, playerWords, isLoading, dictionary, wordsCheck };
