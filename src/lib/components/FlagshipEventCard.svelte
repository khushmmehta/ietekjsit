<script lang="ts">
	import type { Event } from '$lib/data/events';
	import { Clock, MapPin } from 'lucide-svelte';

	interface Props {
		event: Event;
		onClick?: (event: Event) => void;
	}

	let { event, onClick }: Props = $props();

	const statusColors = {
		Upcoming: 'text-green-400 border-green-500/50 bg-green-900/20',
		Ongoing: 'text-yellow-400 border-yellow-500/50 bg-yellow-900/20',
		Registration: 'text-blue-400 border-blue-500/50 bg-blue-900/20',
		Completed: 'text-gray-400 border-gray-500/50 bg-gray-900/20'
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="group relative flex h-[400px] w-full min-w-[300px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 hover:border-green-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] md:h-[500px]"
	onclick={() => onClick?.(event)}
>
	<!-- Background Image -->
	<div class="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
		<img src={event.image} alt={event.title} class="h-full w-full object-cover opacity-60" />
		<div
			class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"
		></div>
	</div>

	<!-- HUD Stats Panel -->
	<div
		class="absolute top-4 right-4 flex flex-col gap-2 rounded-lg border border-white/10 bg-black/60 p-3 backdrop-blur-md transition-all duration-300 group-hover:border-green-500/30"
	>
		<div class="flex items-center justify-between gap-4">
			<span class="text-[10px] tracking-widest text-gray-500 uppercase">Status</span>
			<div
				class="rounded border px-2 py-0.5 text-[10px] font-bold uppercase {statusColors[
					event.status || 'Upcoming'
				]}"
			>
				{event.status}
			</div>
		</div>
		<div class="h-[1px] w-full bg-white/10"></div>
		<div class="flex items-center justify-between gap-4">
			<span class="text-[10px] tracking-widest text-gray-500 uppercase">Participants</span>
			<div class="font-mono text-sm font-bold text-green-400">
				{event.participants}
			</div>
		</div>
	</div>

	<!-- Content -->
	<div class="relative z-10 p-6 md:p-8">
		<h3
			class="mb-2 font-mono text-2xl font-bold text-white transition-all duration-300 group-hover:text-green-400 md:text-3xl"
		>
			{event.title}
		</h3>

		<p class="mb-4 line-clamp-2 text-sm text-gray-300 md:text-base">
			{event.description}
		</p>

		<div class="flex items-center gap-6 font-mono text-xs text-gray-400">
			<div class="flex items-center gap-2">
				<Clock size={16} class="text-green-500" />
				{event.date}
			</div>
			<div class="flex items-center gap-2">
				<MapPin size={16} class="text-green-500" />
				{event.location}
			</div>
		</div>
	</div>
</div>
