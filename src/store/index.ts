import { writable } from 'svelte/store';

const stateCheck = [
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal'],
	['normal', 'normal', 'normal', 'normal', 'normal']
]

const wordLength = writable<number>(5);

const wordLang = writable<string>('en');

const wordGuess = writable<string>('');

const isLoading = writable<boolean>(false);

const dictionary = writable<string[]>([]);

const currentTry = writable<number>(0);

const playerWords = writable<string[][]>([[], [], [], [], [], []]);

const wordsCheck = writable<string[][]>(stateCheck);

const resetState = () => {
	wordLength.set(5);
	wordLang.set('en');
	wordGuess.set('');
	isLoading.set(false);
	dictionary.set([]);
	currentTry.set(0);
	playerWords.set([
		[], [], [], [], [], []
	]);
	wordsCheck.set([
		['normal', 'normal', 'normal', 'normal', 'normal'],
		['normal', 'normal', 'normal', 'normal', 'normal'],
		['normal', 'normal', 'normal', 'normal', 'normal'],
		['normal', 'normal', 'normal', 'normal', 'normal'],
		['normal', 'normal', 'normal', 'normal', 'normal'],
		['normal', 'normal', 'normal', 'normal', 'normal']
	]);
}

export { wordGuess, currentTry, playerWords, isLoading, dictionary, wordsCheck, wordLength, wordLang, resetState };
