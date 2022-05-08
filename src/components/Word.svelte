<script lang="ts">
    import LetterInput from "./LetterInput.svelte";
    export let length = 5;
    export let letters = [];
</script>

<div class="flex justify-center items-center gap-1 py-0.5">
    {#each Array(length) as _, i}
        <LetterInput letter={letters[i]} />
    {/each}
</div>




