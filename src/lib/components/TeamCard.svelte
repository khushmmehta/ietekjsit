<script lang="ts">
	let { text, image } = $props();
</script>

<div
	class="flex min-h-64 w-72 shrink-0 flex-col justify-between gap-4 rounded-md border border-white/10 bg-transparent shadow-lg backdrop-blur-[3px] duration-300 hover:border-green-500/80 md:min-h-96 md:w-128"
>
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<img src={image} alt="image" class="aspect-16/9 rounded-t-md border border-white/10" />
	<p class="text-flicker m-4 text-2xl md:text-5xl">{text}</p>
</div>
