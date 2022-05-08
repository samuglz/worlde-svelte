import { writable } from 'svelte/store';

const wordGuess = writable<string>('');

const currentTry = writable<number>(0);

const playerWords = writable([[], [], [], [], [], []]);

export { wordGuess, currentTry, playerWords };
