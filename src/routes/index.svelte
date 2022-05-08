<script lang="ts">
import { onMount} from "svelte";
import { getDictionary} from "../API";
import Header from '../components/Header.svelte';
import Grid from "../components/Grid.svelte";
let dictionary = [];
let word = ''
let splitWord = [];
let isLoading = false;

onMount(async () => {
    try {
        isLoading = true;
        dictionary = await getDictionary();
        const randomNumber = Math.floor(Math.random() * dictionary.length);
        word = dictionary[randomNumber];
        splitWord = word.split('');
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
})
</script>

<Header title={'WORDLE'} />
{#if !isLoading}
    <div class="mt-10">
        <Grid word={word} />
    </div>
{/if}

