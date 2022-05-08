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

<Header title={'WORDLE'} />
{#if !$isLoading}
    <Grid />
{/if}
{#if $isLoading}
    <div class="flex justify-center items-center">Loading...</div>
{/if}

