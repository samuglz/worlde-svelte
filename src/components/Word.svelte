<script lang="ts">
    import LetterInput from "./LetterInput.svelte";
    import {playerWords} from "../store";
    export let index;
    export let length = 5;
</script>

<div class="flex justify-center items-center gap-1 py-0.5">
    {#each Array(length) as _, i}
        <LetterInput letter={$playerWords[index][i]} />
    {/each}
</div>




