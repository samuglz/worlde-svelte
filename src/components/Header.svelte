<div class="header-container">
    <h1 class="brand">
        {title}
    </h1>
    <SettingMenu />
</div>

<script>
    import SettingMenu from "./SettingMenu.svelte";

    export let title;
</script>

<style>
    .header-container{
        @apply flex justify-center items-center border-b border-solid py-4 mb-5;
    }
    .brand {
        @apply flex justify-center items-center text-3xl font-semibold w-full border-gray-300;
    }
</style>
