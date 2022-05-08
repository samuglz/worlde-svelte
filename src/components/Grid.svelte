<script lang="ts">
import {isLetter} from "../utils";
import Word from "./Word.svelte";
const MAX_TRIES = 6;
let word = []
const handleKeydown = (event) => {
    if(isLetter(event.key) && word.length < 5 && event.keyCode !== 8) {
        word = [...word, event.key];
    }
    if(event.keyCode === 8) {
        word = word.slice(0, word.length - 1);
    }
}
</script>
<svelte:window on:keydown={handleKeydown}/>

{#each Array(MAX_TRIES) as _, i}
    <Word letters="{word}" />
{/each}
