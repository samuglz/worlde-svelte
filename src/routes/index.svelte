<script lang="ts">
import { onMount } from "svelte";
import {isLoading} from "../store";
import Header from '../components/Header.svelte';
import Grid from "../components/Grid.svelte";
import {initializeGame} from "../Domain";

onMount(async () => {
    await initializeGame();
})
</script>

<Header title={'SVELTE WORDLE'} />
{#if !$isLoading}
    <Grid />
{/if}
{#if $isLoading}
    <div class="loading-container">Loading...</div>
{/if}

<style>
    .loading-container {
        @apply flex justify-center items-center;
    }
</style>

