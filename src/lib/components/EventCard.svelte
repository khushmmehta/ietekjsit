<script lang="ts">
	import type { Event } from '$lib/data/events';
	import { Calendar, Users } from 'lucide-svelte';

	interface Props {
		event: Event;
		onClick: (event: Event) => void;
	}

	let { event, onClick }: Props = $props();

	// Category color mapping (mock logic, can be expanded)
	const getCategoryColor = (cat: string) => {
		switch (cat) {
			case 'Technical':
				return 'bg-green-500/20 text-green-400 border-green-500/30';
			case 'Non-Technical':
				return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
			case 'Gaming':
				return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
			case 'Workshop':
				return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
			default:
				return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
		}
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	class="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black/40 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]"
	onclick={() => onClick(event)}
	role="button"
	tabindex="0"
>
	<div class="relative h-48 w-full overflow-hidden">
		<img
			src={event.image}
			alt={event.title}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
		/>
		<div
			class="absolute top-2 right-2 rounded border px-2 py-1 text-xs font-bold backdrop-blur-md {getCategoryColor(
				event.category
			)}"
		>
			{event.category}
		</div>
		<div
			class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"
		></div>
	</div>

	<div class="flex flex-1 flex-col p-5 backdrop-blur-[3px]">
		<h3 class="mb-2 font-mono text-xl font-bold text-white group-hover:text-green-400">
			{event.title}
		</h3>
		<p class="mb-4 line-clamp-3 text-sm text-gray-400">
			{event.description}
		</p>

		<div
			class="mt-auto flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-gray-500"
		>
			<div class="flex items-center gap-1">
				<Calendar size={12} />
				{event.date}
			</div>
			<div class="flex items-center gap-1">
				<Users size={12} />
				{event.participants}
			</div>
		</div>
	</div>

	<!-- Hover effect overlay -->
	<div
		class="pointer-events-none absolute inset-0 bg-green-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
	></div>
</div>
