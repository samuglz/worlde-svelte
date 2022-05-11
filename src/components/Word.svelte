<script lang="ts">
    import LetterInput from "./LetterInput.svelte";
    import { playerWords, wordsCheck} from "../store";
    export let row;
    export let length = 5;

</script>

<div class="flex justify-center items-center gap-1 py-0.5">
    {#each Array(length) as _, idxLetter}
        <LetterInput letter={$playerWords[row][idxLetter]} style={$wordsCheck[row][idxLetter]} />
    {/each}
</div>




