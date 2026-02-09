<script lang="ts">
	let canvas: HTMLCanvasElement;

	const fontSize = 48;

	// New Matrix Rain Algorithm:
	//   Length & colors determined on initialization.
	//   Gap randomly generated thereafter.
	//   Next line ensues.
	//   Each character cell is a Symbol class which randomly shifts in letters.

	// TODO:
	//   Figure out how to do automated text masking.
	//   Create a glow effect based on cursor position.
	//   Layering of the digital rain for a more cinematic feel.
	class Color {
		r: number;
		g: number;
		b: number;
		a: number;

		constructor(r: number, g: number, b: number, a: number) {
			this.r = r;
			this.g = g;
			this.b = b;
			this.a = a;
		}

		to_string(): string {
			return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
		}
	}

	class Symbol {
		characters: string;
		text: string;
		x: number;
		y: number;
		color: Color;
		fontSize: number;

		constructor(x: number, y: number, fontSize: number, color: Color) {
			this.characters =
				'"' +
				'\\' +
				"!#$%&'()*+,-./0123456789:;<=>?ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~";
			this.text = '';
			this.x = x;
			this.y = y;
			this.fontSize = fontSize;
			this.color = color;
		}

		draw(ctx: CanvasRenderingContext2D) {
			this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
			ctx.fillStyle = this.color.to_string();
			ctx.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
		}
	}

	$effect(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

		let sym = new Symbol(0, 1, fontSize, new Color(0, 255, 0, 1));

		setInterval(() => {
			ctx.fillStyle = 'rgba(0, 0, 0, 1)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.font = fontSize + 'px MatrixCodeNFI';
			sym.draw(ctx);
		}, 1000 / 8);

		window.addEventListener('resize', function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});
	});
</script>

<canvas bind:this={canvas} class="h-screen w-screen"></canvas>
