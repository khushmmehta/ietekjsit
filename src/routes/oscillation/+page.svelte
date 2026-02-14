<script lang="ts">
	import { events, type Event } from '$lib/data/events';
	import EventCard from '$lib/components/EventCard.svelte';
	import EventModal from '$lib/components/EventModal.svelte';
	import FlagshipSection from '$lib/components/FlagshipSection.svelte';
	import TimelineSection from '$lib/components/TimelineSection.svelte';
	import MemoryArchiveSection from '$lib/components/MemoryArchiveSection.svelte';
	import { fade } from 'svelte/transition';

	let selectedCategory = $state('All Events');
	let selectedEvent = $state<Event | null>(null);

	const categories = [
		{ id: 'All Events', label: 'All Events', icon: 'i-lucide-grid' },
		{ id: 'Technical', label: 'Technical', icon: 'i-lucide-code' },
		{ id: 'Non-Technical', label: 'Non-Technical', icon: 'i-lucide-terminal' },
		{ id: 'Gaming', label: 'Gaming', icon: 'i-lucide-gamepad-2' },
		{ id: 'Workshop', label: 'Workshops', icon: 'i-lucide-wrench' }
	];

	let filteredEvents = $derived(
		selectedCategory === 'All Events'
			? events
			: events.filter(
					(e) =>
						e.category === selectedCategory ||
						(selectedCategory === 'Workshop' && e.category === 'Workshop')
				)
	);

	const selectCategory = (category: string) => {
		selectedCategory = category;
	};

	const openModal = (event: Event) => {
		selectedEvent = event;
	};

	const closeModal = () => {
		selectedEvent = null;
	};
</script>

<svelte:head>
	<title>Events | IETE KJSIT</title>
</svelte:head>

<div class="flex min-h-screen w-full flex-col p-4 pt-24 md:p-8 md:pt-32">
	<header class="mb-8">
		<h1 class="mb-2 font-mono text-4xl font-bold text-white md:text-5xl">
			Event_Console
			<span class="animate-pulse text-green-500">_</span>
		</h1>
		<div class="h-1 w-24 bg-green-500"></div>
	</header>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
		<div class="col-span-1 mb-6 lg:hidden">
			<div class="no-scrollbar flex gap-3 overflow-x-auto pb-2">
				{#each categories as category}
					<button
						class="flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300
						{selectedCategory === category.id
							? 'border-green-500 bg-green-500/20 text-green-400 shadow-[0_0_10px_rgba(0,255,0,0.2)]'
							: 'border-white/10 bg-black/50 text-gray-400 hover:border-white/30 hover:text-white'}"
						onclick={() => selectCategory(category.id)}
					>
						<span class={category.icon}></span>
						{category.label}
					</button>
				{/each}
			</div>
		</div>

		<aside class="hidden lg:col-span-3 lg:block">
			<div class="sticky top-32 rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-md">
				<p class="mb-6 text-sm font-bold tracking-widest text-gray-500 uppercase">Filter By:</p>

				<nav class="flex flex-col gap-2">
					{#each categories as category}
						<button
							class="group flex items-center gap-3 rounded-lg px-4 py-3 text-left font-mono text-sm transition-all duration-300
                            {selectedCategory === category.id
								? 'border-l-2 border-green-500 bg-green-500/10 text-green-400 shadow-[0_0_15px_rgba(0,255,0,0.1)]'
								: 'border-l-2 border-transparent text-gray-400 hover:bg-white/5 hover:text-white'}"
							onclick={() => selectCategory(category.id)}
						>
							{#if selectedCategory === category.id}
								<span class="{category.icon} h-4 w-4 text-green-500"></span>
							{:else}
								<span class="{category.icon} h-4 w-4 opacity-50"></span>
							{/if}
							{category.label}
						</button>
					{/each}
				</nav>
			</div>
		</aside>

		<main class="lg:col-span-9">
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				{#each filteredEvents as event (event.id)}
					<div transition:fade={{ duration: 300 }}>
						<EventCard {event} onClick={openModal} />
					</div>
				{/each}

				{#if filteredEvents.length === 0}
					<div class="col-span-full py-12 text-center font-mono text-gray-500">
						No events found in this category.
					</div>
				{/if}
			</div>
		</main>
	</div>

	<div
		class="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
	></div>

	<FlagshipSection onOpenModal={openModal} />

	<div
		class="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
	></div>

	<TimelineSection />

	<div
		class="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
	></div>

	<MemoryArchiveSection />
</div>

{#if selectedEvent}
	<EventModal event={selectedEvent} onClose={closeModal} />
{/if}
