<script lang="ts">
import { onMount } from "svelte";
import { isLoading, wordLength, wordLang } from "../store";
import Header from '../components/Header.svelte';
import Grid from "../components/Grid.svelte";
import {initializeGame} from "../Domain";

onMount(async () => {
    await initializeGame($wordLength, $wordLang);
})
</script>

<Header title={'SVELTE WORDLE'} />
{#if !$isLoading}
    <Grid wordLength={$wordLength} />
{/if}
{#if $isLoading}
    <div class="loading-container">Loading...</div>
{/if}

<style>
    .loading-container {
        @apply flex justify-center items-center;
    }
</style>

