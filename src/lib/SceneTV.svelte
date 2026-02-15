<script lang="ts">
	import { T } from '@threlte/core';
	import RetroTV from '$lib/retrotv.svelte';
	import Remote from '$lib/remote.svelte';
	import { interactivity } from '@threlte/extras';

	interactivity();

	let colors = ['green', 'blue', 'red', 'yellow', 'violet'];
	let i = $state(0);

	function increment() {
		if (i >= 4) {
			i = 0;
			return;
		} else {
			i += 1;
			return;
		}
	}
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 3]} fov={90} rotation={[0.4, 0, 0]} />

<T.DirectionalLight position={[10, 10, 10]} intensity={3} />

<RetroTV scale={5} colorMap={colors[i]} />
<Remote scale={1.25} onclick={increment} />
