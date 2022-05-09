<script lang="ts">
    import Word from "./Word.svelte";
    import {currentTry, playerWords} from "../store";
    import {isLetter, isBackSpace, isEnter} from "../utils";
    import { emitter } from "../events";
    const MAX_TRIES = 6;
    export let wordLength = 5

    const isCompleteRow = () => $playerWords[$currentTry].length === wordLength

    const addChar = (letter) => {
        $playerWords = $playerWords.map((word, idx) => {
            return idx === $currentTry ?
                [...$playerWords[$currentTry], letter]
                : word
        });
    }

    const deleteChar = () => {
        $playerWords = $playerWords.map((word, idx) => {
            return idx === $currentTry ?
                $playerWords[$currentTry].slice(0, $playerWords[$currentTry].length - 1)
                : word
        });
    }

    const checkTry = () => {
        if (isCompleteRow()) {
            emitter.emit("checkTry");
            // TODO: change for a custom event svelte (dispatch)
            // currentTry.update(oldValue => oldValue + 1);
        }
    }

    const handleKeydown = (event) => {
            if(isLetter(event.key) && !isCompleteRow()) {
                addChar(event.key);
            }
            if(isBackSpace(event.keyCode)) {
                deleteChar();
            }
            if(isEnter(event.keyCode)) {
                checkTry();
            }
    }

</script>


{#each Array(MAX_TRIES) as _, i}
    <Word row={i} />
{/each}
<svelte:window on:keydown={handleKeydown}/>
