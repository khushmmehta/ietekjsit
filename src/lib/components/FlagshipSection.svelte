<script lang="ts">
	import { events, type Event } from '$lib/data/events';
	import FlagshipEventCard from './FlagshipEventCard.svelte';

	interface Props {
		onOpenModal: (event: Event) => void;
	}

	let { onOpenModal }: Props = $props();

	const flagshipEvents = events.filter((e) => e.isFlagship);
	let activeIndex = $state(0);
</script>

<section class="relative w-full py-16">
	<!-- Section Header -->
	<header class="mb-8">
		<h1 class="mb-2 font-mono text-4xl font-bold text-white md:text-5xl 2xl:text-7xl">
			Flagship_Events
			<span class="animate-pulse text-green-500">_</span>
		</h1>
		<div class="h-1 w-24 bg-green-500"></div>
	</header>

	<!-- Horizontal Scroll Container -->
	<div
		class="no-scrollbar flex w-full gap-6 overflow-x-auto px-4 pb-8 md:px-12"
		style="scroll-snap-type: x mandatory;"
		onscroll={(e) => {
			const target = e.currentTarget;
			const scrollLeft = target.scrollLeft;
			const cardWidth = target.querySelector('div')?.clientWidth || 0;
			const gap = 24;
			activeIndex = Math.round(scrollLeft / (cardWidth + gap));
		}}
	>
		{#each flagshipEvents as event}
			<div class="scroll-snap-align-center w-[85vw] flex-shrink-0 md:w-[400px] 2xl:w-[550px]">
				<FlagshipEventCard {event} onClick={onOpenModal} />
			</div>
		{/each}
	</div>

	<!-- Scroll Indicators -->
	<div class="mt-4 flex justify-center gap-2">
		{#each flagshipEvents as _, i}
			<button
				class="h-2 rounded-full transition-all duration-300 {i === activeIndex
					? 'w-8 bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.5)]'
					: 'w-2 bg-green-900/50 hover:bg-green-800'}"
				aria-label="Go to slide {i + 1}"
				onclick={() => {
					const container = document.querySelector('.no-scrollbar');
					if (container) {
						const card = container.children[i] as HTMLElement;
						if (card) {
							card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
						}
					}
				}}
			></button>
		{/each}
	</div>
</section>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
