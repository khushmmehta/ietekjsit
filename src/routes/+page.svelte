<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
	import Typewriter from '$lib/Typewriter.svelte';
	let scrollY = $state<number>(0);

	function handleScroll() {
		scrollY = window.scrollY;
		console.log(canAnimate);
	}

	let canAnimate = $state(false);

	$effect(() => {
		if (!canAnimate) canAnimate = scrollY > window.innerHeight / 2;
	});
</script>

<article class="flex h-[25vw] w-full flex-col">
	<div class="self-start md:w-3xl lg:w-4xl">
		<h1 class="text-flicker mt-8 text-8xl">What We're About.</h1>

		<p class="min-h-30 text-3xl md:min-h-20">
			<Typewriter
				text="We are the IETE Student Chapter of KJSIT—a nexus for creators, thinkers, and pioneers. We transcend the conventional, pushing the boundaries of technology and engineering to build a smarter tomorrow. This is our digital hub."
				speed={30}
				startanim={canAnimate}
			/>
		</p>
	</div>
</article>

