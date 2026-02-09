<script lang="ts">
	let canvas: HTMLCanvasElement;

	const FPS = 20;
	const fontSize = 32;

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
			ctx.textAlign = 'center';
			ctx.fillStyle = this.color.to_string();
			ctx.fillText(this.text, (this.x + 0.5) * this.fontSize, this.y * this.fontSize);
		}
	}

	class RainColumn {
		x: number;
		minLength: number;
		maxLength: number;
		falloff: number;
		symbols: Symbol[];
		fontSize: number;

		constructor(
			x: number,
			minLength: number,
			maxLength: number,
			falloff: number,
			fontSize: number
		) {
			this.x = x;
			this.minLength = minLength;
			this.maxLength = maxLength;
			this.falloff = falloff;
			this.symbols = [];
			this.fontSize = fontSize;
			this.burst();
		}

		burst() {
			let length = Math.round(this.minLength + Math.random() * (this.maxLength - this.minLength));
			this.symbols.push(new Symbol(this.x, 0, this.fontSize, new Color(123, 241, 168, 1)));
			for (let i = 1; i < length; i++) {
				this.symbols.push(
					new Symbol(this.x, 0 - i, this.fontSize, new Color(0, 255, 0, 1 - i * this.falloff))
				);
			}
		}

		draw(ctx: CanvasRenderingContext2D) {
			if (this.symbols[this.symbols.length - 1].y > Math.round(2 + Math.random() * 2)) {
				this.burst();
			}

			this.symbols.forEach((sym) => {
				// Font width needs to be scaled in proportion to the font height
				if (sym.y * (fontSize * 1.5) < canvas.width) {
					sym.draw(ctx);
					sym.y += 1;
				} else {
					this.symbols.shift();
				}
			});
		}
	}

	$effect(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

		let rainColumns: RainColumn[] = [];
		for (let i = 0; i < Math.floor(canvas.width / fontSize); i++) {
			rainColumns.push(new RainColumn(i, 1, 12, 0.075, fontSize));
		}

		setInterval(() => {
			ctx.fillStyle = 'rgba(0, 0, 0, 1)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.font = fontSize + 'px MatrixCodeNFI';
			rainColumns.forEach((col) => col.draw(ctx));
		}, 1000 / FPS);

		window.addEventListener('resize', function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			rainColumns = [];
			for (let i = 0; i < Math.floor(canvas.width / fontSize); i++) {
				rainColumns.push(new RainColumn(i, 1, 12, 0.075, fontSize));
			}
		});
	});
</script>

<canvas bind:this={canvas} class="h-screen w-screen"></canvas>
