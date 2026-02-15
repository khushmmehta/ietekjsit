<script lang="ts">
	import { Trophy, Users, Info } from 'lucide-svelte';
	// Import generated image
	//import achievementBg from '$lib/assets/images/oscillation_achievement_bg.webp'; // Assuming webp format from generate_image
</script>

<section class="relative mb-24 grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
	<!-- Left: Hero Text & About -->
	<div class="flex flex-col gap-8">
		<!-- Main Title -->
		<div>
			<h1
				class="text-flicker mb-2 font-mono text-5xl font-bold tracking-tighter md:text-7xl lg:text-7xl 2xl:text-[7rem] 2xl:leading-none"
			>
				OSCILLATIONS
			</h1>
			<p class="font-mono text-lg text-green-500/80 md:text-xl 2xl:text-2xl">
				&lt; Our flagship annual technical festival conducted under the esteemed guidelines of
				IETE-Mumbai /&gt;
			</p>
		</div>

		<!-- Divider -->
		<div
			class="h-px w-full bg-gradient-to-r from-green-500/50 via-transparent to-transparent"
		></div>

		<!-- About Section -->
		<div class="flex flex-col gap-6">
			<div class="flex items-center gap-2 text-2xl font-bold text-white 2xl:text-4xl">
				<Info class="mr-1 h-4 w-4 text-green-500 2xl:h-6 2xl:w-6" />
				<h2>About Oscillations</h2>
			</div>

			<div class="space-y-4 font-mono text-neutral-400 2xl:text-xl">
				<p>
					Oscillations is IETE KJSIT's premier annual technical festival, conducted under the
					esteemed guidelines of IETE-India. This flagship event represents the pinnacle of
					technical excellence and innovation in our institution.
				</p>
				<p>
					The festival serves as a platform for students to showcase their technical prowess,
					participate in cutting-edge competitions, and engage with industry experts and academic
					luminaries.
				</p>
				<p>
					Under the guidance of IETE-India, Oscillations maintains the highest standards of
					technical education and provides participants with opportunities to explore emerging
					technologies, develop practical skills, and network with like-minded innovators.
				</p>
			</div>
		</div>
	</div>

	<!-- Right: Achievement Card -->
	<div class="relative w-full lg:pt-8 2xl:pt-12">
		<div
			class="group relative overflow-hidden rounded-xl border border-green-500/30 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:border-green-500/60 hover:shadow-[0_0_30px_rgba(0,255,0,0.15)]"
		>
			<!-- Header -->
			<div class="flex items-center gap-3 border-b border-green-500/20 bg-green-500/10 p-4 2xl:p-6">
				<Trophy class="h-6 w-6 animate-pulse text-yellow-400 2xl:h-10 2xl:w-10" />
				<div>
					<h3
						class="font-mono text-sm font-bold tracking-wider text-green-400 uppercase 2xl:text-lg"
					>
						Achievement Unlocked
					</h3>
					<p class="text-xs text-green-500/60 2xl:text-sm">IETE-India Award</p>
				</div>
			</div>

			<!-- Content -->
			<div class="p-6 2xl:p-10">
				<div class="mb-6 text-center">
					<h2 class="mb-2 text-2xl font-bold text-white 2xl:text-4xl">3rd Best ISF in Mumbai</h2>
					<p class="text-sm text-neutral-400 2xl:text-lg">
						Awarded by IETE-India for our outstanding contribution to technical education and
						innovation by Conduction of Oscillations 2025
					</p>
				</div>

				<!-- Image Container -->
				<div class="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10">
					<img
						src="https://ietekjsit.in/assets/images/events/Oscillations/3rd%20Best%20ISF.jpeg"
						alt="3rd Best ISF Award - IETE KJSIT Team"
						class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
					/>

					<!-- Overlay Text -->
					<div
						class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4"
					>
						<p class="font-mono text-xs text-green-400">
							<span class="mr-2 animate-pulse">●</span>
							3rd Best ISF Award - IETE KJSIT
						</p>
					</div>
				</div>
			</div>

			<!-- Decorative Corners -->
			<div class="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-green-500"></div>
			<div class="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-green-500"></div>
			<div class="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-green-500"></div>
			<div class="absolute right-0 bottom-0 h-2 w-2 border-r-2 border-b-2 border-green-500"></div>
		</div>
	</div>
</section>
