<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/Scene.svelte';
</script>

<article class="flex w-full flex-col">
	<div class="self-start md:w-3xl lg:w-4xl">
		<h1 class="text-flicker text-8xl">What We're About.</h1>

		<p class="text-3xl">
			We are the IETE Student Chapter of KJSIT—a nexus for creators, thinkers, and pioneers. We
			transcend the conventional, pushing the boundaries of technology and engineering to build a
			smarter tomorrow. This is our digital hub.
		</p>
	</div>
</article>

<Canvas>
	<Scene />
</Canvas>
