<script lang="ts">
import { onMount } from "svelte";
import {wordGuess} from "../store";
import { getDictionary} from "../API";
import Header from '../components/Header.svelte';
import Grid from "../components/Grid.svelte";
let dictionary = [];
let word = ''
let splitWord = [];
let isLoading = false;

const initialize = async () => {
    try {
        isLoading = true;
        dictionary = await getDictionary();
        const randomNumber = Math.floor(Math.random() * dictionary.length);
        word = dictionary[randomNumber];
        splitWord = word.split('');
        wordGuess.set(dictionary[randomNumber])
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
}

onMount(async () => {
    await initialize();
})
</script>

<Header title={'WORDLE'} />
{#if !isLoading}
    <Grid />
{/if}
{#if isLoading}
    <div class="flex justify-center items-center">Loading the game...</div>
{/if}

