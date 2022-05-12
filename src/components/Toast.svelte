<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let message = ''

    $: {
        if(message) {
            dispatch('close')
        }
    }
</script>

{#if message}
    <div class="mt-10 w-40 h-10 bg-black text-white rounded-sm flex justify-center items-center"> {message} </div>
{/if}
