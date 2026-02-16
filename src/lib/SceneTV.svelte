<script lang="ts">
	import { T } from '@threlte/core';
	import RetroTV from '$lib/retrotv.svelte';
	import { interactivity } from '@threlte/extras';

	interactivity();
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 3]} fov={90} rotation={[0.4, 0, 0]} />

<T.DirectionalLight position={[10, 10, 10]} intensity={3} />

<RetroTV scale={5} />
