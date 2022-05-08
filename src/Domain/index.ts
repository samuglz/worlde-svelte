import { dictionary, isLoading, wordGuess } from '../store';
import { getDictionary } from '../API';

export const initializeGame = async () => {
	try {
		isLoading.set(true);
		console.log('isLoading', isLoading);
		const response = await getDictionary();
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
