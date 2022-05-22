import Words from "./Words";

export async function getDictionary(length = 5, lang='en'): Promise<string[]> {
	if(lang.toLowerCase() === 'es') {
		return Words.spanish.filter(word => word.length === length);
	}
	return Words.english.filter(word => word.length === length);
}
