<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	// Mock gallery data
	const photos = [
		'https://placehold.co/600x400/000000/00ff00?text=Hackathon+Winner',
		'https://placehold.co/600x800/000000/00ff00?text=Robotics+Work',
		'https://placehold.co/600x400/000000/00ff00?text=Guest+Speaker',
		'https://placehold.co/600x600/000000/00ff00?text=Gaming+Finals',
		'https://placehold.co/600x400/000000/00ff00?text=Workshop+Crowd',
		'https://placehold.co/600x400/000000/00ff00?text=Prize+Distribution'
	];

	let selectedPhoto = $state<string | null>(null);

	const openLightbox = (photo: string) => {
		selectedPhoto = photo;
	};

	const closeLightbox = () => {
		selectedPhoto = null;
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') closeLightbox();
	};
</script>

<svelte:window onkeydown={handleKeydown} />

<section class="relative w-full py-16">
	<!-- Section Header -->
	<header class="mb-8">
		<h1 class="mb-2 font-mono text-4xl font-bold text-white md:text-5xl">
			Memory_Archive
			<span class="animate-pulse text-green-500">_</span>
		</h1>
		<div class="h-1 w-24 bg-green-500"></div>
	</header>

	<div class="columns-1 gap-4 space-y-4 px-4 md:columns-2 md:px-12 lg:columns-3">
		{#each photos as photo}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-black"
				onclick={() => openLightbox(photo)}
			>
				<img
					src={photo}
					alt="Event memory"
					class="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>

				<!-- Overlay -->
				<div
					class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				>
					<span
						class="rounded border border-green-500 px-4 py-2 font-mono text-2xl font-bold tracking-widest text-green-400 text-shadow-[0_0_10px_#00ff00]"
					>
						VIEW
					</span>
				</div>

				<!-- Corner accents -->
				<div
					class="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-green-500 opacity-0 transition-opacity group-hover:opacity-100"
				></div>
				<div
					class="absolute right-2 bottom-2 h-2 w-2 border-r-2 border-b-2 border-green-500 opacity-0 transition-opacity group-hover:opacity-100"
				></div>
			</div>
		{/each}
	</div>

	<!-- Lightbox Modal -->
	{#if selectedPhoto}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
			transition:fade={{ duration: 200 }}
			onclick={closeLightbox}
		>
			<div
				class="relative max-h-[90vh] max-w-[90vw]"
				transition:scale={{ duration: 300, start: 0.9 }}
			>
				<img
					src={selectedPhoto}
					alt="Full size memory"
					class="max-h-[90vh] max-w-full rounded border border-green-500/30 object-contain shadow-[0_0_50px_rgba(0,255,0,0.2)]"
				/>
				<button
					class="absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:-top-12 md:-right-12"
					onclick={(e) => {
						e.stopPropagation();
						closeLightbox();
					}}
				>
					✕
				</button>
			</div>
		</div>
	{/if}
</section>
