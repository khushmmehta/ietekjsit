<script lang="ts">
	import { T } from '@threlte/core';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { useLoader } from '@threlte/core';
	import { asset } from '$app/paths';

	const gltf = useLoader(GLTFLoader).load(asset('/models/retrotv.glb'));
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} />
<T.DirectionalLight position={[0, 10, 10]} />
<T.DirectionalLight position={[0, 10, 10]} />

{#if $gltf}
	<T is={$gltf.scene} scale={10} />
{/if}
