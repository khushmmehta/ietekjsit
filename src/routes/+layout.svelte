<script lang="ts">
	import './layout.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex h-auto w-screen flex-col items-center px-32">
	{@render children()}

	<Footer />
</div>

<div class="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
	<svg
		class="absolute -top-[12.5px] h-[calc(100%+50px)] w-[calc(100%+50px)]"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
				<path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0, 255, 100, 0.3)" stroke-width="1" />
			</pattern>
			<filter id="glow">
				<feGaussianBlur stdDeviation="2" result="coloredBlur" />
				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>
		<rect width="100%" height="100%" fill="url(#grid)" filter="url(#glow)" class="animated-grid" />
	</svg>
</div>

<style>
	.animated-grid {
		animation: moveGrid 1.5s linear infinite;
	}

	@keyframes moveGrid {
		0% {
			transform: translateX(-50px);
		}
		100% {
			transform: translateX(0px);
		}
	}
</style>
