<script lang="ts">
	import { events, type Event } from '$lib/data/events';
	import EventModal from '$lib/components/EventModal.svelte';
	import EventConsole from '$lib/components/EventConsole.svelte';
	import PastEventsHero from '$lib/components/PastEventsHero.svelte';
	import MemoryArchiveSection from '$lib/components/MemoryArchiveSection.svelte';

	let pastEvents = $derived(events.filter((e) => e.status === 'Completed'));

	let selectedEvent = $state<Event | null>(null);

	const openModal = (event: Event) => {
		selectedEvent = event;
	};

	const closeModal = () => {
		selectedEvent = null;
	};
</script>

<svelte:head>
	<title>Past Events | IETE KJSIT</title>
</svelte:head>

<div class="flex min-h-screen w-full flex-col p-4 pt-24 md:p-8 md:pt-32">
	<PastEventsHero />

	<div
		class="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
	></div>

	<EventConsole title="Past_Events" events={pastEvents} onOpenModal={openModal} />
	<div
		class="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
	></div>

	<MemoryArchiveSection />
</div>

{#if selectedEvent}
	<EventModal event={selectedEvent} onClose={closeModal} />
{/if}
