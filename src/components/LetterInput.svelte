<script lang="ts">
 export let letter: string;
 export let style = 'normal'
 const handleStyle = (style) => {
      return `cell ${style}`
 }
</script>

<div class={handleStyle(style)}>
    {letter ? letter.toUpperCase() : ''}
</div>

<style>
 .cell {
     @apply w-12 h-12 border-2 border-solid text-2xl font-bold flex justify-center items-center;
 }
 .normal{
     @apply border-gray-300 text-black;
 }
 .wrong {
     @apply border-gray-500 bg-gray-500 text-white;
 }
 .correct {
     @apply border-green-500 bg-green-500 text-white;
 }
 .partial {
     @apply border-yellow-300 bg-yellow-300 text-white;
 }
</style>
