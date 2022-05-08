<script lang="ts">
    import LetterInput from "./LetterInput.svelte";
    import {isLetter} from "../utils";
    interface Game {
        currentTry: number;
        wordGuess: string;
    }
    export let length = 5;
    export let state: Game;
    export let index: number;
    let playerWord = []
    const handleKeydown = (event) => {
        if(state.currentTry === index){
            if(isLetter(event.key) && playerWord.length < 5 && event.keyCode !== 8) {
                playerWord = [...playerWord, event.key];
            }
            if(event.keyCode === 8) {
                playerWord = playerWord.slice(0, playerWord.length - 1);
            }
        }
    }
</script>
<svelte:window on:keydown={handleKeydown}/>

<div class="flex justify-center items-center gap-1 py-0.5">
    {#each Array(length) as _, i}
        <LetterInput letter={playerWord[i]} />
    {/each}
</div>




