<script lang="ts">
	import type * as THREE from 'three';

	import type { Snippet } from 'svelte';
	import { T, type Props } from '@threlte/core';
	import { useGltf, useTexture } from '@threlte/extras';
	import { asset } from '$app/paths';
	import { interactivity } from '@threlte/extras';
	import { goto } from '$app/navigation';
	import { RepeatWrapping } from 'three';

	interactivity();

	let {
		fallback,
		error,
		children,
		ref = $bindable(),
		...props
	}: Props<THREE.Group> & {
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

	let texturePaths = [
		asset('/tv-channels/ClickHere.webp'),
		asset('/tv-channels/Oscillation.webp'),
		asset('/tv-channels/PastEvents.webp'),
		asset('/tv-channels/Workshops.webp'),
		asset('/tv-channels/TeamFaculty.webp')
	];

	const textures = useTexture(texturePaths);

	let pages = ['', '/oscillation/', '/past-events/', '/workshops/', '/team-and-faculty/'];
	let i = $state(0);

	$effect(() => {
		textures.then((loadedTextures) => {
			loadedTextures.forEach((texture) => {
				texture.flipY = false;
				texture.needsUpdate = true;
			});
		});
	});

	interface PointerEvent {
		object: THREE.Object3D;
		eventObject: THREE.Object3D;
		stopPropagation: () => void;
		intersections?: THREE.Intersection[];
		point?: THREE.Vector3;
		distance?: number;
		[key: string]: any;
	}

	interface ClickCounts {
		box: number;
		screen: number;
	}

	let clickCount = $state<ClickCounts>({ box: 0, screen: 0 });

	function handleBoxClick(event: PointerEvent): void {
		event.stopPropagation();

		if (event.object === event.eventObject) {
			clickCount.box++;
			console.log('TV Box clicked!', clickCount.box);

			if (i > texturePaths.length - 2) i = 0;
			else i += 1;
		}
	}

	function handleScreenClick(event: PointerEvent): void {
		event.stopPropagation();

		clickCount.screen++;
		if (i != 0) goto(pages[i]);
		console.log('Screen clicked!', clickCount.screen);
	}
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Mesh
			geometry={gltf.nodes.tv.geometry}
			material={gltf.materials[1]}
			onclick={handleBoxClick}
		/>
		{#await textures then texes}
			<T.Mesh geometry={gltf.nodes.screen.geometry} onclick={handleScreenClick}>
				<T.MeshStandardMaterial
					map={texes[i]}
					roughnessMap={gltf.materials[1].roughnessMap}
					metalnessMap={gltf.materials[1].metalnessMap}
				/>
			</T.Mesh>
		{/await}
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
