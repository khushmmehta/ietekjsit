<script lang="ts">
	import { asset } from '$app/paths';
	import { T, useLoader, useThrelte, useTask } from '@threlte/core';
	import { Align, Text3DGeometry, useTexture } from '@threlte/extras';
	import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
	import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js';
	import {
		BufferGeometry,
		Vector3,
		type Mesh,
		type Points,
		Raycaster,
		Vector2,
		Matrix4,
		Plane
	} from 'three';

	import circleImage from '$lib/assets/images/circle.jpg';

	let circleTexture = useTexture(circleImage);

	let profont = asset('/fonts/ProFontWindows_Bold.json');
	let font = useLoader(FontLoader).load(profont);
	let textMeshRef = $state<Mesh>();
	let pointsRef = $state<Points>();

	let originalPositions = $state<Vector3[]>([]);
	let currentPositions = $state<Vector3[]>([]);
	let pointsBufferGeometry = $state<BufferGeometry>(new BufferGeometry());

	let mouseX = $state(0);
	let mouseY = $state(0);
	let mouse2D = new Vector2();
	let scrollY = $state(0);

	const { camera } = useThrelte();
	const raycaster = new Raycaster();
	const centerRaycaster = new Raycaster();

	function handleMouseMove(event: MouseEvent) {
		// Normalize mouse position to -1 to 1 range
		mouseX = (event.clientX / window.innerWidth) * 2 - 1;
		mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
		mouse2D.set(mouseX, mouseY);
	}

	function handleScroll() {
		scrollY = window.scrollY;
	}

	function generatePoints() {
		if (!textMeshRef || !textMeshRef.geometry) return;

		textMeshRef.geometry.computeBoundingBox();
		textMeshRef.geometry.computeBoundingSphere();

		originalPositions = [];

		const sampler = new MeshSurfaceSampler(textMeshRef).build();

		let pos = new Vector3();
		for (let i = 0; i < 10000; i++) {
			sampler.sample(pos);
			originalPositions.push(pos.clone());
		}

		currentPositions = originalPositions.map((p) => p.clone());
		updateGeometry();
	}

	function updateGeometry() {
		pointsBufferGeometry.setFromPoints(currentPositions);
		pointsBufferGeometry.attributes.position.needsUpdate = true;
	}

	// Animation loop using useTask
	useTask(() => {
		if (!$camera || !pointsRef || originalPositions.length === 0) return;

		raycaster.setFromCamera(mouse2D, $camera);

		// Get center of screen ray (0, 0 in normalized device coordinates)
		centerRaycaster.setFromCamera(new Vector2(0, 0), $camera);

		// Get the world matrix of the points object and invert it
		pointsRef.updateMatrixWorld();
		const inverseMatrix = new Matrix4().copy(pointsRef.matrixWorld).invert();

		// Transform the camera position into local space
		const localCameraPos = $camera.position.clone().applyMatrix4(inverseMatrix);

		// Transform the mouse ray direction into local space
		const worldRayDir = raycaster.ray.direction.clone();
		const localRayDir = worldRayDir.transformDirection(inverseMatrix).normalize();

		// Transform the center ray into local space
		const centerWorldRayDir = centerRaycaster.ray.direction.clone();
		const centerLocalRayDir = centerWorldRayDir.transformDirection(inverseMatrix).normalize();

		// Find the center point by intersecting center ray with a plane at z=0 in local space
		const plane = new Plane(new Vector3(0, 0, 1), 0);
		const centerRayOrigin = centerRaycaster.ray.origin.clone().applyMatrix4(inverseMatrix);
		const centerPoint = new Vector3();
		new Vector3()
			.copy(centerLocalRayDir)
			.multiplyScalar(-centerRayOrigin.z / centerLocalRayDir.z)
			.add(centerRayOrigin)
			.copy(centerPoint);

		// Alternative: use plane intersection
		const localCenterRay = {
			origin: centerRayOrigin,
			direction: centerLocalRayDir
		};
		const t = -localCenterRay.origin.z / localCenterRay.direction.z;
		centerPoint.copy(localCenterRay.origin).add(localCenterRay.direction.clone().multiplyScalar(t));

		const hoverRadius = 2; // Radius of effect for mouse
		const pushStrength = 0.8; // How far to push points with mouse
		const returnSpeed = 0.1; // How fast points return to original position

		// Calculate scroll-based scatter
		const scrollScatterAmount = Math.min(scrollY / 200, 3); // Max scatter at 500px scroll

		for (let i = 0; i < originalPositions.length; i++) {
			const original = originalPositions[i];
			const current = currentPositions[i];

			// Calculate the closest point on the ray to this point (in local space)
			const toPoint = new Vector3().subVectors(original, localCameraPos);
			const projection = toPoint.dot(localRayDir);
			const mouseLocalPos = localCameraPos
				.clone()
				.add(localRayDir.clone().multiplyScalar(projection));

			// Calculate distance from closest point on ray to the actual point
			const distance = mouseLocalPos.distanceTo(original);

			// Calculate scroll-based scatter direction (outward from screen center)
			const scrollDirection = new Vector3().subVectors(original, centerPoint).normalize();
			const scrollTarget = original
				.clone()
				.add(scrollDirection.multiplyScalar(scrollScatterAmount * -10));

			// Mouse hover effect
			if (distance < hoverRadius) {
				// Calculate push direction (from mouse to point) in local space
				const direction = new Vector3().subVectors(original, mouseLocalPos).normalize();

				// Calculate push amount (stronger when closer)
				const pushAmount = (1 - distance / hoverRadius) * pushStrength;

				// Combine scroll scatter with mouse hover
				const target = scrollTarget.clone().add(direction.multiplyScalar(pushAmount));
				current.lerp(target, 0.2);
			} else {
				// Just apply scroll scatter
				current.lerp(scrollTarget, returnSpeed);
			}
		}

		updateGeometry();
	});
</script>

<svelte:window on:mousemove={handleMouseMove} on:scroll={handleScroll} />

<T.PerspectiveCamera makeDefault position.y={0} position.z={10} fov={90} />
<T.DirectionalLight position={[0, 10, 10]} intensity={3} />

<Align>
	{#snippet children({ align })}
		<T.Mesh bind:ref={textMeshRef} visible={false}>
			<Text3DGeometry
				font={$font}
				text={'IETE-\nKJSIT'}
				oncreate={() => {
					align();
					setTimeout(generatePoints, 0);
				}}
				size={5}
				depth={1}
			/>
		</T.Mesh>
	{/snippet}
</Align>

{#if currentPositions.length > 0}
	<Align rotation.x={mouseY * 0.5} rotation.y={-mouseX * 0.5}>
		<T.Points bind:ref={pointsRef}>
			<T is={pointsBufferGeometry} />
			<T.PointsMaterial
				color="#00ff00"
				alphaMap={$circleTexture}
				depthWrite={false}
				toneMapped={false}
				size={(0.05 * (window.innerHeight - scrollY * 2)) / window.innerHeight}
				transparent={true}
			/>
		</T.Points>
	</Align>
{/if}
