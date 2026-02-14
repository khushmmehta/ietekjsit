<script lang="ts">
	import type { Event } from '$lib/data/events';
	import { fade, scale } from 'svelte/transition';
	import { Calendar, MapPin, Clock } from 'lucide-svelte';
	import { onMount } from 'svelte';

	interface Props {
		event: Event;
		onClose: () => void;
	}

	let { event, onClose }: Props = $props();

	// Close on escape key
	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') onClose();
	};
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
	transition:fade={{ duration: 200 }}
>
	<!-- Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="absolute inset-0 bg-black/80" onclick={onClose}></div>

	<!-- Modal Content -->
	<div
		class="relative w-full max-w-4xl overflow-hidden rounded-xl border border-green-500/50 bg-black shadow-[0_0_50px_rgba(0,255,0,0.2)]"
		transition:scale={{ duration: 300, start: 0.95 }}
	>
		<button
			class="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20"
			onclick={onClose}
		>
			✕
		</button>

		<div class="grid grid-cols-1 md:grid-cols-2">
			<!-- Image Section with Scanline -->
			<div class="relative h-64 w-full md:h-auto">
				<img src={event.image} alt={event.title} class="h-full w-full object-cover" />
				<div
					class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
				></div>

				<!-- Scanline Animation -->
				<div
					class="scanline absolute top-0 left-0 h-[2px] w-full bg-green-500 shadow-[0_0_10px_#00ff00,0_0_20px_#00ff00]"
				></div>

				<div class="absolute top-4 left-4">
					<span
						class="rounded border border-green-500/50 bg-green-900/50 px-2 py-1 text-xs font-bold text-green-400 backdrop-blur-md"
					>
						{event.category}
					</span>
				</div>
			</div>

			<!-- Details Section -->
			<div class="flex flex-col p-6 md:p-8">
				<h2
					class="mb-2 font-mono text-3xl font-bold text-white text-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
				>
					{event.title}
				</h2>

				<div class="mb-6 flex flex-wrap gap-4 font-mono text-sm text-green-400">
					<div class="flex items-center gap-2">
						<Calendar size={16} />
						{event.date}
					</div>
					<div class="flex items-center gap-2">
						<MapPin size={16} />
						{event.location}
					</div>
					<div class="flex items-center gap-2">
						<Clock size={16} />
						{event.duration || 'TBA'}
					</div>
				</div>

				<div class="prose max-w-none text-gray-300 prose-invert">
					<p class="text-lg leading-relaxed">{event.fullDescription || event.description}</p>
				</div>

				<div class="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
					<div class="flex flex-col">
						<span class="text-xs tracking-widest text-gray-500 uppercase">Participants</span>
						<span class="text-xl font-bold text-white">{event.participants}</span>
					</div>

					<button
						class="group relative overflow-hidden rounded bg-green-600 px-6 py-2 font-bold text-black transition-all hover:bg-green-500 hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]"
					>
						<span class="relative z-10 flex items-center gap-2">
							ACCESS EVENT <span class="transition-transform group-hover:translate-x-1">→</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.scanline {
		animation: scan 3s linear infinite;
	}

	@keyframes scan {
		0% {
			top: 0%;
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			top: 100%;
			opacity: 0;
		}
	}
</style>
