export async function getDictionary(): Promise<string[]> {
	const response = await fetch('https://random-word-api.herokuapp.com/all').then((data) =>
		data.json()
	);
	return response.filter((words: string) => words.length === 5);
}
