<script lang="ts">
	import { History, Calendar, Award, ArrowRight } from 'lucide-svelte';
</script>

<section class="relative mb-16 w-full lg:mb-24">
	<!-- Background Elements -->
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<div
			class="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[120px]"
		></div>
		<div
			class="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]"
		></div>
	</div>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
		<!-- Left: Content -->
		<div class="flex flex-col justify-center">
			<div class="mb-6 flex items-center gap-3">
				<div class="h-px w-12 bg-green-500"></div>
				<span class="font-mono text-sm tracking-widest text-green-500 uppercase">Our Legacy</span>
			</div>

			<h1
				class="text-flicker mb-6 font-mono text-5xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl"
			>
				ARCHIVES &<br />
				MOMENTS
			</h1>

			<p class="mb-8 max-w-xl font-mono text-lg text-neutral-400">
				&lt; Explore the history of technical excellence. From hackathons to workshops, every event
				is a stepping stone in our journey of innovation. /&gt;
			</p>

			<!-- Stats Grid -->
			<div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
				<div>
					<h3 class="font-mono text-3xl font-bold text-white">50+</h3>
					<p class="text-xs text-neutral-500 uppercase">Total Events</p>
				</div>
				<div>
					<h3 class="font-mono text-3xl font-bold text-white">5k+</h3>
					<p class="text-xs text-neutral-500 uppercase">Participants</p>
				</div>
				<div>
					<h3 class="font-mono text-3xl font-bold text-white">12+</h3>
					<p class="text-xs text-neutral-500 uppercase">Years</p>
				</div>
			</div>
		</div>

		<!-- Right: Visual/Timeline Preview -->
		<div class="relative hidden lg:block">
			<div
				class="relative z-10 h-full w-full rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm"
			>
				<!-- Decorative Grid -->
				<div
					class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
				></div>

				<!-- Featured Highlight -->
				<div class="flex h-full flex-col justify-between">
					<div class="flex items-start justify-between">
						<div
							class="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-xs text-green-400"
						>
							FLASHBACK
						</div>
						<History class="text-neutral-600" />
					</div>

					<div class="space-y-6">
						<!-- Timeline Item 1 -->
						<div class="group flex gap-4">
							<div class="flex flex-col items-center">
								<div
									class="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
								></div>
								<div class="h-full w-px bg-green-500/20 group-last:hidden"></div>
							</div>
							<div class="pb-6">
								<p class="text-xs text-green-500">2024</p>
								<h4 class="text-lg font-bold text-white">Oscillations '24</h4>
								<p class="text-sm text-neutral-500">Record breaking 2000+ footfall.</p>
							</div>
						</div>

						<!-- Timeline Item 2 -->
						<div class="group flex gap-4">
							<div class="flex flex-col items-center">
								<div class="h-3 w-3 rounded-full bg-blue-500"></div>
								<div class="h-full w-px bg-white/10 group-last:hidden"></div>
							</div>
							<div>
								<p class="text-xs text-blue-500">2023</p>
								<h4 class="text-lg font-bold text-white">National Hackathon</h4>
								<p class="text-sm text-neutral-500">First ever national level event.</p>
							</div>
						</div>
					</div>

					<button
						class="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-3 text-sm transition-colors hover:bg-white/10 hover:text-white"
					>
						<span>View Full Gallery</span>
						<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</button>
				</div>
			</div>

			<!-- Floating Badge -->
			<div
				class="absolute -right-6 -bottom-6 flex h-24 w-24 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 shadow-2xl"
			>
				<Award class="h-8 w-8 text-green-500" />
			</div>
		</div>
	</div>
</section>
