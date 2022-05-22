<script>
    import SettingIcon from "./SettingIcon.svelte";
    import CrossIcon from "./CrossIcon.svelte";
    import {wordLang, wordLength, resetState} from "../store";
    import {initializeGame} from "../Domain";
    let isOpen = false;
    let language = 'en'
    let length = '5'

    const toggleModal = () => {
        isOpen = !isOpen;
    }

    const handleSave = async () => {
        resetState()
        wordLength.set(Number(length))
        wordLang.set(language)
        await initializeGame($wordLength, $wordLang);
        toggleModal();
    }

</script>

<button on:click={toggleModal} class="setting-button">
    <SettingIcon />
</button>

{#if isOpen}
    <div class="modal-container">
        <section class="header-container-modal">
            <h1 class="modal-title">Settings</h1>
            <button class="close-button" on:click={toggleModal}>
                <CrossIcon />
            </button>
        </section>
        <section class="select-container">
            <label for="lang" class="label">Words's language:</label>
            <select bind:value={language} id="lang" class="select-input">
                <option value="en">English</option>
                <option value="es">Spanish</option>
            </select>
        </section>
        <section class="select-container">
            <label for="length" class="label">Words's language:</label>
            <select bind:value={length} id="length" class="select-input">
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </section>
        <section class="button-section">
            <button class="save-button" on:click={handleSave}>
                Save
            </button>
        </section>

    </div>
{/if}

<style>
    .modal-container {
         @apply absolute w-full z-50 h-screen top-0 left-0 bg-white;
    }
    .header-container-modal {
        @apply flex justify-center items-center w-full relative;
    }
    .modal-title {
        @apply w-full text-center text-3xl py-2 font-semibold;
    }
    .close-button {
        @apply absolute top-5 right-3;
    }
    .setting-button {
        @apply absolute right-3 flex justify-center items-center;
    }
    .button-section {
        @apply flex justify-center items-center w-full mt-10;
    }
    .save-button {
        @apply px-6 py-2 bg-blue-400 rounded text-white font-semibold;
    }
    .select-input {
        @apply border border-solid px-2 py-1;
    }
    .label {
        @apply px-3;
    }
    .select-container {
        @apply flex justify-center items-center mt-10;
    }
</style>
