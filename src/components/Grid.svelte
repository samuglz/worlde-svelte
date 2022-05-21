<script lang="ts">
    import Word from "./Word.svelte";
    import Toast from "./Toast.svelte";
    import {currentTry, dictionary, playerWords, wordGuess, wordsCheck} from "../store";
    import {isLetter, isBackSpace, isEnter, splitWord, isCorrectWord} from "../utils";
    const MAX_TRIES = 6;
    export let wordLength = 5
    let toastMessage = ''

    const isCompleteRow = () => $playerWords[$currentTry].length === wordLength

    const addChar = (letter:string) => {
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
        const words:string[] = [...$dictionary]
        if($playerWords[$currentTry].length < wordLength) {
            toastMessage = 'Not enough letter'
        } else if(!words.includes($playerWords[$currentTry])) {
            toastMessage = 'Invalid word!'
        } else if (isCompleteRow()) {
            handleCheckGuess()
            if(isCorrectWord($wordsCheck[$currentTry])){
                toastMessage = 'You win!'
            } else if($currentTry < MAX_TRIES - 1) {
                currentTry.set($currentTry + 1)
            } else {
                toastMessage = 'You lose!'
            }

        }
    }

    const handleClose = () => {
        setTimeout(() =>{
            toastMessage = ''
        }, 2000)
    }

    const handleKeydown = (event:any) => {
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


<div class="flex-col flex justify-center items-center">
    <div>
        {#each Array(MAX_TRIES) as _, i}
            <Word row={i} />
        {/each}
    </div>
    <Toast message={toastMessage} on:close={handleClose} />
</div>
<svelte:window on:keydown={handleKeydown}/>
