<script lang="ts">
    import Word from "./Word.svelte";
    import {currentTry, playerWords, wordGuess, wordsCheck} from "../store";
    import {isLetter, isBackSpace, isEnter, splitWord} from "../utils";
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

    const handleCheckGuess = () => {
        const currentWord = [...$playerWords[$currentTry]]
        const splitWordGuess = splitWord($wordGuess)
        for (let i = 0; i < wordLength; i++) {
            let letterPosition = splitWordGuess.indexOf(currentWord[i])
            if (letterPosition === -1) {
                $wordsCheck[$currentTry][i] = 'wrong'
            } else {
                if (currentWord[i] === splitWordGuess[i]) {
                    // shade green
                    $wordsCheck[$currentTry][i] = 'correct'
                } else {
                    // shade box yellow
                    $wordsCheck[$currentTry][i] = 'partial'
                }

                splitWordGuess[letterPosition] = "#"
            }
        }
        $wordsCheck = [...$wordsCheck]
    }

    const checkTry = () => {
        if (isCompleteRow()) {
            handleCheckGuess()
            if($currentTry < MAX_TRIES - 1) {
                currentTry.set($currentTry + 1)
                console.log($currentTry)
            }
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
