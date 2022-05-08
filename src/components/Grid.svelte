<script lang="ts">
import Word from "./Word.svelte";
const MAX_TRIES = 6;
export let word = '';

interface Game {
    currentTry: number;
    wordGuess: string;
}

const gameState: Game = {
    currentTry: 0,
    wordGuess: word
}

</script>


{#each Array(MAX_TRIES) as _, i}
    <Word state={gameState} index={i} />
{/each}
