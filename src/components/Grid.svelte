<script lang="ts">
    import Word from "./Word.svelte";
    import Toast from "./Toast.svelte";
    import Keyboard from "svelte-keyboard";
    import {currentTry, dictionary, playerWords, wordGuess, wordsCheck} from "../store";
    import {isLetter, isBackSpace, isEnter, splitWord, isCorrectWord} from "../utils";
    import {onMount} from "svelte";
    const MAX_TRIES = 6;
    export let wordLength = 5
    let toastMessage = ''
    let isMobile = false

    onMount(() => {
        isMobile = window.innerWidth < 768
    })


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
        const currentWord:string[] = $playerWords[$currentTry]
        if(currentWord.length < wordLength) {
            toastMessage = 'Not enough letter'
        } else if(words.indexOf(currentWord.join('')) === -1) {
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

    const handleKeydown = (event:KeyboardEvent) => {
            if(isLetter(event.key) && !isCompleteRow()) {
                addChar(event.key);
            }
            if(isBackSpace(event.code)) {
                deleteChar();
            }
            if(isEnter(event.code)) {
                checkTry();
            }
    }
    const handleKeydownMobile = (event) => {
        console.log(event)
        if(isLetter(event.detail) && !isCompleteRow()) {
            addChar(event.detail);
        }
        if(isBackSpace(event.detail)) {
            deleteChar();
        }
        if(isEnter(event.detail)) {
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
{#if isMobile}
    <div class="absolute bottom-0 w-full">
        <Keyboard on:keydown="{handleKeydownMobile}" />
    </div>
{/if}
`
