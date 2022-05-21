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
    <div class="toast"> {message} </div>
{/if}

<style>
    .toast {
        @apply mt-10 w-40 h-10 bg-black text-white rounded-sm flex justify-center items-center absolute top-10 z-50;
    }
</style>
