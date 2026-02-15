<script lang="ts">
	import type * as THREE from 'three';

	import type { Snippet } from 'svelte';
	import { T, type Props } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { asset } from '$app/paths';

	let {
		colorMap,
		fallback,
		error,
		children,
		ref = $bindable(),
		...props
	}: Props<THREE.Group> & {
		colorMap: string;
		ref?: THREE.Group;
		children?: Snippet<[{ ref: THREE.Group | undefined }]>;
		fallback?: Snippet;
		error?: Snippet<[{ error: Error }]>;
	} = $props();

	type GLTFResult = {
		nodes: {
			tv: THREE.Mesh;
			screen: THREE.Mesh;
		};
		materials: {
			[1]: THREE.MeshStandardMaterial;
		};
	};

	const gltf = useGltf<GLTFResult>(asset('/models/retrotv.glb'));
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Mesh geometry={gltf.nodes.tv.geometry} material={gltf.materials['1']} />
		<T.Mesh geometry={gltf.nodes.screen.geometry}>
			<T.MeshStandardMaterial
				color={colorMap}
				roughnessMap={gltf.materials[1].roughnessMap}
				metalnessMap={gltf.materials[1].metalnessMap}
			/>
		</T.Mesh>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
