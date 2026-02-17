<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ieteTeam from '$lib/assets/images/teams-and-faculty/iete-team.jpg';
	import techTeamImg from '$lib/assets/images/teams-and-faculty/Technical Team.jpg';
	import creativeTeamImg from '$lib/assets/images/teams-and-faculty/Creative Team.jpg';
	import marketingTeamImg from '$lib/assets/images/teams-and-faculty/Marketing Team.jpg';
	import orgTeamImg from '$lib/assets/images/teams-and-faculty/Organizing Team.jpg';
	import prTeamImg from '$lib/assets/images/teams-and-faculty/PR Team.jpg';
	import TeamCard from '$lib/components/TeamCard.svelte';

	let horizontalSection: HTMLElement;
	let horizontalWrapper: HTMLElement;
	let horizontalScroller: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const setupScrollAnimation = () => {
			// Get dimensions
			const scrollerWidth = horizontalScroller.scrollWidth;
			const viewportWidth = window.innerWidth;

			// Calculate the distance we need to translate
			// This is the full width of content minus what's visible
			const translateDistance = scrollerWidth - viewportWidth;

			// Debug info - remove after testing
			console.log('Scroller width:', scrollerWidth);
			console.log('Viewport width:', viewportWidth);
			console.log('Translate distance:', translateDistance);

			// Set wrapper height to match the scroll distance needed
			// Using 2x to ensure plenty of scroll room
			const wrapperHeight = Math.max(translateDistance * 2, window.innerHeight * 3);
			horizontalWrapper.style.height = `${wrapperHeight}px`;

			console.log('Wrapper height set to:', wrapperHeight);

			// Create the horizontal scroll animation
			gsap.to(horizontalScroller, {
				x: -translateDistance,
				ease: 'none',
				scrollTrigger: {
					trigger: horizontalWrapper,
					pin: horizontalSection,
					scrub: 1,
					start: 'top top',
					end: 'bottom bottom',
					invalidateOnRefresh: true,
					markers: false, // Set to true for debugging
					onUpdate: (self) => {
						// Debug progress - remove after testing
						console.log('Scroll progress:', self.progress.toFixed(2));
					}
				}
			});
		};

		// Initial setup with delay to ensure content is rendered
		setTimeout(setupScrollAnimation, 250);

		// Handle window resize
		const handleResize = () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			setTimeout(setupScrollAnimation, 100);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="flex min-h-screen w-full flex-col p-4 pt-24 md:p-8 md:pt-32">
	<div class="flex flex-col gap-16 md:flex-row">
		<div class="flex flex-col gap-8">
			<div>
				<h1
					class="text-flicker mb-2 font-mono text-5xl font-bold tracking-tighter md:text-7xl lg:text-7xl 2xl:text-[7rem] 2xl:leading-none"
				>
					TEAMS & FACULTY
				</h1>
				<p class="font-mono text-lg text-green-500/80 md:text-xl 2xl:text-2xl">
					&lt; Meet the people who make IETE happen /&gt;
				</p>
			</div>

			<div class="h-1 w-full bg-linear-to-r from-[#44ff44]/80 via-transparent to-transparent"></div>

			<div class="self-right relative rounded-md border-[#44ff44]">
				<img
					src={ieteTeam}
					alt="IETE TEAM"
					class="w-auto rounded-md border border-white/10 object-scale-down md:h-192"
				/>
			</div>
		</div>

		<div class="flex flex-col gap-8">
			<TeamCard text="Chairperson" image={techTeamImg} />
			<TeamCard text="Vice-Chairperson" image={techTeamImg} />
		</div>
	</div>

	<!-- Horizontal scroll wrapper - height calculated dynamically -->
	<div class="relative mt-16" bind:this={horizontalWrapper}>
		<!-- Pinned section -->
		<div class="sticky top-0 h-screen overflow-hidden" bind:this={horizontalSection}>
			<div class="flex h-full items-center gap-8 pr-[50vw]" bind:this={horizontalScroller}>
				<!-- Your boxes -->
				<div class="md:mr-128"></div>
				<TeamCard text="Technical Team" image={techTeamImg} />
				<TeamCard text="Creative Team" image={creativeTeamImg} />
				<TeamCard text="Marketing Team" image={marketingTeamImg} />
				<TeamCard text="Organizing Team" image={orgTeamImg} />
				<TeamCard text="PR Team" image={prTeamImg} />
			</div>
		</div>
	</div>
</div>
