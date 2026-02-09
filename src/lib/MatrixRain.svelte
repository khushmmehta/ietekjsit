<script lang="ts">
	import { Color } from "three";

	let canvas: HTMLCanvasElement;

	// New Matrix Rain Algorithm:
	//   Length & colors determined on initialization.
	//   Gap randomly generated thereafter.
	//   Next line ensues.
	//   Each character cell is a Symbol class which randomly shifts in letters.

	// TODO:
	//   Figure out how to do automated text masking.
	//   Create a glow effect based on cursor position.
	//   Layering of the digital rain for a more cinematic feel.

	class Symbol {
		characters: String;
		x: number;
		y: number;
		color: Color;
		fontSize: number;

		constructor(x, y, fontSize, color) {
			this.characters =
				'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
				'0123456789!@#$%^&*()[]{}?><' +
				'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
			this.x = x;
			this.y = y;
			this.fontSize = fontSize;
			this.color = color;
		}
	}

	$effect(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

		window.addEventListener('resize', function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});
	});
</script>

<canvas bind:this={canvas}></canvas>
