import { dictionary, isLoading, wordGuess } from '../store';
import { getDictionary } from '../API';

export const initializeGame = async (length: number, lang:string) => {
	try {
		isLoading.set(true);
		const response = await getDictionary(length,lang);
		dictionary.set(response);
		const randomNumber = Math.floor(Math.random() * response.length);
		const randomWord = response[randomNumber];
		wordGuess.set(randomWord);
	} catch (error) {
		console.error(error);
	} finally {
		isLoading.set(false);
	}
};
