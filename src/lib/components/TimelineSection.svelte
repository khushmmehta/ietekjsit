<script lang="ts">
	import { events } from '$lib/data/events';
	import { Calendar } from 'lucide-svelte';

	// Sort events by date for timeline, maybe reverse chronologically
	const timelineEvents = [...events].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
</script>

<section class="relative w-full py-16">
	<!-- Section Header -->
	<div class="mb-12 flex items-center gap-4 px-4 md:px-12">
		<div class="h-[2px] w-12 bg-green-500"></div>
		<h2
			class="font-mono text-3xl font-bold text-white text-shadow-[0_0_15px_rgba(0,255,0,0.5)] md:text-4xl"
		>
			Event_Timeline
		</h2>
	</div>

	<div class="relative mx-auto max-w-6xl px-4 md:px-12">
		<!-- Vertical Line -->
		<div
			class="absolute top-0 left-8 h-full w-[2px] bg-green-500/30 md:left-1/2 md:-translate-x-1/2"
		>
			<div class="absolute inset-0 bg-green-500/50 blur-[2px]"></div>
		</div>

		<div class="flex flex-col gap-12">
			{#each timelineEvents as event, i}
				<div
					class="relative flex w-full flex-col md:flex-row md:items-center md:justify-between {i %
						2 ===
					0
						? 'md:flex-row-reverse'
						: ''}"
				>
					<!-- Timeline Node (Dot) -->
					<div
						class="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-green-500 bg-black shadow-[0_0_10px_#00ff00] md:left-1/2"
					>
						<div class="absolute inset-0 animate-pulse rounded-full bg-green-500/50"></div>
					</div>

					<!-- Content Card -->
					<div class="ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-[45%]">
						<!-- Reusing a simplified card look or just the standard card -->
						<div
							class="group relative overflow-hidden rounded-xl border border-white/10 bg-black/80 transition-all hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]"
						>
							<div class="flex flex-col sm:flex-row">
								<div class="relative h-32 w-full sm:w-1/3">
									<img src={event.image} alt={event.title} class="h-full w-full object-cover" />
								</div>
								<div class="p-4 sm:w-2/3">
									<h3 class="font-mono text-lg font-bold text-white group-hover:text-green-400">
										{event.title}
									</h3>
									<p class="mt-1 text-xs text-green-500">{event.status || 'Completed'}</p>
									<p class="mt-2 line-clamp-2 text-sm text-gray-400">{event.description}</p>
									<div class="mt-2 flex items-center gap-2 text-xs text-gray-500">
										<Calendar size={14} />
										<span>{event.date}</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Empty div for spacing on the other side -->
					<div class="hidden md:block md:w-[45%]"></div>
				</div>
			{/each}
		</div>
	</div>
</section>
