<script lang="ts">
    import LetterInput from "./LetterInput.svelte";
    import {currentTry, playerWords, wordGuess} from "../store";
    import {splitWord} from "../utils";
    import {onMount} from "svelte";
    export let row;
    export let length = 5;
    let currentStyle = ['normal', 'normal', 'normal', 'normal', 'normal'];
    onMount(() => {
        addEventListener('checkTry', () => {
            if ($currentTry === row) {
                console.log($currentTry, row);
                handleCheckGuess()
            }
        })
    })

    const handleCheckGuess = () => {
        const currentWord = [...$playerWords[$currentTry]]
        const splitWordGuess = splitWord($wordGuess)
        for (let i = 0; i < length; i++) {

            let letterPosition = splitWordGuess.indexOf(currentWord[i])
            if (letterPosition === -1) {
                currentStyle[i] = 'wrong'
            } else {
                if (currentWord[i] === splitWordGuess[i]) {
                    // shade green
                    currentStyle[i] = 'correct'
                } else {
                    // shade box yellow
                    currentStyle[i] = 'partial'
                }

                splitWordGuess[letterPosition] = "#"
            }
        }
        currentStyle = [...currentStyle]
    }
</script>

<div class="flex justify-center items-center gap-1 py-0.5">
    {#each Array(length) as _, idxLetter}
        <LetterInput letter={$playerWords[row][idxLetter]} style={currentStyle[idxLetter]} />
    {/each}
</div>




