<script lang="ts">
	import { type Event } from '$lib/data/events';
	import EventModal from '$lib/components/EventModal.svelte';
	import FlagshipSection from '$lib/components/FlagshipSection.svelte';
	import TimelineSection from '$lib/components/TimelineSection.svelte';
	import MemoryArchiveSection from '$lib/components/MemoryArchiveSection.svelte';
	import OscillationHero from '$lib/components/OscillationHero.svelte';
	import EventConsole from '$lib/components/EventConsole.svelte';

	let selectedEvent = $state<Event | null>(null);

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
	<!-- Hero Section -->
	<OscillationHero />

	<div
		class="mb-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
	></div>

	<!-- Event Console -->
	<EventConsole onOpenModal={openModal} />

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
